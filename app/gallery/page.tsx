'use client'
import { Instagram, ArrowRight, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

export default function Photos() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  
  const images = [
    { id: 0, url: "/ybc2.jpg"},
    { id: 1, url: "/ybc3.jpg"},
    { id: 2, url: "/ybc4.jpg"},
    { id: 3, url: "/ybc5.jpg" },
    { id: 4, url: "/ybc6.jpg" },
    { id: 5, url: "/ybc7.jpg"},
    { id: 6, url: "/ybc8.jpg"},
    { id: 7, url: "/ybc9.jpg" },
    { id: 8, url: "/ybc10.jpg" },
    { id: 9, url: "/ybc11.jpg"},
    { id: 10, url: "/ybc12.jpg"},
    { id: 11, url: "/ybc13.jpg"},
    { id: 12, url: "/ybc14.jpg"},
    { id: 13, url: "/ybc15.jpg"},
    { id: 14, url: "/ybc16.jpg"},
    { id: 15, url: "/ybc17.jpg"},
    { id: 16, url: "/ybc18.jpg"},
    { id: 17, url: "/ybc19.jpg"},
    { id: 18, url: "/ybc20.png"},
   
  ];

 
    const nextImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => {
    
      if (prev === null) return null;
     
      return (prev + 1) % images.length;
    });
  }, [images.length]);

  const prevImage = useCallback((e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedIndex((prev) => {
      
      if (prev === null) return null;
     
      return (prev - 1 + images.length) % images.length;
    });
  }, [images.length]);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIndex === null) return;
      if (e.key === 'Escape') setSelectedIndex(null);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, nextImage, prevImage]);



  return (
    <main className="relative min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      
     
      {selectedIndex !== null && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 cursor-zoom-out animate-in fade-in duration-300"
          onClick={() => setSelectedIndex(null)}
        >
          <button className="absolute top-8 right-8 text-yellow-400 hover:text-white transition-colors z-[110]">
            <X size={40} strokeWidth={3} />
          </button>

          <button 
            onClick={prevImage}
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-3 hover:bg-white transition-colors z-[110] skew-x-[-6deg]"
          >
            <ChevronLeft size={32} strokeWidth={3} />
          </button>
          
          <button 
            onClick={nextImage}
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-yellow-400 text-black p-3 hover:bg-white transition-colors z-[110] skew-x-[-6deg]"
          >
            <ChevronRight size={32} strokeWidth={3} />
          </button>
          
          <div className="relative max-w-5xl max-h-[80vh] cursor-default" onClick={(e) => e.stopPropagation()}>
            <img 
              src={images[selectedIndex].url} 
              alt='image'
              className="w-full h-full object-cover border-4 border-yellow-400 shadow-[0_0_60px_rgba(250,204,21,0.2)]"
            />
            <div className="absolute -bottom-16 left-0 right-0 text-center md:text-left">
              
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest mt-2">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          </div>
        </div>
      )}

     
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-20">
          <div className="inline-block bg-yellow-400 text-black px-4 py-1 mb-4 text-xs font-black uppercase tracking-widest skew-x-[-12deg]">
            Visual Inventory
          </div>
          <h1 className="text-7xl md:text-9xl font-black uppercase italic leading-[0.8] tracking-tighter skew-x-[-10deg]">
            The <br /> <span className="text-yellow-400">Feed</span>
          </h1>
        </div>

               
        <div className="gap-8 columns-2 md:columns-3 lg:columns-4">
          {images.map((img, index) => (
            <div 
              key={img.id}
              onClick={() => setSelectedIndex(index)}
             
              className="group relative border-2 border-white/10 hover:border-yellow-400 transition-all duration-500 overflow-hidden cursor-zoom-in mb-8 break-inside-avoid"
            >
             
              <img 
                src={img.url} 
                alt='image'
                
                className="object-cover  group-hover:scale-105 transition-all duration-700"
              />
              
             
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <ZoomIn className="absolute top-4 right-4 text-yellow-400" size={20} strokeWidth={3} />
                
              </div>
            </div>
          ))}

          
          <a 
            href="https://www.instagram.com/yellowbicyclecanteenphilly"
            target="_blank"
            className="group relative flex flex-col justify-center items-center bg-yellow-400 p-8 text-black aspect-square text-center transition-all hover:bg-white mb-8 break-inside-avoid"
          >
            <Instagram size={48} strokeWidth={2.5} className="mb-4" />
            <h2 className="text-1xl font-black uppercase italic leading-none mb-4 tracking-tighter">Follow <br /> For More</h2>
           <div className="hidden md:flex items-center gap-2 font-black uppercase tracking-widest text-xs border-b-2 border-black pb-1">
  @yellowbicyclecanteenphilly <ArrowRight size={14} />
</div>

          </a>
        </div>
</div>
    </main>
  );
}
