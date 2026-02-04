'use client'
import { MapPin, Phone } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentReview, setCurrentReview] = useState(0);
  const phoneNumber = "215-515-3749";
  const address = "930 Locust St Philadelphia PA 19107";
  
  const reviewStats = {
    google: { count: 233, rating: 4.9 },
    yelp: { count: 73, rating: 5.0 }
  };

  const reviews = [
    { text: "BEST VEGETARIAN FOOD IN PHILLY. FAST AND FRESH.", author: "GOOGLE REVIEW" },
    { text: "THE GREEN EGG SANDWICH IS A GAME CHANGER.", author: "YELP REVIEW" },
    { text: "ZERO WAIT PICKUP. ESSENTIAL FUEL FOR MY SHIFT AT JEFFERSON.", author: "HOSPITAL STAFF" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [reviews.length]);

  const isOpen = (() => {
    const now = new Date();
    const phillyTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    const day = phillyTime.getDay(); 
    const hour = phillyTime.getHours();
    if (day >= 1 && day <= 4) return hour >= 7 && hour < 20; 
    return hour >= 9 && hour < 17; 
  })();

  return (
    <main className="relative min-h-screen flex flex-col font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      <div className="fixed inset-0 z-0">
        <img src="/ybc1.jpg" alt="Cafe Background" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-black/50" /> 
      </div>

      <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="bg-yellow-400 text-black px-4 py-1 mb-6 text-xs font-black uppercase tracking-widest skew-x-[-12deg]">
          Washington Square West
        </div>
        
        <h1 className="text-7xl md:text-[8rem] font-black text-white uppercase italic leading-[0.85] tracking-[-0.05em] skew-x-[-10deg] drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
          Real Food <br /> 
          <span className="drop-shadow-[6px_6px_0px_rgba(255,255,255,0.1)]">Fast</span>
        </h1>

        <div className="mt-8 max-w-xl">
          <p className="text-white/90 text-sm md:text-lg font-medium leading-relaxed drop-shadow-md">
            Welcome to <span className="font-bold text-yellow-400">Yellow Bicycle Canteen</span>. 
            We serve up wholesome, handmade vegetarian and vegan comfort food 
            using fresh, organic ingredients. Gourmet meals that 
            never compromise on flavor or speed.
          </p>
        </div>
        
        <div className="mt-10 flex flex-col items-center gap-4 text-white drop-shadow-md">
           <a 
            href={`https://www.google.com`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 flex flex-col items-center gap-4 text-white drop-shadow-md hover:text-yellow-400 transition-colors group"
          >
            <div className="flex items-center gap-2">
              <MapPin size={18} className="text-yellow-400 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-black uppercase tracking-widest">{address}</span>
            </div>
             <div className="flex flex-col items-center opacity-80 group-hover:opacity-100 transition-opacity">
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] border-t border-white/20 pt-2 mt-1">
                Mon-Fri 7AM-8PM <span className="text-yellow-400 mx-1">|</span> Sat-Sun 9AM-5PM
              </span>
            </div>
          </a>
        </div>
      </div>

      <div className="relative z-10 p-10 flex flex-col items-center gap-6 bg-gradient-to-t from-black via-black/90 to-transparent">
        
      
        <div className="flex flex-col items-center gap-2 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></span>
            </div>
            <span className="text-xs font-black uppercase tracking-[0.3em] text-white italic skew-x-[-10deg]">
              {isOpen ? (
                <>Kitchen Is <span className="text-yellow-400">Cooking Now</span></>
              ) : (
                <>Kitchen Is <span className="text-white/40 font-bold">Currently Closed</span></>
              )}
            </span>
          </div>

          {isOpen && (
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1 skew-x-[-12deg] flex items-center gap-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-white/60 skew-x-[12deg]">Est. Wait:</span>
              <span className="text-xs font-black uppercase text-yellow-400 skew-x-[12deg]">
                {(() => {
                  const hour = new Date(new Date().toLocaleString("en-US", { timeZone: "America/New_York" })).getHours();
                  return (hour >= 11 && hour <= 14) ? "10-15 MIN" : "READY FAST";
                })()}
              </span>
            </div>
          )}
        </div>

      
        <a href={`tel:${phoneNumber.replace(/-/g, '')}`} className="group flex items-center gap-3 text-white transition-all hover:scale-105">
          <div className="bg-yellow-400 p-3 rounded-full text-black group-hover:bg-white transition-colors shadow-lg">
            <Phone size={24} fill="currentColor" />
          </div>
          <span className="text-2xl md:text-4xl font-black tracking-tighter drop-shadow-md">{phoneNumber}</span>
        </a>

        <div className="w-full max-w-md bg-white/5 border-y border-white/10 py-4 flex flex-col items-center overflow-hidden">
          <div className="flex gap-6 mb-3 opacity-60">
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-black tracking-widest text-yellow-400 uppercase">Google</span>
              <span className="text-xs font-bold text-white">{reviewStats.google.rating}★ ({reviewStats.google.count})</span>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <div className="flex flex-col items-center">
              <span className="text-[10px] font-black tracking-widest text-yellow-400 uppercase">Yelp</span>
              <span className="text-xs font-bold text-white">{reviewStats.yelp.rating}★ ({reviewStats.yelp.count})</span>
            </div>
          </div>

          <div className="relative h-12 w-full flex items-center justify-center">
            {reviews.map((review, i) => (
              <div
                key={i}
                className={`absolute transition-all duration-700 flex flex-col items-center w-full px-4 ${
                  i === currentReview ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <p className="text-white font-black italic uppercase text-sm md:text-base tracking-tighter leading-none text-center">
                  "{review.text}"
                </p>
                <span className="text-yellow-400 text-[10px] font-bold mt-1 tracking-widest">— {review.author}</span>
              </div>
            ))}
          </div>
        </div>

       
        <div className="w-full max-w-md flex flex-col items-center gap-3">
          <a 
            href="https://yellow-bicycle-canteen.square.site"
            target="_blank" 
            rel="noopener noreferrer"
            className="w-full py-6 bg-yellow-400 text-black font-black uppercase tracking-[0.2em] text-xl hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(250,204,21,0.25)] text-center block"
          >
            Order Online
          </a>
          <div className="flex items-center gap-2 opacity-60">
            <div className="h-[1px] w-4 bg-yellow-400" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white">
              Skip The Line <span className="text-yellow-400 mx-1">|</span> Jefferson Staff & Students
            </span>
            <div className="h-[1px] w-4 bg-yellow-400" />
          </div>
        </div>

      </div>
    </main>
  );
}
