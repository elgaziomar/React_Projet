
import { useNavigate } from "react-router-dom";
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

function CreateRecipe() {
  const { enregistrerRecette } = useRecipes();
  const navigate = useNavigate();

  function enregistrer(nouvelleRecette) {
    enregistrerRecette(nouvelleRecette);
    navigate("/recipes");
  }

  return (
    <main style={{ padding: "20px" }}>
      <RecipeForm
        recette={null}
        onEnregistrer={enregistrer}
        onFermer={() => navigate("/recipes")}
        inputStyle={inputStyle}
        boutonStyle={boutonStyle}
      />
    </main>
  );
}

export default CreateRecipe;
