import React from "react";

const recipes = [
  {
    title: "Mixed Tropical Fruit Salad",
    image:
      "https://images.unsplash.com/photo-1547496502-affa22d38842?auto=format&fit=crop&w=500&q=80",
    time: "15 Minutes",
    type: "Healthy",
  },
  {
    title: "Grilled Chicken with Herbs",
    image:
      "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=500&q=80",
    time: "30 Minutes",
    type: "Chicken",
  },
  {
    title: "Healthy Egg Breakfast",
    image:
      "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=500&q=80",
    time: "10 Minutes",
    type: "Breakfast",
  },
  {
    title: "Cheesy Beef Burger",
    image:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=500&q=80",
    time: "20 Minutes",
    type: "Burger",
  },
  {
    title: "Chicken Pasta",
    image:
      "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?auto=format&fit=crop&w=500&q=80",
    time: "25 Minutes",
    type: "Pasta",
  },
  {
    title: "Baked Chicken and Vegetables",
    image:
      "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=500&q=80",
    time: "35 Minutes",
    type: "Chicken",
  },
  {
    title: "Fresh Vegetable Salad",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=500&q=80",
    time: "15 Minutes",
    type: "Salad",
  },
  {
    title: "Creamy Chicken Salad",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=500&q=80",
    time: "20 Minutes",
    type: "Healthy",
  },
];

export default function RecipiesSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

      {/* Heading */}
      <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">

        <div>
          <h2 className="text-3xl font-bold text-neutral-900 sm:text-4xl">
            Try this delicious recipe
            <br />
            to make your day
          </h2>
        </div>

        <p className="max-w-md text-sm leading-6 text-neutral-500">
          Discover simple and delicious recipes that you can easily
          prepare at home. Choose your favorite recipe and enjoy a
          tasty meal with your family.
        </p>

      </div>

      {/* Recipe Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

        {recipes.map((recipe, index) => (
          <div key={index} className="group">

            {/* Image */}
            <div className="overflow-hidden rounded-2xl">
              <img
                src={recipe.image}
                alt={recipe.title}
                className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            {/* Title */}
            <h3 className="mt-3 text-sm font-bold leading-5 text-neutral-900">
              {recipe.title}
            </h3>

            {/* Info */}
            <div className="mt-2 flex items-center gap-3 text-[11px] text-neutral-500">
              <span>🕒 {recipe.time}</span>
              <span>🍴 {recipe.type}</span>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}