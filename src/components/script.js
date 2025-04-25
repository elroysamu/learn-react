import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Header';
import { Body } from './Body';

function Parent() {
    function handleClick() {
      alert('Button clicked from child!');
    }
  
    return (
      <div>
        <h1>React Event Handling with Props</h1>
        <ChildButton onClic={handleClick} /> 
        {/* we should use normal name instead of calling the fucntion like this fun().  */}
        {/* And we can define probs name as whatever we want. */}
      </div>
    );
  }

  function ChildButton(props) {
    return (
      <button onClick={props.onClic}>
        Click Me!
      </button>
    );
  }

ReactDOM.createRoot(document.getElementById('root')).render(< Parent/>);



