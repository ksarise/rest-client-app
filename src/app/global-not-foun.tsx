'use client'
import Link from 'next/link'
import './globals.css'
import Image from 'next/image'
import { useT } from '@/hooks/useT'

export default function GlobalNotFound() {
  const { t } = useT()
  return (
    <div className="hero bg-base-300 min-h-screen">
      <div className="page-404 bg-base-300 flex h-full flex-col items-center justify-center gap-10 pt-10 pb-10">
        <Image
          src="/404.png"
          width={300}
          height={300}
          alt="page-not-found image"
          className="image-404"
          priority
        />
        <h3 className="text-center text-xl">{t('not_found_message')}</h3>
        <Link href="/" className="btn btn-secondary btn-soft rounded-sm text-lg">
          {t('back_home')}
        </Link>
      </div>
    </div>
  )
}
