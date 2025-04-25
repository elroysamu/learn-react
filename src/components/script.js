import React from 'react';
import ReactDOM from 'react-dom/client';
import { Header } from './Header';
import { Body } from './Body';

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AppLayout />);



