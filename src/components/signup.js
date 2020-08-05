import React from 'react'
import './signup.css'

import Card from './helperComponents/card';
import FormGroup from './helperComponents/formGroup';

import useFormState from './hooks/useFormState';

import {Link} from 'react-router-dom';
import auth from './firebase/firebase';

const Signup = (props) => {
    const[email,setEmail,resetEmail] = useFormState("");
    const[password,setPassword,resetPassword] = useFormState("");

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            await auth.createUserWithEmailAndPassword(email,password);
            props.history.replace('/')
        } catch(error){
            alert(error)
        }

    }
    return (
        <div className="signup">
            <Card header="Sign Up!!">
                <form onSubmit={handleSubmit} >
                    <FormGroup>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="text"
                            value={email} onChange={setEmail} required  />
                    </FormGroup>
                    <FormGroup>
                        <label htmlFor="password">Password</label>
                        <input id="password"
                            value={password} onChange={setPassword} type="password" required />
                    </FormGroup>
                    <div className="signup-submission">
                        <button type="submit">Sign Up</button>
                        <p>Already have an account?<br /><Link to='/'>Sign In</Link></p>
                    </div>
                </form>
            </Card>
        </div>
    )
}

export default Signup;