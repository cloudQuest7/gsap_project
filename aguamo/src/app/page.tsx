'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
  }, []);

  return (
   <main>
    <Navbar />
    <Hero />
    <div  className='h-dvh bg-black' /> // This div is used to ensure the hero section takes full viewport height

    
   </main>
  );
};

export default Page;