import fs from 'fs'
import path from 'path'
import Image from 'next/image'

interface Props {
  campus: string
}

export function InteriorFacilities({ campus }: Props) {
  const dir = path.join(process.cwd(), 'public', 'images', 'interior', campus)

  let images: string[] = []
  try {
    const files = fs.readdirSync(dir)
    images = files
      .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
      .sort()
      .map((f) => `/images/interior/${campus}/${f}`)
  } catch {
    // 폴더가 아직 없으면 섹션 숨김
  }

  if (images.length === 0) return null

  return (
    <section id="interior-facilities" className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance mb-3 -tracking-tight">
            내부시설
          </h2>
          <p className="text-text-secondary leading-relaxed max-w-2xl">
            공부가 유지될 수밖에 없는 구조
          </p>
        </div>
        <div className="flex flex-col gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative w-full rounded-[12px] overflow-hidden">
              <Image
                src={src}
                alt={`내부시설 ${i + 1}`}
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
