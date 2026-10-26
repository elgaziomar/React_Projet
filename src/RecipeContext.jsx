
import { createContext, useContext, useState } from "react";

const recettesDepart = [
  { id: 1, nom: "Tacos méditerranéens", categorie: "Plat", ingredients: ["Tortilla", "Poulet", "Tomate", "Feta"], difficulte: 4, description: "Tacos légers et parfumés.", image: "" },
  { id: 2, nom: "Smoothie mangue", categorie: "Boisson", ingredients: ["Mangue", "Lait", "Miel"], difficulte: 1, description: "Boisson fraîche et fruitée.", image: "" },
  { id: 3, nom: "Salade Caprese", categorie: "Entrée", ingredients: ["Tomate", "Mozzarella", "Basilic"], difficulte: 1, description: "Une entrée fraîche et rapide.", image: "" },
  { id: 4, nom: "Tiramisu", categorie: "Dessert", ingredients: ["Mascarpone", "Café", "Biscuits"], difficulte: 3, description: "Dessert italien au café.", image: "" },
  { id: 5, nom: "Pizza Margherita", categorie: "Plat", ingredients: ["Pâte", "Tomate", "Mozzarella"], difficulte: 3, description: "La pizza classique.", image: "" }
];

const RecipeContext = createContext(null);

export function RecipeProvider({ children }) {
  const [recettes, setRecettes] = useState(recettesDepart);
  const [favoris, setFavoris] = useState([]);

  function enregistrerRecette(nouvelleRecette) {
    const existe = recettes.some((r) => r.id === nouvelleRecette.id);

    if (existe) {
      setRecettes((liste) =>
        liste.map((r) => r.id === nouvelleRecette.id ? nouvelleRecette : r)
      );
    } else {
      setRecettes((liste) => [...liste, { ...nouvelleRecette, id: Date.now() }]);
    }
  }

  function supprimerRecette(id) {
    setRecettes((liste) => liste.filter((r) => r.id !== id));
    setFavoris((liste) => liste.filter((favoriId) => favoriId !== id));
  }

  function dupliquerRecette(recette) {
    setRecettes((liste) => [
      ...liste,
      { ...recette, id: Date.now(), nom: recette.nom + " (copie)" }
    ]);
  }

  function basculerFavori(id) {
    setFavoris((liste) =>
      liste.includes(id)
        ? liste.filter((favoriId) => favoriId !== id)
        : [...liste, id]
    );
  }

  return (
    <RecipeContext.Provider value={{ recettes, favoris, enregistrerRecette, supprimerRecette, dupliquerRecette, basculerFavori }}>
      {children}
    </RecipeContext.Provider>
  );
}

export function useRecipes() {
  return useContext(RecipeContext);
}
