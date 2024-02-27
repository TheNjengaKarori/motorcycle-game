// Obstacle.js

import React, { useState, useEffect } from 'react';

const Obstacle = ({ initialLeft, imageSrc }) => {
  const [left, setLeft] = useState(initialLeft);

  useEffect(() => {
    let requestId;

    const moveObstacle = (timestamp) => {
      const elapsedTime = timestamp - lastTimestamp.current;
      const distance = (elapsedTime / 1000) * 60; // 60 pixels per second, adjust as needed
      setLeft((prevLeft) => prevLeft - distance);

      lastTimestamp.current = timestamp;
      requestId = requestAnimationFrame(moveObstacle);
    };

    const lastTimestamp = { current: performance.now() };
    requestId = requestAnimationFrame(moveObstacle);

    return () => cancelAnimationFrame(requestId);
  }, []);

  return <img className="obstacle" src={imageSrc} style={{ left, zIndex: 1 }} alt="Obstacle" />;
};

export default Obstacle;
