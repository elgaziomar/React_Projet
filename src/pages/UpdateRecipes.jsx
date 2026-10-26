
import { useNavigate, useParams } from "react-router-dom";
import { useRecipes } from "../RecipeContext";
import RecipeForm from "../components/RecipeForm";

const inputStyle = {
  padding: "9px",
  margin: "4px",
  border: "1px solid #bbb",
  borderRadius: "5px"
};

const boutonStyle = {
  padding: "9px 12px",
  margin: "4px",
  border: "none",
  borderRadius: "5px",
  backgroundColor: "#2563eb",
  color: "white",
  cursor: "pointer"
};

function UpdateRecipes() {
  const { id } = useParams();
  const { recettes, enregistrerRecette } = useRecipes();
  const navigate = useNavigate();
  const recette = recettes.find((r) => r.id === Number(id));

  if (!recette) {
    return (
      <main style={{ padding: "20px" }}>
        <p>Recette introuvable.</p>
        <button style={boutonStyle} onClick={() => navigate("/recipes")}>Retour</button>
      </main>
    );
  }

  function enregistrer(nouvelleRecette) {
    enregistrerRecette({ ...nouvelleRecette, id: recette.id });
    navigate(`/detailsRecipe/${recette.id}`);
  }

  return (
    <main style={{ padding: "20px" }}>
      <RecipeForm
        key={recette.id}
        recette={recette}
        onEnregistrer={enregistrer}
        onFermer={() => navigate("/recipes")}
        inputStyle={inputStyle}
        boutonStyle={boutonStyle}
      />
    </main>
  );
}

export default UpdateRecipes;
