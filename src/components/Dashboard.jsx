import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Dashboard() {
  const [stats, setStats] = useState({ users: 0, posts: 0, comments: 0, todos: 0 });

  useEffect(() => {
    Promise.all([
      axios.get('https://jsonplaceholder.typicode.com/users'),
      axios.get('https://jsonplaceholder.typicode.com/posts'),
      axios.get('https://jsonplaceholder.typicode.com/comments'),
      axios.get('https://jsonplaceholder.typicode.com/todos')
    ]).then(([u, p, c, t]) => {
      setStats({
        users: u.data.length,
        posts: p.data.length,
        comments: c.data.length,
        todos: t.data.length
      });
    });
  }, []);

  return (
    <div>
      <h2>Dashboard - Statistiques</h2>
      <div style={styles.grid}>
        <div style={styles.card}><h3>Utilisateurs</h3><p>{stats.users}</p></div>
        <div style={styles.card}><h3>Posts</h3><p>{stats.posts}</p></div>
        <div style={styles.card}><h3>Commentaires</h3><p>{stats.comments}</p></div>
        <div style={styles.card}><h3>Tâches</h3><p>{stats.todos}</p></div>
      </div>
    </div>
  );
}

const styles = {
  grid: { display: 'flex', gap: '20px', marginTop: '20px' },
  card: { backgroundColor: '#fff', padding: '20px', borderRadius: '8px', flex: 1, textAlign: 'center', border: '1px solid #ddd' }
};

export default Dashboard;