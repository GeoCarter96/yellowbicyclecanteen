

interface MenuSectionProps {
  title: string;
  items?: { name: string; price: string; desc?: string }[];
  children?: any; 
  id: string; 
}

interface MenuItemProps {
  name: string;
  price: string;
  desc?: string; 
}

const menuData = {
  sandwiches: [
    { name: "Green Egg", price: "$9", desc: "Kale, fried egg, hummus, herbed cream cheese, caramelized onions and peppers, za'atar, med shallots, bagel" },
    { name: "Buffalo Chickpea", price: "$9", desc: "Buffalo simmered chickpeas, herbed cream cheese, blue cheese, cabbage slaw, pickled red onion, fried shallot, caramelized onions and peppers on sage" },
    { name: "Cheese Toast", price: "$9", desc: "Focaccia toast with tomato, red greens, mozzarella, blue cheese, American cheese and herbed cream" },
    { name: "Roast Vegan (V)", price: "$9", desc: "Kale, sweet potatoes, balsamic mushrooms, herb sauce, hummus, caramelized onion and peppers on a bagel (V)" },
    { name: "Jones", price: "$10", desc: "Balsamic roasted mushrooms, sliced tomatoes, herb sauce, mozzarella, herbed cream cheese, marinara sauce, caramelized onions and peppers, focaccia bread" },
    { name: "Torta", price: "$10", desc: "Lentil cauliflower chorizo, smoky black beans, salsa, pickled red onion, hummus, herb sauce, American cheese, caramelized onions and peppers, focaccia bread" },
  ],
  burritos: [
    { name: "Rio (V)", price: "$12", desc: "Smoky black beans, turmeric rice, kale, herb sauce, caramelized onions and peppers, salsa, fried shallots." },
    { name: "Sweet Potato", price: "$12", desc: "Sweet potatoes, smoky black beans, kale, fried eggs, caramelized onions and roasted peppers, salsa, chipotle mayo." },
    { name: "Samosa Burrito (V)", price: "$12", desc: "Spicy lentil and cauliflower 'chorizo', potatoes, cabbage slaw, pickled red onion, hummus, salsa, herb sauce, curried chickpeas." },
    { name: "Chilirrito", price: "$12", desc: "House made vegan chili, cheddar, turmeric potatoes, frito chips." },
  ],
  bigKids: [
    { name: "Blue Honey", price: "$6", desc: "Fresh toasted brioche, almond honey, cinnamon-raisin bagel" },
    { name: "Sunny Jam Club (V)", price: "$7", desc: "Sunflower butter, sunflower seeds, raspberry jam, whole grain bread (V)" },
    { name: "The Breakfast Club", price: "$10", desc: "Maple french toast club sandwich w/ two fried eggs, cheddar" },
  ],
  sides: [
    { name: "Garden Hash (V)", price: "$9", desc: "Sweet potato, kale, smoky black beans, caramelized onions and roasted red peppers, fried shallots (V)" },
    { name: "Hummus (V)", price: "$9", desc: "Hummus served with toasted focaccia bread. Topped with caramelized onions, roasted red peppers and za'atar" },
    { name: "Breakfast Hash (V)", price: "$9", desc: "Cauliflower-mushroom-quinoa breakfast 'sausage', potatoes, salsa, caramelized onions and peppers" },
    { name: "Potato Salad", price: "$4.50", desc: "Classic dijon mayo potato salad with celery and onions" },
    { name: "Egg Salad", price: "$4.50", desc: "Classic dijon mayo egg salad with celery and onions" },
    { name: "Quinoa Tabbouleh (V)", price: "$3.50", desc: "Quinoa, tomato, red onion, and cucumber (V)" },
  ],
  soups: [
      { name: "Chili (V)", price: "$6/$8", desc: "Hearty house-made chili with garbanzo, kidney and black beans, red quinoa, carrots, and onions" },
      { name: "Curry (V)", price: "$9", desc: "Tomato and chickpea coconut curry stew with roasted veggies and coconut turmeric rice (V)" },
      { name: "Soup Specials", price: "$6/$8", desc: "Seasonal soup specials such as borscht, carrot sunbutter, and gazpacho." },
  ],
  sweets: [
    { name: "Corn Bread Muffin", price: "$3.00" },
    { name: "Pumpkin Spice Muffin", price: "$3.25" },
    { name: "Banana Maple Muffin (V)", price: "$3.25" },
    { name: "Bread Pudding", price: "$3.50" },
    { name: "Parfait", price: "$4.50", desc: "Yogurt, honey, chocolate chips" }
  ],
  drinks: [
    { name: "Hot Drip Coffee", price: "$2.50/3.00", desc: "Local roaster Vamo coffee beans." },
    { name: "Cold Brew Coffee", price: "$4", desc: "Espresso style coffee." },
    { name: "Vietnamese Iced Coffee", price: "$5", desc: "Cold brew with sweetened condensed milk." },
    { name: "Iced Black Tea", price: "$2.75" },
    { name: "Iced Sweet Hibiscus Tea", price: "$3.75" },
  ],
  bottles: [{ name: "Water"}, { name: "San Pellegrino"}, {name: "Coca Cola"}, {name: "Canada Dry"}, { name:"Sunkist"}],
  breads: [{ name: "Focaccia"}, { name: "Sourdough"}, { name: "Whole Grain"}, { name: "Brioche"}, { name: "Gluten-Free"}],
  bagels: [{ name: "Plain"}, { name: "Everything"}, { name: "Sesame"}, { name: "Cinnamon Raisin"}]
};

