function Aide({ styles }) {
  return (
    <div style={styles.aide}>
      <div style={styles.aideTop}>
        <h3 style={styles.aideTitle}>Aide rapide</h3>
        <span style={styles.badge}>v1.0</span>
      </div>
      <p>
        • Cliquez sur <strong>+ Créer une nouvelle recette</strong> pour ouvrir
        le formulaire.
      </p>
      <p>• Pagination numérotée en bas de la liste</p>
    </div>
  );
}

export default Aide;