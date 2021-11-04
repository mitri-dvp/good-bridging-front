import Header from "./Header"
import Footer from "./Footer"
import styles from '../styles/ComingSoon.module.css'

export default function ComingSoon() {
  return (
    <div className={styles.container}>
      <Header />
      
      <main>
        <h1 className={styles.title}>
          COMING<br />SOON
        </h1>
        <div className={styles.images}>
          <img className={styles.left_shapes} src="/assets/png/coming_soon/left_shapes.png" alt="" />
          <img className={styles.wolfys} src="/assets/png/coming_soon/wolfys.png" alt="" />
          <img className={styles.right_shapes} src="/assets/png/coming_soon/right_shapes.png" alt="" />
        </div>
        <p>We are building something awesome for the bridgers community.</p>
        <div className={styles.socials}>
          <a href="https://twitter.com/goodbridging" target='gb'><img src="/assets/png/coming_soon/twitter.png" alt="" /></a>
        </div>
        <p>Stay tuned to get the latest GB updates</p>
      </main>
      
      <Footer />
    </div>
  )
}
