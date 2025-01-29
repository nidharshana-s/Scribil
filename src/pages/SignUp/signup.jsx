import React, { useState } from "react";
import Navbar from "../../components/NavBar/navbar"
import PasswordInput from "../../components/Input/PasswordInput";
import { Link, useNavigate } from "react-router-dom";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";

const signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate()
  
  const handleSignUp = async (e) => {
    e.preventDefault();

  if (!name) {
  setError("Please enter your name");
  return;
  }
  
  if (!validateEmail(email)){
      //console.log(no)
      setError("Please enter a valid email address");
      return;
    }
  if(!password){
      setError("Please enter the password")
      return;
    }
  
  setError('')

  try{
    const payload = {
      fullName: name,
      email: email,
      password: password
    };
    //console.log("Sending payload:", payload); // Add this line to inspect the payload

    const response = await axiosInstance.post("/create-acc", payload);

    if (response.data && response.data.error){
      setError(response.data.message)
      return
    }
    console.log(response)
    if(response.data && response.data.accessToken){
      //console.log("Access Token received:", response.data.accessToken);
      localStorage.setItem("token", response.data.accessToken)
      //console.log("Token stored in localStorage:", localStorage.getItem("token"));
      //console.log(localStorage.getItem("token"));
      navigate('/dashboard')
    }
    else{
      setError("No access token received from the server");
    }
  }catch(error){
    if (error.response && error.response.data && error.response.data.message){
      setError(error.response.data.message)
    }
    else{
      //console.log(error)
      setError("Unexpexted error occured. PLease try again later")
    }
  }
}

  return (


    <>
      <Navbar />
  
      <div className="flex items-center justify-center mt-28">
      <div className="w-96 border rounded bg-white px-7 py-10">
      <form onSubmit={handleSignUp}>
  
      <h4 className="text-2xl mb-7">SignUp</h4>
  
      <input
      type="text"
      placeholder="Name"
      className="input-box"
      value={name}
      onChange={(e) => {setName(e.target.value); setError(null);}}
  />
  
  <input
      type="text"
      placeholder="Email"
      className="input-box"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
  />
  
  <PasswordInput 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
  
              {error && <p className='text-red-500 text-xs pb-1'>{error}</p>}
  
              <button type="submit" className='btn-primary'>Create Account</button>
  
              <p className='text-xs text-center mt-4'>Already have an account{"  "}
                <Link to="/login" className='text-blue-600 underline'>
                  Login
                </Link>
              </p>
  
  </form>
  </div>
  </div>
  </>
  )
}

export default signup


