import type { NextPage } from 'next'
import Head from 'next/head'
import ComingSoon from '../../components/ComingSoon'

const Staking: NextPage = () => {
  return (
    <>
      <Head>
        <title>Staking | Coming Soon</title>
      </Head>
      <ComingSoon />
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {}
  }
}

export default Staking
