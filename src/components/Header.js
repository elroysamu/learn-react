import React from 'react';

export const Header = () => {
    return (
        <header>


            <img src="https://picsum.photos/100" alt="Logo" className="logo" />
            <h1>My Website</h1>
            <nav className="nav-items">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>

            </nav>
        </header>
    );
}   