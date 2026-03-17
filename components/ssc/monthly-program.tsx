/**
 * 이달의 프로그램 섹션
 * ─────────────────────────────────────────────────────────────────────────────
 * 역할: 매달 홍보할 프로그램 이미지를 보여주는 섹션. HeroSlider 바로 다음에 위치.
 *       이미지 파일만 넣으면 자동으로 세로 배열로 표시됩니다.
 *
 * 📁 사진 넣는 위치:
 *   원주   → public/images/programs/wonju/
 *   춘천   → public/images/programs/chuncheon/
 *   충주   → public/images/programs/chungju/
 *
 * 📌 파일 명명 규칙 (순서가 중요한 경우):
 *   01_메인배너.jpg, 02_공무원반.jpg, 03_임용반.jpg ...
 *   → 파일명 오름차순으로 위에서 아래로 표시됩니다.
 *
 * 📌 지원 형식: jpg, jpeg, png, webp, gif
 *
 * 📌 이미지가 한 장도 없으면 이 섹션 전체가 렌더링되지 않습니다.
 *    (navbar에서 '이달의 프로그램' 클릭 시 반응 없음 — 정상 동작)
 *
 * 📌 title prop: 섹션 제목 변경 가능. 기본값 '이달의 프로그램'.
 *    예) <MonthlyProgram campus="wonju" title="3월의 프로그램" />
 * ─────────────────────────────────────────────────────────────────────────────
 */

import fs from 'fs'
import path from 'path'
import Image from 'next/image'

interface Props {
  campus: string
  title?: string
}

export function MonthlyProgram({ campus, title = '이달의 프로그램' }: Props) {
  // public/images/programs/{campus}/ 폴더에서 이미지 목록을 읽어옵니다
  const dir = path.join(process.cwd(), 'public', 'images', 'programs', campus)

  let images: string[] = []
  try {
    const files = fs.readdirSync(dir)
    images = files
      .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f)) // 이미지 파일만 필터
      .sort()                                                 // 파일명 오름차순 정렬
      .map((f) => `/images/programs/${campus}/${f}`)
  } catch {
    // 폴더가 없거나 비어있으면 섹션 숨김 (빌드 에러 방지)
  }

  // 이미지가 없으면 섹션 전체를 렌더링하지 않음
  if (images.length === 0) return null

  return (
    <section id="monthly-program" className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          {/* 제목: 페이지에서 title prop으로 변경 가능 (예: "3월의 프로그램") */}
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance mb-3 -tracking-tight">
            {title}
          </h2>
        </div>

        {/* 이미지 목록: 세로 배열, 각 이미지 전체 너비 */}
        <div className="flex flex-col gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative w-full rounded-[12px] overflow-hidden">
              <Image
                src={src}
                alt={`${title} ${i + 1}`}
                width={1200}
                height={800}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
