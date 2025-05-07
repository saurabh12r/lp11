// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/crudDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Schema
const ItemSchema = new mongoose.Schema({
  name: String,
  description: String,
});
const Item = mongoose.model('Item', ItemSchema);

// Routes

// Create
app.post('/items', async (req, res) => {
  const newItem = new Item(req.body);
  await newItem.save();
  res.send(newItem);
});

// Read
app.get('/items', async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

// Update
app.put('/items/:id', async (req, res) => {
  const updated = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.send(updated);
});

// Delete
app.delete('/items/:id', async (req, res) => {
  await Item.findByIdAndDelete(req.params.id);
  res.send({ message: 'Deleted successfully' });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
