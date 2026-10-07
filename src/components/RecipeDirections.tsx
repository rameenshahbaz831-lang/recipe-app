import React from 'react';

interface DirectionStep {
  step: number;
  title: string;
  description: string;
  image?: string;
}

interface DirectionsProps {
  steps: DirectionStep[];
}

export default function RecipeDirections({ steps }: DirectionsProps) {
  return (
    <section className="space-y-8">
      <h2 className="text-2xl font-extrabold text-neutral-900">Directions</h2>

      <div className="space-y-8">
        {steps.map((item) => (
          <div key={item.step} className="space-y-4 border-b border-neutral-100 pb-8 last:border-none">
            <div className="flex items-center gap-4">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-xs font-bold text-white">
                {item.step}
              </span>
              <h3 className="text-lg font-bold text-neutral-900">{item.title}</h3>
            </div>

            <p className="text-sm leading-relaxed text-neutral-600">{item.description}</p>

            {item.image && (
              <div className="overflow-hidden rounded-2xl pt-2">
                <img src={item.image} alt={item.title} className="h-64 w-full object-cover sm:h-80" />
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}