import { useState } from 'react';
import { Link } from 'react-router-dom';

export interface Recipe {
  id: string;
  title: string;
  image: string;
  time: string;
  category: string;
  isLiked?: boolean;
}

interface Props {
  recipe: Recipe;
}

export default function RecipeCard({ recipe }: Props) {
  const [liked, setLiked] = useState(recipe?.isLiked || false);

  if (!recipe) return null;

  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div className="group flex flex-col justify-between rounded-3xl bg-white p-4 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
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
              className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md active:scale-95"
            >
              <span
                className={`text-base ${
                  liked ? 'text-red-500' : 'text-gray-400'
                }`}
              >
                ♥
              </span>
            </button>
          </div>

          <h3 className="mb-3 text-base font-bold text-gray-900 line-clamp-2">
            {recipe.title}
          </h3>
        </div>

        <div className="flex items-center gap-4 text-xs font-medium text-gray-500">
          <div className="flex items-center gap-1">
            <span>⏱</span>
            <span>{recipe.time}</span>
          </div>

          <div className="flex items-center gap-1">
            <span>🍽</span>
            <span>{recipe.category}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

