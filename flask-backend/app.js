// src/App.js
import React, { useState } from 'react';

function App() {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send POST request to the Flask backend
      const response = await fetch('http://localhost:5000/write', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }), // Send the content as JSON
      });

      // Get response data from the backend
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message); // Display success message
      } else {
        setMessage(data.error); // Display error message
      }
    } catch (error) {
      setMessage('Error connecting to the backend'); // Handle connection errors
    }
  };

  return (
    <div className="App">
      <h1>Write to File</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter content to write to the file"
          rows="5"
          cols="50"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>} {/* Display the message */}
    </div>
  );
}

export default App;

