import Navbar from '../components/Navbar';
import Hero from '../components/hero';
import CategorySection from '../components/Categories Section';
import RecipeSection from '../components/RecipeSection';
import ChefSection from '../components/ChefSection';
import InstagramSection from '../components/InstagramSection';
import MoreRecipesSection from '../components/MoreRecipesSection';
import RecipiesSection from '../components/RecipiesSection';
import NewsletterSection from '../components/NewsletterSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-neutral-900 antialiased">
      <Navbar />
      
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <CategorySection />
        <RecipeSection />
        <ChefSection />
        <InstagramSection />
        <MoreRecipesSection />
        <RecipiesSection/>
        <NewsletterSection />
      </main>

      <Footer />
    </div>
  );
}