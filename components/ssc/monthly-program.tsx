import fs from 'fs'
import path from 'path'
import Image from 'next/image'

interface Props {
  campus: string
  title?: string
}

export function MonthlyProgram({ campus, title = '이달의 프로그램' }: Props) {
  const dir = path.join(process.cwd(), 'public', 'images', 'programs', campus)

  let images: string[] = []
  try {
    const files = fs.readdirSync(dir)
    images = files
      .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
      .sort()
      .map((f) => `/images/programs/${campus}/${f}`)
  } catch {
    // 폴더가 아직 없으면 섹션 숨김
  }

  if (images.length === 0) return null

  return (
    <section id="monthly-program" className="bg-background py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy dark:text-foreground text-balance mb-3 -tracking-tight">
            {title}
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          {images.map((src, i) => (
            <div key={i} className="relative w-full rounded-[12px] overflow-hidden">
              <Image
                src={src}
                alt={`${title} ${i + 1}`}
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
