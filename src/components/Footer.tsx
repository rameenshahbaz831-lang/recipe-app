import React from 'react';

const FOOTER_LINKS = [
  { label: 'Recipes', href: '/recipes' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/contact' },
  { label: 'About us', href: '/about' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white pt-12 pb-8 border-t border-neutral-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Top Footer Row */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-2">
            <a href="/" className="text-2xl font-bold font-serif italic text-neutral-900 tracking-tight">
              Foodieland<span className="text-red-500 font-sans not-italic">.</span>
            </a>
            <p className="text-xs text-neutral-500 max-w-xs leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
          </div>

          <nav className="flex flex-wrap gap-6 text-xs font-semibold text-neutral-700">
            {FOOTER_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="hover:text-neutral-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-neutral-100" />

        {/* Bottom Footer Row */}
        <div className="flex flex-col-reverse items-center justify-center gap-4 sm:flex-row text-xs text-neutral-400">
          <p>© {currentYear}Flowbase.Powered by {''}
              <span className="text-red-500">Webflow</span>
          </p>

          <div className="flex items-center space-x-2">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Facebook"
              className="p-2 text-neutral-600 hover:text-neutral-900 rounded-full hover:bg-neutral-50 transition-colors"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>

            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Twitter"
              className="p-2 text-neutral-600 hover:text-neutral-900 rounded-full hover:bg-neutral-50 transition-colors"
            >
              <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.936 9.936 0 0024 4.59z"/>
              </svg>
            </a>

            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2 text-neutral-600 hover:text-neutral-900 rounded-full hover:bg-neutral-50 transition-colors"
            >
              <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}