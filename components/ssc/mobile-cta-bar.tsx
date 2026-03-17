'use client'

export function MobileCtaBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-white border-t border-border-color md:hidden">
      <div className="grid grid-cols-2 gap-2">
        <a
          href="tel:033-766-7999"
          className="flex items-center justify-center py-3.5 rounded-xl bg-accent-amber text-navy font-bold text-sm"
        >
          📞 전화 상담
        </a>
        <a
          href="https://pf.kakao.com/_example"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center py-3.5 rounded-xl bg-[#FEE500] text-black font-bold text-sm"
        >
          💬 카카오 문의
        </a>
      </div>
    </div>
  )
}
