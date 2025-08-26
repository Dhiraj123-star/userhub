import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000';

function App() {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/users/`);
      setUsers(response.data);
    } catch (err) {
      setError('Failed to fetch users');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError('');
      
      if (editingId) {
        await axios.put(`${API_URL}/users/${editingId}`, formData);
      } else {
        await axios.post(`${API_URL}/users/`, formData);
      }
      
      setFormData({ name: '', email: '', phone: '' });
      setEditingId(null);
      fetchUsers();
    } catch (err) {
      setError(err.response?.data?.detail || 'Failed to save user');
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (user) => {
    setFormData({
      name: user.name,
      email: user.email,
      phone: user.phone || ''
    });
    setEditingId(user.id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this user?')) {
      try {
        setLoading(true);
        await axios.delete(`${API_URL}/users/${id}`);
        fetchUsers();
      } catch (err) {
        setError('Failed to delete user');
      } finally {
        setLoading(false);
      }
    }
  };

  const handleCancel = () => {
    setFormData({ name: '', email: '', phone: '' });
    setEditingId(null);
    setError('');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>UserHub - User Management System</h1>
      </header>
      
      <main className="main-content">
        <div className="form-container">
          <h2>{editingId ? 'Edit User' : 'Add New User'}</h2>
          
          {error && <div className="error">{error}</div>}
          
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                disabled={loading}
              />
            </div>
            
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                required
                disabled={loading}
              />
            </div>
            
            <div className="form-group">
              <label>Phone:</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                disabled={loading}
              />
            </div>
            
            <div className="form-buttons">
              <button type="submit" disabled={loading}>
                {loading ? 'Saving...' : editingId ? 'Update User' : 'Add User'}
              </button>
              {editingId && (
                <button type="button" onClick={handleCancel} disabled={loading}>
                  Cancel
                </button>
              )}
            </div>
          </form>
        </div>
        
        <div className="users-container">
          <h2>Users List</h2>
          
          {loading && users.length === 0 ? (
            <p>Loading users...</p>
          ) : (
            <div className="users-grid">
              {users.map((user) => (
                <div key={user.id} className="user-card">
                  <h3>{user.name}</h3>
                  <p><strong>Email:</strong> {user.email}</p>
                  <p><strong>Phone:</strong> {user.phone || 'N/A'}</p>
                  <p><strong>Created:</strong> {new Date(user.created_at).toLocaleDateString()}</p>
                  
                  <div className="card-buttons">
                    <button onClick={() => handleEdit(user)} disabled={loading}>
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(user.id)} 
                      disabled={loading}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {users.length === 0 && !loading && (
            <p>No users found. Add your first user!</p>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;