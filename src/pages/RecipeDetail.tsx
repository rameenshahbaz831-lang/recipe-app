import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterSection from '../components/NewsletterSection';
import RecipeCard from '../components/RecipeCard';

import RecipeHero from '../components/RecipeHero';
import RecipeIngredients from '../components/RecipeIngredients';
import RecipeDirections from '../components/RecipeDirections';
import RecipeSidebar from '../components/RecipeSidebar';

import { RECIPES_LIST } from '../data/recipes';

export default function RecipeDetail() {
  const { id } = useParams<{ id: string }>();

  // Find exact recipe matching the URL ID
  const recipe = RECIPES_LIST.find((item) => item.id === Number(id)) || RECIPES_LIST[0];

  const otherRecipes = RECIPES_LIST.filter((item) => item.id !== recipe.id);

  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 antialiased">
      <Navbar />

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <RecipeHero
          title={recipe.title}
          author={recipe.author}
          authorAvatar={recipe.authorAvatar}
          prepTime={recipe.prepTime}
          cookTime={recipe.cookTime}
          category={recipe.category}
          mainImage={recipe.mainImage}
          nutrition={recipe.nutrition}
        />

        <p className="my-10 text-sm leading-relaxed text-neutral-600 sm:text-base">
          {recipe.description}
        </p>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <div className="space-y-12 lg:col-span-8">
            <RecipeIngredients
              forMainCourse={recipe.ingredients.forMainCourse}
              forSauce={recipe.ingredients.forSauce}
            />
            <RecipeDirections steps={recipe.directions} />
          </div>

          <div className="lg:col-span-4">
            <RecipeSidebar recipes={otherRecipes} />
          </div>
        </div>

        <div className="mt-20">
          <NewsletterSection />
        </div>

        <section className="my-20 space-y-8">
          <h2 className="text-center text-2xl font-extrabold text-neutral-900 sm:text-3xl">
            You may like these recipes too
          </h2>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RECIPES_LIST.slice(0, 4).map((item) => (
              <RecipeCard
                key={item.id}
                id={item.id}
                title={item.title}
                category={item.category}
                time={item.time}
                image={item.mainImage}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}