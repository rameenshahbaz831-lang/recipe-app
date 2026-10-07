import React, { useState } from 'react';

interface IngredientsProps {
  forMainCourse: string[];
  forSauce: string[];
}

export default function RecipeIngredients({ forMainCourse, forSauce }: IngredientsProps) {
  const [checkedState, setCheckedState] = useState<Record<string, boolean>>({});

  const handleToggle = (id: string) => {
    setCheckedState((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-extrabold text-neutral-900">Ingredients</h2>

      <div className="space-y-4">
        <h3 className="text-lg font-bold text-neutral-800">For main course</h3>
        <div className="space-y-3">
          {forMainCourse.map((item, idx) => {
            const key = `main-${idx}`;
            return (
              <label key={key} className="flex cursor-pointer items-center gap-3 text-sm text-neutral-700">
                <input
                  type="checkbox"
                  checked={!!checkedState[key]}
                  onChange={() => handleToggle(key)}
                  className="h-5 w-5 rounded-full border-neutral-300 text-black focus:ring-0"
                />
                <span className={checkedState[key] ? 'line-through text-neutral-400' : ''}>{item}</span>
              </label>
            );
          })}
        </div>
      </div>

      <div className="space-y-4 pt-4">
        <h3 className="text-lg font-bold text-neutral-800">For the sauce</h3>
        <div className="space-y-3">
          {forSauce.map((item, idx) => {
            const key = `sauce-${idx}`;
            return (
              <label key={key} className="flex cursor-pointer items-center gap-3 text-sm text-neutral-700">
                <input
                  type="checkbox"
                  checked={!!checkedState[key]}
                  onChange={() => handleToggle(key)}
                  className="h-5 w-5 rounded-full border-neutral-300 text-black focus:ring-0"
                />
                <span className={checkedState[key] ? 'line-through text-neutral-400' : ''}>{item}</span>
              </label>
            );
          })}
        </div>
      </div>
    </section>
  );
}