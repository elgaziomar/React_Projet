import { useState } from "react";

function RecipeForm({ recette, onEnregistrer, onFermer, inputStyle, boutonStyle }) {
  const [nom, setNom] = useState(recette ? recette.nom : "");
  const [categorie, setCategorie] = useState(recette ? recette.categorie : "Entrée");
  const [ingredients, setIngredients] = useState(recette ? recette.ingredients : [""]);
  const [difficulte, setDifficulte] = useState(recette ? recette.difficulte : 1);
  const [description, setDescription] = useState(recette ? recette.description : "");
  const [image, setImage] = useState(recette ? recette.image : "");

  const formulaireStyle = {
    backgroundColor: "white",
    padding: "20px",
    border: "1px solid #aaa",
    borderRadius: "8px",
    maxWidth: "500px",
    margin: "20px 0"
  };
  const ligneStyle = { display: "block", margin: "10px 0" };

  function changerIngredient(index, valeur) {
    const nouvelleListe = [...ingredients];
    nouvelleListe[index] = valeur;
    setIngredients(nouvelleListe);
  }

  function ajouterIngredient() {
    setIngredients([...ingredients, ""]);
  }

  function supprimerIngredient(index) {
    const nouvelleListe = ingredients.filter((ingredient, i) => i !== index);
    setIngredients(nouvelleListe);
  }

  function envoyerFormulaire(e) {
    e.preventDefault();

    const nouvelleRecette = {
      id: recette ? recette.id : 0,
      nom: nom,
      categorie: categorie,
      ingredients: ingredients.filter((ingredient) => ingredient !== ""),
      difficulte: Number(difficulte),
      description: description,
      image: image
    };

    if (nom !== "") {
      onEnregistrer(nouvelleRecette);
    }
  }

  return (
    <div style={formulaireStyle}>
      <h2>{recette ? "Modifier une recette" : "Créer une recette"}</h2>

      <form onSubmit={envoyerFormulaire}>
        <label style={ligneStyle}>
          Nom :
          <input style={inputStyle} value={nom} onChange={(e) => setNom(e.target.value)} required />
        </label>

        <label style={ligneStyle}>
          Catégorie :
          <select style={inputStyle} value={categorie} onChange={(e) => setCategorie(e.target.value)}>
            <option>Entrée</option>
            <option>Plat</option>
            <option>Dessert</option>
            <option>Boisson</option>
          </select>
        </label>

        <p>Ingrédients :</p>
        {ingredients.map((ingredient, index) => (
          <div key={index} style={ligneStyle}>
            <input
              style={inputStyle}
              value={ingredient}
              onChange={(e) => changerIngredient(index, e.target.value)}
              placeholder="Un ingrédient"
            />
            <button type="button" style={boutonStyle} onClick={() => supprimerIngredient(index)}>
              Supprimer
            </button>
          </div>
        ))}
        <button type="button" style={boutonStyle} onClick={ajouterIngredient}>
          Ajouter un ingrédient
        </button>

        <label style={ligneStyle}>
          Difficulté (1 à 5) :
          <input
            style={inputStyle}
            type="number"
            min="1"
            max="5"
            value={difficulte}
            onChange={(e) => setDifficulte(e.target.value)}
          />
        </label>

        <label style={ligneStyle}>
          Description :
          <textarea style={inputStyle} value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>

        <label style={ligneStyle}>
          Image (URL) :
          <input style={inputStyle} value={image} onChange={(e) => setImage(e.target.value)} placeholder="https://..." />
        </label>

        <button style={boutonStyle} type="submit">Enregistrer</button>
        <button style={boutonStyle} type="button" onClick={onFermer}>Annuler</button>
      </form>
    </div>
  );
}

export default RecipeForm;
