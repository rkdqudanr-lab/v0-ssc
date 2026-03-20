'use client'

import { useEffect, useRef, useState } from 'react'

interface InterpretationStreamProps {
  birthYear: number
  birthMonth: number
  birthDay: number
  birthHour: number
}

function MarkdownSection({ title, content }: { title: string; content: string }) {
  return (
    <div className="space-y-2">
      <h3 className="text-base font-medium text-white/80">{title}</h3>
      <p className="text-white/55 text-sm leading-relaxed whitespace-pre-line">{content.trim()}</p>
    </div>
  )
}

function parseInterpretation(text: string) {
  const sections: { heading: string; subsections: { title: string; content: string }[] }[] = []
  const lines = text.split('\n')
  let currentSection: (typeof sections)[0] | null = null
  let currentSub: { title: string; content: string } | null = null

  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (currentSub && currentSection) currentSection.subsections.push(currentSub)
      if (currentSection) sections.push(currentSection)
      currentSection = { heading: line.replace('## ', '').trim(), subsections: [] }
      currentSub = null
    } else if (line.startsWith('### ')) {
      if (currentSub && currentSection) currentSection.subsections.push(currentSub)
      currentSub = { title: line.replace('### ', '').trim(), content: '' }
    } else if (currentSub) {
      currentSub.content += line + '\n'
    }
  }
  if (currentSub && currentSection) currentSection.subsections.push(currentSub)
  if (currentSection) sections.push(currentSection)
  return sections
}

export function InterpretationStream({
  birthYear, birthMonth, birthDay, birthHour,
}: InterpretationStreamProps) {
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    abortRef.current = new AbortController()
    setText('')
    setLoading(true)
    setError(false)

    async function fetchInterpretation() {
      try {
        const res = await fetch('/api/saju', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ birthYear, birthMonth, birthDay, birthHour }),
          signal: abortRef.current!.signal,
        })

        if (!res.ok || !res.body) {
          setError(true)
          setLoading(false)
          return
        }

        const reader = res.body.getReader()
        const decoder = new TextDecoder()

        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          const chunk = decoder.decode(value, { stream: true })
          setText(prev => prev + chunk)
          // Gentle auto-scroll
          if (containerRef.current) {
            const el = containerRef.current
            const isNearBottom = el.scrollHeight - el.scrollTop - el.clientHeight < 200
            if (isNearBottom) el.scrollTop = el.scrollHeight
          }
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name !== 'AbortError') setError(true)
      } finally {
        setLoading(false)
      }
    }

    fetchInterpretation()
    return () => abortRef.current?.abort()
  }, [birthYear, birthMonth, birthDay, birthHour])

  const sections = parseInterpretation(text)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <div>
          <p className="eyebrow text-white/40 text-[11px] tracking-widest">AI 해설</p>
          <h2 className="text-xl font-light text-white mt-0.5">원국 풀이</h2>
        </div>
        {loading && (
          <div className="ml-auto flex items-center gap-2 text-white/30 text-xs">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            해설 생성 중
          </div>
        )}
      </div>

      {error && (
        <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-5 text-red-400/70 text-sm">
          해설을 불러오는 중 오류가 발생했습니다. ANTHROPIC_API_KEY를 확인해 주세요.
        </div>
      )}

      {sections.length > 0 ? (
        <div ref={containerRef} className="space-y-8">
          {sections.map((section, si) => (
            <div key={si} className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-px flex-1 bg-white/8" />
                <h2 className="text-sm font-medium text-white/60 shrink-0">{section.heading}</h2>
                <div className="h-px flex-1 bg-white/8" />
              </div>
              <div className="space-y-6 pl-1">
                {section.subsections.map((sub, ssi) => (
                  <MarkdownSection key={ssi} title={sub.title} content={sub.content} />
                ))}
              </div>
            </div>
          ))}

          {/* Typing cursor */}
          {loading && (
            <span className="inline-block w-0.5 h-4 bg-white/40 animate-pulse rounded-full ml-0.5" />
          )}
        </div>
      ) : loading ? (
        /* Loading skeleton */
        <div className="space-y-4 animate-pulse">
          {[80, 60, 90, 70, 55].map((w, i) => (
            <div key={i} className="h-3 bg-white/6 rounded-full" style={{ width: `${w}%` }} />
          ))}
        </div>
      ) : null}
    </div>
  )
}
