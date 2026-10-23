import { useState } from "react";
import RecipeFilter from "./RecipeFilter";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";
import Pagination from "./Pagination";
import Aide from "./Aide";

const recettesDepart = [
  {
    id: 1,
    nom: "Tacos méditerranéens",
    categorie: "Plat",
    ingredients: ["Tortilla", "Poulet", "Tomate", "Feta"],
    difficulte: 4,
    description: "Tacos légers et parfumés.",
    image: ""
  },
  {
    id: 2,
    nom: "Smoothie mangue",
    categorie: "Boisson",
    ingredients: ["Mangue", "Lait", "Miel"],
    difficulte: 1,
    description: "Boisson fraîche et fruitée.",
    image: ""
  },
  {
    id: 3,
    nom: "Salade Caprese",
    categorie: "Entrée",
    ingredients: ["Tomate", "Mozzarella", "Basilic"],
    difficulte: 1,
    description: "Une entrée fraîche et rapide.",
    image: ""
  },
  {
    id: 4,
    nom: "Tiramisu",
    categorie: "Dessert",
    ingredients: ["Mascarpone", "Café", "Biscuits"],
    difficulte: 3,
    description: "Dessert italien au café.",
    image: ""
  },
  {
    id: 5,
    nom: "Pizza Margherita",
    categorie: "Plat",
    ingredients: ["Pâte", "Tomate", "Mozzarella"],
    difficulte: 3,
    description: "La pizza classique.",
    image: ""
  }
];

const pageStyle = {
  fontFamily: "Arial",
  backgroundColor: "#f3f4f6",
  minHeight: "100vh",
  padding: "20px",
  color: "#222"
};

const titreStyle = { color: "#1d4ed8" };

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

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "15px",
  boxSizing: "border-box",
  zIndex: 1000
};

const modalStyle = {
  backgroundColor: "white",
  width: "100%",
  maxWidth: "550px",
  maxHeight: "85vh",
  overflowY: "auto",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 5px 20px rgba(0,0,0,0.3)",
  boxSizing: "border-box"
};

function MainPage() {
  const [recettes, setRecettes] = useState(recettesDepart);
  const [recherche, setRecherche] = useState("");
  const [categorie, setCategorie] = useState("Toutes");
  const [page, setPage] = useState(1);
  const [formVisible, setFormVisible] = useState(false);
  const [recetteModifiee, setRecetteModifiee] = useState(null);

  const recettesFiltrees = recettes.filter((recette) => {
    const nomCorrect = recette.nom
      .toLowerCase()
      .includes(recherche.toLowerCase());

    const categorieCorrecte =
      categorie === "Toutes" || recette.categorie === categorie;

    return nomCorrect && categorieCorrecte;
  });

  const recettesParPage = 3;
  const nombrePages = Math.max(
    1,
    Math.ceil(recettesFiltrees.length / recettesParPage)
  );

  const debut = (page - 1) * recettesParPage;

  const recettesAffichees = recettesFiltrees.slice(
    debut,
    debut + recettesParPage
  );

  function ouvrirCreation() {
    setRecetteModifiee(null);
    setFormVisible(true);
  }

  function ouvrirModification(recette) {
    setRecetteModifiee(recette);
    setFormVisible(true);
  }

  function enregistrerRecette(nouvelleRecette) {
    if (recetteModifiee) {
      const nouvelleListe = recettes.map((recette) => {
        if (recette.id === recetteModifiee.id) {
          return { ...nouvelleRecette, id: recette.id };
        }

        return recette;
      });

      setRecettes(nouvelleListe);
    } else {
      const recetteAvecId = {
        ...nouvelleRecette,
        id: Date.now()
      };

      setRecettes([...recettes, recetteAvecId]);
    }

    setFormVisible(false);
    setRecetteModifiee(null);
  }

  function fermerFormulaire() {
    setFormVisible(false);
    setRecetteModifiee(null);
  }

  function supprimerRecette(id) {
    setRecettes(
      recettes.filter((recette) => recette.id !== id)
    );
  }

  function dupliquerRecette(recette) {
    const copie = {
      ...recette,
      id: Date.now(),
      nom: recette.nom + " (copie)"
    };

    setRecettes([...recettes, copie]);
  }

  function changerRecherche(valeur) {
    setRecherche(valeur);
    setPage(1);
  }

  function changerCategorie(valeur) {
    setCategorie(valeur);
    setPage(1);
  }

  return (
    <div style={pageStyle}>
      <h1 style={titreStyle}>Creative Recipe Builder</h1>

      <RecipeFilter
        recherche={recherche}
        categorie={categorie}
        onRecherche={changerRecherche}
        onCategorie={changerCategorie}
        inputStyle={inputStyle}
      />

      <button style={boutonStyle} onClick={ouvrirCreation}>
        Créer une nouvelle recette
      </button>

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "flex-start",
          flexWrap: "wrap",
          marginTop: "20px"
        }}
      >
        <div style={{ flex: "1", minWidth: "260px" }}>
          <RecipeList
            recettes={recettesAffichees}
            onModifier={ouvrirModification}
            onDupliquer={dupliquerRecette}
            onSupprimer={supprimerRecette}
            listeStyle={listeStyle}
            boutonStyle={boutonStyle}
          />

          <Pagination
            page={page}
            nombrePages={nombrePages}
            onChangerPage={setPage}
            boutonStyle={boutonStyle}
          />
        </div>

        <Aide />
      </div>

      {formVisible && (
        <div
          style={modalOverlayStyle}
          onClick={fermerFormulaire}
        >
          <div
            style={modalStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={fermerFormulaire}
              style={{
                ...boutonStyle,
                float: "right",
                backgroundColor: "#dc2626"
              }}
            >
              Fermer ✕
            </button>

            <h2>
              {recetteModifiee
                ? "Modifier la recette"
                : "Créer une recette"}
            </h2>

            <RecipeForm
              recette={recetteModifiee}
              onEnregistrer={enregistrerRecette}
              onFermer={fermerFormulaire}
              inputStyle={inputStyle}
              boutonStyle={boutonStyle}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;