import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>My Portofolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-6xl font-bold text-center" >Mohamed Zumry</h1>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <p>Copyright | 2022 | mohamedzumrydev</p>
      </footer>
    </div>
  )
}

export default Home
