import React from 'react';

interface RecipeHeroProps {
  title: string;
  author: string;
  authorAvatar: string;
  prepTime: string;
  cookTime: string;
  category: string;
  mainImage: string;
  nutrition: Record<string, string>;
}

export default function RecipeHero({
  title,
  author,
  authorAvatar,
  prepTime,
  cookTime,
  category,
  mainImage,
  nutrition,
}: RecipeHeroProps) {
  return (
    <section className="space-y-8">
      {/* Header Info & Action Icons */}
      <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl">
          {title}
        </h1>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E7F9FD] text-neutral-800 transition-colors hover:bg-cyan-100"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
            </svg>
          </button>

          <button
            type="button"
            className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E7F9FD] text-neutral-800 transition-colors hover:bg-cyan-100"
          >
            <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-4 11H9v-5h6v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H7v4h10V3z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Meta Specs Bar */}
      <div className="flex flex-wrap items-center gap-6 border-b border-neutral-100 pb-6 text-xs sm:text-sm">
        <div className="flex items-center gap-3">
          <img src={authorAvatar} alt={author} className="h-10 w-10 rounded-full object-cover" />
          <span className="font-bold text-neutral-900">{author}</span>
        </div>

        <div className="h-6 w-px bg-neutral-200" />

        <div className="flex items-center gap-2 text-neutral-600">
          <span>⏱ PREP TIME:</span>
          <span className="font-semibold text-neutral-900">{prepTime}</span>
        </div>

        <div className="h-6 w-px bg-neutral-200" />

        <div className="flex items-center gap-2 text-neutral-600">
          <span>🍳 COOK TIME:</span>
          <span className="font-semibold text-neutral-900">{cookTime}</span>
        </div>

        <div className="h-6 w-px bg-neutral-200" />

        <div className="flex items-center gap-2 text-neutral-600">
          <span>🍴 CATEGORY:</span>
          <span className="font-semibold text-neutral-900">{category}</span>
        </div>
      </div>

      {/* Banner & Nutrition Row */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <div className="relative h-[320px] sm:h-[450px] w-full overflow-hidden rounded-[30px]">
            <img src={mainImage} alt={title} className="h-full w-full object-cover" />
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-[30px] bg-[#E7F9FD] p-6 lg:col-span-4">
          <div>
            <h2 className="text-xl font-extrabold text-neutral-900">Nutrition Information</h2>
            <div className="mt-6 space-y-4">
              {Object.entries(nutrition).map(([key, val]) => (
                <div key={key} className="flex items-center justify-between border-b border-neutral-200/60 pb-3 text-sm">
                  <span className="capitalize text-neutral-500">{key}</span>
                  <span className="font-bold text-neutral-900">{val}</span>
                </div>
              ))}
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-neutral-400">
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </div>
    </section>
  );
}