const MenuSection: React.FC<MenuSectionProps> = ({ title, items, children, id }) => (
  <section id={id} className="mb-12">
    <h2 className="text-3xl font-black mb-6 pb-2 border-b-2 border-yellow-400 text-white uppercase tracking-wider">{title}</h2>
    {items ? (
        items.map((item, index) => (
            <MenuItem key={index} {...item} />
        ))
    ) : (
      <div className="flex flex-wrap gap-2">
        {Array.isArray(children) 
          ? children.map((obj, i) => (
              <span key={i} className="text-gray-300 text-lg font-medium after:content-[','] last:after:content-[''] mr-1">
                {obj.name}
              </span>
            ))
          : children}
      </div>
    )}
  </section>
);

const MenuItem: React.FC<MenuItemProps> = ({ name, price, desc }) => (
  <div className="mb-4 pb-2 border-b border-gray-700">
    <div className="flex justify-between items-baseline font-bold text-lg text-white">
      <span>{name}</span>
      <span className="text-yellow-400">{price}</span>
    </div>
    {desc && <p className="text-gray-400 text-sm mt-1 leading-snug">{desc}</p>}
  </div>
);

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-yellow-400 selection:text-black">
      
      
     <div className="bg-yellow-400 text-black py-2 overflow-hidden border-b border-black">
  <div className="whitespace-nowrap animate-marquee flex gap-12 font-black uppercase tracking-wider text-sm">
    <span>🌿 All food is vegetarian</span>
    <span>🥕 Vegan items as marked (V)</span>
    <span>✨ All items can be veganized by omitting dairy/egg</span>
    {/* Duplicate for seamless loop */}
    <span>🌿 All food is vegetarian</span>
    <span>🥕 Vegan items as marked (V)</span>
    <span>✨ All items can be veganized by omitting dairy/egg</span>
  </div>
</div>

      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <MenuSection id="sandwiches" title="House Specialty Sandwiches" items={menuData.sandwiches} />
            <MenuSection id="burritos" title="Burritos" items={menuData.burritos} />
            <MenuSection id="kids" title="Big Kids" items={menuData.bigKids} />
            <MenuSection id="sweets" title="Sweets" items={menuData.sweets} />
          </div>
          <div>
            <MenuSection id="sides" title="Market Sides" items={menuData.sides} />
            <MenuSection id="soups" title="Soups & Stews" items={menuData.soups} />
            <MenuSection id="drinks" title="Drinks" items={menuData.drinks} />
            <MenuSection id="breads" title="Bread ">{menuData.breads}</MenuSection>
            <MenuSection id="bagels" title=" Bagels">{menuData.bagels}</MenuSection>
            <MenuSection id="bottles" title="Bottles">{menuData.bottles}</MenuSection>
          </div>
        </div>
      </div>
      
      

       <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black via-black/80 to-transparent">
        <a 
          href="https://yellow-bicycle-canteen.square.site/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full max-w-lg mx-auto py-4 bg-yellow-400 text-black font-black uppercase tracking-[0.2em] text-lg hover:bg-white transition-all duration-300 shadow-2xl rounded-lg text-center block transform hover:scale-105"
        >
          Order Online 
        </a>
      </div>
    </div>
  );
}
