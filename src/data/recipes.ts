export interface Recipe {
  id: number;
  title: string;
  author: string;
  authorAvatar: string;
  prepTime: string;
  cookTime: string;
  time: string;
  category: string;
  mainImage: string;
  nutrition: Record<string, string>;
  description: string;
  ingredients: {
    forMainCourse: string[];
    forSauce: string[];
  };
  directions: {
    step: number;
    title: string;
    description: string;
  }[];
}

export const RECIPES_LIST: Recipe[] = [
  {
    id: 1,
    title: 'Big and Juicy Wagyu Beef Burger',
    author: 'John Smith',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    prepTime: '15 Min',
    cookTime: '15 Min',
    time: '30 Minutes',
    category: 'Snack',
    mainImage: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&q=80&w=1000',
    nutrition: {
      calories: '450 kcal',
      fat: '22.0 g',
      protein: '28.0 g',
      carbs: '35.0 g',
      cholesterol: '85.0 mg',
    },
    description: 'A mouthwatering Wagyu beef burger layered with melted cheddar, crisp lettuce, fresh tomatoes, and our special house sauce—all tucked inside a buttery brioche bun.',
    ingredients: {
      forMainCourse: ['200g Wagyu beef patty', '1 Soft brioche bun', '1 slice Aged cheddar cheese', 'Fresh lettuce & tomato slices'],
      forSauce: ['2 tbsp Mayonnaise', '1 tbsp Yellow mustard', '1 tsp Garlic powder'],
    },
    directions: [
      { step: 1, title: 'Grill the Patty', description: 'Sear the Wagyu patty on high heat for 3 to 4 minutes on each side until perfectly juicy with a nice crust.' },
      { step: 2, title: 'Assemble Your Burger', description: 'Lightly toast the brioche bun, spread the signature sauce, add fresh lettuce and tomatoes, then top with the warm cheesy patty.' },
    ],
  },
  {
    id: 2,
    title: 'Fresh Lime Roasted Salmon with Ginger Sauce',
    author: 'Sarah Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    prepTime: '10 Min',
    cookTime: '20 Min',
    time: '30 Minutes',
    category: 'Fish',
    mainImage: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&q=80&w=1000',
    nutrition: {
      calories: '380 kcal',
      fat: '18.0 g',
      protein: '34.0 g',
      carbs: '8.0 g',
      cholesterol: '70.0 mg',
    },
    description: 'Tender oven-roasted salmon fillets infused with fresh zesty lime juice and served with a warm, tangy ginger-soy reduction.',
    ingredients: {
      forMainCourse: ['2 Fresh salmon fillets', '1 Lime, thinly sliced', '1 tbsp Extra virgin olive oil'],
      forSauce: ['2 tbsp Low-sodium soy sauce', '1 tbsp Freshly grated ginger', '1 tsp Raw honey'],
    },
    directions: [
      { step: 1, title: 'Roast the Salmon', description: 'Arrange salmon fillets on a baking tray lined with lime slices. Drizzle olive oil and bake at 200°C for about 15 minutes.' },
      { step: 2, title: 'Drizzle the Sauce', description: 'Whisk the ginger, soy sauce, and honey in a small bowl, then generously drizzle over the warm salmon before serving.' },
    ],
  },
  {
    id: 3,
    title: 'Strawberry Oatmeal Pancake with Honey',
    author: 'Emily Davis',
    authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    prepTime: '10 Min',
    cookTime: '20 Min',
    time: '30 Minutes',
    category: 'Breakfast',
    mainImage: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&q=80&w=1000',
    nutrition: {
      calories: '290 kcal',
      fat: '6.0 g',
      protein: '12.0 g',
      carbs: '48.0 g',
      cholesterol: '30.0 mg',
    },
    description: 'Fluffy whole-grain oat pancakes loaded with juicy strawberries and finished off with a warm drizzle of pure organic honey.',
    ingredients: {
      forMainCourse: ['1 cup Rolled oats (blended)', '1 cup Fresh strawberries, sliced', '1 Whole egg', '1/2 cup Milk'],
      forSauce: ['2 tbsp Pure organic honey', '1/2 tsp Ground cinnamon'],
    },
    directions: [
      { step: 1, title: 'Prepare the Batter', description: 'Blend the oats, egg, milk, and cinnamon together until you get a smooth, pourable batter.' },
      { step: 2, title: 'Cook & Serve', description: 'Pour batter into a warm non-stick skillet. Cook until bubbles pop, flip carefully, and serve stacked high with fresh strawberries and honey.' },
    ],
  },
  {
    id: 4,
    title: 'Fresh and Healthy Mixed Mayonnaise Salad',
    author: 'Chef Alex',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    prepTime: '15 Min',
    cookTime: '0 Min',
    time: '30 Minutes',
    category: 'Healthy',
    mainImage: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=1000',
    nutrition: {
      calories: '210 kcal',
      fat: '14.0 g',
      protein: '5.0 g',
      carbs: '16.0 g',
      cholesterol: '15.0 mg',
    },
    description: 'A crunchy, refreshing mix of garden vegetables and sweet corn tossed gently in a smooth, seasoned mayonnaise dressing.',
    ingredients: {
      forMainCourse: ['2 cups Assorted crunchy veggies', '1/2 cup Sweet corn kernels', '1/2 cup Diced cucumbers'],
      forSauce: ['3 tbsp Light mayonnaise', '1 tbsp Fresh lemon juice', 'Pinch of black pepper & sea salt'],
    },
    directions: [
      { step: 1, title: 'Chop the Veggies', description: 'Dice all fresh garden vegetables into bite-sized pieces for a great crunch.' },
      { step: 2, title: 'Toss Together', description: 'In a large salad bowl, mix the mayonnaise, lemon juice, salt, and pepper, then gently fold in the vegetables.' },
    ],
  },
  {
    id: 5,
    title: 'Chicken Meatballs with Creamy Cheese',
    author: 'John Smith',
    authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    prepTime: '20 Min',
    cookTime: '20 Min',
    time: '30 Minutes',
    category: 'Meat',
    mainImage: 'https://images.unsplash.com/photo-1529042410759-befb1204b468?auto=format&fit=crop&q=80&w=1000',
    nutrition: {
      calories: '410 kcal',
      fat: '24.0 g',
      protein: '32.0 g',
      carbs: '12.0 g',
      cholesterol: '90.0 mg',
    },
    description: 'Juicy, seasoned chicken meatballs gently simmered in a rich garlic cream sauce packed with freshly grated parmesan.',
    ingredients: {
      forMainCourse: ['400g Lean ground chicken', '1/2 cup Breadcrumbs', '1 Egg'],
      forSauce: ['1 cup Heavy cream', '1/2 cup Freshly grated parmesan', '2 cloves Garlic, minced'],
    },
    directions: [
      { step: 1, title: 'Shape & Sear', description: 'Combine ground chicken, breadcrumbs, and egg. Roll into small meatballs and sear in a pan until golden.' },
      { step: 2, title: 'Simmer in Cream', description: 'Pour in heavy cream, garlic, and parmesan, letting the meatballs simmer until thick and fully cooked.' },
    ],
  },
  {
    id: 6,
    title: 'Fruity Pancake with Orange Jam & Syrup',
    author: 'Emily Davis',
    authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=200',
    prepTime: '10 Min',
    cookTime: '15 Min',
    time: '30 Minutes',
    category: 'Sweet',
    mainImage: 'https://images.unsplash.com/photo-1506084868230-bb9d95c24759?auto=format&fit=crop&q=80&w=1000',
    nutrition: {
      calories: '320 kcal',
      fat: '7.0 g',
      protein: '8.0 g',
      carbs: '56.0 g',
      cholesterol: '35.0 mg',
    },
    description: 'Golden-brown pancakes layered with tangy orange marmalade and warm maple syrup for a bright breakfast treat.',
    ingredients: {
      forMainCourse: ['1 cup All-purpose flour', '1 tsp Baking powder', '1 cup Whole milk'],
      forSauce: ['2 tbsp Citrus orange jam', '2 tbsp Pure maple syrup'],
    },
    directions: [
      { step: 1, title: 'Make Pancakes', description: 'Whisk the batter and cook on a lightly greased griddle until fluffy and golden on both sides.' },
      { step: 2, title: 'Layer & Serve', description: 'Stack the warm pancakes high, spread orange jam between layers, and finish with a warm drizzle of syrup.' },
    ],
  },
  {
    id: 7,
    title: 'The Best Easy Chicken Rice Bowl',
    author: 'Sarah Johnson',
    authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200',
    prepTime: '15 Min',
    cookTime: '15 Min',
    time: '30 Minutes',
    category: 'Healthy',
    mainImage: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&q=80&w=1000',
    nutrition: {
      calories: '430 kcal',
      fat: '12.0 g',
      protein: '36.0 g',
      carbs: '45.0 g',
      cholesterol: '75.0 mg',
    },
    description: 'Slightly sweet teriyaki chicken served over fluffy Jasmine rice alongside tender steamed broccoli florets.',
    ingredients: {
      forMainCourse: ['200g Chicken breast, sliced', '1 cup Steamed Jasmine rice', '1/2 cup Fresh broccoli florets'],
      forSauce: ['2 tbsp Teriyaki glaze', '1 tsp Toasted sesame oil'],
    },
    directions: [
      { step: 1, title: 'Cook the Chicken', description: 'Sauté sliced chicken breast in a skillet with teriyaki glaze until cooked through and nicely coated.' },
      { step: 2, title: 'Build the Bowl', description: 'Scoop warm Jasmine rice into a bowl, arrange the glazed chicken and steamed broccoli on top, and serve warm.' },
    ],
  },
  {
    id: 8,
    title: 'The Creamiest Creamy Pasta with Bacon',
    author: 'Chef Alex',
    authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200',
    prepTime: '10 Min',
    cookTime: '20 Min',
    time: '30 Minutes',
    category: 'Noodles',
    mainImage: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&q=80&w=1000',
    nutrition: {
      calories: '520 kcal',
      fat: '28.0 g',
      protein: '22.0 g',
      carbs: '46.0 g',
      cholesterol: '95.0 mg',
    },
    description: 'A comforting plate of fettuccine pasta coated in a rich parmesan garlic cream sauce, topped with crispy chopped bacon.',
    ingredients: {
      forMainCourse: ['200g Fettuccine pasta', '4 slices Crispy bacon, chopped', '1/2 cup Grated parmesan cheese'],
      forSauce: ['1 cup Heavy cream', '2 cloves Garlic, minced', 'Crushed black pepper'],
    },
    directions: [
      { step: 1, title: 'Boil the Pasta', description: 'Cook fettuccine in salted boiling water until al dente, reserving a splash of pasta water.' },
      { step: 2, title: 'Toss & Combine', description: 'Sauté minced garlic in a pan, pour in heavy cream and parmesan, then toss in the warm pasta and crispy bacon bits.' },
    ],
  },
];