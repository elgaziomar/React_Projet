import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostForm({ postToEdit, users, onSave, onCancel }) {
  const [userId, setUserId] = useState(1);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  useEffect(() => {
    if (postToEdit) {
      setUserId(postToEdit.userId);
      setTitle(postToEdit.title);
      setBody(postToEdit.body);
    }
  }, [postToEdit]);

  function handleSubmit(e) {
    e.preventDefault();
    const payload = { userId: Number(userId), title, body };

    if (postToEdit) {
      axios.put(`https://jsonplaceholder.typicode.com/posts/${postToEdit.id}`, payload).then((res) => {
        onSave({ ...postToEdit, ...res.data });
      });
    } else {
      axios.post('https://jsonplaceholder.typicode.com/posts', payload).then((res) => {
        onSave(res.data);
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>{postToEdit ? 'Modifier la publication' : 'Ajouter une publication'}</h3>
      <select style={styles.input} value={userId} onChange={(e) => setUserId(e.target.value)}>
        {users.map((u) => <option key={u.id} value={u.id}>{u.name}</option>)}
      </select>
      <input style={styles.input} placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <textarea style={styles.input} placeholder="Contenu" rows="4" value={body} onChange={(e) => setBody(e.target.value)} required />
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

export default PostForm;