'use client'
import React, { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

export default function Sidebar() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const bellRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {

    bellRef.current = new Audio('https://assets.mixkit.co');
    bellRef.current.volume = 0.3;
  }, []);

  const toggleSidebar = (state: boolean) => {
    if (state) {
      if (bellRef.current) {
        bellRef.current.currentTime = 0;
        bellRef.current.play().catch(() => {}); 
      }
      if ("vibrate" in navigator) {
        navigator.vibrate(100); 
      }
    }
    setIsOpenMenu(state);
  };

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const clientY = 'touches' in e ? e.touches[0].clientY : (e as React.MouseEvent).clientY;
    setMousePos({ x: clientX, y: clientY });
  };

  const isCurrentlyOpen = (() => {
    const now = new Date();
    const phillyTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    const day = phillyTime.getDay();
    const hour = phillyTime.getHours();
    if (day >= 1 && day <= 4) return hour >= 7 && hour < 20;
    return hour >= 9 && hour < 17;
  })();

  const menuItems = ['Home', 'Menu', 'Gallery', 'Our Mission', 'Contact', 'Doordash', 'Grubhub', 'Instagram'];

  return (
    <>
     
      <button 
        onClick={() => toggleSidebar(true)}
        className="fixed bottom-6 right-6 z-[100] bg-yellow-400 text-black p-4 hover:bg-white transition-all skew-x-[-12deg] shadow-[0_0_30px_rgba(250,204,21,0.4)] md:hidden border-2 border-black active:scale-90"
      >
        <Menu size={28} strokeWidth={3} className="skew-x-[12deg]" />
      </button>

      <div 
        className={`fixed inset-0 z-[100] transition-all duration-500 md:hidden ${isOpenMenu ? 'visible' : 'invisible'}`}
        onMouseMove={handleInteraction}
        onTouchMove={handleInteraction}
      >
        <div 
          className="absolute pointer-events-none transition-transform duration-300 ease-out opacity-40"
          style={{
            left: mousePos.x - 150,
            top: mousePos.y - 150,
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(250,204,21,0.6) 0%, transparent 70%)',
            filter: 'blur(50px)',
            zIndex: 1
          }}
        />

        <div 
          className={`absolute inset-0 bg-black/95 backdrop-blur-md transition-opacity duration-500 ${isOpenMenu ? 'opacity-100' : 'opacity-0'}`}
          onClick={() => toggleSidebar(false)}
        />

        <aside className={`absolute top-0 left-0 h-full w-full max-w-[320px] bg-black border-r-4 border-yellow-400 p-8 flex flex-col transform transition-transform duration-500 ease-out ${isOpenMenu ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex justify-between items-start mb-12 flex-shrink-0">
            <div className="bg-yellow-400 text-black px-3 py-1 text-[10px] font-black uppercase tracking-tighter skew-x-[-12deg]">
              YBC Philly
            </div>
            <button onClick={() => toggleSidebar(false)} className="text-white hover:text-yellow-400 transition-colors">
              <X size={32} strokeWidth={3} />
            </button>
          </div>

       
          <div className="relative flex-grow overflow-hidden group/nav">
            <nav className="h-full overflow-y-auto flex flex-col gap-6 pb-20 pr-4 custom-sidebar-scroll relative z-10">
              {menuItems.map((item) => {
                const isExternal = ['Doordash', 'Grubhub', 'Instagram'].includes(item);
                return (
                  <a 
                    key={item}
                    href={
                      item === 'Home' ? '/' : 
                      item === 'Doordash' ? 'https://www.doordash.com/store/yellow-bicycle-canteen-philadelphia-23273361/12843896/' : 
                      item === 'Grubhub' ? 'https://www.grubhub.com/restaurant/yellow-bicycle-canteen-930-locust-st-philadelphia/2649272' : 
                      item === 'Instagram' ? 'https://www.instagram.com/yellowbicyclecanteenphilly' : 
                      item === 'Our Mission' ? '/mission' :
                      `/${item.toLowerCase()}`
                    }
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    onClick={() => !isExternal && toggleSidebar(false)}
                    className="text-4xl font-black uppercase italic tracking-tighter text-white hover:text-yellow-400 transition-all hover:translate-x-3 skew-x-[-10deg]"
                  >
                    {item}
                  </a>
                );
              })}
            </nav>
     
            <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent pointer-events-none z-20" />
          </div>

          <div className="mt-8 space-y-6 flex-shrink-0">
            <div className="bg-white/5 p-5 border-l-4 border-yellow-400">
              <div className="flex items-center gap-2 mb-2">
                <div className={`h-2 w-2 rounded-full ${isCurrentlyOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                  {isCurrentlyOpen ? 'Open For Real Food' : 'Kitchen Closed'}
                </span>
              </div>
              <p className="text-[11px] font-bold uppercase leading-tight text-white/80">
                Washington Sq West <br /> 930 Locust St
              </p>
            </div>
          </div>
        </aside>
      </div>

      <style jsx global>{`
        .custom-sidebar-scroll::-webkit-scrollbar {
          width: 4px;
        }
        .custom-sidebar-scroll::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-sidebar-scroll::-webkit-scrollbar-thumb {
          background: #facc15;
          border-radius: 0px;
        }
      `}</style>
    </>
  );
}
