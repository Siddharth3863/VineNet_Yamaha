// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar sticky-top bg-body-tertiary bg-dark border-bottom border-body" data-bs-theme="dark">
            <div class="container-fluid">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
            </ul>
            </div>
        </nav>
    );
};
export default Navbar;
