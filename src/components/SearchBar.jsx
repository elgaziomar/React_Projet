import React from 'react';

function SearchBar({ searchTerm, onSearchChange, placeholder }) {
  return (
    <input
      type="text"
      placeholder={placeholder}
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      style={styles.input}
    />
  );
}

const styles = {
  input: { padding: '8px', width: '280px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' }
};

export default SearchBar;