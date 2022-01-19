import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from '../styles/Footer.module.css'

export default function Footer() {
  const router = useRouter()
  const isHome = router.pathname === '/'

  return (
    <footer className={styles.footer}>
      <div>
        <div className={styles.header}>
          <div className={styles.logo}>
            <img src="/assets/svg/goob_bridging_black.svg" alt="" />
            <span>A fair launch community coin built on Avalanche.</span>
          </div>
          <nav>
            {isHome ? (
              <>
                <a href="#">About</a>
                <a href="#">Blog</a>
                <a href="#">Ecosystem</a>
                <a href="#calendar">Calendar</a>
                <Link scroll={true} href="/nft"><a>NFTs</a></Link>
              </>
              ):(
              <>
                <Link scroll={true} href="/#about"><a>About</a></Link>
                <Link scroll={true} href="/#blog"><a>Blog</a></Link>
                <Link scroll={true} href="/#ecosystem"><a>Ecosystem</a></Link>
                <Link scroll={true} href="/#calendar"><a>Calendar</a></Link>
                <Link scroll={true} href="/nft"><a>NFTs</a></Link>
              </>
            )}
          </nav>
          <div className={styles.socials}>
            <a href="https://twitter.com/goodbridging" target="_good_bridging"><img src="/assets/svg/twitter.svg" alt="" /></a>
            <a href="https://discord.com/invite/nQCYGQZd" target="_good_bridging"><img src="/assets/svg/discord.svg" alt="" /></a>
            <a href="https://t.me/GoodBridgingToken" target="_good_bridging"><img src="/assets/svg/telegram.svg" alt="" /></a>
            <a href="https://medium.com/@goodbridgingavax_3130" target="_good_bridging"><img src="/assets/svg/medium.svg" alt="" /></a>
          </div>
        </div>
        <div className={styles.copy}>
          2021 Good Bridging . All Rights Reserved
        </div>
        <a href="https://t.me/GoodBridgingToken" target="_good_bridging"><img className={styles.mascot} src="/assets/svg/home-footer-mascot.svg" alt="" /></a>
      </div>
    </footer>
  )
}
