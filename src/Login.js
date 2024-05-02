import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom'
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

function Login() {
  const navigate = useNavigate()
  const firebaseConfig = {
    apiKey: "AIzaSyD97hbTD1I3Y53tUJUXuiqmZfg7Awq2yjk",
  authDomain: "mirman-blackbaud.firebaseapp.com",
  projectId: "mirman-blackbaud",
  storageBucket: "mirman-blackbaud.appspot.com",
  messagingSenderId: "549298260918",
  appId: "1:549298260918:web:64877382bd7db9d3950f17",
  measurementId: "G-81JYP3X871"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const auth = getAuth(firebaseApp);
  const provider = new GoogleAuthProvider();
  function gogleLogin(){
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}
  
  // Initialize Firebase
  

  const [email, setEmail] = useState('');
  const [authError, setAuthError] = useState('')
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isValidEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleFormSubmit = (event) => {
    setAuthError('')
    let valid = true
    event.preventDefault();

    if (email === '') {
      setEmailError('Email is required');
      valid=false
    } else if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email');
      valid=false
      
    } else {
      setEmailError('');
    }

    if (password === '') {
      setPasswordError('Password is required');
      valid=false
    } else if (password.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
      valid=false
    } else {
      setPasswordError('');
    }

    if(!valid){
        return
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/dashboard")
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError("Incorrect email or password")
      });
  };

  return (
    <div className="login-container">
      <h2 id="loginHeader">Login</h2>
      <form onSubmit={handleFormSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3 className="error" id="email-error">{emailError}</h3>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <h3 className="error" id="pwd-error">{passwordError}</h3>
        <input value="Login" type="submit" onClick={handleFormSubmit}/>
        <h3 className="error">{authError}</h3>
        </form>
      <div className="login-footer">
        <button onClick={gogleLogin} >Google Login</button>
      </div>
    </div>
  );
}

export default Login;
