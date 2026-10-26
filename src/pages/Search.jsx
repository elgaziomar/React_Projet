
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecipes } from "../RecipeContext";

const boutonStyle = {
  padding: "9px 12px",
  margin: "4px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#2563eb",
  color: "white",
  cursor: "pointer"
};

const inputStyle = {
  padding: "9px",
  margin: "4px",
  border: "1px solid #bbb",
  borderRadius: "5px"
};

function Search() {
  const { recettes } = useRecipes();
  const [recherche, setRecherche] = useState("");
  const navigate = useNavigate();

  const resultats = recettes.filter((recette) =>
    recette.nom.toLowerCase().includes(recherche.toLowerCase()) ||
    recette.categorie.toLowerCase().includes(recherche.toLowerCase()) ||
    recette.ingredients.some((ingredient) =>
      ingredient.toLowerCase().includes(recherche.toLowerCase())
    )
  );

  return (
    <main style={{ padding: "20px" }}>
      <h1>Rechercher une recette</h1>
      <input
        style={inputStyle}
        value={recherche}
        onChange={(e) => setRecherche(e.target.value)}
        placeholder="Nom, catégorie ou ingrédient"
      />

      {resultats.length === 0 ? (
        <p>Aucune recette trouvée.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px", marginTop: "16px" }}>
          {resultats.map((recette) => (
            <div key={recette.id} style={{ backgroundColor: "white", padding: "12px", border: "1px solid #ddd", borderRadius: "8px" }}>
              <h3>{recette.nom}</h3>
              <p>Catégorie : {recette.categorie}</p>
              <button style={boutonStyle} onClick={() => navigate(`/detailsRecipe/${recette.id}`)}>Voir détails</button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Search;
