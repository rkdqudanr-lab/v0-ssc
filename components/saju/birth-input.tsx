'use client'

import { useState } from 'react'
import { HOUR_LABELS } from '@/lib/saju-calc'

interface BirthInputProps {
  onSubmit: (year: number, month: number, day: number, hour: number) => void
}

const currentYear = new Date().getFullYear()
const years = Array.from({ length: 100 }, (_, i) => currentYear - i)
const months = Array.from({ length: 12 }, (_, i) => i + 1)

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month, 0).getDate()
}

export function BirthInput({ onSubmit }: BirthInputProps) {
  const [year, setYear] = useState<number>(1990)
  const [month, setMonth] = useState<number>(1)
  const [day, setDay] = useState<number>(1)
  const [hour, setHour] = useState<number>(12)

  const days = Array.from({ length: getDaysInMonth(year, month) }, (_, i) => i + 1)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(year, month, day, hour)
  }

  const selectClass =
    'w-full bg-white/5 dark:bg-white/5 border border-white/20 rounded-xl px-4 py-3 text-white text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-white/30 transition-all cursor-pointer'

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0F] px-6">
      {/* Background gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-indigo-600/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-violet-600/8 blur-[100px]" />
      </div>

      <div className="relative w-full max-w-sm space-y-10">
        {/* Header */}
        <div className="text-center space-y-3">
          <p className="eyebrow text-white/40 tracking-widest">나의 운명 지도</p>
          <h1 className="display-title text-4xl font-thin text-white leading-tight">
            언제 태어나셨나요?
          </h1>
          <p className="text-white/40 text-sm leading-relaxed">
            태어난 순간의 하늘이<br />평생의 원국이 됩니다
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Year & Month */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <label className="block text-white/50 text-xs font-medium tracking-wide">년도</label>
              <div className="relative">
                <select
                  value={year}
                  onChange={e => setYear(Number(e.target.value))}
                  className={selectClass}
                >
                  {years.map(y => (
                    <option key={y} value={y} className="bg-[#1A1A2E] text-white">
                      {y}년
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="block text-white/50 text-xs font-medium tracking-wide">월</label>
              <div className="relative">
                <select
                  value={month}
                  onChange={e => {
                    const m = Number(e.target.value)
                    setMonth(m)
                    const maxDay = getDaysInMonth(year, m)
                    if (day > maxDay) setDay(maxDay)
                  }}
                  className={selectClass}
                >
                  {months.map(m => (
                    <option key={m} value={m} className="bg-[#1A1A2E] text-white">
                      {m}월
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Day */}
          <div className="space-y-1.5">
            <label className="block text-white/50 text-xs font-medium tracking-wide">일</label>
            <div className="relative">
              <select
                value={day}
                onChange={e => setDay(Number(e.target.value))}
                className={selectClass}
              >
                {days.map(d => (
                  <option key={d} value={d} className="bg-[#1A1A2E] text-white">
                    {d}일
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Hour (시진 선택) */}
          <div className="space-y-1.5">
            <label className="block text-white/50 text-xs font-medium tracking-wide">태어난 시간</label>
            <div className="relative">
              <select
                value={hour}
                onChange={e => setHour(Number(e.target.value))}
                className={selectClass}
              >
                {Array.from({ length: 24 }, (_, i) => i).map(h => (
                  <option key={h} value={h} className="bg-[#1A1A2E] text-white">
                    {String(h).padStart(2, '0')}시 — {HOUR_LABELS[Math.floor(((h + 1) % 24) / 2)]}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-4 rounded-2xl bg-white text-[#0A0A0F] font-medium text-sm tracking-wide
                hover:bg-white/90 active:scale-[0.98] transition-all duration-150 shadow-lg shadow-white/10"
            >
              나의 원국 보기
            </button>
          </div>
        </form>

        <p className="text-center text-white/20 text-xs">
          생년월일시는 기기에만 저장되며 외부로 전송되지 않습니다
        </p>
      </div>
    </div>
  )
}
