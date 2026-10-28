import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [users, setUsers] = useState([]);
  const [statusFilter, setStatusFilter] = useState('tous');
  const [selectedUserId, setSelectedUserId] = useState('');
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [editingTodo, setEditingTodo] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then((res) => setTodos(res.data));
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => setUsers(res.data));
  }, []);

  function getUserName(userId) {
    const u = users.find((user) => user.id === Number(userId));
    return u ? u.name : 'Inconnu';
  }

  function handleDelete(id) {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(() => {
      setTodos(todos.filter((t) => t.id !== id));
    });
  }

  function handleSave(savedTodo) {
    if (editingTodo) {
      setTodos(todos.map((t) => (t.id === savedTodo.id ? savedTodo : t)));
    } else {
      setTodos([{ ...savedTodo, id: todos.length + 1 }, ...todos]);
    }
    setShowForm(false);
    setEditingTodo(null);
  }

  if (selectedTodo) {
    return (
      <div style={styles.card}>
        <button style={styles.btn} onClick={() => setSelectedTodo(null)}>Retour</button>
        <h3>Détails de la tâche #{selectedTodo.id}</h3>
        <p><strong>Titre :</strong> {selectedTodo.title}</p>
        <p><strong>Responsable :</strong> {getUserName(selectedTodo.userId)}</p>
        <p><strong>État :</strong> {selectedTodo.completed ? 'Terminée' : 'À faire'}</p>
      </div>
    );
  }

  if (showForm) {
    return (
      <TodoForm
        todoToEdit={editingTodo}
        users={users}
        onSave={handleSave}
        onCancel={() => { setShowForm(false); setEditingTodo(null); }}
      />
    );
  }

  const filtered = todos.filter((t) => {
    const matchStatus =
      statusFilter === 'tous' ||
      (statusFilter === 'terminee' && t.completed) ||
      (statusFilter === 'afaire' && !t.completed);
    const matchUser = selectedUserId === '' || t.userId === Number(selectedUserId);
    return matchStatus && matchUser;
  });

  const total = filtered.length;
  const terminees = filtered.filter((t) => t.completed).length;
  const restantes = total - terminees;

  return (
    <div>
      <div style={styles.header}>
        <h2>Tâches</h2>
        <button style={styles.btnPrimary} onClick={() => setShowForm(true)}>+ Ajouter</button>
      </div>

      <p>
        <strong>Total :</strong> {total} | <strong>Terminées :</strong> {terminees} | <strong>Restantes :</strong> {restantes}
      </p>

      <div style={styles.filters}>
        <select style={styles.select} value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="tous">Toutes les tâches</option>
          <option value="terminee">Terminées</option>
          <option value="afaire">À faire</option>
        </select>

        <select style={styles.select} value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
          <option value="">Tous les utilisateurs</option>
          {users.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
        </select>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>TÂCHE</th>
            <th style={styles.th}>RESPONSABLE</th>
            <th style={styles.th}>ÉTAT</th>
            <th style={styles.th}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              userName={getUserName(todo.userId)}
              onSelect={() => setSelectedTodo(todo)}
              onEdit={() => { setEditingTodo(todo); setShowForm(true); }}
              onDelete={() => handleDelete(todo.id)}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  filters: { display: 'flex', gap: '10px', marginBottom: '15px' },
  select: { padding: '8px', border: '1px solid #ccc', borderRadius: '4px' },
  table: { width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' },
  th: { borderBottom: '2px solid #ddd', padding: '10px', textAlign: 'left' },
  card: { backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' },
  btn: { padding: '6px 12px', cursor: 'pointer' },
  btnPrimary: { padding: '8px 14px', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default TodoList;