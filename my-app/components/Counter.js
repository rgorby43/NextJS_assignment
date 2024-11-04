// components/Counter.js
"use client";  // Add this line at the top

import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Counter: {count}</h2>
            <button
                onClick={decrement}
                style={{
                    fontSize: '1.5rem',    // Increase font size
                    padding: '10px 20px',  // Add padding for larger buttons
                    margin: '5px',         // Add space between buttons
                    cursor: 'pointer'
                }}
            >
                -
            </button>
            <button
                onClick={increment}
                style={{
                    fontSize: '1.5rem',    // Increase font size
                    padding: '10px 20px',  // Add padding for larger buttons
                    margin: '5px',         // Add space between buttons
                    cursor: 'pointer'
                }}
            >
                +
            </button>
        </div>
    );
}

export default Counter;
