

const CHEF_CONTENT = {
  heading: 'Everyone can be a chef in their own kitchen',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  ctaText: 'Learn More',
  chefImage:
    'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&q=80&w=700',
};

export default function ChefSection() {
  const { heading, description, ctaText, chefImage } = CHEF_CONTENT;

  return (
    <section className="my-20 grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
      {/* Text Info */}
      <div className="space-y-6 lg:col-span-6">
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl lg:text-5xl lg:leading-[1.15]">
          {heading}
        </h2>
        
        <p className="max-w-md text-xs leading-relaxed text-neutral-500 sm:text-sm">
          {description}
        </p>

        <button
          type="button"
          className="rounded-2xl bg-neutral-900 px-8 py-3.5 text-xs font-bold text-white shadow-md transition-all hover:bg-black active:scale-95"
        >
          {ctaText}
        </button>
      </div>

      {/* Image Illustration Container */}
      <div className="relative flex items-center justify-center lg:col-span-6">
        <div className="absolute -bottom-4 h-3/4 w-3/4 rounded-full bg-cyan-50/70 -z-10" />
        <img
          src={chefImage}
          alt="Chef in kitchen"
          className="h-80 w-auto rounded-3xl object-cover shadow-xl sm:h-[400px] transition-transform duration-300 hover:scale-[1.01]"
        />
      </div>
    </section>
  );
}