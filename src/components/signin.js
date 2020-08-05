import React,{useContext} from 'react'
import './signin.css'

import Card from './helperComponents/card';
import FormGroup from './helperComponents/formGroup';

import useFormState from './hooks/useFormState';

import {Link,Redirect} from 'react-router-dom';
import auth from './firebase/firebase';
import {AuthContext} from './firebase/auth';

const Signin = (props) => {
    const[email,setEmail,resetEmail] = useFormState("");
    const[password,setPassword,resetPassword] = useFormState("");
    
    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await auth.signInWithEmailAndPassword(email,password);
            props.history.replace('/')
        } catch(error){
            alert(error)
        }
    }

    const {user} = useContext(AuthContext);
    if(user){
        return <Redirect to='/'/>
    }

    return (
        <div className="signin">
            <Card header="Sign In!!">
                <form onSubmit={handleSubmit} >
                    <FormGroup>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email"
                            value={email} onChange={setEmail} required  />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="password">Password</label>
                        <input id="password" 
                            value={password} onChange={setPassword} type="password" required />
                    </FormGroup>
                    <div className="signin-submission">
                        <button type="submit">Sign In</button>
                        <p>Don't have an account?<br /><Link to='/signup'>Sign Up</Link></p>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default Signin;