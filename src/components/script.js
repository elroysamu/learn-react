import React, { useTransition, useState } from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./Header";
import { Body } from "./Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
// import { About } from './About';
import { Contact } from "./Contact";
import { Error } from "./Error";
import { RestaurantMenuCard } from "./RestaurantMenuCard";

// function App() {
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState([]);

//     const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

//     function handleChange(e) {
//     const value = e.target.value;
//     setQuery(value);

//     // Filtering is immediate (UI will lag with big lists)
//     const filtered = bigList.filter(item => item.includes(value));
//     setResults(filtered);
//     }

//     return (
//     <div>
//     <input value={query} onChange={handleChange} />
//     <ul>
//     {results.map((item, i) => <li key={i}>{item}</li>)}
//     </ul>
//     </div>
//     );
//    }

// function App() {
//     const [query, setQuery] = useState('');
//     const [results, setResults] = useState([]);

//     const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

//     function handleChange(e) {
//     const value = e.target.value;
//     setQuery(value); // Urgent update – happens immediately

//     // This update can be delayed – mark as transition
//     startTransition(() => {
//     const filtered = bigList.filter(item => item.includes(value));
//     setResults(filtered);
//     });
//     }

//     return (
//     <div>
//     <input value={query} onChange={handleChange} />
//     <ul>
//     {results.map((item, i) => <li key={i}>{item}</li>)}
//     </ul>
//     </div>
//     );
//    }

// function App() {
//     const [input, setInput] = useState('');
//     const [list, setList] = useState([]);
//     const [isPending, startTransition] = useTransition();

//     const bigList = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);

//     const handleChange = (e) => {
//     const value = e.target.value;
//     setInput(value);

//     startTransition(() => {
//     const filtered = bigList.filter(item => item.includes(value));
//     setList(filtered);
//     });
//     };

//     return (
//     <div>
//     <input type="text" value={input} onChange={handleChange} placeholder="Search..." />
//     {isPending && <p>Filtering...</p>} {/* 🔸 Show spinner only while filtering */}
//     <ul>
//     {list.map((item, index) => (
//     <li key={index}>{item}</li>
//     ))}
//     </ul>
//     </div>
//     );
//    }

import React, { Suspense } from "react";

// 🔸 Wraps a promise to make it "suspendable"
function wrapPromise(promise) {
  let status = "pending";
  let result;
  const suspender = promise.then(
    (res) => {
      status = "success";
      result = res;
    },
    (err) => {
      status = "error";
      result = err;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender; // ⛔ Suspends
      } else if (status === "error") {
        throw result;
      } else if (status === "success") {
        return result;
      }
    },
  };
}

// 🔸 Fake API
function fetchUserData() {
  console.log("Fetching data...");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: "Arun", age: 25 });
    }, 2000);
  });
}

// 🔸 Create a resource
const userResource = wrapPromise(fetchUserData());

// 🔸 Component that uses the data
function UserProfile() {
  const user = userResource.read(); // Suspends until data is ready
  return (
    <div>
      <h2>User Info:</h2>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
    </div>
  );
}

// 🔸 Main App
function App() {
  return (
    <div>
      <h1>Welcome to the App</h1>
      <Suspense fallback={<p>Loading user data...</p>}>
        <UserProfile />
      </Suspense>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
