// src/components/Point.tsx
import React from 'react';

interface PointProps {
  position: number; // Position auf der X-Achse
  height: number; // Höhe auf der Y-Achse
}

const Point: React.FC<PointProps> = ({ position, height }) => {
  return (
    <div
      style={{
        position: 'absolute',
        width: '10px', // Breite des Punktes
        height: '10px', // Höhe des Punktes
        backgroundColor: 'red', // Farbe des Punktes
        borderRadius: '50%', // Runde Form
        left: `${position}px`, // Position auf der X-Achse
        top: `${height}px`, // Position auf der Y-Achse
      }}
    />
  );
};

export default Point;