import { useRef, useEffect, useCallback, useState } from 'react'
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer'

import lottie from 'lottie-web';
import styles from '../styles/Home.module.css'
import partnersData from '../public/assets/json/partners.json'

// Embla
import useEmblaCarousel from 'embla-carousel-react'
interface Partner {
  screen_name: string
  profile_pic: string
}

const Home: NextPage<{partners: Partner[]}> = ({ partners }) => {
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
      <Head>
        <title>Welcome to Good Bridging</title>
      </Head>

      <Header />

      <main>
        <section className={styles.hero}>
          <div className={styles.content}>
            <img className={styles.shapes} src="/assets/svg/home-hero-shapes.svg" alt="" />
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
            <img className={styles.mascot} src="/assets/svg/goob_bridging_light_background.svg" alt="" />
            <div>
              <p>What’s $GB?</p>
              <p>Good Bridging Token ($GB) is a fair launched DeFi token in the Avalanche Network, 100% of the supply was airdropped evenly to 16,135 addresses give a warm welcome to those decentralization enthusiasts that have used the Avalanche-Ethereum Bridge to transact their ERC-20 assets in the Avalanche Network.</p>
              <p>No insiders, no pre-sale, no VC’s, no team allocation.</p>
              <img className={styles.banner} src="/assets/svg/home-about-banner.svg" alt="" />
            </div>
          </div>
        </section>
        <div className={styles.ecosystem} id="ecosystem">
          <div className={styles.footer}>
            <h1>Projects that trust in GB</h1>
            <div className={styles.partners}>
              <div>
                <button onClick={()=> prevSlide()} className="embla_prev_btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m3.86 8.753 5.482 4.796c.646.566 1.658.106 1.658-.753V3.204a1 1 0 0 0-1.659-.753l-5.48 4.796a1 1 0 0 0 0 1.506z"/>
                  </svg>
                </button>
                <button onClick={()=> nextSlide()} className="embla_next_btn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
                  </svg>
                </button>
                <div className="embla" ref={emblaRef}>
                  <div className="embla__container">
                    {partners.map(partner => (
                      <EmblaSlide  key={partner.screen_name} partner={partner}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className={styles.calendar} id="calendar">
          <table className="content">
            <thead>
              <tr>
                <th colSpan={3}>
                  <div><img src="/assets/svg/home-airdrop-banner-icon.svg" alt="" /> Calendar</div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className={styles.date}>
                  <div>Passed</div>
                </td>
                <td className={styles.name}>
                  <div>AVAX Cats Minting</div>
                </td>
                <td className={styles.value}>
                  <div>50 AVAX Cats NFTs can be minted for free by holders with more than 1800 $GB.</div>
                </td>
              </tr>
              <tr>
                <td className={styles.date}>
                  <div>Passed</div>
                </td>
                <td className={styles.name}>
                  <div>Chikn Minting</div>
                </td>
                <td className={styles.value}>
                  <div>Holders with 900 GB or more can mint a free NFT Chikn. NFT&apos;s are resource producing with a tri-token architecture.</div>
                </td>
              </tr>
              <tr>
                <td className={styles.date}>
                  <div>Passed</div>
                </td>
                <td className={styles.name}>
                  <div>GoodFire Airdrop</div>
                </td>
                <td className={styles.value}>
                  <div>Holders with over 900 GB will have a total of 28 Million GF airdrop evently.</div>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
        {/* <section className={styles.news} id="blog">
          <div className={styles.header}>
            <h1>Good Bridging News</h1>
            <img src="/assets/svg/home-news-mascot.svg" alt="" />
          </div>
          <div className={styles.content}>
            <div className={styles.left}>
              <img src="/assets/png/home-news-thumbnail.png" alt="" />
              <span>Posted Monday 00, Month, Year</span>
              <h1>Post Title</h1>
              <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod</p>
              <button>Read More</button>
            </div>
            <div className={styles.rigth}>
              <div className={styles.post}>
                <img src="/assets/png/home-news-posts-thumbnail.png" alt="" />
                <div className={styles.post_content}>
                  <span>Posted Monday 00, Month, Year</span>
                  <h1>Post Title</h1>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                </div>
              </div>
              <div className={styles.post}>
                <img src="/assets/png/home-news-posts-thumbnail.png" alt="" />
                <div className={styles.post_content}>
                  <span>Posted Monday 00, Month, Year</span>
                  <h1>Post Title</h1>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                </div>
              </div>
              <div className={styles.post}>
                <img src="/assets/png/home-news-posts-thumbnail.png" alt="" />
                <div className={styles.post_content}>
                  <span>Posted Monday 00, Month, Year</span>
                  <h1>Post Title</h1>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                </div>
              </div>
              <div className={styles.post}>
                <img src="/assets/png/home-news-posts-thumbnail.png" alt="" />
                <div className={styles.post_content}>
                  <span>Posted Monday 00, Month, Year</span>
                  <h1>Post Title</h1>
                  <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam</p>
                </div>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      <Footer />
    </div>
  )
}

export default Home

export async function getServerSideProps(context: GetServerSideProps) {
  
  const partners: Partner[] = []
  
  for (const partner of partnersData.partners) {
    try {
      const res = await fetch(`https://api.twitter.com/1.1/users/show.json?screen_name=${partner.screen_name}`, {
        headers: [['authorization', `Bearer ${process.env.NEXT_PUBLIC_TWITTER_BEARER_TOKEN}`]]
      })
      const data = await res.json()
      partners.push({
        screen_name: partner.screen_name,
        profile_pic: data.profile_image_url.replace('_normal', '')
      })
      console.log('SUCCESS :: Pushed partner:', {
        screen_name: partner.screen_name,
        profile_pic: data.profile_image_url.replace('_normal', '')
      })
    } catch (error) {
      partners.push({
        screen_name: partner.screen_name,
        profile_pic: partner.default_src
      })
      console.log('ERROR :: Pushed partner:', {
        screen_name: partner.screen_name,
        profile_pic: partner.default_src
      })
    }
  }

  return {
    props: {partners},
  }
}


const EmblaSlide: React.FC<{partner: Partner}> = ({ partner }) => {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="embla__slide">
      <a href={`https://twitter.com/${partner.screen_name}`} target="_good_bridging" className={styles.partner}>
        <img className={loaded ? styles.loaded : ''} src={partner.profile_pic} alt={partner.screen_name} onLoad={() => setLoaded(true)} />
        <span>@{partner.screen_name}</span>
      </a>
    </div>
  )
}