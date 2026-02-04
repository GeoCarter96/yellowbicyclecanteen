'use client'
import React from 'react';
import { ShieldCheck, Zap, Leaf, Utensils, ArrowRight, FileText } from 'lucide-react';

interface FeatureCardProps {
  number: string;
  title: string;
  icon: React.ReactNode;
  desc: string;
}
export default function Manifesto() {
  const businessName = "Yellow Bicycle Canteen";
  const shoutouts = [
    "Jefferson Residents",
    "Nursing Night Shifts",
    "Washington Sq Park Picnics",
    "Jefferson Med Students",
    "Bike Commuters",
    "Wash West Locals",
    "Center City Hustlers",
    "Jefferson Faculty"
  ];

  return (
    <main className="relative min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black overflow-x-hidden">
     
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-yellow-400/10 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
       
        <section className="text-center mb-32">
          
          
          <h1 className="text-6xl md:text-9xl font-black uppercase italic leading-[0.8] tracking-tighter mb-12 skew-x-[-10deg]">
            Real Food <br /> 
            <span className="text-yellow-400 drop-shadow-[6px_6px_0px_rgba(255,255,255,1)]">At Speed</span>
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-2xl md:text-4xl font-bold uppercase leading-tight tracking-tight mb-8">
              {businessName} exists to break the trade-off between <span className="text-yellow-400">speed</span> and <span className="text-yellow-400">substance</span>.
            </p>
            <p className="text-lg md:text-xl text-white/70 font-medium leading-relaxed italic">
              "We fuel Philadelphia with handmade, plant-forward comfort food—organic, wholesome, and delivered at the pace of the city. Real food, zero compromise, fast as hell."
            </p>
          </div>
        </section>

       
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-y border-white/10 py-24">
          <div>
            <div className="inline-block bg-yellow-400 text-black px-4 py-1 mb-6 text-xs font-black uppercase tracking-widest skew-x-[-12deg]">
              The Logic
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase italic leading-[0.85] tracking-tighter skew-x-[-10deg] mb-8">
              Clean Fuel <br />
              <span className="text-yellow-400">Pure Power</span>
            </h2>
            <p className="text-xl text-white/60 font-medium leading-relaxed max-w-lg mb-8">
              We aren't just making vegetarian food. We're engineering high-performance meals using 100% organic, earth-grown ingredients for the Philly hustle.
            </p>
            
            <div className="bg-white/5 p-6 border-l-4 border-yellow-400">
              <span className="text-[10px] font-black uppercase tracking-widest text-yellow-400">Signature Ingredient</span>
              <h3 className="text-2xl font-black italic uppercase mt-1">Cauliflower-Lentil Chorizo</h3>
              <p className="text-sm opacity-70 mt-2">Our house-made protein powerhouse. Spiced, smokey, and better than the original.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <FeatureCard 
              number="01" 
              title="Organic Only" 
              icon={<Leaf className="text-yellow-400" />} 
              desc="No pesticides. No fillers. Just soil-to-table nutrients." 
            />
            <FeatureCard 
              number="02" 
              title="Zero Slump" 
              icon={<Zap className="text-yellow-400" />} 
              desc="Sustained energy for the 3 PM grind without the crash." 
            />
            <FeatureCard 
              number="03" 
              title="Impactful" 
              icon={<ShieldCheck className="text-white" />} 
              desc="Reducing footprints through sustainable urban agriculture." 
            />
            <FeatureCard 
              number="04" 
              title="Flavor First" 
              icon={<Utensils className="text-white" />} 
              desc="Handmade comfort that never compromises on taste." 
            />
          </div>
        </section>

       
        <section className="relative bg-yellow-400 text-black skew-y-[-2deg] my-32 py-20 px-10 border-y-8 border-black">
          <div className="skew-y-[2deg] grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-5xl md:text-8xl font-black uppercase italic leading-none tracking-tighter mb-6">
                Fueling <br /> 
                <span className="bg-black text-yellow-400 px-4 py-1">Jefferson</span>
              </h2>
              <p className="text-xl md:text-3xl font-bold uppercase leading-tight max-w-2xl">
                Shift work doesn’t stop. We’re located just off the <span className="underline decoration-4">Jefferson Campus</span> at 930 Locust, serving real energy for the long hours.
              </p>
            </div>
            <div className="space-y-6">
              <div className="border-b-4 border-black pb-4">
                <h4 className="font-black uppercase tracking-widest text-xs mb-2 text-black/60">Location</h4>
                <p className="text-3xl font-black italic uppercase">930 Locust St</p>
                <span className="text-[10px] font-bold uppercase">Steps from Washington Square Park</span>
              </div>
              <div className="bg-black text-yellow-400 p-4 skew-x-[-12deg]">
                <p className="skew-x-[12deg] text-xs font-black uppercase tracking-widest leading-tight">
                  Always fast. Always organic.
                </p>
              </div>
            </div>
          </div>
        </section>

       
        <section className="relative bg-white text-black py-16 border-y-8 border-black overflow-hidden group mb-32 -mx-6 md:-mx-24">
          <div className="flex animate-marquee whitespace-nowrap gap-16 items-center">
            {[...shoutouts, ...shoutouts].map((text, i) => (
              <div key={i} className="flex items-center gap-6">
                 <span className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter">
                  {text}
                </span>
                <div className="w-10 h-10 bg-yellow-400 border-4 border-black rotate-45 flex-shrink-0" />
              </div>
            ))}
          </div>
          <div className="absolute top-0 left-0 bg-black text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em] z-20">
            Neighborhood Roll Call
          </div>
        </section>

        
        <section className="relative z-10 py-24 border-t border-white/10 mb-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-5">
              <div className="inline-block bg-yellow-400 text-black px-4 py-1 mb-6 text-xs font-black uppercase tracking-widest skew-x-[-12deg]">
                Large Scale Fuel
              </div>
              <h2 className="text-6xl md:text-7xl font-black text-white uppercase italic leading-[0.85] tracking-tighter skew-x-[-10deg] mb-8">
                Feeding <br />
                <span className="text-yellow-400">The Frontlines</span>
              </h2>
              <p className="text-xl text-white/70 font-medium leading-relaxed mb-8">
                From surgical rotations to creative agency sprints, we provide high-protein, plant-forward catering for the teams that keep Philadelphia running.
              </p>
              
              <div className="flex flex-col gap-6">
                <a 
                  href="/contact"
                  className="inline-flex items-center gap-4 text-yellow-400 font-black uppercase italic tracking-tighter text-2xl border-b-4 border-yellow-400 pb-2 hover:text-white hover:border-white transition-all w-fit"
                >
                  Inquire For Your Team <ArrowRight size={24} />
                </a>
                <a 
                  href="/menu1.png"
                  download='YBC-Menu1'
                  className="inline-flex items-center gap-2 text-white/40 hover:text-yellow-400 font-black uppercase tracking-widest text-xs transition-colors"
                >
                  <FileText size={16} /> Download Menu 1: Signature Burritos
                </a>
                 <a 
                  href="/menu2.png"
                  download='YBC-Menu2'
                  className="inline-flex items-center gap-2 text-white/40 hover:text-yellow-400 font-black uppercase tracking-widest text-xs transition-colors"
                >
                  <FileText size={16} /> Download Menu 2: Specialty Sandwiches
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-8 border border-white/10">
                <h3 className="text-white font-black uppercase italic text-2xl mb-4">Hospital Rounds</h3>
                <p className="text-xs text-white/50 font-bold uppercase leading-tight tracking-wider">
                  Individually labeled burritos and sandwiches for Jefferson Hospital  departments. Zero-mess, high-nutrient meals for busy medical professionals.
                </p>
              </div>

              <div className="bg-white/5 p-8 border border-white/10">
                <h3 className="text-white font-black uppercase italic text-2xl mb-4">Office Sprints</h3>
                <p className="text-xs text-white/50 font-bold uppercase leading-tight tracking-wider">
                  Wholesome platters of our signature Green Egg and Roast Vegan sandwiches. Brain fuel for the 9-to-5.
                </p>
              </div>

              <div className="bg-white/5 p-8 border border-white/10">
                <h3 className="text-white font-black uppercase italic text-2xl mb-4">Bulk Orders</h3>
                <p className="text-xs text-white/50 font-bold uppercase leading-tight tracking-wider">
                  Trays of Sweet Potato Burritos designed for easy distribution and maximum satisfaction.
                </p>
              </div>

              <div className="bg-white/5 p-8 border border-white/10 border-l-4 border-l-yellow-400">
                <h3 className="text-yellow-400 font-black uppercase italic text-2xl mb-4">Direct Delivery</h3>
                <p className="text-xs text-white/50 font-bold uppercase leading-tight tracking-wider">
                  We deliver directly to Jefferson Medical Campus and Center City offices. Freshly prepared on your schedule.
                </p>
              </div>
            </div>
          </div>
        </section>

       
        <section className="text-center">
          <a 
            href="https://yellow-bicycle-canteen.square.site" 
            target="_blank"
            className="group inline-flex items-center gap-6 bg-yellow-400 text-black px-12 py-8 font-black uppercase italic text-3xl md:text-5xl skew-x-[-12deg] hover:bg-white transition-all shadow-[8px_8px_0px_white] active:translate-x-2 active:translate-y-2 active:shadow-none"
          >
            Order The Future <ArrowRight size={48} className="group-hover:translate-x-4 transition-transform" />
          </a>
        </section>
      </div>

      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .group:hover .animate-marquee {
          animation-play-state: paused;
        }
      `}</style>
    </main>
  );
}

function FeatureCard({ number, title, icon, desc }: FeatureCardProps) {
  return (
    <div className="bg-white/5 p-8 border border-white/10 hover:border-yellow-400 transition-colors group">
      <div className="flex justify-between items-start mb-6">
        <span className="text-yellow-400 font-black italic text-xl">{number}.</span>
        <div className="opacity-40 group-hover:opacity-100 transition-opacity">{icon}</div>
      </div>
      <h3 className="text-white font-black uppercase tracking-tighter text-2xl mb-2 italic">{title}</h3>
      <p className="text-xs text-white/50 leading-tight uppercase font-bold tracking-wider">{desc}</p>
    </div>
  );
}
