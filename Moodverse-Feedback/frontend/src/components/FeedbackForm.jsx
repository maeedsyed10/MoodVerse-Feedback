import React, { useState } from 'react';
import '../css/Feedbackform.css';
import logo from '../images/logo.png';
import Rating from '@mui/material/Rating'; 
import axios from 'axios';

function FeedbackForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    overallExperience: 0,
    usability: 0,
    design: 0,
    performance: 0,
    locationFeedback: '',
    mapFeedback: '',
    placesFeedback: '',
    suggestion: '',
    additionalComments: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRatingChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
   // Check if all required fields are filled
   for (const [key, value] of Object.entries(formData)) {
    if (value === '' || value === 0) {
      alert(`Please fill out the ${key.replace(/([A-Z])/g, ' $1').toLowerCase()} field.`);
      return;
    }
  }

  try {
    // Send feedback to the backend
    const response = await axios.post('http://localhost:3001/feedbacks', formData);

    // Handle successful response
    console.log('Feedback submitted:', response.data);
    alert('Thank you for your feedback!');

    // Clear form data
    setFormData({
      name: '',
      email: '',
      overallExperience: 0,
      usability: 0,
      design: 0,
      performance: 0,
      locationFeedback: '',
      mapFeedback: '',
      placesFeedback: '',
      suggestion: '',
      additionalComments: ''
    });

  } catch (error) {
    // Handle error
    console.error('Error submitting feedback:', error);
    alert('There was an error submitting your feedback. Please try again.');
  }
};

  return (
    <div className="feedback-form-container">
      <div className="header">
        <h1 className="moodverse-heading">Moodverse</h1>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1>Feedback</h1>
      <p>Please let us know about your experience with Moodverse. Your feedback helps us improve our service.</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>How would you rate your overall experience? </label>
          <Rating
            name="overallExperience"
            value={formData.overallExperience}
            onChange={(event, newValue) => handleRatingChange('overallExperience', newValue)}
          />
        </div>
        <div>
          <label>How would you rate the usability of Moodverse? </label>
          <Rating
            name="usability"
            value={formData.usability}
            onChange={(event, newValue) => handleRatingChange('usability', newValue)}
          />
        </div>
        <div>
          <label>How would you rate the design and aesthetics? </label>
          <Rating
            name="design"
            value={formData.design}
            onChange={(event, newValue) => handleRatingChange('design', newValue)}
          />
        </div>
        <div>
          <label>How would you rate the performance? </label>
          <Rating
            name="performance"
            value={formData.performance}
            onChange={(event, newValue) => handleRatingChange('performance', newValue)}
          />
        </div>
        <div>
          <label>Tell us about your experience adding locations</label>
          <textarea name="locationFeedback" value={formData.locationFeedback} onChange={handleChange} rows="5" required />
        </div>
        <div>
          <label>How is the map display functionality? </label>
          <textarea name="mapFeedback" value={formData.mapFeedback} onChange={handleChange} rows="5" required />
        </div>
        <div>
          <label>Feedback on nearby places listing </label>
          <textarea name="placesFeedback" value={formData.placesFeedback} onChange={handleChange} rows="5" required />
        </div>
        <div>
          <label>Do you have any suggestions for improvement? </label>
          <textarea name="suggestion" value={formData.suggestion} onChange={handleChange} rows="5" required />
        </div>
        <div>
          <label>Any additional comments? </label>
          <textarea name="additionalComments" value={formData.additionalComments} onChange={handleChange} rows="5" required />
        </div>
        <div>
          <button type="submit">Submit Feedback</button>
          <button type="button" onClick={() => setFormData({
            name: '',
            email: '',
            overallExperience: 0,
            usability: 0,
            design: 0,
            performance: 0,
            locationFeedback: '',
            mapFeedback: '',
            placesFeedback: '',
            suggestion: '',
            additionalComments: ''
          })}>Clear</button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;