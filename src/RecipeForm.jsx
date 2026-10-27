import { useState } from "react";

function RecipeForm({ styles, recipeToEdit, onSave, onClose }) {
  const [nom, setNom] = useState(recipeToEdit ? recipeToEdit.nom : "");
  const [categorie, setCategorie] = useState(
    recipeToEdit ? recipeToEdit.categorie : "Plat"
  );
  const [ingredients, setIngredients] = useState(
    recipeToEdit ? recipeToEdit.ingredients : [""]
  );
  const [difficulte, setDifficulte] = useState(
    recipeToEdit ? recipeToEdit.difficulte : 2
  );
  const [description, setDescription] = useState(
    recipeToEdit ? recipeToEdit.description : ""
  );
  const [image, setImage] = useState(recipeToEdit ? recipeToEdit.image : "");

  function addIngredient() {
    setIngredients([...ingredients, ""]);
  }

  function removeIngredient(index) {
    setIngredients(ingredients.filter((ing, i) => i !== index));
  }

  function changeIngredient(index, value) {
    setIngredients(ingredients.map((ing, i) => (i === index ? value : ing)));
  }

  function handleImage(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setImage(reader.result);
    reader.readAsDataURL(file);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (nom.trim() === "") return;
    onSave({
      nom,
      categorie,
      ingredients: ingredients.filter((ing) => ing.trim() !== ""),
      difficulte: Number(difficulte),
      description,
      image,
    });
  }

  return (
    <div style={styles.overlay}>
      <form style={styles.modal} onSubmit={handleSubmit}>
        <div style={styles.modalHeader}>
          <h2 style={styles.modalTitle}>
            {recipeToEdit ? "Modifier la recette" : "Nouvelle recette"}
          </h2>
          <button type="button" style={styles.button} onClick={onClose}>
            Fermer
          </button>
        </div>

        <label>Nom</label>
        <input
          style={styles.field}
          type="text"
          placeholder="Ex: Pancakes maison"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
          required
        />

        <label>Catégorie</label>
        <select
          style={styles.field}
          value={categorie}
          onChange={(e) => setCategorie(e.target.value)}
        >
          <option>Entrée</option>
          <option>Plat</option>
          <option>Dessert</option>
          <option>Boisson</option>
        </select>

        <label>Ingrédients</label>
        {ingredients.map((ing, index) => (
          <div key={index} style={styles.row}>
            <input
              style={styles.field}
              type="text"
              placeholder={"Ingrédient " + (index + 1)}
              value={ing}
              onChange={(e) => changeIngredient(index, e.target.value)}
            />
            <button
              type="button"
              style={styles.button}
              onClick={() => removeIngredient(index)}
            >
              Suppr
            </button>
          </div>
        ))}
        <button type="button" style={styles.button} onClick={addIngredient}>
          + Ajouter ingrédient
        </button>

        <label>Difficulté: {difficulte}</label>
        <input
          type="range"
          min="1"
          max="5"
          value={difficulte}
          onChange={(e) => setDifficulte(e.target.value)}
        />

        <label>Description</label>
        <textarea
          style={styles.field}
          rows="4"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>

        <label>Image</label>
        <input type="file" accept="image/*" onChange={handleImage} />

        <div style={styles.bottomButtons}>
          <button type="submit" style={{ ...styles.primaryButton, ...styles.grow }}>
            Enregistrer
          </button>
          <button type="button" style={{ ...styles.button, ...styles.grow }} onClick={onClose}>
            Annuler
          </button>
        </div>
      </form>
    </div>
  );
}

export default RecipeForm;