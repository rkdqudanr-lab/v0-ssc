'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function AnnouncementBar() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <div className="w-full bg-navy text-white py-2.5 px-4 sm:px-6 flex items-center justify-between gap-4 text-sm">
      <p className="flex-1">
        <span className="font-semibold">현재 면접반 모집 중</span> — 원주 개강 문의: 
        <a href="tel:033-766-7999" className="font-semibold hover:underline ml-1">
          033-766-7999
        </a>
        <span className="mx-2">|</span>
        <a href="#" className="font-semibold hover:underline">
          네이버 톡톡
        </a>
      </p>
      <button
        onClick={() => setIsOpen(false)}
        aria-label="Close announcement"
        className="flex-shrink-0 text-white/60 hover:text-white transition-colors"
      >
        <X size={18} />
      </button>
    </div>
  )
}
