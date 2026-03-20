'use client'

import { useEffect, useState, useCallback } from 'react'
import { calculateNatalChart, type NatalChart } from '@/lib/saju-calc'
import { getZodiacSign, type ZodiacSign } from '@/lib/zodiac'
import { BirthInput } from '@/components/saju/birth-input'
import { NatalChartDisplay } from '@/components/saju/natal-chart-display'
import { StarSignDisplay } from '@/components/saju/star-sign-display'
import { InterpretationStream } from '@/components/saju/interpretation-stream'

const STORAGE_KEY = 'saju-birth-info'

interface BirthInfo {
  year: number
  month: number
  day: number
  hour: number
}

export default function SajuPage() {
  const [birthInfo, setBirthInfo] = useState<BirthInfo | null>(null)
  const [chart, setChart] = useState<NatalChart | null>(null)
  const [zodiac, setZodiac] = useState<ZodiacSign | null>(null)
  const [showInterpretation, setShowInterpretation] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) {
        const info: BirthInfo = JSON.parse(saved)
        applyBirthInfo(info)
      }
    } catch {
      // ignore
    }
  }, [])

  const applyBirthInfo = useCallback((info: BirthInfo) => {
    setBirthInfo(info)
    setChart(calculateNatalChart(info.year, info.month, info.day, info.hour))
    setZodiac(getZodiacSign(info.month, info.day))
    setShowInterpretation(false)
  }, [])

  const handleBirthSubmit = useCallback((year: number, month: number, day: number, hour: number) => {
    const info = { year, month, day, hour }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(info))
    applyBirthInfo(info)
  }, [applyBirthInfo])

  const handleReset = () => {
    localStorage.removeItem(STORAGE_KEY)
    setBirthInfo(null)
    setChart(null)
    setZodiac(null)
    setShowInterpretation(false)
  }

  if (!mounted) return null

  if (!birthInfo || !chart || !zodiac) {
    return <BirthInput onSubmit={handleBirthSubmit} />
  }

  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white">
      {/* Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-indigo-900/20 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-900/15 blur-[150px]" />
      </div>

      <div className="relative max-w-lg mx-auto px-5 py-safe">
        {/* Top nav */}
        <div className="flex items-center justify-between py-5">
          <div>
            <p className="text-white/30 text-xs tracking-widest">나의 원국</p>
            <p className="text-white/60 text-sm mt-0.5 font-light">
              {birthInfo.year}년 {birthInfo.month}월 {birthInfo.day}일 {String(birthInfo.hour).padStart(2, '0')}시
            </p>
          </div>
          <button
            onClick={handleReset}
            className="text-white/30 text-xs hover:text-white/60 transition-colors py-1 px-3 rounded-lg border border-white/10 hover:border-white/20"
          >
            수정
          </button>
        </div>

        {/* Natal Chart */}
        <section className="mb-6">
          <NatalChartDisplay chart={chart} />
        </section>

        {/* Star Sign */}
        <section className="mb-6">
          <StarSignDisplay sign={zodiac} />
        </section>

        {/* Interpretation CTA or content */}
        {!showInterpretation ? (
          <section className="mb-10">
            <button
              onClick={() => setShowInterpretation(true)}
              className="w-full py-4 rounded-2xl bg-white/8 border border-white/12 text-white/70 text-sm font-medium
                hover:bg-white/12 hover:text-white hover:border-white/20 active:scale-[0.98]
                transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span className="text-base">✨</span>
              AI 해설 보기
            </button>
            <p className="text-center text-white/20 text-xs mt-3">
              Claude AI가 원국과 별자리를 분석합니다
            </p>
          </section>
        ) : (
          <section className="mb-16 rounded-2xl border border-white/8 bg-white/3 p-6">
            <InterpretationStream
              birthYear={birthInfo.year}
              birthMonth={birthInfo.month}
              birthDay={birthInfo.day}
              birthHour={birthInfo.hour}
            />
          </section>
        )}

        {/* Footer note */}
        <p className="text-center text-white/15 text-xs pb-8">
          사주 원국은 변하지 않는 나의 본질적 에너지입니다
        </p>
      </div>
    </div>
  )
}
