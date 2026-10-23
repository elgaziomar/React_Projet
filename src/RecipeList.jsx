import RecipeItem from "./RecipeItem";

function RecipeList({ recettes, onModifier, onDupliquer, onSupprimer, listeStyle, boutonStyle }) {
  if (recettes.length === 0) {
    return <p>Aucune recette trouvée.</p>;
  }

  return (
    <div style={listeStyle}>
      {recettes.map((recette) => (
        <RecipeItem
          key={recette.id}
          recette={recette}
          onModifier={onModifier}
          onDupliquer={onDupliquer}
          onSupprimer={onSupprimer}
          boutonStyle={boutonStyle}
        />
      ))}
    </div>
  );
}

export default RecipeList;
