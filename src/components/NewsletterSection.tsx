import React, { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim()) {
      setIsSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="relative my-20 overflow-hidden rounded-[32px] bg-[#E7F9FD] px-6 py-12 sm:px-12 lg:py-20 text-center">
      <img
            src="vegetables.png.png"
            alt="Fresh vegetables"
            className="absolute left-0  left-0 bottom-0 w-40 sm:w-52 rotate-12 object-contain"
/>
           <img
            src="vege.png"
            alt="Fresh vegetables"
            className="absolute right-0 right-0  bottom-[-20] w-40 sm:w-52 -rotate-12 object-contain"
/>    
       <div className="mx-auto max-w-2xl space-y-4">
        <h2 className="text-3xl font-extrabold tracking-tight text-neutral-900 sm:text-4xl">
          Deliciousness to your inbox
        </h2>
        
        <p className="text-xs text-neutral-500 sm:text-sm leading-relaxed max-w-md mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {isSubmitted ? (
          <div className="mx-auto mt-6 max-w-md rounded-2xl bg-emerald-500/10 border border-emerald-500/20 p-4 text-xs font-bold text-emerald-800">
            🎉 Thank you for subscribing! Check your inbox soon.
          </div>
        ) : (
          <form 
            onSubmit={handleSubmit}
            className="mx-auto mt-8 flex max-w-md flex-col gap-3 rounded-2xl bg-white p-2 shadow-sm sm:flex-row sm:items-center"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address..."
              className="w-full flex-1 rounded-xl bg-transparent px-4 py-3 text-xs text-neutral-800 placeholder-neutral-400 outline-none focus:ring-0"
            />
            <button
              type="submit"
              className="rounded-xl bg-neutral-900 px-6 py-3.5 text-xs font-bold text-white transition-all hover:bg-black active:scale-95 sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        )}
      </div>
    </section>
  );
}