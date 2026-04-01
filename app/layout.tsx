import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Supplement', description: 'サプリメント・栄養情報' }
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="ja"><body style={{margin:0,fontFamily:'sans-serif'}}>{children}</body></html>
}