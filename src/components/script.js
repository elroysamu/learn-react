import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import { useEffect } from 'react';
import { Header } from './Header';
import { Body } from './Body';

const AppLayout = () => {
    return (
        <div className="app">
            <EXP />
        </div>
    );
};


const EXP = () => {
    const [counter, setCounter] = useState(0);
    useEffect(() =>{
        //everytime the counter value updates the useEffect will be called
        console.log("hello");

        return() =>{
            //this returned function will be saved by react and called when the component is unmountedd
            console.log("from the return")
        }
        
    },[counter])

    return (
        <div className="app">
            <button onClick={() => setCounter(counter + 1)}> add </button>
            <h1>Counter: {counter}</h1>
        </div>
    );
}


function Timer({ delay }) {
    useEffect(() => {
      console.log("🟢 Setting interval with delay:", delay);
      const id = setInterval(() => {
        console.log("⏰ Tick with delay", delay);
      }, delay);
  
      return () => {
        console.log("🔴 Clearing interval for delay:", delay);
        clearInterval(id);
      };
    }, [delay]);
  
    return <h1>Timer is running with delay {delay}ms</h1>;
  }
  
function App() {
    const [delay, setDelay] = useState(1000); // 1 second
    const [show, setShow] = useState(true);
  
    return (
      <div>
        <button onClick={() => setDelay((prev) => prev === 1000 ? 2000 : 1000)}>
          Toggle Delay (Current: {delay}ms)
        </button>
  
        <button onClick={() => setShow((prev) => !prev)}>
          {show ? "Hide Timer" : "Show Timer"}
        </button>
  
        {show && <Timer delay={delay} />}
      </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);



