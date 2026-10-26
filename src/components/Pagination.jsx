function Pagination({ page, nombrePages, onChangerPage, boutonStyle }) {
  const paginationStyle = { marginTop: "16px" };

  return (
    <div style={paginationStyle}>
      <button
        style={boutonStyle}
        disabled={page === 1}
        onClick={() => onChangerPage(page - 1)}
      >
        Précédent
      </button>

      <span> Page {page} / {nombrePages} </span>

      <button
        style={boutonStyle}
        disabled={page === nombrePages}
        onClick={() => onChangerPage(page + 1)}
      >
        Suivant
      </button>
    </div>
  );
}

export default Pagination;
