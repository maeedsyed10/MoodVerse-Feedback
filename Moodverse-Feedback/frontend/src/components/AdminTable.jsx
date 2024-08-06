import React from "react";
import "../css/AdminTable.css";
import logo from '../images/logo.png';


// const dummyFeedbacks = [
//     {
//         name: "Alice Johnson",
//         email: "alice.johnson@example.com",
//         overallExperience: 4,
//         usability: 5,
//         design: 4,
//         performance: 3,
//         locationFeedback: "The location was easy to find.",
//         mapFeedback: "The map was clear and accurate.",
//         placesFeedback: "Found all the places I needed.",
//         suggestion: "Add more filters for locations.",
//         additionalComments: "Great app overall!",
//       },
//       {
//         name: "Bob Smith",
//         email: "bob.smith@example.com",
//         overallExperience: 3,
//         usability: 4,
//         design: 3,
//         performance: 2,
//         locationFeedback: "Difficult to find some locations.",
//         mapFeedback: "The map could be improved.",
//         placesFeedback: "Some places were missing.",
//         suggestion: "Improve the search functionality.",
//         additionalComments: "Needs some updates.",
//       },
//       {
//         name: "Carol White",
//         email: "carol.white@example.com",
//         overallExperience: 5,
//         usability: 5,
//         design: 5,
//         performance: 5,
//         locationFeedback: "Perfect location information.",
//         mapFeedback: "The map was very user-friendly.",
//         placesFeedback: "All places were correctly listed.",
//         suggestion: "No suggestions, the app is great!",
//         additionalComments: "Exceptional experience!",
//       },
//       {
//         name: "David Brown",
//         email: "david.brown@example.com",
//         overallExperience: 2,
//         usability: 3,
//         design: 2,
//         performance: 3,
//         locationFeedback: "Locations were hard to find.",
//         mapFeedback: "The map was confusing.",
//         placesFeedback: "Many places were outdated.",
//         suggestion: "Update the place database.",
//         additionalComments: "Needs a lot of improvement.",
//       },
//       {
//         name: "Emily Davis",
//         email: "emily.davis@example.com",
//         overallExperience: 4,
//         usability: 4,
//         design: 4,
//         performance: 4,
//         locationFeedback: "Locations were mostly accurate.",
//         mapFeedback: "Good map, but needs zoom feature.",
//         placesFeedback: "Most places were listed.",
//         suggestion: "Add user reviews for places.",
//         additionalComments: "Good job, but room for improvement.",
//       },
//     {
//     name: "Alice Johnson",
//     email: "alice.johnson@example.com",
//     overallExperience: 4,
//     usability: 5,
//     design: 4,
//     performance: 3,
//     locationFeedback: "The location was easy to find.",
//     mapFeedback: "The map was clear and accurate.",
//     placesFeedback: "Found all the places I needed.",
//     suggestion: "Add more filters for locations.",
//     additionalComments: "Great app overall!",
//   },
//   {
//     name: "Bob Smith",
//     email: "bob.smith@example.com",
//     overallExperience: 3,
//     usability: 4,
//     design: 3,
//     performance: 2,
//     locationFeedback: "Difficult to find some locations.",
//     mapFeedback: "The map could be improved.",
//     placesFeedback: "Some places were missing.",
//     suggestion: "Improve the search functionality.",
//     additionalComments: "Needs some updates.",
//   },
//   {
//     name: "Carol White",
//     email: "carol.white@example.com",
//     overallExperience: 5,
//     usability: 5,
//     design: 5,
//     performance: 5,
//     locationFeedback: "Perfect location information.",
//     mapFeedback: "The map was very user-friendly.",
//     placesFeedback: "All places were correctly listed.",
//     suggestion: "No suggestions, the app is great!",
//     additionalComments: "Exceptional experience!",
//   },
//   {
//     name: "David Brown",
//     email: "david.brown@example.com",
//     overallExperience: 2,
//     usability: 3,
//     design: 2,
//     performance: 3,
//     locationFeedback: "Locations were hard to find.",
//     mapFeedback: "The map was confusing.",
//     placesFeedback: "Many places were outdated.",
//     suggestion: "Update the place database.",
//     additionalComments: "Needs a lot of improvement.",
//   },
//   {
//     name: "Emily Davis",
//     email: "emily.davis@example.com",
//     overallExperience: 4,
//     usability: 4,
//     design: 4,
//     performance: 4,
//     locationFeedback: "Locations were mostly accurate.",
//     mapFeedback: "Good map, but needs zoom feature.",
//     placesFeedback: "Most places were listed.",
//     suggestion: "Add user reviews for places.",
//     additionalComments: "Good job, but room for improvement.",
//   },
// ];

const AdminTable = ({ feedbacks }) => {
  return (
    <div className="admin-table-container">
        <div className="header">
        <h1 className="moodverse-heading">Moodverse</h1>
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <h1>All Feedbacks</h1>
      <div className="admin-table-container2">
        {feedbacks.length === 0 ? (
          <p>No feedbacks available.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Overall Experience</th>
                <th>Usability</th>
                <th>Design</th>
                <th>Performance</th>
                <th>Location Feedback</th>
                <th>Map Feedback</th>
                <th>Places Feedback</th>
                <th>Suggestion</th>
                <th>Additional Comments</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map((feedback, index) => (
                <tr key={index}>
                  <td>{feedback.name}</td>
                  <td>{feedback.email}</td>
                  <td>{feedback.overallExperience}</td>
                  <td>{feedback.usability}</td>
                  <td>{feedback.design}</td>
                  <td>{feedback.performance}</td>
                  <td>{feedback.locationFeedback}</td>
                  <td>{feedback.mapFeedback}</td>
                  <td>{feedback.placesFeedback}</td>
                  <td>{feedback.suggestion}</td>
                  <td>{feedback.additionalComments}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AdminTable;
