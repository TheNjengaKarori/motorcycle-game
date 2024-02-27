import React from 'react';
import './App.css'; // Import your CSS file for styling
import Background from './Background'; // Import the Background component
import Motorcyclist from './Motorcyclist'; // Import the Motorcyclist component

function App() {
  return (
    <div className="App">
      <Background /> {/* Render the Background component */}
      <Motorcyclist /> {/* Render the Motorcyclist component */}
    </div>
  );
}

export default App;



