'use client';

import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Navbar from './components/Navbar';

const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
  }, []);

  return (
   <main>
    <Navbar />
   </main>
  );
};

export default Page;