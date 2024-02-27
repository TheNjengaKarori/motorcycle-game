// Background.js

import React, { useState, useEffect } from 'react';
import Obstacle from './Obstacle'; // Import the Obstacle component

const Background = () => {
  const [obstacles, setObstacles] = useState([]);

  useEffect(() => {
    const generateObstacle = () => {
      const newObstacles = [...obstacles];
      const randomDelay = Math.floor(Math.random() * 2000) + 1000; // Random delay between 1000ms and 3000ms
      const randomDistance = Math.floor(Math.random() * 300) + 200; // Random distance between 200px and 500px
      const lastObstacle = newObstacles[newObstacles.length - 1];
      const newLeft = lastObstacle ? lastObstacle.left + randomDistance : randomDistance;

      newObstacles.push({ id: Date.now(), left: newLeft });
      setObstacles(newObstacles);

      setTimeout(generateObstacle, randomDelay);
    };

    generateObstacle();
  }, [obstacles]);

  return (
    <div className="ground">
      {obstacles.map((obstacle, index) => (
        <Obstacle
          key={obstacle.id}
          initialLeft={obstacle.left}
          imageSrc={`car${(index % 3) + 1}.png`} // Adjust if the image names are different
        />
      ))}
    </div>
  );
};

export default Background;








