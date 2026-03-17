'use client'

import { useState } from 'react'
import { X } from 'lucide-react'

export function AnnouncementBar() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) return null

  return (
    <div className="w-full bg-navy text-white py-3 px-4 sm:px-6 flex items-center justify-between gap-3 text-xs sm:text-sm">
      <p className="flex-1 min-w-0">
        <span className="font-semibold">현재 면접반 모집 중</span>
        <span className="hidden sm:inline"> — 원주 개강 문의: </span>
        <br className="sm:hidden" />
        <a href="tel:033-766-7999" className="font-semibold hover:underline">
          033-766-7999
        </a>
        <span className="mx-1 sm:mx-2">|</span>
        <a href="#" className="font-semibold hover:underline">
          톡톡
        </a>
      </p>
      <button
        onClick={() => setIsOpen(false)}
        aria-label="Close announcement"
        className="flex-shrink-0 text-white/60 hover:text-white transition-colors"
      >
        <X size={16} />
      </button>
    </div>
  )
}
