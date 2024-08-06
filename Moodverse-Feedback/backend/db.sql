
CREATE DATABASE moodverse;

USE moodverse;

CREATE TABLE feedbacks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  overallExperience INT NOT NULL,
  usability INT NOT NULL,
  design INT NOT NULL,
  performance INT NOT NULL,
  locationFeedback TEXT NOT NULL,
  mapFeedback TEXT NOT NULL,
  placesFeedback TEXT NOT NULL,
  suggestion TEXT NOT NULL,
  additionalComments TEXT
);
