'use client';

import React from 'react';
import { navLinks } from '../../../constants';

const Navbar = () => {
  return (
    <nav className="">
        <div>
            <a href='#home' className="flex items-center gap-2">
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