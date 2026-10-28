import React from 'react';

function TodoItem({ todo, userName, onSelect, onEdit, onDelete }) {
  return (
    <tr>
      <td style={styles.td}>#{todo.id}</td>
      <td style={styles.td}>{todo.title}</td>
      <td style={styles.td}>{userName}</td>
      <td style={styles.td}>{todo.completed ? 'Terminée' : 'À faire'}</td>
      <td style={styles.td}>
        <button style={styles.btn} onClick={onSelect}>Détails</button>
        <button style={styles.btn} onClick={onEdit}>Modifier</button>
        <button style={styles.btn} onClick={onDelete}>Supprimer</button>
      </td>
    </tr>
  );
}

const styles = {
  td: { borderBottom: '1px solid #eee', padding: '10px' },
  btn: { marginRight: '5px', padding: '5px 10px', cursor: 'pointer' }
};

export default TodoItem;