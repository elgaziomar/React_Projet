import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';
import PostCard from './PostCard';
import PostForm from './PostForm';

function PostList() {
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [selectedUserId, setSelectedUserId] = useState('');
  const [selectedPost, setSelectedPost] = useState(null);
  const [editingPost, setEditingPost] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => setPosts(res.data));
    axios.get('https://jsonplaceholder.typicode.com/users').then((res) => setUsers(res.data));
  }, []);

  function getAuthorName(userId) {
    const u = users.find((user) => user.id === Number(userId));
    return u ? u.name : 'Inconnu';
  }

  function handleDelete(id) {
    if (window.confirm('Voulez-vous vraiment supprimer cette publication ?')) {
      axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`).then(() => {
        setPosts(posts.filter((p) => p.id !== id));
      });
    }
  }

  function handleSave(savedPost) {
    if (editingPost) {
      setPosts(posts.map((p) => (p.id === savedPost.id ? savedPost : p)));
    } else {
      setPosts([{ ...savedPost, id: posts.length + 1 }, ...posts]);
    }
    setShowForm(false);
    setEditingPost(null);
  }

  if (selectedPost) {
    return (
      <PostCard
        post={selectedPost}
        authorName={getAuthorName(selectedPost.userId)}
        onBack={() => setSelectedPost(null)}
      />
    );
  }

  if (showForm) {
    return (
      <PostForm
        postToEdit={editingPost}
        users={users}
        onSave={handleSave}
        onCancel={() => { setShowForm(false); setEditingPost(null); }}
      />
    );
  }

  const filtered = posts.filter((p) => {
    const matchTitle = p.title.toLowerCase().includes(search.toLowerCase());
    const matchUser = selectedUserId === '' || p.userId === Number(selectedUserId);
    return matchTitle && matchUser;
  });

  return (
    <div>
      <div style={styles.header}>
        <h2>Posts</h2>
        <button style={styles.btnPrimary} onClick={() => setShowForm(true)}>+ Ajouter</button>
      </div>

      <div style={styles.filters}>
        <SearchBar searchTerm={search} onSearchChange={setSearch} placeholder="Rechercher par titre..." />
        <select style={styles.select} value={selectedUserId} onChange={(e) => setSelectedUserId(e.target.value)}>
          <option value="">Tous les auteurs</option>
          {users.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
        </select>
      </div>

      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>TITRE</th>
            <th style={styles.th}>AUTEUR</th>
            <th style={styles.th}>EXTRAIT</th>
            <th style={styles.th}>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((post) => (
            <tr key={post.id}>
              <td style={styles.td}>#{post.id}</td>
              <td style={styles.td}><strong>{post.title}</strong></td>
              <td style={styles.td}>{getAuthorName(post.userId)}</td>
              <td style={styles.td}>{post.body.substring(0, 45)}...</td>
              <td style={styles.td}>
                <button style={styles.btn} onClick={() => setSelectedPost(post)}>Détails</button>
                <button style={styles.btn} onClick={() => { setEditingPost(post); setShowForm(true); }}>Modifier</button>
                <button style={styles.btn} onClick={() => handleDelete(post.id)}>Supprimer</button>
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
  filters: { display: 'flex', gap: '10px', alignItems: 'center' },
  select: { padding: '8px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '4px' },
  table: { width: '100%', borderCollapse: 'collapse', backgroundColor: '#fff' },
  th: { borderBottom: '2px solid #ddd', padding: '10px', textAlign: 'left' },
  td: { borderBottom: '1px solid #eee', padding: '10px' },
  btn: { marginRight: '5px', padding: '5px 10px', cursor: 'pointer' },
  btnPrimary: { padding: '8px 14px', backgroundColor: '#4f46e5', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }
};

export default PostList;