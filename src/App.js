import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';
import 'bootstrap/dist/css/bootstrap.css';

// Créez un composant pour la page d'accueil
function Home() {
  return (
    <div>
      <RecipeList/>
    </div>
  );
}

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} /> {/* Spécifiez le composant Home pour la route racine */}
        <Route path="recipe/:recipeId" element={<RecipeDetail />} />
      </Routes>
  );
}

export default App;


