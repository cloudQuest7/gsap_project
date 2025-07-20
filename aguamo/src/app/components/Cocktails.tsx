import React from 'react'
import Image from 'next/image'
import { cocktailLists } from '../../../constants'

const Cocktails = () => {
  return (
    <section id="cocktails" className='noisy'>
        <Image 
        src="/images/cocktail-left-leaf.png" 
        alt="l-leaf"
         id="c-left-leaf"
         width={300} 
         height={300}
         />

        <Image
         src="/images/cocktail-right-leaf.png"
          alt="r-leaf"
           id="c-right-leaf"
              width={300}
              height={300} 
              />
        <div className='list'>
            <div className='popular'>
                <h2> Most Popular Cocktails:</h2>
                <ul>
                    {cocktailLists.map(({name, country, detail, price}) => (
                       <li key={name}>
                        <div className="md:me-28">
                            <h3>{name}</h3>
                            <p>{country} | {detail}</p>
                        </div>
                        <span> {price}</span>
                       </li>
                    ))}
                </ul>

            </div>

        </div>

    </section>
  )
}

export default Cocktails