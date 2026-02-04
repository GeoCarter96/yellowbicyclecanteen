'use client'
import React, { useState, useMemo, useEffect } from 'react';


interface MenuItemProps {
  name: string;
  price?: string;
  desc?: string;
  popular?: boolean;
}

interface MenuSectionProps {
  title: string;
  items?: MenuItemProps[];
  id: string;
}


const menuData: Record<string, MenuItemProps[]> = {
  sandwiches: [
    { name: "Green Egg", price: "$9", desc: "Kale, fried egg, hummus, herbed cream cheese, caramelized onions and peppers, za'atar, med shallots, bagel", popular: true },
    { name: "Buffalo Chickpea", price: "$9", desc: "Buffalo simmered chickpeas, herbed cream cheese, blue cheese, cabbage slaw, pickled red onion, fried shallot, caramelized onions and peppers on sage", popular: true },
    { name: "Roast Vegan (V)", price: "$9", desc: "Kale, sweet potatoes, balsamic mushrooms, herb sauce, hummus, caramelized onion and peppers on a bagel (V)", popular: true },
    { name: "Jones", price: "$10", desc: "Balsamic roasted mushrooms, sliced tomatoes, herb sauce, mozzarella, herbed cream cheese, marinara sauce, caramelized onions and peppers, focaccia bread", popular: true },
    { name: "Cheese Toast", price: "$9", desc: "Focaccia toast with tomato, red greens, mozzarella, blue cheese, American cheese and herbed cream" },
    { name: "Torta", price: "$10", desc: "Lentil cauliflower chorizo, smoky black beans, salsa, pickled red onion, hummus, herb sauce, American cheese, caramelized onions and peppers, focaccia bread" },
  ],
  burritos: [
    { name: "Sweet Potato", price: "$12", desc: "Sweet potatoes, smoky black beans, kale, fried eggs, caramelized onions and roasted peppers, salsa, chipotle mayo.", popular: true },
    { name: "Samosa Burrito (V)", price: "$12", desc: "Spicy lentil and cauliflower 'chorizo', potatoes, cabbage slaw, pickled red onion, hummus, salsa, herb sauce, curried chickpeas.", popular: true },
    { name: "Rio (V)", price: "$12", desc: "Smoky black beans, turmeric rice, kale, herb sauce, caramelized onions and peppers, salsa, fried shallots.", popular: true },
    { name: "Breakfast Burrito", price: "$12", desc: "Fried egg, cauliflower-quinoa breakfast 'sausage', potatoes, cheddar, caramelized onions and peppers, chipotle mayo, salsa." },
    { name: "Chilirrito", price: "$12", desc: "House made vegan chili, cheddar, turmeric potatoes, frito chips." },
    { name: "Blackened Kale Caesar (V)", price: "$12", desc: "Spicy blackened chickpeas, tomatoes, house made croutons, shredded kale and carrots with vegan Caesar dressing, hummus." },
    { name: "Deli Wrap", price: "$10", desc: "Choice of tuna salad or egg salad with spring greens, tomato,and pickled onion in a cold wrap." },
  ],
  breakfast: [
    { name: "Chorizo Egg & Cheese", price: "$7", desc: "Lentil cauliflower chorizo, fried egg, spicy chipotle mayo, American cheese, bagel.", popular: true },
    { name: "Y.B. Cheesy", price: "$7", desc: "American cheese, herbed cream cheese, 2 fried eggs, bagel." },
    { name: "Sausage Egg & Cheese", price: "$7", desc: "Cauliflower-mushroom-quinoa breakfast 'sausage' crumble, fried egg, American cheese, mayo, bagel." },
    { name: "Garden Quiche Sandwich", price: "$9", desc: "Egg tart with potato, celery and tomato, American cheese, chipotle mayo, caramelized onions and peppers, fried shallots, bagel." },
  ],
  deli: [
    { name: "Carrot Lox", price: "$9", desc: "Smoked carrot and dill cream cheese, pickled red onion, sliced tomatoes, and celery leaves on a toasted bagel.", popular: true },
    { name: "Hummus (V)", price: "$8", desc: "Hummus, sliced cucumbers and tomatoes, pickled red onions, herb sauce, za'atar. (V) - (Add feta cheese for no extra charge), bagel." },
    { name: "Tuna Melt", price: "$10", desc: "Tuna, onions, celery, Dijon mayo, tomato, American cheese, greens." },
  ],
  soups: [
    { name: "Chili (V)", price: "$6/$8", desc: "Hearty house-made chili with garbanzo, kidney and black beans, red quinoa, carrots, and onions", popular: true },
    { name: "Curry (V)", price: "$9", desc: "Tomato and chickpea coconut curry stew with roasted veggies and coconut turmeric rice (V)" },
  ],
  drinks: [
    { name: "Vietnamese Iced Coffee", price: "$5", desc: "Cold brew with sweetened condensed milk.", popular: true },
  ],
  bottles: [{ name: "Water" }, { name: "San Pellegrino" }, { name: "Coca Cola" }],
  breads: [{ name: "Focaccia" }, { name: "Sourdough" }, { name: "Whole Grain" }, { name: "Brioche" }, { name: "Gluten-Free" }, { name: "*Deluxe breads +$1.50" }],
  bagels: [{ name: "Plain" }, { name: "Everything" }, { name: "Sesame" },{ name: "Cinnamon-Raisin" }]
};


