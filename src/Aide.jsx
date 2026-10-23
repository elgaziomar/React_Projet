function Aide() {
  const aideStyle = {
    backgroundColor: "white",
    border: "1px solid #ddd",
    borderRadius: "8px",
    padding: "15px",
    width: "230px"
  };
  const titreStyle = { color: "#1d4ed8" };

  return (
    <div style={aideStyle}>
      <h3 style={titreStyle}>Aide</h3>
      <p>1. Utilisez la recherche pour trouver une recette.</p>
      <p>2. Cliquez sur créer pour ajouter une recette.</p>
      <p>3. Vous pouvez modifier, dupliquer ou supprimer une recette.</p>
      <p>4. Utilisez les boutons en bas pour changer de page.</p>
    </div>
  );
}

export default Aide;
