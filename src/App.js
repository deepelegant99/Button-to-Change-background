import React from 'react';
import './style.css';
import React, { useState, useEffect } from 'react';
export default function App() {
  const [color, setColor] = useState('white');

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);
  return (
    <div>
      <button onClick={() => setColor(generateRandomColor())}>
        Change Background
      </button>
    </div>
  );
}

function generateRandomColor() {
  const colors = ['red', 'green', 'blue', 'yellow', 'pink'];
  return colors[Math.floor(Math.random() * colors.length)];
}