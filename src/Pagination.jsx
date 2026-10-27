function Pagination({ styles, currentPage, totalPages, onPageChange }) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div style={styles.pagination}>
      {pages.map((page) => (
        <button
          key={page}
          style={
            page === currentPage ? styles.pageButtonActive : styles.pageButton
          }
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}

export default Pagination;