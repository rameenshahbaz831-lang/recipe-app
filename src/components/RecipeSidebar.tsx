import React from 'react';
import { Link } from 'react-router-dom';
import type { Recipe } from '../data/recipes';

interface SidebarProps {
  recipes: Recipe[];
}

export default function RecipeSidebar({ recipes }: SidebarProps) {
  return (
    <aside className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-xl font-extrabold text-neutral-900">Other Recipe</h2>

        <div className="space-y-4">
          {recipes.map((item) => (
            <Link
              key={item.id}
              to={`/recipe/${item.id}`}
              className="flex items-center gap-4 rounded-2xl p-2 transition-colors hover:bg-neutral-50"
            >
              <img
                src={item.mainImage}
                alt={item.title}
                className="h-20 w-20 rounded-2xl object-cover"
              />
              <div>
                <h4 className="text-xs font-bold text-neutral-900 line-clamp-2">{item.title}</h4>
                <p className="mt-1 text-[11px] text-neutral-400">By {item.author}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="relative overflow-hidden rounded-3xl bg-[#003829] p-6 text-center text-white">
        <h3 className="text-lg font-extrabold leading-snug">Don't forget to eat healthy food</h3>
        <div className="my-6 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=300"
            alt="Salad"
            className="h-32 w-32 rounded-full object-cover ring-4 ring-white/20"
          />
        </div>
        <p className="text-xs text-emerald-200">www.foodieland.com</p>
      </div>
    </aside>
  );
}