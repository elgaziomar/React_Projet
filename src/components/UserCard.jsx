import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserCard({ user, onBack }) {
  const [posts, setPosts] = useState([]);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`).then((res) => setPosts(res.data));
    axios.get(`https://jsonplaceholder.typicode.com/users/${user.id}/todos`).then((res) => setTodos(res.data));
  }, [user.id]);

  return (
    <div style={styles.card}>
      <button onClick={onBack} style={styles.btn}>Retour</button>
      <h2>{user.name} (@{user.username})</h2>
      <p><strong>ID:</strong> {user.id}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Téléphone:</strong> {user.phone}</p>
      <p><strong>Site web:</strong> {user.website}</p>
      <p><strong>Ville:</strong> {user.address?.city}</p>
      <p><strong>Entreprise:</strong> {user.company?.name}</p>

      <h3>Publications ({posts.length})</h3>
      <ul>
        {posts.map((p) => <li key={p.id}>{p.title}</li>)}
      </ul>

      <h3>Tâches ({todos.length})</h3>
      <ul>
        {todos.map((t) => (
          <li key={t.id}>{t.title} - <strong>{t.completed ? 'Terminée' : 'À faire'}</strong></li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  card: { backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' },
  btn: { padding: '6px 12px', marginBottom: '15px', cursor: 'pointer' }
};

export default UserCard;