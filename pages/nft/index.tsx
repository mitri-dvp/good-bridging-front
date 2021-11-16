import type { NextPage } from 'next'
import Head from 'next/head'
import ComingSoon from '../../components/ComingSoon'

const Nft: NextPage = () => {
  return (
    <>
      <Head>
        <title>NFTs | Coming Soon</title>
      </Head>
      <ComingSoon />
    </>
  )
}

export async function getStaticProps() {}

export default Nft
