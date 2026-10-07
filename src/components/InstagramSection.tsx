import React from 'react';

interface FeedPost {
  id: number;
  imageUrl: string;
  caption: string;
}

const INSTA_FEED: FeedPost[] = [
  {
    id: 1,
    imageUrl:
      'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=400',
    caption: 'Fresh salad bowls for lunch!',
  },
  {
    id: 2,
    imageUrl:
      'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&q=80&w=400',
    caption: 'Homemade pizza night',
  },
  {
    id: 3,
    imageUrl:
      'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?auto=format&fit=crop&q=80&w=400',
    caption: 'Avocado toast mornings',
  },
  {
    id: 4,
    imageUrl:
      'https://images.unsplash.com/photo-1484723091739-30a097e8f929?auto=format&fit=crop&q=80&w=400',
    caption: 'Sweet French toast with berries',
  },
];

export default function InstagramSection() {
  return (
    <section className="my-20 rounded-[32px] bg-gradient-to-b from-cyan-50/40 via-blue-50/20 to-transparent px-4 py-12 text-center sm:px-8 lg:py-16">
      <div className="mx-auto max-w-lg space-y-3">
        <h2 className="text-2xl font-extrabold tracking-tight text-neutral-900 sm:text-3xl">
          Check out @foodieland on instagram
        </h2>
        <p className="text-xs text-neutral-500 sm:text-sm leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {INSTA_FEED.map((post) => (
          <article
            key={post.id}
            className="group relative overflow-hidden rounded-2xl bg-white p-2.5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <img
              src={post.imageUrl}
              alt={post.caption}
              className="h-64 w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </article>
        ))}
      </div>

      <div className="mt-10">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-7 py-3.5 text-xs font-bold text-white shadow-sm transition-all hover:bg-black active:scale-95"
        >
          <span>Visit Our Instagram</span>
          <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}