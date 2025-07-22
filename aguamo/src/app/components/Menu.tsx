'use client'
import React from 'react'
import Image from 'next/image'
import { useGSAP } from '@gsap/react'
import { allCocktails } from '../../../constants'
import {useRef} from 'react'
import { gsap } from 'gsap'

const Menu = () => {
    const contentRef = useRef<HTMLDivElement | null>(null);



    const [currentIndex, setCurrentIndex] = React.useState(0);

    useGSAP(() => {
        gsap.fromTo('#title', { opacity:0}, {opacity:1, duration:1});
        gsap.fromTo('.cocktail img',{opacity:0, xPercent: -100}, {opacity:1, xPercent:0, duration:1, ease: 'power1.inOut'});

        gsap.fromTo('.details h2', {opacity:0, yPercent: 100}, {opacity:100, yPercent:0, ease: 'power1.inOut'});
         gsap.fromTo('.details p', {opacity:0, yPercent: 100}, {opacity:100, yPercent:0, ease: 'power1.inOut'});
    }, [currentIndex]);



    const totalCocktails = allCocktails.length;
  const goToSlide = (index: number) => {
        const newIndex = (index +totalCocktails) % totalCocktails;   
        setCurrentIndex(newIndex); 
    }
    const getCocktailAt = (indexOffset: number) => {
  return allCocktails[(currentIndex + indexOffset + totalCocktails) % totalCocktails];
};


    const currentCocktail = getCocktailAt(0);
    const prevCocktail = getCocktailAt(-1);
    const nextCocktail = getCocktailAt(1);

  return (
    <section id="menu" aria-labelledby='menu-heading'>
        <Image 
          src="/images/slider-left-leaf.png" 
          alt="left-leaf" 
          id="m-left-leaf"
          width={350}
          height={350}
         />

         <Image 
          src="/images/slider-right-leaf.png" 
          alt="right-leaf" 
          id="m-right-leaf"
          width={350}
          height={350}
         />
         <h2 id="menu-heading" className='sr-only'>
            Cocktail Menu
         </h2>

         {/* <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
        {allCocktails.map((cocktail, index) => {
            const isActive = index === currentIndex;
            return (
            <button
                key={cocktail.id || index}
                className={isActive ? 'active-tab' : ''}
                onClick={() => setCurrentIndex(index)}
            >
                {cocktail.name}
            </button>
            );
        })}
        </nav> */}
        <nav className='cocktail-tabs' aria-label='Cocktail Navigation'>
        {allCocktails.map((cocktail, index) => {
             const isActive = index === currentIndex;
            return (
            <button
                key={cocktail.id}
                className={ `${isActive ? 
                    'text-white border-white'
                    : 'text-white/50 border-white/50'}
                    `} onClick={() => setCurrentIndex(index)}
            >
                {cocktail.name}
            </button>
            );
        })}
        </nav>
        <div className='content'>
            <div className='arrows'>
                <button className='text-left' onClick={() => goToSlide(currentIndex - 1)}>
                <span> {prevCocktail.name}</span>
                <Image 
                    src="/images/right-arrow.png"
                    alt="right-arrow"
                    aria-hidden="true"
                    width={20}
                    height={20}
                />
                </button>

                <button className='text-left' onClick={() => goToSlide(currentIndex + 1)}>
                <span> {nextCocktail.name}</span>
                <Image 
                    src="/images/left-arrow.png"
                    alt="left-arrow"
                    aria-hidden="true"
                    width={20}
                    height={20}
                />
                </button>
            </div>
            <div className='cocktail'>
                <Image 
                    src={currentCocktail.image} 
                    alt="cocktail"
                    className='object-contain'
                    width={500}
                    height={500}
                />
            </div>
            <div className='recipe'>
                <div ref={contentRef} className='info'>
                    <p> Recipe for</p>
                    <p id="title">{currentCocktail.name}</p>
                </div>

                <div className='details'>
                    <h2>{currentCocktail.title}</h2>
                    <p>{currentCocktail.description}</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Menu