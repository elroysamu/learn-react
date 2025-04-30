import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState, useEffect } from 'react';

function BadComponent({ showState }) {
  if (showState) {
    const [count, setCount] = useState(0); // ❌ Invalid Hook call
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    );
  }

  return <p>No state here</p>;
}

 function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle State</button>
      <BadComponent showState={toggle} />
    </div>
  );
}






ReactDOM.createRoot(document.getElementById('root')).render(<App />);



