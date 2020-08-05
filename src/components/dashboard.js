import React,{useContext} from 'react';
import './dashboard.css';

import auth from './firebase/firebase';
import {AuthContext} from './firebase/auth';
import { Redirect } from 'react-router-dom';


const Dashboard = (props) =>{
    const handleSignout = ()=>{
        auth.signOut();
        props.history.replace('./loggedout')
    }
    const {user} = useContext(AuthContext);
    if(!user){
        return <Redirect to='/signin'/>
    }

    return (
        <div className="dashboard">
            <h1>
                Welcome to firebase Auth Demo!!!!!!
            </h1>
            <button onClick={handleSignout}>Log Out</button>
        </div>
    )
}

export default Dashboard;