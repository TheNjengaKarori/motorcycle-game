// Motorcyclist.js

import React, { useState, useEffect } from 'react';

const Motorcyclist = () => {
  const [position, setPosition] = useState(0);
  const jumpHeight = 100; // Adjust jump height as needed
  const jumpDuration = 450; // Adjust jump duration as needed

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        setPosition(jumpHeight);
        setTimeout(() => setPosition(0), jumpDuration);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div
      className="motorcyclist"
      style={{ bottom: `${position}px` }}
    ></div>
  );
};

export default Motorcyclist;


