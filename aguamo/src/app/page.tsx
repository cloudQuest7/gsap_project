'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cocktails from './components/Cocktails';
import About from './components/About';

const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
  }, []);

  return (
   <main>
    <Navbar />
    <Hero />
    {/* <div  className='h-dvh bg-black' />  */}
    <Cocktails />
    <About />
   </main>
  );
};

export default Page;