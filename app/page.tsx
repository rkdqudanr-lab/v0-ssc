import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, MapPin } from 'lucide-react'

/**
 * 메인 페이지 캠퍼스 카드 설정
 * ─────────────────────────────────────────────────────────────────────────────
 * 📁 카드 배경 사진 위치: public/images/main/ 폴더
 *   원주   → public/images/main/wonju.jpg
 *   춘천   → public/images/main/chuncheon.jpg
 *   충주   → public/images/main/chungju.jpg
 *
 * 📌 이미지가 없으면 color(배경색)로 대체됩니다.
 * 📌 권장 비율: 가로 2:1 이상 (예: 800×400px)
 * ─────────────────────────────────────────────────────────────────────────────
 */
const locations = [
  {
    id: 'wonju',
    name: '원주',
    href: '/wonju',
    tagline: '원주 유일 공단기 파트너',
    highlights: [
      '원주 유일 노량진 커넥츠프랩(공단기) 파트너',
      '합리적인 반값 독학재수',
      '공무원 합격자에게 물어보세요',
    ],
    address: '원주시 치악로 1793 농협건물 4층',
    color: '#0F1C3F',   // 이미지 없을 때 표시되는 배경색
    accent: '#378ADD',
    image: '/images/main/wonju.jpg',   // 카드 배경 이미지 (없으면 color 사용)
  },
  {
    id: 'chuncheon',
    name: '춘천',
    href: '/chuncheon',
    tagline: '임용합격생의 추천이 이어집니다',
    highlights: [
      '임용합격생의 추천으로 이어지는 합격',
      '공무원 합격을 묻는다면? 춘천스파르타',
      '초등·중등·유아 임용 매년 합격자 배출',
    ],
    address: '춘천시 퇴계로 249 5층',
    color: '#1a2744',   // 이미지 없을 때 표시되는 배경색
    accent: '#378ADD',
    image: '/images/main/chuncheon.jpg',   // 카드 배경 이미지 (없으면 color 사용)
  },
  {
    id: 'chungju',
    name: '충주',
    href: '/chungju',
    tagline: '충주 공무원 합격의 메카',
    highlights: [
      '대치동 자료 그대로 커넥츠프랩 수능관',
      '충주 공무원 합격의 메카',
      '"스파르타는 임용생에게 빛입니다" — 합격생 후기',
    ],
    address: '충주시 계명대로 283',
    color: '#0d1f3c',   // 이미지 없을 때 표시되는 배경색
    accent: '#F5A623',
    image: '/images/main/chungju.jpg',   // 카드 배경 이미지 (없으면 color 사용)
  },
]

const programs = ['공무원 (국가/지방·경찰·소방·군무원)', '임용고시 (초등·중등·유아)', '전문자격 (세무사·노무사·기사시험 등)', '독학재수 관리형']

export default function SelectLocation() {
  return (
    <main className="min-h-screen bg-navy flex flex-col">
      {/* Header */}
      <header className="pt-12 pb-8 px-4 text-center">
        <p className="text-white/50 text-xs font-semibold tracking-widest uppercase mb-3">SSC스파르타</p>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4" style={{ wordBreak: 'keep-all' }}>
          어느 캠퍼스에서<br />시작하시나요?
        </h1>
        <p className="text-white/60 text-sm sm:text-base max-w-md mx-auto">
          원주 · 춘천 · 충주 — 세 캠퍼스 모두<br />
          같은 철학, 독한 관리, 단기합격 시스템
        </p>
      </header>

      {/* Program categories badge strip */}
      <div className="px-4 mb-8">
        <div className="max-w-2xl mx-auto flex flex-wrap justify-center gap-2">
          {programs.map((p) => (
            <span
              key={p}
              className="px-3 py-1 rounded-full text-xs font-semibold border"
              style={{ borderColor: 'rgba(55,138,221,0.4)', color: 'rgba(255,255,255,0.7)', backgroundColor: 'rgba(55,138,221,0.1)' }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      {/* Location cards */}
      <div className="flex-1 px-4 pb-12">
        <div className="max-w-2xl mx-auto flex flex-col gap-4">
          {locations.map((loc) => (
            <Link
              key={loc.id}
              href={loc.href}
              className="group relative block rounded-2xl overflow-hidden transition-transform duration-200 active:scale-[0.98] hover:scale-[0.99]"
              style={{ border: '1px solid rgba(255,255,255,0.08)' }}
            >
              {/* 배경: 이미지 + 어두운 오버레이 */}
              <div className="absolute inset-0" style={{ backgroundColor: loc.color }}>
                <Image
                  src={loc.image}
                  alt={`${loc.name} 캠퍼스`}
                  fill
                  className="object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                />
                {/* 텍스트 가독성을 위한 그라데이션 오버레이 */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.45) 100%)' }} />
              </div>

              {/* 콘텐츠 */}
              <div className="relative z-10 p-7">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-white/50 text-xs font-semibold tracking-wider uppercase mb-1">캠퍼스</p>
                    <h2 className="text-white text-4xl font-bold">{loc.name}</h2>
                    <p className="font-semibold mt-1 text-sm" style={{ color: loc.accent }}>{loc.tagline}</p>
                  </div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
                  >
                    <ChevronRight size={20} className="text-white" />
                  </div>
                </div>

                <ul className="space-y-2 mb-5">
                  {loc.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-white/30 mt-0.5">—</span>
                      <span className="text-white/75 text-sm leading-snug">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex items-center gap-1.5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.12)' }}>
                  <MapPin size={13} className="text-white/30 flex-shrink-0" />
                  <span className="text-white/40 text-xs">{loc.address}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Footer note */}
      <div className="text-center pb-8 px-4">
        <p className="text-white/30 text-xs">
          SSC스파르타 · 033-766-7999
        </p>
      </div>
    </main>
  )
}
