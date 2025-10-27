
import React ,{useContext, useState}from 'react'
import { assets,menu_list} from '../assets/frontend_assets/assets';
import { useNavigate } from 'react-router-dom';
import SignUp from '../Pages/SignUp';
import Login from '../Pages/Login';
import {Menu} from 'lucide-react';
import Slider from './Slider';
import { motion } from "framer-motion";
import { MyContext } from '../Context/MyContext';







const Navbar = () => {
    const[active,setActive]=useState('home');
   const[model,setModel]=useState(false);
   const[showlogin,setShowlogin]=useState(false);
   const[ListItem,setListItem]=useState(false);
   const[searchContent,setSearchContent]=useState(false);
   const{setSearch}=useContext(MyContext);
   
   const navigate=useNavigate();
   

 const isregistered=false;
    const signup=(prev)=>{
      setModel(prev=>!prev);
      setShowlogin(isregistered);
      console.log(menu_list)
    
      
    }
    const AddtoCart=()=>{
      navigate('/card')
    }
    
   
  return (
  <div className='lg:px-20 w-full h-full'>
  {/* Navbar */}
  <nav className='bg-white  mt-2 h-20 rounded-md px-5 shadow-md flex justify-between items-center'>
    {/* Logo */}
    <img src={assets.logo} alt='logo' className='h-8' />

    {/* Desktop Menu */}
    <ul className='hidden lg:flex space-x-6 text-lg text-gray-600'>
      <li className={`${active === 'home' ? 'font-bold' : ''}`} onClick={() => setActive('home')}>Home</li>
      <li className={`${active === 'about' ? 'font-bold' : ''}`} onClick={() => setActive('about')}>About</li>
      <li className={`${active === 'contact' ? 'font-bold' : ''}`} onClick={() => setActive('contact')}>Contact</li>
      <li className={`${active === 'cart' ? 'font-bold' : ''}`} onClick={() => setActive('cart')}>Cart</li>
    </ul>

    {/* Mobile & Icons */}
    <div className='flex items-center space-x-4'>
      {/* Menu Toggle */}
      <Menu onClick={() => setListItem(prev => !prev)} className='lg:hidden md:flex h-6 w-6 cursor-pointer text-gray-700' />

      {/* Mobile Menu */}
      {ListItem && (
        <ul className='lg:hidden absolute
         top-20 right-5 bg-white shadow-lg p-4 
         space-y-4 text-gray-600 text-lg rounded-md'>
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Cart</a></li>
        </ul>
      )}
      
      {/* Other Icons */}
      <img onClick={()=>{setSearchContent(!searchContent)}}
       src={assets.search_icon} alt='search' 
       className='
  rounded-full h-8 w-8 
  p-2 hover:bg-gray-200 cursor-pointer 
  transition-colors duration-200
' />
      {searchContent&&(
        <motion.input
        initial={{opacity:0,width:0}}
        animate={{opacity:1,width:150}}
        transition={{duration:0.3}}
        placeholder='Search...'
        className='px-5 py-2 border border-red-500 rounded-md outline-none 
        hover:scale-100'
        onChange={(e)=>{setSearch(e.target.value)}}
        />


        
      )}
      <img 
      onClick={AddtoCart}
      src={assets.basket_icon} alt='cart'
         className='
  rounded-full h-8 w-8 
  p-2 hover:bg-gray-200 cursor-pointer 
  transition-colors duration-200
'/>
      <img
        onClick={signup}
        src={assets.profile_icon}
        alt='user'
          className='
  rounded-full h-8 w-8 
  p-2 hover:bg-gray-200 cursor-pointer 
  transition-colors duration-200
'
      />
    </div>

    {/* SignUp/Login Modal */}
    {model && !showlogin && <SignUp setModel={setModel} setShowlogin={setShowlogin} />}
    {model && showlogin && <Login setShowlogin={setShowlogin} setModel={setModel} />}
  </nav>
<Slider/>


</div>

  )
}

export default Navbar