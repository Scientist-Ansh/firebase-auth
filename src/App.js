import React from 'react';
import './App.css';

import Navbar from './components/navbar';
import Logout from './components/logout';
import Signin from './components/signin';
import Signup from './components/signup';
import Dashboard from './components/dashboard';


import {Switch,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <Navbar/>
      
      <Switch>
        <Route exact path='/' component={Dashboard}/>  
        <Route exact path='/signin' component={Signin}/>  
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/loggedout' component={Logout}/>
      </Switch>
      
      
    </div>
  );
}

export default App;
