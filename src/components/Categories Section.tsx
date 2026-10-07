import { useState } from 'react';

interface Category {
  id: string;
  name: string;
  icon: string;
  badgeBg: string;
}

const categories: Category[] = [
  { id: 'breakfast', name: 'Breakfast', icon: '🍙', badgeBg: 'bg-amber-100/50' },
  { id: 'vegan', name: 'Vegan', icon: '🥬', badgeBg: 'bg-emerald-100/50' },
  { id: 'meat', name: 'Meat', icon: '🥩', badgeBg: 'bg-rose-100/50' },
  { id: 'dessert', name: 'Dessert', icon: '🍰', badgeBg: 'bg-orange-100/50' },
  { id: 'lunch', name: 'Lunch', icon: '🥪', badgeBg: 'bg-yellow-100/50' },
  { id: 'chocolate', name: 'Chocolate', icon: '🍫', badgeBg: 'bg-amber-200/40' },
];

export default function CategoriesSection() {
  const [activeCategory, setActiveCategory] = useState('');

  return (
    <section className="py-10 max-w-7xl mx-auto px-4">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900">Categories</h2>
        <button className="px-5 py-2.5 bg-blue-50 text-blue-600 rounded-2xl font-semibold text-sm hover:bg-blue-100 transition-colors">
          View all categories
        </button>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;

          return (
            <div
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex flex-col items-center justify-between p-6 rounded-3xl cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${cat.badgeBg} ${
                isActive ? 'border-2 border-orange-400 shadow-sm' : 'border border-transparent'
              }`}
            >
              <span className="text-4xl mb-4">{cat.icon}</span>
              <span className="font-semibold text-gray-800 text-sm text-center">
                {cat.name}
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}