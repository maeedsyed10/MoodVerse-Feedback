const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Create MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', 
  password: '', 
  database: 'moodverse'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected to MySQL');
});

// Get all feedbacks
app.get('/feedbacks', (req, res) => {
  const query = 'SELECT * FROM feedbacks';
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// Post new feedback
app.post('/feedbacks', (req, res) => {
  const feedback = req.body;
  const query = 'INSERT INTO feedbacks SET ?';
  db.query(query, feedback, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ id: result.insertId });
  });
});

// Get feedback by ID
app.get('/feedbacks/:id', (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM feedbacks WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ error: 'Feedback not found' });
    }
    res.json(results[0]);
  });
});


// Update feedback
app.put('/feedbacks/:id', (req, res) => {
  const { id } = req.params;
  const updatedFeedback = req.body;
  const query = 'UPDATE feedbacks SET ? WHERE id = ?';
  db.query(query, [updatedFeedback, id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Feedback updated' });
  });
});

// Delete feedback
app.delete('/feedbacks/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM feedbacks WHERE id = ?';
  db.query(query, [id], (err) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json({ message: 'Feedback deleted' });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
