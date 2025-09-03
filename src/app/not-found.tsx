import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <main className="min-h-dvh flex items-center justify-center p-6">
      <div className="text-center space-y-6">
        <Image
          src="/404.png"          // положи картинку в /public/404.png, иначе поменяй путь на существующий, напр. /rss-logo.svg
          width={300}
          height={300}
          alt="page-not-found image"
          className="image-404"
          priority
        />
        <h3 className="text-xl">
          Sorry, page not found. Probably wrong URL. Probably page stolen by aliens.
        </h3>
        <Link href="/" className="btn btn-secondary btn-soft rounded-sm text-lg">
          Back to home
        </Link>
      </div>
    </main>
  )
}
