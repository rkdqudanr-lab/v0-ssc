import Anthropic from '@anthropic-ai/sdk'
import { calculateNatalChart } from '@/lib/saju-calc'
import { getZodiacSign } from '@/lib/zodiac'

const client = new Anthropic()

export async function POST(request: Request) {
  try {
    const { birthYear, birthMonth, birthDay, birthHour } = await request.json()

    if (!birthYear || !birthMonth || !birthDay || birthHour === undefined) {
      return new Response('Missing birth data', { status: 400 })
    }

    const chart = calculateNatalChart(birthYear, birthMonth, birthDay, birthHour)
    const zodiac = getZodiacSign(birthMonth, birthDay)

    const prompt = `당신은 사주명리학과 서양 점성술 전문가입니다. 따뜻하고 통찰력 있는 어조로 한국어 해설을 작성해주세요.

사용자 생년월일시: ${birthYear}년 ${birthMonth}월 ${birthDay}일 ${birthHour}시

**사주 원국 (四柱八字)**
- 년주(年柱): ${chart.yearPillar.stem}${chart.yearPillar.branch} (${chart.yearPillar.stemElement}/${chart.yearPillar.branchElement}, ${chart.yearPillar.yinYang})
- 월주(月柱): ${chart.monthPillar.stem}${chart.monthPillar.branch} (${chart.monthPillar.stemElement}/${chart.monthPillar.branchElement}, ${chart.monthPillar.yinYang})
- 일주(日柱): ${chart.dayPillar.stem}${chart.dayPillar.branch} (${chart.dayPillar.stemElement}/${chart.dayPillar.branchElement}, ${chart.dayPillar.yinYang})
- 시주(時柱): ${chart.hourPillar.stem}${chart.hourPillar.branch} (${chart.hourPillar.stemElement}/${chart.hourPillar.branchElement}, ${chart.hourPillar.yinYang})
- 주요 오행: ${chart.dominantElement}

**서양 별자리**: ${zodiac.name} (${zodiac.english}) — 원소: ${zodiac.element}, 지배성: ${zodiac.rulingPlanet}

다음 형식으로 해설을 작성해주세요. 단정 짓지 않고 가능성과 잠재력으로 서술하며, 각 섹션은 2-3문단으로 작성해주세요:

## 사주 원국 해설

### 타고난 기질과 본질
[일주를 중심으로 타고난 성격과 기질, 내면의 본질에 대한 해설]

### 강점과 잠재력
[오행의 균형과 강점을 바탕으로 한 잠재력과 재능]

### 삶의 방향성
[전체 원국의 흐름으로 본 인생의 방향과 가능성]

## 별자리 해설

### ${zodiac.name}의 특성
[별자리의 핵심 특성과 심리적 특징]

### 사주와의 조화
[사주 원국과 별자리가 어떻게 어우러지는지, 상호 보완하는 점]`

    const stream = await client.messages.stream({
      model: 'claude-opus-4-6',
      max_tokens: 2048,
      messages: [{ role: 'user', content: prompt }],
    })

    const encoder = new TextEncoder()
    const readableStream = new ReadableStream({
      async start(controller) {
        try {
          for await (const event of stream) {
            if (
              event.type === 'content_block_delta' &&
              event.delta.type === 'text_delta'
            ) {
              controller.enqueue(encoder.encode(event.delta.text))
            }
          }
          controller.close()
        } catch (err) {
          controller.error(err)
        }
      },
    })

    return new Response(readableStream, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Transfer-Encoding': 'chunked',
        'Cache-Control': 'no-cache',
      },
    })
  } catch (error) {
    console.error('Saju API error:', error)
    return new Response('Internal Server Error', { status: 500 })
  }
}
