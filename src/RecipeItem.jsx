function RecipeItem({ styles, recipe, onEdit, onDuplicate, onDelete }) {
  return (
    <div style={styles.card}>
      {recipe.image && (
        <img style={styles.image} src={recipe.image} alt={recipe.nom} />
      )}
      <div style={styles.cardBody}>
        <div style={styles.cardTop}>
          <h3 style={styles.cardTitle}>{recipe.nom}</h3>
          <span style={styles.badge}>{recipe.categorie}</span>
        </div>
        <p>{recipe.description}</p>
        <div style={styles.chips}>
          {recipe.ingredients.map((ing, index) => (
            <span key={index} style={styles.chip}>
              {ing}
            </span>
          ))}
        </div>
        <p>
          <strong>Difficulté:</strong> {"🔥".repeat(recipe.difficulte)}
        </p>
        <small>Créée: {new Date(recipe.createdAt).toLocaleString()}</small>
        <div style={styles.buttons}>
          <button style={styles.button} onClick={() => onEdit(recipe)}>
            Modifier
          </button>
          <button style={styles.blueButton} onClick={() => onDuplicate(recipe)}>
            Dupliquer
          </button>
          <button style={styles.redButton} onClick={() => onDelete(recipe.id)}>
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
}

export default RecipeItem;