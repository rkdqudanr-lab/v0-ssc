'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: '홈', href: '#hero' },
  { label: '이달의 프로그램', href: '#monthly-program' },
  { label: '프로그램', href: '#programs' },
  { label: '합격후기', href: '#testimonials' },
  { label: '내부시설', href: '#interior-facilities' },
  { label: '캠퍼스', href: '#campus' },
  { label: '상담신청', href: '#cta' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (href: string) => {
    setOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-border-color shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleLink('#hero')}
            className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
              scrolled ? 'text-navy' : 'text-white'
            }`}
          >
            SSC<span className={scrolled ? 'text-accent-blue' : 'text-white'}>스파르타</span>
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleLink(link.href)}
                  className={`text-sm font-medium transition-colors ${
                    scrolled
                      ? 'text-text-secondary hover:text-navy'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <button
            onClick={() => handleLink('#cta')}
            className="hidden md:inline-flex items-center px-4 py-2 rounded-lg bg-navy text-white text-sm font-semibold hover:bg-navy/90 transition-colors dark:bg-accent-blue dark:text-white"
          >
            무료 상담
          </button>

          {/* Mobile hamburger */}
          <button
            className={`md:hidden p-2 min-w-[48px] min-h-[48px] flex items-center justify-center transition-colors ${
              scrolled ? 'text-text-primary' : 'text-white'
            }`}
            onClick={() => setOpen(true)}
            aria-label="메뉴 열기"
          >
            <Menu size={22} />
          </button>
        </nav>
      </header>

      {/* Mobile drawer overlay */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="flex-1 bg-black/40"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside className="w-72 h-full bg-background flex flex-col shadow-xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border-color">
              <span className="font-bold text-lg text-navy dark:text-white">
                SSC<span className="text-accent-blue">스파르타</span>
              </span>
              <button
                onClick={() => setOpen(false)}
                aria-label="메뉴 닫기"
                className="p-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
              >
                <X size={22} className="text-text-secondary" />
              </button>
            </div>
            <ul className="flex flex-col px-6 py-4 gap-1 flex-1">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleLink(link.href)}
                    className="w-full text-left py-4 min-h-[48px] text-base font-medium text-text-primary hover:text-navy dark:hover:text-accent-blue border-b border-border-color/50 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="px-6 pb-8">
              <button
                onClick={() => handleLink('#cta')}
                className="w-full py-3 rounded-lg bg-navy text-white text-sm font-semibold dark:bg-accent-blue"
              >
                무료 상담 신청하기
              </button>
            </div>
          </aside>
        </div>
      )}
    </>
  )
}
