import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Portfolio from '../components/Portfolio'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Lagraf</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
<Navbar />
<Main />
<About />
<Portfolio/>
<Contact />
    </div>
  )
}

export default Home
