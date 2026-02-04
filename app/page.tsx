
import { MapPin, Phone } from 'lucide-react';

export default function Home() {
  const phoneNumber = "215-515-3749";
  const address = "930 Locust St Philadelphia PA 19107";
const isOpen = (() => {
  const now = new Date();
  // Ensure we are checking Philadelphia time (Eastern Time)
  const phillyTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
  const day = phillyTime.getDay(); // 0 = Sunday, 1 = Monday, ..., 6 = Saturday
  const hour = phillyTime.getHours();

  if (day >= 1 && day <= 4) { // Monday - Thursday
    return hour >= 7 && hour < 20; // 7 AM - 8 PM
  } else { // Friday - Sunday
    return hour >= 9 && hour < 17; // 9 AM - 5 PM
  }
})();
  return (
    <main className="relative min-h-screen flex flex-col font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
      
     
      <div className="fixed inset-0 z-0">
        <img 
          src="/ybc1.jpg" 
          alt="Cafe Background" 
          className="w-full h-full object-cover opacity-60" 
        />
        <div className="absolute inset-0 bg-black/50" /> 
      </div>

    
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center text-center px-6 py-20">
        <div className="bg-yellow-400 text-black px-4 py-1 mb-6 text-xs font-black uppercase tracking-widest skew-x-[-12deg]">
          Washington Square West
        </div>
        
      <h1 className="text-7xl md:text-[8rem] font-black text-white uppercase italic leading-[0.85] tracking-[-0.05em] skew-x-[-10deg] drop-shadow-[6px_6px_0px_rgba(0,0,0,1)]">
  Real Food <br /> 
  <span className=" drop-shadow-[6px_6px_0px_rgba(255,255,255,0.1)]">
    Fast
  </span>
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
          <div className="flex items-center gap-2 hover:text-yellow-400 transition-colors cursor-default">
           
           <a 
  href={`https://www.google.com/search?q=930+Locust+St+Philadelphia+PA+19107&sca_esv=8105f2ae95d7365c&sxsrf=ANbL-n63ct1ofSdQJGrvoXTTtSc99AYHHQ%3A1770171840785&source=hp&ei=wK2CaYTxLdGe5NoPvomX6Qs&iflsig=AFdpzrgAAAAAaYK70CMbNkhYQN_vtNx65jWqtUqOD6hY&ved=0ahUKEwiE0Yn-476SAxVRD1kFHb7EJb0Q4dUDCCE&uact=5&oq=930+Locust+St+Philadelphia+PA+19107&gs_lp=Egdnd3Mtd2l6IiM5MzAgTG9jdXN0IFN0IFBoaWxhZGVscGhpYSBQQSAxOTEwNzICECYyCBAAGIAEGKIEMggQABiABBiiBDIIEAAYgAQYogQyBRAAGO8FMggQABiABBiiBEjhD1D5CFj5CHABeACQAQCYAU2gAU2qAQExuAEDyAEA-AEC-AEBmAICoAJXqAIKwgINECMY8AUYJxjqAhieBsICChAjGPAFGCcY6gLCAgcQIxgnGOoCwgINEC4YxwEYJxjqAhivAZgDB_EFiW42xwnoAWiSBwEyoAe5A7IHATG4B1DCBwUwLjEuMcgHB4AIAA&sclient=gws-wiz)}`}
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
      </div>

      <div className="relative z-10 p-10 flex flex-col items-center gap-6 bg-gradient-to-t from-black via-black/90 to-transparent">
        
       

        <a 
          href={`tel:${phoneNumber.replace(/-/g, '')}`} 
          className="group flex items-center gap-3 text-white transition-all hover:scale-105"
        >
          <div className="bg-yellow-400 p-3 rounded-full text-black group-hover:bg-white transition-colors shadow-lg">
            <Phone size={24} fill="currentColor" />
          </div>
          <span className="text-2xl md:text-4xl font-black tracking-tighter drop-shadow-md">{phoneNumber}</span>
        </a>

       <a 
  href="https://yellow-bicycle-canteen.square.site"
  target="_blank" 
  rel="noopener noreferrer"
  className="w-full max-w-md py-6 bg-yellow-400 text-black font-black uppercase tracking-[0.2em] text-xl hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(250,204,21,0.25)] text-center block"
>
  Order Online
</a>

      </div>
    </main>
  );
}
