function RecipeFilter({ recherche, categorie, onRecherche, onCategorie, inputStyle }) {
  const filtreStyle = { margin: "12px 0" };

  return (
    <div style={filtreStyle}>
      <input
        style={inputStyle}
        placeholder="Rechercher par nom"
        value={recherche}
        onChange={(e) => onRecherche(e.target.value)}
      />

      <select
        style={inputStyle}
        value={categorie}
        onChange={(e) => onCategorie(e.target.value)}
      >
        <option>Toutes</option>
        <option>Entrée</option>
        <option>Plat</option>
        <option>Dessert</option>
        <option>Boisson</option>
      </select>
    </div>
  );
}

export default RecipeFilter;
