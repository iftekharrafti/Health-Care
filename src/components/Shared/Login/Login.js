import React, {useState} from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./login.css";
import useAuth from '../../hooks/useAuth';

const Login = () => {
    const {signInWithGoogle} = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const auth = getAuth();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user)
        })
    }

  return (
    <div className="login">
      <h2>Login</h2>
      <div className="login-form">
        <form onSubmit={handleLogin}>
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
                      <p className="text-danger">{error}</p>
                      <button className="btn btn-secondary mt-3" type="submit">Login</button>
              </div>
          </div>
        </form>
      </div>
      <div className="icons">
      <button onClick={signInWithGoogle} className="btn-facebook"><i class="fab fa-google"></i></button>
      </div>
    </div>
  );
};

export default Login;
