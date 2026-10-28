import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div style={styles.sidebar}>
      <h3 style={styles.title}>JSONPlaceholder</h3>
      <nav style={styles.nav}>
        <Link to="/" style={styles.link}>Dashboard</Link>
        <Link to="/users" style={styles.link}>Utilisateurs</Link>
        <Link to="/posts" style={styles.link}>Posts</Link>
        <Link to="/todos" style={styles.link}>Tâches</Link>
      </nav>
    </div>
  );
}

const styles = {
  sidebar: { width: '220px', backgroundColor: '#1e293b', color: '#fff', padding: '20px' },
  title: { marginBottom: '30px' },
  nav: { display: 'flex', flexDirection: 'column', gap: '15px' },
  link: { color: '#cbd5e1', textDecoration: 'none', fontSize: '16px' }
};

export default Sidebar;