import React, { useEffect, useState } from "react";
const recipes = [
  {
    category: "Hot Recipes",
    title: "Spicy delicious chicken wings",
    description:
      "Crispy and juicy chicken wings with a delicious spicy flavor. Perfect for sharing with family and friends.",
    time: "30 Minutes",
    type: "Chicken",
    author: "John Smith",
    date: "15 March 2026",
    image:
      "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&q=80&w=900",
    bg: "bg-[#E7F9FD]",
  },
  {
    category: "Healthy Recipes",
    title: "Fresh and healthy salad",
    description:
      "A fresh and colorful salad made with vegetables and simple ingredients for a healthy meal.",
    time: "15 Minutes",
    type: "Vegetables",
    author: "Emily Johnson",
    date: "18 March 2026",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=900",
    bg: "bg-[#FFF4E8]",
  },
  {
    category: "Popular Recipes",
    title: "Creamy garlic pasta",
    description:
      "Creamy pasta with garlic and herbs. Easy to prepare and perfect for a quick dinner.",
    time: "25 Minutes",
    type: "Pasta",
    author: "Sarah Wilson",
    date: "20 March 2026",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&q=80&w=900",
    bg: "bg-[#F8EEFF]",
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current) => {
        if (current === recipes.length - 1) {
          return 0;
        }

        return current + 1;
      });
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const previous =
    current === 0 ? recipes.length - 1 : current - 1;

  const next =
    current === recipes.length - 1 ? 0 : current + 1;

  const recipe = recipes[current];

  return (
    <section className="w-full overflow-hidden py-6">
      <div className="mx-auto flex max-w-7xl items-center gap-4 px-4">

        {/* Previous recipe */}
        <div className="hidden w-[18%] lg:block">
          <div
            className={`${recipes[previous].bg} h-[360px] overflow-hidden rounded-3xl p-5 opacity-70`}
          >
            <p className="text-xs font-bold">
              {recipes[previous].category}
            </p>

            <h2 className="mt-3 text-lg font-bold">
              {recipes[previous].title}
            </h2>

            <img
              src={recipes[previous].image}
              alt={recipes[previous].title}
              className="mt-5 h-[190px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>

        {/* Main recipe */}
        <div
          className={`w-full rounded-3xl p-6 sm:p-10 lg:w-[64%] ${recipe.bg}`}
        >
          <div className="grid items-center gap-8 md:grid-cols-2">

            <div>
              <div className="inline-block rounded-full bg-white px-4 py-2 text-xs font-bold">
                🔥 {recipe.category}
              </div>

              <h1 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
                {recipe.title}
              </h1>

              <p className="mt-4 text-sm leading-6 text-neutral-500">
                {recipe.description}
              </p>

              <div className="mt-5 flex flex-wrap gap-2 text-xs">
                <span className="rounded-full bg-black/5 px-4 py-2">
                  🕒 {recipe.time}
                </span>

                <span className="rounded-full bg-black/5 px-4 py-2">
                  🍴 {recipe.type}
                </span>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-black/5 pt-4">
                <div>
                  <p className="text-sm font-bold">
                    {recipe.author}
                  </p>

                  <p className="text-xs text-neutral-400">
                    {recipe.date}
                  </p>
                </div>

                <button className="rounded-2xl bg-black px-5 py-3 text-xs font-bold text-white">
                  View Recipe →
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute right-3 top-3 z-10 flex h-16 w-16 rotate-12 items-center justify-center rounded-full bg-black text-center text-[8px] font-bold uppercase text-white">
                Handmade
                <br />
                With Love
              </div>

              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-[280px] w-full rounded-2xl object-cover sm:h-[340px]"
              />
            </div>
          </div>

          {/* Slider dots */}
          <div className="mt-5 flex justify-center gap-2">
            {recipes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={
                  current === index
                    ? "h-2 w-6 rounded-full bg-black"
                    : "h-2 w-2 rounded-full bg-gray-400"
                }
              />
            ))}
          </div>
        </div>

        {/* Next recipe */}
        <div className="hidden w-[18%] lg:block">
          <div
            className={`${recipes[next].bg} h-[360px] overflow-hidden rounded-3xl p-5 opacity-70`}
          >
            <p className="text-xs font-bold">
              {recipes[next].category}
            </p>

            <h2 className="mt-3 text-lg font-bold">
              {recipes[next].title}
            </h2>

            <img
              src={recipes[next].image}
              alt={recipes[next].title}
              className="mt-5 h-[190px] w-full rounded-2xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}