import {  React, useState } from "react";

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

   function signInHandler(){
    setMessage('Loading...');

    if(email === 'hemant1234@gmail.com' && password == '1234'){
        setTimeout(()=>{
            setMessage('Login successful')
        }, 3000)
    }else{
        setTimeout(()=>{
            setMessage('Check your email or password!')
        }, 3000)
    }
   }

    return<>
        <h1>Login</h1>
        <input type="text" placeholder="Email" onChange={(e)=> setEmail(e.target.value)}/><br/>
        <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)}/><br/>
        <button onClick={signInHandler}>Signin</button>
        {message && <p>{message}</p>}
    </>
}