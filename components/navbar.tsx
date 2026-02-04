import { Instagram } from 'lucide-react';

export default function Navbar() {
      const businessName = "Yellow Bicycle Canteen";
  return (
    <div>
    
      <nav className="sticky top-0 z-50 flex justify-between items-center p-6 bg-black backdrop-blur-xl border-b border-yellow-400/30">
       <h1 className="text-yellow-400 font-black text-3xl md:text-3xl tracking-[-0.08em] uppercase italic leading-none skew-x-[-6deg] drop-shadow-[4px_4px_0px_rgba(255,255,255,0.1)]">
  {businessName}
</h1>

        <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest text-white/90">
          <a href="/" className="hover:text-yellow-400 transition-colors">Home</a>
          <a href="/menu" className="hover:text-yellow-400 transition-colors">Menu</a>
          <a href="/photos" className="hover:text-yellow-400 transition-colors">Photos</a>
          <a href="https://www.grubhub.com/restaurant/yellow-bicycle-canteen-930-locust-st-philadelphia/2649272" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Grubhub</a>
          <a href="https://www.doordash.com/store/yellow-bicycle-canteen-philadelphia-23273361/12843896/" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400">Doordash</a>
          <a href="https://www.instagram.com/yellowbicyclecanteenphilly/?hl=en" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-400 flex items-center gap-1 transition-colors">
            <Instagram size={16} /> Instagram
          </a>
          <a href="/contact" className="hover:text-yellow-400">Contact</a>
        </div>
      </nav>
    </div>
  )
}
