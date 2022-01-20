import { useRef, useEffect, useCallback, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'
import Seo from "../components/Seo"
import Calendar from '../components/Calendar'

import styles from '../styles/Home.module.css'

import { fetchAPI } from "../lib/api"
// Embla
import useEmblaCarousel from 'embla-carousel-react'
import lottie from 'lottie-web';
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
dayjs.extend(advancedFormat)

import { PartnerT, AirdropT } from '../types'
import News from '../components/News'

const Home: NextPage<{
  airdrops: AirdropT[],
  partners: PartnerT[],
  posts:any,
  homepage: any
}> = ({ airdrops, partners, posts, homepage }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, speed: 5, containScroll: 'trimSnaps' })

  const prevSlide = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev()
    }
  }, [emblaApi])

  const nextSlide = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext()
    }
  }, [emblaApi])

  const containerRef = useRef() as React.MutableRefObject<HTMLInputElement>;

  useEffect(() => {
    if(containerRef.current != undefined) {
      lottie.loadAnimation({
        container: containerRef.current, // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/json/lottie.json'
      });
    }
  }, [])

  return (
    <div className={styles.home}>

      <Seo seo={homepage.seo} />

      <Head>
        <title>{homepage.seo.metaTitle}</title>
      </Head>

      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.content}>
            <img className={styles.shapes} src="/assets/svg/home-hero-shapes.webp" alt="" />
            <div className={styles.lottie} ref={containerRef}></div>
            <div>
              <h1>Good Morning and Good Bridging!</h1>
              <p>&quot;GM and GB&quot;  is commonly used as a friendly way to say &quot;Good Morning and Good Bridging&quot;. Welcoming new ERC-20 assets crossing from Ethereum to Avalanche for a DeFi experience that is faster, cheaper, and way more fun!</p>
            </div>
          </div>
        </section>
        <section className={styles.about} id="about">
          <img className={styles.shapes} src="/assets/svg/home-about-shape.svg" alt="" />
          <div className={styles.content}>
            <img className={styles.mascot} src="/assets/svg/goob_bridging_light_background.svg" alt="goob_bridging_light_background_logo" />
            <div>
              <p>What’s $GB?</p>
              <p>Good Bridging Token ($GB) is a fair launched DeFi token in the Avalanche Network, 100% of the supply was airdropped evenly to 16,135 addresses give a warm welcome to those decentralization enthusiasts that have used the Avalanche-Ethereum Bridge to transact their ERC-20 assets in the Avalanche Network.</p>
              <p>No insiders, no pre-sale, no VC’s, no team allocation.</p>
              <img className={styles.banner} src="/assets/svg/home-about-banner.webp" alt="" />
            </div>
          </div>
        </section>
        <div className={styles.ecosystem} id="ecosystem">
          <div className={styles.footer}>
            <h1>Projects that trust in GB</h1>
            <div className={styles.partners}>
              <div>
                <button onClick={()=> prevSlide()} className="embla_prev_btn" aria-label="partners_previous_slide">
                  <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.30184 4.42155L5.09965 7.21937L5.09966 7.21938C5.30011 7.41986 5.30011 7.74487 5.09966 7.94535L5.09961 7.94541C4.89913 8.14579 4.57416 8.14581 4.37368 7.94539L4.37365 7.94537L1.21284 4.78455L1.21281 4.78452C1.0124 4.58405 1.0124 4.25905 1.21281 4.05858L1.21284 4.05855L4.37365 0.897737L4.37362 0.897711L4.37675 0.894687C4.58071 0.697712 4.90572 0.703366 5.1027 0.907324L5.10271 0.907333C5.29483 1.10628 5.29485 1.42169 5.1027 1.62064L5.10272 1.62066L5.09965 1.62374L2.30184 4.42155Z" fill="#fa538b" stroke="#fa538b" strokeWidth="0.5"></path>
                  </svg>
                </button>
                <button onClick={()=> nextSlide()} className="embla_next_btn" aria-label="partners_next_slide">
                  <svg width="6" height="9" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.30184 4.42155L5.09965 7.21937L5.09966 7.21938C5.30011 7.41986 5.30011 7.74487 5.09966 7.94535L5.09961 7.94541C4.89913 8.14579 4.57416 8.14581 4.37368 7.94539L4.37365 7.94537L1.21284 4.78455L1.21281 4.78452C1.0124 4.58405 1.0124 4.25905 1.21281 4.05858L1.21284 4.05855L4.37365 0.897737L4.37362 0.897711L4.37675 0.894687C4.58071 0.697712 4.90572 0.703366 5.1027 0.907324L5.10271 0.907333C5.29483 1.10628 5.29485 1.42169 5.1027 1.62064L5.10272 1.62066L5.09965 1.62374L2.30184 4.42155Z" fill="#fa538b" stroke="#fa538b" strokeWidth="0.5">
                    </path>
                  </svg>
                </button>
                <div className="embla" ref={emblaRef}>
                  <div className="embla__container">
                    {partners.map(partner => (
                      <HomeEmblaSlide  key={partner.id} partner={partner}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Calendar airdrops={airdrops} styles={styles} />
        <News posts={posts} styles={styles}/>
      </main>
      <Footer />
    </div>
  )
}

const HomeEmblaSlide: React.FC<{partner: PartnerT}> = ({ partner }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="embla__slide">
      <a href={`https://twitter.com/${partner.screen_name}`} target="_good_bridging" className={styles.partner}>
        <img loading="lazy" className={loaded ? styles.loaded : ''} src={partner.profile_pic} alt={partner.screen_name} onLoad={() => setLoaded(true)} />
        <span>@{partner.screen_name}</span>
      </a>
    </div>
  )
}


export async function getStaticProps({ params }: any) {
  // Run API calls in parallel
  const [airdrops, partners, posts, homepage] = await Promise.all([
    fetchAPI("/airdrops?_sort=date:DESC&_limit=-1"),
    fetchAPI("/partners?_limit=-1"),
    fetchAPI("/posts?_sort=published_at:DESC&_limit=5"),
    fetchAPI("/homepage"),
  ])

  const partnersTwitter: PartnerT[] = []

  for (const partner of partners) {
    try {
      const res = await fetch(`https://api.twitter.com/1.1/users/show.json?screen_name=${partner.screen_name}`, {
        headers: [['authorization', `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`]]
      })
      const data = await res.json()
      partnersTwitter.push({
        screen_name: partner.screen_name,
        profile_pic: data.profile_image_url.replace('_normal', '').replace(/^http:\/\//i, 'https://'),
        id: partner.id
      })
    } catch (error) {
      console.log(`ERROR fetching ${partner.screen_name} profile`)
    }
  }

  return {
    props: { airdrops, partners: partnersTwitter, posts, homepage },
    revalidate: 1, // How often to revalidate the page (in seconds)
  }
}

export default Home