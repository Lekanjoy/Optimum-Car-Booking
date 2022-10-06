import React, {useRef, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {login, useAuth} from '../firebase'
import google from '../assets/google_icon.png'


function Login() {
    let emailRef = useRef()
    let passwordRef = useRef()
    // Create Loading States
    const [loading, setLoading] = useState(false);

    const user = useAuth()

    const navigate = useNavigate ();
   // Handle Login
    async function handleLogin(e) {
        e.preventDefault(); 
        if(emailRef.current.value === '' || passwordRef.current.value === ''){
            alert('Email or Password cannot be empty!')
            return
        }
        setLoading(true)
        try {
          await login(emailRef.current.value, passwordRef.current.value)  
          navigate('/');
        } catch (error) {
          console.error(error);
          alert(error.message)  
        }
        setLoading(false)
    }
    const style = 'w-full mt-3 p-3 bg-green-600 text-white font-semibold rounded-md outline-none hover:bg-green-500 '
  return (
    <div className="max-w-[500px] h-fit border m-auto rounded-md p-6 mt-12">
      <form onSubmit={handleLogin} >
        <h4 className='font-semibold text-4xl text-center mb-4 text-primaryText'>Welcome</h4>
        <input ref={emailRef} className=' w-full p-4 rounded-md outline-none border  bg-gray-50 mt-8 mb-3 focus:border-green-500' type="email" autoComplete='true' placeholder='Email Address'/>
        <input ref={passwordRef} className='w-full p-4  focus:border-green-500 rounded-md outline-none border  bg-gray-50 mb-3' type="password" autoComplete='true' placeholder='Enter Password'/>
        <button disabled={loading}  className={loading ? `${style} bg-slate-400` : style}  >SIGN IN</button>
        <div className="mt-4 text-center text-gray-500">
          <span className="">
          Don't have an account?
          </span>
          <Link to="/signup" className='text-green-500 '> Create new account</Link>
          <p className='mt-4 text-lg'>Or</p>
        </div>
      </form>
       <button className='w-full flex items-center gap-x-[90px] mt-3 p-3 bg-[#4285f4] text-white font-semibold rounded-md outline-none hover:bg-blue-400'>
          <div className="w-7 h-7 bg-white rounded-md"><img src={google} alt="icon-google" /></div>
          SIGN IN WITH GOOGLE</button>
    </div>
  );
}

export default Login;