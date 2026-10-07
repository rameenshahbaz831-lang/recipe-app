import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import RecipeDetail from './pages/RecipeDetail';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Step: :id dynamic parameter hona zaroori hai */}
        <Route path="/recipe/:id" element={<RecipeDetail />} />
      </Routes>
    </Router>
  );
}