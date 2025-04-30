import React from 'react';
import {Link} from "react-router";

export const Header = () => {
    return (
        <header>


            <img src="https://picsum.photos/100" alt="Logo" className="logo" />
            <h1>My Website</h1>
            <nav className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

            </nav>
        </header>
    );
}   