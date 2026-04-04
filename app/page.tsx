import { getAllPosts } from '@/lib/posts'
import Link from 'next/link'
export default function Home() {
  const posts = getAllPosts()
  return (
        {/* アフィリエイト */}
        <div style={{margin:'2rem 0',padding:'1rem',background:'linear-gradient(135deg,#faf7ff,#f5eeff)',borderRadius:'16px',border:'1.5px solid #e8d4ff'}}>
          <p style={{fontSize:'0.7rem',color:'#9333ea',fontWeight:700,marginBottom:'0.75rem'}}>おすすめアイテム</p>
          <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(140px,1fr))',gap:'0.75rem'}}>
            <a href="https://rpx.a8.net/svt/ejp?a8mat=3Z4N6T+XXXXXX+XXXX+XXXXXX" target="_blank" rel="noopener noreferrer sponsored" style={{display:'flex',alignItems:'center',gap:'8px',padding:'10px 12px',background:'white',borderRadius:'12px',textDecoration:'none',border:'1px solid #e8d4ff'}}>
              <span style={{fontSize:'1.2rem'}}>🛒</span>
              <div><div style={{fontSize:'0.75rem',fontWeight:700,color:'#333'}}>楽天でさがす</div><div style={{fontSize:'0.65rem',color:'#9333ea'}}>ポイント還元あり</div></div>
            </a>
            <a href="https://www.amazon.co.jp/?tag=haircolorab22-22" target="_blank" rel="noopener noreferrer sponsored" style={{display:'flex',alignItems:'center',gap:'8px',padding:'10px 12px',background:'white',borderRadius:'12px',textDecoration:'none',border:'1px solid #fce4ec'}}>
              <span style={{fontSize:'1.2rem'}}>📦</span>
              <div><div style={{fontSize:'0.75rem',fontWeight:700,color:'#333'}}>Amazonでさがす</div><div style={{fontSize:'0.65rem',color:'#e91e8c'}}>翌日配送対応</div></div>
            </a>
          </div>
        </div>
    <main style={{maxWidth:'900px',margin:'0 auto',padding:'2rem 1.5rem'}}>
      <h1 style={{fontSize:'1.5rem',fontWeight:500,marginBottom:'2rem'}}>Supplement</h1>
      <div>{posts.map(p=>(
        <div key={p.slug} style={{padding:'1rem 0',borderBottom:'0.5px solid #eee'}}>
          <Link href={'/blog/'+p.slug} style={{fontSize:'1rem',color:'inherit',textDecoration:'none'}}>{p.title}</Link>
          <div style={{fontSize:'0.75rem',color:'#888',marginTop:'4px'}}>{p.date}</div>
        </div>
      ))}</div>
    </main>
  )
}