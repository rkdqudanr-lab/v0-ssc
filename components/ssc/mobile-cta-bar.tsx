'use client'

export function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-background border-t border-border-color md:hidden">
      <a
        href="tel:033-766-7999"
        className="flex items-center justify-center w-full py-3.5 rounded-xl bg-accent-amber text-navy font-bold text-sm"
      >
        무료 상담 신청 — 033-766-7999
      </a>
    </div>
  )
}
