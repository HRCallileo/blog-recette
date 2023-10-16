import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipeList from './components/RecipeList';
import RecipeDetail from './components/RecipeDetail';

function AppRouter() {
  return (
      <Router>
        <Routes>
          <Route path="/" exact component={RecipeList} />
          <Route path="recipe/:recipeId" component={RecipeDetail} />
        </Routes>
      </Router>
  );
}

export default AppRouter;