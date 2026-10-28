import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UserList from './components/UserList';
import PostList from './components/PostList';
import TodoList from './components/TodoList';

function App() {
  return (
    <Router>
      <div style={styles.layout}>
        <Sidebar />
        <div style={styles.content}>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/todos" element={<TodoList />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

const styles = {
  layout: { display: 'flex', minHeight: '100vh', fontFamily: 'sans-serif' },
  content: { flex: 1, padding: '20px', backgroundColor: '#f8f9fa' }
};

export default App;