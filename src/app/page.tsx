import Image from 'next/image'
import React from 'react'
import bg from '../../public/background/main-bg.png'
import About from './about/page'
import Header from './components/header/Header'
import Button from '@/app/components/button/Button'
import Features from './features/page'
import Contact from './contact/page'

const Home = () => {
  return (
    <div id='home'>
      <Image
      src={bg}
      alt='Background Image'
      className='-z-50 w-full h-screen'
      />
      

      <Header />
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center gap-8'>
        <h4 className='font-bold text-white/80 text-2xl select-none pointer-events-none'>WELCOM TO DIGITAL STARTUP AGENCY</h4>
        <h1 className='text-7xl text-center text-white/80 font-bold select-none pointer-events-none'>Best Digital Technology Agency</h1>
        <Button />
      </div>
      <About />
      <Features />
      <Contact />
    </div>
  )
}

export default Home
