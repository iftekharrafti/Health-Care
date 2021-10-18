import React, {useState} from 'react';
import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import "../Login/login.css";

const Signup = () => {
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const auth = getAuth();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleRegistration = (e) => {
        
        createUserWithEmailAndPassword(auth, email, password)
        .then(result =>{
            const user = result.user;
            console.log(user)
        })
        e.preventDefault();
    }

    return (
        <div className="login">
      <h2>Signup</h2>
      <div className="login-form">
        <form onSubmit={handleRegistration}>
          <div className="row">
              <div className="col">
                      <div className="form-group mb-4">
                          <label htmlFor="email">Email</label>
                          <input onBlur={handleEmailChange} type="email" placeholder="Enter Your Email" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input onBlur={handlePasswordChange} type="Password" placeholder="Enter Your Password" />
                      </div>
                      <button className="btn btn-secondary mt-3" type="submit">Register</button>
              </div>
          </div>
        </form>
      </div>
    </div>
    );
};

export default Signup;