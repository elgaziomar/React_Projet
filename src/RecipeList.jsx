import RecipeItem from './RecipeItem';

function RecipeList({ styles, recipes, onEdit, onDuplicate, onDelete }) {
  return (
    <div style={styles.grid}>
      {recipes.map((recipe) => (
        <RecipeItem
          key={recipe.id}
          styles={styles}
          recipe={recipe}
          onEdit={onEdit}
          onDuplicate={onDuplicate}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}

export default RecipeList;