const MenuItem: React.FC<MenuItemProps> = ({ name, price, desc, popular }) => (
  <div className="flex justify-between items-start py-4 border-b border-zinc-800 last:border-b-0 animate-in fade-in slide-in-from-bottom-2 duration-300">
    <div className="flex flex-col">
      <div className="flex items-center gap-3">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        {popular && (
          <span className="bg-yellow-400 text-black text-[10px] font-black px-2 py-0.5 rounded uppercase">
            Most Popular
          </span>
        )}
      </div>
      {desc && <p className="text-zinc-400 text-sm mt-1 max-w-xl italic">{desc}</p>}
    </div>
    <div className="flex items-center gap-4 ml-4">
      {price && <span className="text-xl font-mono text-yellow-400">{price}</span>}
      <a 
        href="https://yellow-bicycle-canteen.square.site" 
        target="_blank" 
        className="bg-white hover:bg-yellow-400 text-black text-[10px] font-black px-3 py-2 rounded uppercase transition-colors"
      >
        Order
      </a>
    </div>
  </div>
);

const MenuSection: React.FC<MenuSectionProps> = ({ title, items, id }) => {
  if (!items || items.length === 0) return null;
  return (
    <section id={id} className="mb-16 scroll-mt-40">
      <h2 className="text-3xl font-black mb-6 pb-2 border-b-2 border-yellow-400 text-white uppercase tracking-wider">{title}</h2>
      <div className="grid gap-2">{items.map((item, i) => <MenuItem key={i} {...item} />)}</div>
    </section>
  );
};

export default function YellowBicycleMenu() {
  const [filter, setFilter] = useState<'all' | 'vegetarian'>('all');
  const [search, setSearch] = useState('');
  const [showButton, setShowButton] = useState(false);

  // Handle "Back to Top" visibility logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const filteredData = useMemo(() => {
    const result: Record<string, MenuItemProps[]> = {};
    Object.entries(menuData).forEach(([category, items]) => {
      const filtered = items.filter(item => {
        const matchesVeg = filter === 'all' || item.name.includes('(V)') || (item.desc?.includes('(V)'));
        const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase()) || 
                             item.desc?.toLowerCase().includes(search.toLowerCase());
        return matchesVeg && matchesSearch;
      });
      if (filtered.length > 0) result[category] = filtered;
    });
    return result;
  }, [filter, search]);

  return (
    <div className="relative bg-black min-h-screen text-zinc-100 font-sans pb-20">
      <header className="py-8 text-center bg-black-900 ">
        <div className="flex justify-center flex-wrap gap-x-8 gap-y-2 text-sm font-semibold text-yellow-400">
          <span>🌿 All food is vegetarian</span>
          <span>🥕 Vegan items as marked (V)</span>
          <span>✨ All items can be veganized by omitting dairy/egg</span>
        </div>
      </header>
      
      <nav className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-zinc-800 shadow-2xl">
        <div className="max-w-4xl mx-auto px-6 py-4 space-y-4">
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search items or ingredients (e.g. 'kale', 'chorizo')..." 
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg py-2 px-4 text-sm focus:outline-none focus:border-yellow-400 transition-all"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex gap-2">
              <button 
                onClick={() => setFilter('all')} 
                className={`px-3 py-1 text-[10px] font-black uppercase rounded-full ${filter === 'all' ? 'bg-yellow-400 text-black' : 'text-zinc-500 border border-zinc-800'}`}
              >
                All
              </button>
              <button 
                onClick={() => setFilter('vegetarian')} 
                className={`px-3 py-1 text-[10px] font-black uppercase rounded-full ${filter === 'vegetarian' ? 'bg-green-600 text-white' : 'text-zinc-500 border border-zinc-800'}`}
              >
                Veg (V)
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto pb-1 custom-scrolls">
              {Object.keys(filteredData).map(key => (
                <a key={key} href={`#${key}`} className="text-zinc-400 hover:text-yellow-400 text-[10px] font-black uppercase whitespace-nowrap">{key}</a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 mt-12">
        {Object.entries(filteredData).map(([cat, items]) => (
          <MenuSection key={cat} id={cat} title={cat} items={items} />
        ))}
        {Object.keys(filteredData).length === 0 && (
          <div className="text-center py-20 text-zinc-500">No matches found for "{search}".</div>
        )}
      </main>

    
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 cursor-pointer right-8 z-[60] bg-yellow-400 hover:bg-white text-black p-3 rounded-full shadow-2xl transition-all duration-300 transform active:scale-90 animate-in fade-in zoom-in"
          aria-label="Back to Top"
        >
          🔝
        </button>
      )}
    </div>
  );
}
