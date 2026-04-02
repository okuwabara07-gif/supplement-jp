import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'

export const metadata: Metadata = {
  title: 'サプリLab',
  description: 'サプリメント・栄養情報',
  keywords: 'サプリLab,サプリメント・栄養情報',
  openGraph: {
    title: 'サプリLab',
    description: 'サプリメント・栄養情報',
    type: 'website',
    locale: 'ja_JP',
    siteName: 'サプリLab',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'サプリLab',
    description: 'サプリメント・栄養情報',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-SVQXY5C3PW"></script>
      <script dangerouslySetInnerHTML={{__html:`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-SVQXY5C3PW');`}} />
      <body>{children}</body>
    </html>
  )
}
