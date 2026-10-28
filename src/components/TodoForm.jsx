import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TodoForm({ todoToEdit, users, onSave, onCancel }) {
  const [userId, setUserId] = useState(1);
  const [title, setTitle] = useState('');
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    if (todoToEdit) {
      setUserId(todoToEdit.userId);
      setTitle(todoToEdit.title);
      setCompleted(todoToEdit.completed);
    }
  }, [todoToEdit]);

  function handleSubmit(e) {
    e.preventDefault();
    const payload = { userId: Number(userId), title, completed };

    if (todoToEdit) {
      axios.put(`https://jsonplaceholder.typicode.com/todos/${todoToEdit.id}`, payload).then((res) => {
        onSave({ ...todoToEdit, ...res.data });
      });
    } else {
      axios.post('https://jsonplaceholder.typicode.com/todos', payload).then((res) => {
        onSave(res.data);
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>{todoToEdit ? 'Modifier la tâche' : 'Ajouter une tâche'}</h3>
      <select style={styles.input} value={userId} onChange={(e) => setUserId(e.target.value)}>
        {users.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
      </select>
      <input style={styles.input} placeholder="Titre de la tâche" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <label>
        <input type="checkbox" checked={completed} onChange={(e) => setCompleted(e.target.checked)} /> Terminée
      </label>
      <div>
        <button type="button" onClick={onCancel} style={styles.btn}>Annuler</button>
        <button type="submit" style={styles.btnPrimary}>Enregistrer</button>
      </div>
    </form>
  );
}

const styles = {
  form: { backgroundColor: '#fff', padding: '20px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '450px' },
  input: { padding: '8px', border: '1px solid #ccc', borderRadius: '4px' },
  btn: { padding: '8px 12px', marginRight: '10px', cursor: 'pointer' },
  btnPrimary: { padding: '8px 12px', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default TodoForm;