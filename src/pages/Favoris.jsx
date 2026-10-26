
import { Link, useNavigate } from "react-router-dom";
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

function Favoris() {
  const { recettes, favoris, basculerFavori } = useRecipes();
  const navigate = useNavigate();
  const recettesFavorites = recettes.filter((r) => favoris.includes(r.id));

  return (
    <main style={{ padding: "20px" }}>
      <h1>Mes recettes favorites</h1>

      {recettesFavorites.length === 0 ? (
        <p>Aucune recette dans les favoris. Ajoute-en depuis la page <Link to="/recipes">Recipes</Link>.</p>
      ) : (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "12px" }}>
          {recettesFavorites.map((recette) => (
            <div key={recette.id} style={{ backgroundColor: "white", padding: "12px", border: "1px solid #ddd", borderRadius: "8px" }}>
              {recette.image && <img src={recette.image} alt={recette.nom} style={{ width: "100%", height: "120px", objectFit: "cover" }} />}
              <h3>{recette.nom}</h3>
              <p>Catégorie : {recette.categorie}</p>
              <button style={boutonStyle} onClick={() => navigate(`/detailsRecipe/${recette.id}`)}>Détails</button>
              <button style={boutonStyle} onClick={() => basculerFavori(recette.id)}>Retirer des favoris</button>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}

export default Favoris;
