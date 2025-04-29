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
            <SeparatorLine/>
            <SideEffectDemo/>
            <SeparatorLine/>
            <App/>
        </div>
    );
};

function SeparatorLine() {
    return (
      <div style={{ margin: "30px 0", textAlign: "center", color: "#888" }}>
        ───── Separator Line ─────
      </div>
    );
  }
  
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
      console.log(" Setting interval with delay:", delay);
      const id = setInterval(() => {
        console.log("Tick with delay", delay);
      }, delay);
  
      return () => {
        console.log(" Clearing interval for delay:", delay);
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


function SideEffectDemo() {
    const [count, setCount] = useState(0);
    const [message, setMessage] = useState("");
  
    // 1️⃣ Side effect: Logging to console
    useEffect(() => {
      console.log("✅ Count updated to:", count);
    }, [count]);
  
    // 2️⃣ Side effect: Changing document title
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    }, [count]);
  
    // 3️⃣ Side effect: Setting a timer
    useEffect(() => {
      const timer = setTimeout(() => {
        setMessage("⏱ Timer finished after 3 seconds");
      }, 3000);
  
      return () => clearTimeout(timer); // Cleanup
    }, []);
  
    // 4️⃣ Side effect: Fetching data from an API (mock)
    useEffect(() => {
      async function fetchData() {
        console.log("🌐 Fetching data...");
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        const data = await response.json();
        console.log("📦 Data fetched:", data);
      }
      fetchData();
    }, []);
  
    // 5️⃣ Side effect: WebSocket mock (using interval as simulation)
    useEffect(() => {
      const id = setInterval(() => {
        console.log("🔊 Simulated WebSocket message received");
      }, 2000);
  
      return () => clearInterval(id);
    }, []);
  
    return (
      <div>
        <h1>Side Effect Demo</h1>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(prev => prev + 1)}>Click me</button>
        <p>{message}</p>
      </div>
    );
  }
  

ReactDOM.createRoot(document.getElementById('root')).render(<AppLayout />);



