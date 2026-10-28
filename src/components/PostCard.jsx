import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PostCard({ post, authorName, onBack }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`).then((res) => {
      setComments(res.data);
    });
  }, [post.id]);

  return (
    <div style={styles.card}>
      <button onClick={onBack} style={styles.btn}>Retour</button>
      <h2>{post.title}</h2>
      <p><strong>Auteur :</strong> {authorName}</p>
      <p>{post.body}</p>

      <h3>Commentaires ({comments.length})</h3>
      <ul>
        {comments.map((c) => (
          <li key={c.id} style={styles.comment}>
            <strong>{c.name}</strong> ({c.email})<br />
            {c.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  card: { backgroundColor: '#fff', padding: '20px', borderRadius: '8px', border: '1px solid #ddd' },
  btn: { padding: '6px 12px', marginBottom: '15px', cursor: 'pointer' },
  comment: { marginBottom: '10px' }
};

export default PostCard;