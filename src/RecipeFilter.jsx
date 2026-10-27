function RecipeFilter({
  styles,
  search,
  category,
  onSearchChange,
  onCategoryChange,
}) {
  return (
    <div style={styles.filterBox}>
      <input
        style={styles.filterField}
        type="text"
        placeholder="Rechercher..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select
        style={styles.filterField}
        value={category}
        onChange={(e) => onCategoryChange(e.target.value)}
      >
        <option value="Toutes">Toutes catégories</option>
        <option value="Entrée">Entrée</option>
        <option value="Plat">Plat</option>
        <option value="Dessert">Dessert</option>
        <option value="Boisson">Boisson</option>
      </select>
    </div>
  );
}

export default RecipeFilter;