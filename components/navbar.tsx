'use client'
import { Instagram, Utensils, MousePointer2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState, useRef } from 'react';

export default function Navbar() {
  const businessName = "Yellow Bicycle Canteen";
  const pathname = usePathname();

  const scrollRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => pathname === path;

 

  return (
    <div className="sticky top-0 z-50">
      <nav className="flex justify-between items-center p-6 bg-black backdrop-blur-xl border-b border-yellow-400/30">
        <Link href="/">
          <h1 className="text-yellow-400 font-black text-2xl md:text-3xl tracking-[-0.08em] uppercase italic leading-none skew-x-[-6deg] drop-shadow-[4px_4px_0px_rgba(255,255,255,0.1)] whitespace-nowrap">
            {businessName}
          </h1>
        </Link>

        <div className="relative hidden md:flex items-center flex-1 max-w-4xl ml-10 overflow-hidden group">
          
          
         
        
          <div 
            ref={scrollRef}
          
            className='custom-scroll flex items-center w-full overflow-x-auto whitespace-nowrap snap-x gap-10 text-xs font-black uppercase tracking-widest px-4 py-3 transition-opacity duration-500 '
          >
            {[
              { name: 'Home', path: '/' },
              { name: 'Menu', path: '/menu' },
              { name: 'Gallery', path: '/gallery' },
              { name: 'Contact', path: '/contact' },
              { name: 'Our Mission', path: '/mission' },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.path}
                className={`transition-all duration-300 snap-start border-b-2 pb-1 ${
                  isActive(item.path) 
                    ? 'text-yellow-400 border-yellow-400 scale-105' 
                    : 'text-white/70 border-transparent hover:text-white hover:border-white/30'
                }`}
              >
                {item.name}
              </Link>
            ))}

           
            <a href="https://www.grubhub.com/restaurant/yellow-bicycle-canteen-930-locust-st-philadelphia/2649272" 
               target="_blank" rel="noopener noreferrer" 
               className="text-white/70 hover:text-yellow-400 transition-colors snap-start flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
               Grubhub
            </a>
            <a href="https://www.doordash.com/store/yellow-bicycle-canteen-philadelphia-23273361/12843896/" 
               target="_blank" rel="noopener noreferrer" 
               className="text-white/70 hover:text-yellow-400 transition-colors snap-start flex items-center gap-2">
               <span className="w-1.5 h-1.5 rounded-full bg-red-600" />
               Doordash
            </a>
            
            <a href="https://www.instagram.com/yellowbicyclecanteenphilly" 
               target="_blank" rel="noopener noreferrer" 
               className="text-white/70 hover:text-yellow-400 flex items-center gap-1 transition-colors snap-start">
              <Instagram size={14} strokeWidth={3} /> Instagram
            </a>

           
          </div>

         
         
        </div>
      </nav>
    </div>
  );
}
