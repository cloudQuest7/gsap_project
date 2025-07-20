'use client';

import React from 'react';
import { navLinks } from '../../../constants';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

gsap.registerPlugin(ScrollTrigger);
const Navbar = () => {
    useGSAP(() => {
        const navTween = gsap.timeline({
           scrollTrigger: {
            trigger: 'nav',
            start: 'bottom  top', //element viewport
           }
        });
        navTween.fromTo(
            'nav',
            {
                backgroundColor: 'transparent'
            },
            {
                backgroundColor: '#00000050',
                backdropFilter: 'blur(10px)',
                duration: 1,
                ease: 'power1.inOut'
            }
        );
    }, []);


  return (
    <nav className="">
        <div>
            <a href='#home' className="flex items-center gap-2">
                <Image 
                 src="/images/logo.png" 
                 alt="logo" 
                 width={40}
                 height={40}
                 className="object-contain"
                />
                <p>Velvet Pour</p>
            </a>
            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`} className="capitalize">
                            {link.title}
                        </a>
                    </li>       
                ))}
            
            </ul>
        </div>
    </nav>
  );
};

export default Navbar;