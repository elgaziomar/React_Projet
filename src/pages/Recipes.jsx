
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecipes } from "../RecipeContext";
import RecipeFilter from "../components/RecipeFilter";
import Pagination from "../components/Pagination";
import Aide from "../Aide";

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

const listeStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "12px"
};

function Recipes() {
  const { recettes, favoris, supprimerRecette, dupliquerRecette, basculerFavori } = useRecipes();
  const [recherche, setRecherche] = useState("");
  const [categorie, setCategorie] = useState("Toutes");
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const recettesFiltrees = recettes.filter((recette) =>
    recette.nom.toLowerCase().includes(recherche.toLowerCase()) &&
    (categorie === "Toutes" || recette.categorie === categorie)
  );

  const nombrePages = Math.max(1, Math.ceil(recettesFiltrees.length / 3));
  const recettesAffichees = recettesFiltrees.slice((page - 1) * 3, page * 3);

  function changerRecherche(valeur) {
    setRecherche(valeur);
    setPage(1);
  }

  function changerCategorie(valeur) {
    setCategorie(valeur);
    setPage(1);
  }

  return (
    <main style={{ padding: "20px", color: "#222" }}>
      <h1 style={{ color: "#1d4ed8" }}>Creative Recipe Builder</h1>

      <RecipeFilter
        recherche={recherche}
        categorie={categorie}
        onRecherche={changerRecherche}
        onCategorie={changerCategorie}
        inputStyle={inputStyle}
      />

      <button style={boutonStyle} onClick={() => navigate("/createRecipe")}>
        Créer une nouvelle recette
      </button>

      <div style={{ display: "flex", gap: "20px", alignItems: "flex-start", flexWrap: "wrap", marginTop: "20px" }}>
        <div style={{ flex: 1, minWidth: "260px" }}>
          {recettesAffichees.length === 0 ? (
            <p>Aucune recette trouvée.</p>
          ) : (
            <div style={listeStyle}>
              {recettesAffichees.map((recette) => (
                <div key={recette.id} style={{ backgroundColor: "white", padding: "12px", border: "1px solid #ddd", borderRadius: "8px" }}>
                  {recette.image && <img src={recette.image} alt={recette.nom} style={{ width: "100%", height: "120px", objectFit: "cover" }} />}
                  <h3>{recette.nom}</h3>
                  <p>Catégorie : {recette.categorie}</p>
                  <p>Difficulté : {recette.difficulte}/5</p>
                  <p>{recette.description}</p>
                  <button style={boutonStyle} onClick={() => navigate(`/detailsRecipe/${recette.id}`)}>Détails</button>
                  <button style={boutonStyle} onClick={() => navigate(`/updateRecipes/${recette.id}`)}>Modifier</button>
                  <button style={boutonStyle} onClick={() => basculerFavori(recette.id)}>
                    {favoris.includes(recette.id) ? "Retirer des favoris" : "Ajouter aux favoris"}
                  </button>
                  <button style={boutonStyle} onClick={() => dupliquerRecette(recette)}>Dupliquer</button>
                  <button style={{ ...boutonStyle, backgroundColor: "#dc2626" }} onClick={() => supprimerRecette(recette.id)}>Supprimer</button>
                </div>
              ))}
            </div>
          )}

          <Pagination
            page={page}
            nombrePages={nombrePages}
            onChangerPage={setPage}
            boutonStyle={boutonStyle}
          />
        </div>

        <Aide />
      </div>
    </main>
  );
}

export default Recipes;
