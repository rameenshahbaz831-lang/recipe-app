import React from 'react';
import RecipeCard from './RecipeCard';

interface ExtraRecipe {
  id: number;
  title: string;
  time: string;
  category: string;
  image: string;
}

const MORE_RECIPES_DATA: ExtraRecipe[] = [
  {
    id: 101,
    title: 'Mixed Tropical Fruit Salad Bowl',
    time: '30 Minutes',
    category: 'Healthy',
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 102,
    title: 'Big and Juicy Wagyu Beef Steak',
    time: '30 Minutes',
    category: 'Meat',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 103,
    title: 'Healthy Japanese Ramen Soup',
    time: '30 Minutes',
    category: 'Healthy',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&q=80&w=600',
  },
  {
    id: 104,
    title: 'Healthy Chicken Fried Rice',
    time: '30 Minutes',
    category: 'Healthy',
    image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&q=80&w=600',
  },
];

export default function MoreRecipesSection() {
  return (
    <section className="my-20 space-y-10">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <h2 className="text-2xl font-extrabold text-neutral-900 sm:text-3xl max-w-md">
          Try this delicious recipe to make your day
        </h2>
        <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {MORE_RECIPES_DATA.map((recipe) => (
          <RecipeCard key={recipe.id} {...recipe} />
        ))}
      </div>
    </section>
  );
}