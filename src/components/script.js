import React, {startTransition, useState} from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Header';
import { Body } from './Body';
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router';
// import { About } from './About';
import { Contact } from './Contact';
import { Error } from './Error';
import { RestaurantMenuCard } from './RestaurantMenuCard';

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



ReactDOM.createRoot(document.getElementById('root')).render(<App />);



