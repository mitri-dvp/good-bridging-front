import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from '../styles/Header.module.css'

export default function Header() {
  const router = useRouter()
  const isHome = router.pathname === '/'
  const [showMobileNav, setShowmobileNav] = useState(false)

  if(!isHome) return (
    <>
      <header className={`${styles.header} ${styles.desktop}`}>
        <nav>
          <Link scroll={true} href="/">
            <a className={styles.logo}>
              <img src="/assets/png/goob_bridging_brandmark_color.png" alt="goob_bridging_brandmark_color" />
              <div>Good <span>Bridging</span></div>
            </a>
          </Link>
          <Link scroll={true} href="/#about"><a>About</a></Link>
          <Link scroll={true} href="/posts"><a>Blog</a></Link>
          <Link scroll={true} href="/#ecosystem"><a>Ecosystem</a></Link>
          <Link scroll={true} href="/#calendar"><a>Calendar</a></Link>
          <Link scroll={true} href="/nft"><a>NFTs</a></Link>
        </nav>
      </header>
      <header className={`${styles.header} ${styles.mobile}`}>
        <Link scroll={true} href="/">
          <a className={styles.logo}>
            <img src="/assets/png/goob_bridging_brandmark_color.png" alt="goob_bridging_brandmark_color" />
          </a>
        </Link>
        <button className={styles.mobile_button}>
          <svg  onClick={() => setShowmobileNav(!showMobileNav)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
        <nav className={`${showMobileNav ? styles.active : ''}`}>
          <Link scroll={true} href="/#about"><a>About</a></Link>
          <Link scroll={true} href="/posts"><a>Blog</a></Link>
          <Link scroll={true} href="/#ecosystem"><a>Ecosystem</a></Link>
          <Link scroll={true} href="/#calendar"><a>Calendar</a></Link>
          <Link scroll={true} href="/nft"><a>NFTs</a></Link>
        </nav>
      </header>
    </>
  )

  return (
    <>
      <header className={`${styles.header} ${styles.desktop}`}>
        <nav>
          <a href="#" className={styles.logo}>
            <img src="/assets/png/goob_bridging_brandmark_color.png" alt="goob_bridging_brandmark_color" />
            <div>Good <span>Bridging</span></div>
          </a>
          <a href="#about">About</a>
          <Link scroll={true} href="/posts"><a>Blog</a></Link>
          <a href="#ecosystem">Ecosystem</a>
          <a href="#calendar">Calendar</a>
          <Link scroll={true} href="/nft"><a>NFTs</a></Link>
        </nav>
      </header>
      <header className={`${styles.header} ${styles.mobile}`}>
        <a href="#" className={styles.logo}>
          <img src="/assets/png/goob_bridging_brandmark_color.png" alt="goob_bridging_brandmark_color" />
        </a>
        <button className={styles.mobile_button}>
          <svg  onClick={() => setShowmobileNav(!showMobileNav)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
          </svg>
        </button>
        <nav className={`${showMobileNav ? styles.active : ''}`}>
          <a href="#about">About</a>
          <Link scroll={true} href="/posts"><a>Blog</a></Link>
          <a href="#ecosystem">Ecosystem</a>
          <a href="#calendar">Calendar</a>
          <Link scroll={true} href="/nft"><a>NFTs</a></Link>
        </nav>
      </header>
    </>
  )
}
