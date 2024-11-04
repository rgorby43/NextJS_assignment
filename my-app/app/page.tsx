// pages/index.js
import React from 'react';
import Counter from '../components/Counter.js';

export default function Home() {
  return (
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>Riggs Gorby!</h1>
        <Counter />
      </div>
  );
}
