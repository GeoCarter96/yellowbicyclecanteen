'use client'
import { Phone, Instagram, Send, ChevronDown, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General', message: '' });
  const [submitted, setSubmitted] = useState(false);
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  setSubmitted(true);
};

  const phoneNumber = "215-515-3749";
  const address = "930 Locust St Philadelphia PA 19107";
  
  const isOpen = (() => {
    const now = new Date();
    const phillyTime = new Date(now.toLocaleString("en-US", { timeZone: "America/New_York" }));
    const day = phillyTime.getDay();
    const hour = phillyTime.getHours();
    if (day >= 1 && day <= 4) return hour >= 7 && hour < 20;
    return hour >= 9 && hour < 17;
  })();

  return (
    <main className="relative min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black">
      <div className="fixed inset-0 z-0">
        <img src="/ybc1.jpg" alt="Cafe" className="w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-20">
          <div className="inline-block bg-yellow-400 text-black px-4 py-1 mb-4 text-xs font-black uppercase tracking-widest skew-x-[-12deg]">
            Don't Be A Stranger
          </div>
          <h1 className="text-7xl md:text-9xl font-black uppercase italic leading-[0.8] tracking-tighter skew-x-[-10deg]">
            Hit <br /> <span className="text-yellow-400">Us Up</span>
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
     
          <div className="lg:col-span-4 space-y-8">
            <div className="bg-white/5 border-l-4 border-yellow-400 p-8 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className={`h-3 w-3 rounded-full ${isOpen ? 'bg-green-500 animate-pulse' : 'bg-red-500'}`} />
                <span className="font-black uppercase tracking-tighter">{isOpen ? "Cooking Right Now" : "Kitchen's Resting"}</span>
              </div>
              <p className="text-sm opacity-70 leading-relaxed uppercase font-bold tracking-widest">
                Mon-Fri: 7am-8pm<br />
                Sat-Sun: 9am-5pm
              </p>
            </div>

            <div className="space-y-6">
              <a href={`tel:${phoneNumber.replace(/-/g, '')}`} className="group flex items-center gap-5 transition-all duration-300">
                <div className="relative flex items-center justify-center w-12 h-12 rounded-full border border-white/20 group-hover:border-yellow-400 group-hover:bg-yellow-400 transition-all duration-500">
                  <Phone size={18} className="text-white group-hover:text-black transition-colors duration-300" strokeWidth={2.5} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-yellow-400 transition-colors">Direct Line</span>
                  <span className="text-2xl font-black tracking-tighter text-white uppercase italic">{phoneNumber}</span>
                </div>
              </a>

              <a href="https://www.instagram.com/yellowbicyclecanteenphilly" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-5 transition-all duration-300">
                <div className="relative flex items-center justify-center w-12 h-12 flex-shrink-0 aspect-square rounded-full border border-white/20 group-hover:border-yellow-400 group-hover:bg-yellow-400 transition-all duration-500">
                  <Instagram 
                    size={18} 
                    className="text-white group-hover:text-black transition-colors duration-300" 
                    strokeWidth={2.5} 
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 group-hover:text-yellow-400 transition-colors">Social</span>
                  <span className="text-xl font-black tracking-tighter text-white uppercase italic">@yellowbicyclecanteenphilly</span>
                </div>
              </a>
            </div>
          </div>

          <div className="lg:col-span-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-md">
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400">Your Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="HUNGRY HUMAN" 
                    className="bg-transparent border-b-2 border-white/20 py-3 focus:outline-none focus:border-yellow-400 transition-colors font-bold uppercase placeholder:opacity-20"
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="EMAIL@DOMAIN.COM" 
                    className="bg-transparent border-b-2 border-white/20 py-3 focus:outline-none focus:border-yellow-400 transition-colors font-bold uppercase placeholder:opacity-20"
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400">What's Up?</label>
                  <div className="relative group/select">
                    <select 
                      className="w-full bg-transparent border-b-2 border-white/20 py-3 focus:outline-none focus:border-yellow-400 transition-colors font-bold uppercase appearance-none cursor-pointer pr-10"
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    >
                      <option className="bg-black">General Inquiry</option>
                      <option className="bg-black">Catering Request</option>
                      <option className="bg-black">Feedback / Love</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/40 group-hover/select:text-yellow-400 transition-colors">
                      <ChevronDown size={18} strokeWidth={3} />
                    </div>
                  </div>
                </div>

                <div className="md:col-span-2 flex flex-col gap-2">
                  <label className="text-[10px] font-black uppercase tracking-[0.2em] text-yellow-400">Message</label>
                  <textarea 
                    required
                    rows={4}
                    placeholder="TELL US EVERYTHING..." 
                    className="bg-transparent border-b-2 border-white/20 py-3 focus:outline-none focus:border-yellow-400 transition-colors font-bold uppercase placeholder:opacity-20 resize-none"
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </div>

                <button type="submit" className="md:col-span-2 mt-4 bg-yellow-400 hover:bg-white text-black py-6 font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 transition-all active:scale-[0.98]">
                  Send Message <Send size={20} />
                </button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center text-center bg-white/5 p-12 md:p-24 border border-yellow-400/30 backdrop-blur-md">
                <div className="bg-yellow-400 p-4 rounded-full mb-8">
                  <CheckCircle2 size={48} className="text-black" />
                </div>
                <h2 className="text-5xl font-black uppercase italic tracking-tighter skew-x-[-10deg] mb-4">
                  Message <span className="text-yellow-400">Received!</span>
                </h2>
                <p className="max-w-md text-sm font-bold uppercase tracking-widest opacity-70">
                  WE'RE PROBABLY CHOPPING KALE RIGHT NOW, BUT WE'LL GET BACK TO YOU SOON. STAY HUNGRY.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-10 text-[10px] font-black uppercase tracking-[0.3em] border-b-2 border-yellow-400 pb-1 hover:text-yellow-400 transition-colors"
                >
                  Send another one
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
