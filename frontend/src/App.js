// src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS

function App() {
  const [items, setItems] = useState([]);
  const [form, setForm] = useState({ name: '', description: '' });
  const [editingId, setEditingId] = useState(null);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/items');
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingId) {
      await axios.put(`http://localhost:5000/items/${editingId}`, form);
      setEditingId(null);
    } else {
      await axios.post('http://localhost:5000/items', form);
    }
    setForm({ name: '', description: '' });
    fetchItems();
  };

  const handleEdit = (item) => {
    setForm({ name: item.name, description: item.description });
    setEditingId(item._id);
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/items/${id}`);
    fetchItems();
  };

  return (
    <div className="container">
      <h1>📝 CRUD App</h1>
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="Enter name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Enter description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          required
        />
        <button type="submit">{editingId ? 'Update' : 'Add'}</button>
      </form>

      <div className="item-list">
        {items.map((item) => (
          <div key={item._id} className="item-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className="btn-group">
              <button className="edit" onClick={() => handleEdit(item)}>Edit</button>
              <button className="delete" onClick={() => handleDelete(item._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
