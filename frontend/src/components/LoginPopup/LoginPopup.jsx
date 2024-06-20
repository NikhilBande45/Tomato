import React, { useContext, useEffect, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios'

const LoginPopup = ({setShowLogin}) => {


    const {url , setToken} = useContext(StoreContext);

    const [currentState , setCurrentState] = useState('Login');

    const[data , setData] = useState({
        name : "",
        email : "",
        password : ""
    });

    const onChangeHandler = (event) =>{
        const name = event.target.name;
        const value = event.target.value;

        setData((data)=>({...data , [name] : value}))

    }

    const onLogin = async (event) => {
        
        event.preventDefault();

        let newUrl = url;

        if(currentState === "Login"){
            newUrl += "/api/user/login"
        } else {
            newUrl += "/api/user/register"
        }

        console.log(newUrl , data);

        const response = await axios.post(newUrl , data)

        console.log(response)
        

        if(response.data.success){
            setToken(response.data.token);
            localStorage.setItem("token" , response.data.token)
            setShowLogin(false)
        } else {
            alert(response.data.message)
        }   
    }

  return (
    <div className='login-popup'>
      <form className='login-popup-container' onSubmit={onLogin}>
        <div className="login-popup-title">
            <h2>{currentState}</h2>
            <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} />
        </div>
        <div className="login-popup-inputs">
            {currentState==="Login" ? <></> : <input name="name" onChange={onChangeHandler} value={data.name}type="text" placeholder='Your Name' required />}
            <input name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder='Your Email' required />
            <input name="password" onChange={onChangeHandler} value={data.password} type="password" placeholder='Your Password' required />
            <button type="submit">{currentState==="SignUp" ? "Create Account" : "Login" }</button>
            <div className="login-popup-condition">
                <input type="checkbox" required />
                <p>By continuing, I agree to the terms of use & privacy policy</p>
            </div>

            {
                currentState==='SignUp' 
                ? <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span></p> 
                : <p>Create new Account <span onClick={()=>setCurrentState("SignUp")}>Click Here</span></p>
            }
            
            
        </div>
      </form>
    </div>
  )
}

export default LoginPopup
