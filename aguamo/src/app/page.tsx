'use client';

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

const Page = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);
  }, []);

  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='text-3xl text-indigo-300' >Yo, GSAP!</h1>
    </div>
  );
};

export default Page;