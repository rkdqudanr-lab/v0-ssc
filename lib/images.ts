/**
 * 서버 사이드 이미지 유틸리티
 * ─────────────────────────────────────────────────────────────────
 * public/images/{folder}/{campus}/ 폴더에서 이미지 경로 목록을 읽어옵니다.
 *
 * 사용 예시 (Server Component에서만 사용 가능):
 *   const images = getPublicImages('maincard', 'wonju')
 *   // → ['/images/maincard/wonju/01_슬라이드.jpg', ...]
 * ─────────────────────────────────────────────────────────────────
 */

import fs from 'fs'
import path from 'path'

/**
 * public/images/{folder}/{campus}/ 폴더에서 이미지 경로 목록을 반환합니다.
 * 파일명 오름차순 정렬. 폴더가 없거나 비어있으면 빈 배열 반환.
 */
export function getPublicImages(folder: string, campus: string): string[] {
  const dir = path.join(process.cwd(), 'public', 'images', folder, campus)
  try {
    return fs
      .readdirSync(dir)
      .filter((f) => /\.(jpg|jpeg|png|webp|gif)$/i.test(f))
      .sort()
      .map((f) => `/images/${folder}/${campus}/${f}`)
  } catch {
    return []
  }
}
