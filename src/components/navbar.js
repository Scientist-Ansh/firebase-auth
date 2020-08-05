import React from 'react';
import './navbar.css'

import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
            <nav className="navbar">
                <div className="navbar-brand">
                    <Link to='/' className="navbar-brand-text">Home</Link>
                </div>
            </nav>
    )
}

export default Navbar;