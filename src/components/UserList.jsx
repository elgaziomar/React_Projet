import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import UserCard from './UserCard';
import UserForm from './UserForm';

function UserList() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);
  const [editingUser, setEditingUser] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
      setUsers(res.data);
    });
  }, []);

  function handleDelete(id) {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then(() => {
      setUsers(users.filter((u) => u.id !== id));
    });
  }

  function handleSave(savedUser) {
    if (editingUser) {
      setUsers(users.map((u) => (u.id === savedUser.id ? savedUser : u)));
    } else {
      setUsers([...users, { ...savedUser, id: users.length + 1 }]);
    }
    setShowForm(false);
    setEditingUser(null);
  }

  if (selectedUser) {
    return <UserCard user={selectedUser} onBack={() => setSelectedUser(null)} />;
  }

  if (showForm) {
    return (
      <UserForm
        userToEdit={editingUser}
        onSave={handleSave}
        onCancel={() => { setShowForm(false); setEditingUser(null); }}
      />
    );
  }

  const filtered = users.filter(
    (u) =>
      u.name.toLowerCase().includes(search.toLowerCase()) ||
      u.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={styles.header}>
        <h2>Utilisateurs</h2>
        <button style={styles.btnPrimary} onClick={() => setShowForm(true)}>+ Ajouter</button>
      </div>

      <SearchBar searchTerm={search} onSearchChange={setSearch} placeholder="Rechercher par nom ou email..." />

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>UTILISATEUR</th>
            <th style={styles.th}>E-MAIL</th>
            <th style={styles.th}>VILLE</th>
            <th style={styles.th}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((user) => (
            <tr key={user.id}>
              <td style={styles.td}>#{user.id}</td>
              <td style={styles.td}><strong>{user.name}</strong><br /><small>{user.username}</small></td>
              <td style={styles.td}>{user.email}</td>
              <td style={styles.td}>{user.address?.city}</td>
              <td style={styles.td}>
                <button style={styles.btn} onClick={() => setSelectedUser(user)}>Détails</button>
                <button style={styles.btn} onClick={() => { setEditingUser(user); setShowForm(true); }}>Modifier</button>
                <button style={styles.btn} onClick={() => handleDelete(user.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const styles = {
  header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center' },
  table: { width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' },
  th: { borderBottom: '2px solid #ddd', padding: '10px', textAlign: 'left' },
  td: { borderBottom: '1px solid #eee', padding: '10px' },
  btn: { marginRight: '5px', padding: '5px 10px', cursor: 'pointer' },
  btnPrimary: { padding: '8px 14px', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default UserList;