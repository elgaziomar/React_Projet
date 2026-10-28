import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserForm({ userToEdit, onSave, onCancel }) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [website, setWebsite] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    if (userToEdit) {
      setName(userToEdit.name || '');
      setUsername(userToEdit.username || '');
      setEmail(userToEdit.email || '');
      setPhone(userToEdit.phone || '');
      setWebsite(userToEdit.website || '');
      setCity(userToEdit.address?.city || '');
    }
  }, [userToEdit]);

  function handleSubmit(e) {
    e.preventDefault();
    const payload = { name, username, email, phone, website, address: { city } };

    if (userToEdit) {
      axios.put(`https://jsonplaceholder.typicode.com/users/${userToEdit.id}`, payload).then((res) => {
        onSave({ ...userToEdit, ...res.data, address: { city } });
      });
    } else {
      axios.post('https://jsonplaceholder.typicode.com/users', payload).then((res) => {
        onSave({ ...res.data, address: { city } });
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3>{userToEdit ? 'Modifier : utilisateur' : 'Créer utilisateur'}</h3>
      <input style={styles.input} placeholder="Nom complet" value={name} onChange={(e) => setName(e.target.value)} required />
      <input style={styles.input} placeholder="Nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} required />
      <input style={styles.input} placeholder="Adresse e-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <input style={styles.input} placeholder="Téléphone" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <input style={styles.input} placeholder="Site web" value={website} onChange={(e) => setWebsite(e.target.value)} />
      <input style={styles.input} placeholder="Ville" value={city} onChange={(e) => setCity(e.target.value)} />
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

export default UserForm;