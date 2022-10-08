import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signup, useAuth, signInWithGooglePopup } from "../firebase";
import google from "../assets/google_icon.png";
// import {useAuth} from '../contexts/AuthContext'

function SignUp() {
  let emailRef = useRef();
  let passwordRef = useRef();
  let passwordConfirmRef = useRef();

  // Create Loading States
  const [loading, setLoading] = useState(false);

  const user = useAuth();
  const navigate = useNavigate();

  // Handle Signup withbGoogle Popup
  async function handleSignupWithGoogle() {
    setLoading(true);
    try {
      await signInWithGooglePopup();
      navigate("/");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
    setLoading(false);
  }
  // Handle SigUp with Email and Password
  async function handleSubmit(e) {
    e.preventDefault();
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      document.getElementById("passwordConfirm").style.border = "1px solid red";
      return alert("Passwords do not match");
    }
    setLoading(true);
    try {
      await signup(emailRef.current.value, passwordRef.current.value);
      navigate("/login");
    } catch (error) {
      console.error(error);
      alert(error.message);
    }
    setLoading(false);
  }
  const style =
    "w-full mt-3 p-3 bg-green-600 text-white font-semibold rounded-md outline-none hover:bg-green-500";
  return (
    <div className="max-w-[500px] h-fit border m-auto rounded-md p-6 mt-6">
      <form onSubmit={handleSubmit}>
        <h4 className="font-semibold text-4xl mb-4">Create Account</h4>
        <Link className="text-green-500 " to="/login">
          {" "}
          Already have an account?
        </Link>
        <input
          ref={emailRef}
          className=" w-full p-2 rounded-md outline-none border  bg-gray-50 mt-8 mb-3 focus:border-green-500"
          type="email"
          autoComplete="true"
          required
          placeholder="Email Address"
        />
        <input
          ref={passwordRef}
          className="w-full p-2 rounded-md outline-none border  bg-gray-50 mb-3  focus:border-green-500"
          type="password"
          autoComplete="true"
          required
          placeholder="Enter Password"
        />
        <input
          ref={passwordConfirmRef}
          id="passwordConfirm"
          className="w-full p-2 rounded-md outline-none border bg-gray-50 mb-3  focus:border-green-500"
          type="password"
          autoComplete="true"
          required
          placeholder="Confirm Password"
        />
        <button
          disabled={loading}
          className={loading ? `${style} bg-slate-400` : style}
        >
          SIGN UP
        </button>
        <div className="mt-4 text-center text-gray-500">
          <p className="mt-4 text-lg">Or</p>
        </div>
      </form>
      <button
        onClick={handleSignupWithGoogle}
        className="w-full flex items-center gap-x-[90px] font-semibold  mt-3 p-3 text-center bg-[#4285f4] text-white rounded-md outline-none hover:bg-blue-400"
      >
        <div className="w-7 h-7 bg-white rounded-md">
          <img src={google} alt="icon-google" />
        </div>
        SIGN UP WITH GOOGLE
      </button>
    </div>
  );
}

export default SignUp;
