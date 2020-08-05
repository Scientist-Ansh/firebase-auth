import React from 'react';
import './logout.css';

import {Link} from 'react-router-dom';
const Logout = () =>{
    return (
        <div className="logout">
            <h1>
                Successfully Logged Out!
            </h1>
            <Link to='/signin'>Return To Home</Link>
        </div>
    )
}

export default Logout;