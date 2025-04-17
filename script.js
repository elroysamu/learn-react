import React from 'react';
import ReactDOM from 'react-dom';

// Import React and ReactDOM libraries

// Create a React element
// React.createElement takes three arguments:
// 1. The type of the element (e.g., 'div', 'h1', 'p')
// 2. The props (attributes) for the element (e.g., { className: 'my-class' })
// 3. The children (content) of the element (e.g., text or other elements)
const element = React.createElement(
  'h1', // The type of the element
  { className: 'greeting' }, // Props (attributes)
  'Hello, React!' // Children (content)
);

console.log(element);


// Render the React element to the DOM
ReactDOM.render(
  element, // The React element to render
  document.getElementById('root') // The DOM node where the element will be rendered
);
