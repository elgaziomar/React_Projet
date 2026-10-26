
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom";
import Recipes from "./pages/Recipes";
import Favoris from "./pages/Favoris";
import CreateRecipe from "./pages/CreateRecipe";
import UpdateRecipes from "./pages/UpdateRecipes";
import DetailsRecipe from "./pages/DetailsRecipe";
import Search from "./pages/Search";
import { RecipeProvider } from "./RecipeContext";

function App() {
  return (
    <RecipeProvider>
      <BrowserRouter>
        <nav
          style={{
            display: "flex",
            gap: "15px",
            padding: "20px",
            flexWrap: "wrap"
          }}
        >
          <NavLink to="/recipes">Recipes</NavLink>
          <NavLink to="/favoris">Favoris</NavLink>
          <NavLink to="/createRecipe">Créer recette</NavLink>
          <NavLink to="/search">Search</NavLink>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/recipes" replace />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/favoris" element={<Favoris />} />
          <Route path="/createRecipe" element={<CreateRecipe />} />
          <Route path="/updateRecipes/:id" element={<UpdateRecipes />} />
          <Route path="/detailsRecipe/:id" element={<DetailsRecipe />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </RecipeProvider>
  );
}

export default App;
