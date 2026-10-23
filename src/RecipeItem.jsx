function RecipeItem({ recette, onModifier, onDupliquer, onSupprimer, boutonStyle }) {
  const carteStyle = {
    backgroundColor: "white",
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "8px"
  };
  const imageStyle = { width: "100%", height: "120px", objectFit: "cover" };
  const petitBoutonStyle = { ...boutonStyle, fontSize: "12px", padding: "7px" };

  return (
    <div style={carteStyle}>
      {recette.image !== "" && <img src={recette.image} alt={recette.nom} style={imageStyle} />}
      <h3>{recette.nom}</h3>
      <p>Catégorie : {recette.categorie}</p>
      <p>Ingrédients :</p>
      <ul>
        {recette.ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
      <p>Difficulté : {recette.difficulte}/5</p>
      <p>{recette.description}</p>
      <button style={petitBoutonStyle} onClick={() => onModifier(recette)}>Modifier</button>
      <button style={petitBoutonStyle} onClick={() => onDupliquer(recette)}>Dupliquer</button>
      <button style={petitBoutonStyle} onClick={() => onSupprimer(recette.id)}>Supprimer</button>
    </div>
  );
}

export default RecipeItem;
