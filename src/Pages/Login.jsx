import React,{useState} from 'react';
import { assets } from '../assets/frontend_assets/assets';
import toast, {Toaster} from 'react-hot-toast'; 
import axios from 'axios';
const Login = ({ setShowlogin,setModel  }) => {
  const[userdata,setUserdata]=useState({
    email:'',
    password:''
  })
  const handleChange=(e)=>{
   const{name,value}=e.target;
   setUserdata({...userdata,
    [name]:value
   })
  }
  // Close the login popup
  const closeLogin = () => {
    setShowlogin(false);
  };

  // When user clicks Login button
  const handleLogin =async (e) => {
    e.preventDefault();
   if(!userdata.email){
    return toast.error('Email is required');
   }if(!userdata.password){
    return toast.error('Password is required');
   }
   const toastId=toast.loading('Please wait...');
   try{
    const res=await axios.post('http://localhost:5000/login',userdata)

     toast.success(res.data.message,{id:toastId});

   }
  catch(err){
    console.log(err)
 return toast.error('Authentication is Failed try again',{id:toastId})
  }
   
}
  // Switch to Register form
  const goToRegister = () => {
    setShowlogin(false);
    setRegister(true);
  };

  return (
    <div className="fixed inset-0 top-25  bg-opacity-40 flex justify-center items-center z-50">
     <Toaster position='top-right'/> <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded-lg shadow-lg w-96"
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Login</h2>
          <img
            onClick={closeLogin}
            src={assets.cross_icon}
            alt="close"
            className="h-4 cursor-pointer"
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

        {/* Login Button */}
        <button
          type="submit"
          className="w-full border border-red-500 
          text-red-500  cursor-pointer px-4 py-2 rounded-md hover:bg-red-500 hover:text-white transition duration-300"
        >
          Login
        </button>

        {/* Switch to Register */}
        <div className="text-center mt-4 text-sm">
          Don’t have an account?
          <span
            onClick={goToRegister}
            className="text-red-500 cursor-pointer ml-1 hover:underline"
          >
            Register
          </span>
        </div>
      </form>
    </div>
  );
};

export default Login;
