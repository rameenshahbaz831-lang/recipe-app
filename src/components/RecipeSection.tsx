import { useState } from 'react';
import { Link } from 'react-router-dom';

interface Recipe {
  id: string;
  title: string;
  image: string;
  time: string;
  category: string;
  isLiked?: boolean;
}

const recipesData: Recipe[] = [
  {
    id: '1',
    title: 'Big and Juicy Wagyu Beef Burger',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500',
    time: '30 Minutes',
    category: 'Snack',
  },
  {
    id: '2',
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=500',
    time: '30 Minutes',
    category: 'Fish',
  },
  {
    id: '3',
    title: 'Strawberry Oatmeal Pancake with Honey',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=500',
    time: '30 Minutes',
    category: 'Breakfast',
  },
  {
    id: '4',
    title: 'Fresh and Healthy Mixed Mayonnaise Salad',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=500',
    time: '30 Minutes',
    category: 'Healthy',
  },
  {
    id: '5',
    title: 'Chicken Meatballs with Creamy Cheese',
    image: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500',
    time: '30 Minutes',
    category: 'Meat',
  },
  {
    id: '6',
    title: 'Fruity Pancake with Orange Jam & Syrup',
    image: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500',
    time: '30 Minutes',
    category: 'Sweet',
  },
  {
    id: '7',
    title: 'The Best Easy Chicken Rice Bowl',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500',
    time: '30 Minutes',
    category: 'Healthy',
  },
  {
    id: '8',
    title: 'The Creamiest Creamy Pasta with Bacon',
    image:
      'https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg?auto=compress&cs=tinysrgb&w=600',
    time: '30 Minutes',
    category: 'Noodles',
  },
];

function RecipeCard({ recipe }: { recipe: Recipe }) {
  const [liked, setLiked] = useState(recipe.isLiked || false);

  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div className="group flex flex-col justify-between rounded-3xl bg-gradient-to-b from-white to-blue-50/20 p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div>
          <div className="relative mb-4 h-48 w-full overflow-hidden rounded-2xl bg-gray-100">
            <img
              src={recipe.image}
              alt={recipe.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />

            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                setLiked(!liked);
              }}
              className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-md transition-transform active:scale-90"
            >
              <span
                className={`text-base ${
                  liked ? 'text-red-500' : 'text-gray-300'
                }`}
              >
                ♥
              </span>
            </button>
          </div>

          <h3 className="mb-4 text-base font-bold text-gray-900 line-clamp-2 leading-snug">
            {recipe.title}
          </h3>
        </div>

        <div className="flex items-center gap-6 text-xs font-medium text-gray-500">
          <div className="flex items-center gap-1.5">
            <span>⏱</span>
            <span>{recipe.time}</span>
          </div>

          <div className="flex items-center gap-1.5">
            <span>🍽</span>
            <span>{recipe.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function RecipesSection() {
  const firstBatch = recipesData.slice(0, 5);
  const secondBatch = recipesData.slice(5);

  return (
    <section className="mx-auto max-w-7xl px-4 py-12">
      <div className="mb-10 text-center">
        <h2 className="mb-3 text-4xl font-bold text-gray-900">
          Simple and tasty recipes
        </h2>

        <p className="mx-auto max-w-md text-sm text-gray-500">
          Discover easy, delicious, and healthy recipes for every meal.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {firstBatch.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}

        <div className="relative flex flex-col items-center justify-center overflow-hidden rounded-3xl bg-[#054a29] p-8 text-center text-white">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest opacity-80">
            Don't forget to eat
          </p>

          <h3 className="mb-6 font-serif text-2xl italic">
            healthy food
          </h3>

          <div className="mb-6 h-28 w-28 overflow-hidden rounded-full border-2 border-white/20 shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300"
              alt="Healthy food"
              className="h-full w-full object-cover"
            />
          </div>

          <span className="text-xs tracking-wider text-white/60">
            www.foodieland.com
          </span>
        </div>

        {secondBatch.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </section>
  );
}
