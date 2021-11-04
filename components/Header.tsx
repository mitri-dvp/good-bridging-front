import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/Header.module.css'

export default function Header() {
  const router = useRouter()
  const isHome = router.pathname === '/'

  if(!isHome) return (
    <header className={styles.header}>
      <nav>
        <Link href="/">
          <a className={styles.logo}>
            <img src="/assets/png/goob_bridging_brandmark_color.png" alt="goob_bridging_brandmark_color" />
            <div>Good <span>Bridging</span></div>
          </a>
        </Link>
        <Link href="/#about"><a>About</a></Link>
        <Link href="/#blog"><a>Blog</a></Link>
        <Link href="/#ecosystem"><a>Ecosystem</a></Link>
        <Link href="/#calendar"><a>Calendar</a></Link>
        <Link href="/nft"><a>NFTs</a></Link>
      </nav>
    </header>
  )

  return (
    <header className={styles.header}>
      <nav>
        <a href="#" className={styles.logo}>
          <img src="/assets/png/goob_bridging_brandmark_color.png" alt="goob_bridging_brandmark_color" />
          <div>Good <span>Bridging</span></div>
        </a>
        <a href="#about">About</a>
        <a href="#blog">Blog</a>
        <a href="#ecosystem">Ecosystem</a>
        <a href="#calendar">Calendar</a>
        <Link href="/nft"><a>NFTs</a></Link>
      </nav>
    </header>
  )
}
