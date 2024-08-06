import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FeedbackForm from './components/FeedbackForm';
import AdminTable from './components/AdminTable';
import './App.css'; 

function App() {
  const [view, setView] = useState('User');
  const [feedbacks, setFeedbacks] = useState([]);

  const handleChange = (event) => {
    setView(event.target.value);
  };

  useEffect(() => {
    if (view === 'Admin') {
      // Fetch feedbacks when view is changed to Admin
      const fetchFeedbacks = async () => {
        try {
          const response = await axios.get('http://localhost:3001/feedbacks');
          setFeedbacks(response.data);
        } catch (error) {
          console.error('Error fetching feedbacks:', error);
        }
      };

      fetchFeedbacks();
    }
  }, [view]);

  return (
    <div className="App">
      <div className="dropdown-container">
        <select id="view-select" value={view} onChange={handleChange}>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
      </div>
      {view === 'User' ? (
        <FeedbackForm />
      ) : (
        <AdminTable feedbacks={feedbacks} />
      )}
    </div>
  );
};

export default App;
