
import { Link, useNavigate, useParams } from "react-router-dom";
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

function DetailsRecipe() {
  const { id } = useParams();
  const { recettes, favoris, basculerFavori, supprimerRecette } = useRecipes();
  const navigate = useNavigate();
  const recette = recettes.find((r) => r.id === Number(id));

  if (!recette) {
    return (
      <main style={{ padding: "20px" }}>
        <p>Recette introuvable.</p>
        <button style={boutonStyle} onClick={() => navigate("/recipes")}>Retour aux recettes</button>
      </main>
    );
  }

  return (
    <main style={{ padding: "20px" }}>
      <h1>{recette.nom}</h1>
      {recette.image && <img src={recette.image} alt={recette.nom} style={{ width: "100%", maxWidth: "500px", maxHeight: "300px", objectFit: "cover" }} />}
      <p>Catégorie : {recette.categorie}</p>
      <p>Difficulté : {recette.difficulte}/5</p>
      <h3>Ingrédients</h3>
      <ul>
        {recette.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <h3>Description</h3>
      <p>{recette.description || "Aucune description."}</p>

      <button style={boutonStyle} onClick={() => navigate(`/updateRecipes/${recette.id}`)}>Modifier</button>
      <button style={boutonStyle} onClick={() => basculerFavori(recette.id)}>
        {favoris.includes(recette.id) ? "Retirer des favoris" : "Ajouter aux favoris"}
      </button>
      <button
        style={{ ...boutonStyle, backgroundColor: "#dc2626" }}
        onClick={() => {
          supprimerRecette(recette.id);
          navigate("/recipes");
        }}
      >
        Supprimer
      </button>
      <p><Link to="/recipes">Retour aux recettes</Link></p>
    </main>
  );
}

export default DetailsRecipe;
