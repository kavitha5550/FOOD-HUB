import React, { useState } from 'react';
import { assets } from '../assets/frontend_assets/assets';
import Login from './Login';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
const SignUp = ({  setShowlogin,setModel }) => {
 const[userdata,setUserdata]=useState({
  name:'',
  email:'',
  password:''
 })

 

  // Submit signup form
  const handleRegister = async(e) => {
    e.preventDefault();
    // const emailregex=`/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]
    // +\.[a-zA-Z]{2,}$/`;
    if(!userdata.name || !userdata.email || !userdata.password){
      return toast.error('All fields are required');
    }
    if(userdata.password.length<6){
      return toast.error('Password must be at least 6 characters');
    }
    const toastId=toast.loading('Please wait...');
   try{
    const res = await axios.post('http://localhost:5000/register',userdata)
   
  toast.success('Sign Up Successful',{id:toastId})
  setUserdata({name:'',email:'',password:''})

   }
   catch(err){
 console.log(err)
   toast.error('Sign Up Failed',{id:toastId})
   }
 
 
    
 
  };

  // Close signup modal
  const closeSignUp = () => {
   setModel(false);
  };

  // Switch to login modal
  const goToLogin = () => {
     setShowlogin(true);
  };

  const  handleChange=(e)=>{
    const{name,value}=e.target;
    setUserdata({...userdata,
      [name]:value
    })
  } 

  return (
    <div 
     className="fixed inset-0 top-25  bg-opacity-40 flex justify-center items-center z-50">
      <Toaster position='top-right'/><form 
        onSubmit={handleRegister}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Register</h2>
          <img
            onClick={closeSignUp}
            src={assets.cross_icon}
            alt="close"
            className="h-4 cursor-pointer"
          />
        </div>

        {/* Name Field */}
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-semibold mb-1">
            Name
          </label>
          <input
            type="text"
            name='name'
            value={userdata.name}
            onChange={handleChange}            placeholder="Enter your name"
            className="w-full border
             rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-3">
          <label className="block text-gray-700 text-sm font-semibold mb-1">
            Email
          </label>
          <input
            type="email"
            name='email'
            value={userdata.email}
              onChange={handleChange} 
            placeholder="Enter your email"
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-semibold mb-1">
            Password
          </label>
          <input
            type="password"
            name='password'
            value={userdata.password}
              onChange={handleChange} 
            placeholder="Enter your password"
            className="w-full border rounded p-2 focus:outline-none focus:ring-2 focus:ring-red-400"
            required
          />
        </div>

        {/* SignUp Button */}
        <button
      
          type="submit"
          className="w-full  cursor-pointer border border-red-500 text-red-500 px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300"
        >
          Sign Up
        </button>
      

        {/* Switch to Login */}
        <div className="text-center mt-4 text-sm">
          Already have an account?
          <span
            onClick={goToLogin}
            className="text-red-500 cursor-pointer ml-1 hover:underline"
          >
            Login
          </span>
        </div>
      </form>

     
     
    </div>
  );
};

export default SignUp;
