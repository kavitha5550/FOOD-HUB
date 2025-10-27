import React from 'react'
import Navbar from './Components/Navbar'
import { Routes, Route } from 'react-router-dom';
import { ContextProvider } from './Context/MyContext';
import Card from './Pages/Card'
import Order from './Pages/Order';
import Cash from './Pages/Cash';
import Footer from './Components/Footer';



const App = () => {
  return (
    <div className='w-full h-screen'>
      <ContextProvider>
    
     <Routes>
      <Route path='/' element={<Navbar/>}/>
       <Route path='/card' element={<Card/>}/>
             <Route path='/shop' element={<Order/>}/>
                <Route path='/payment' element={<Cash/>}/>
                  <Route path='/footer' element={<Footer/>}/>
                  
       

     </Routes>
      </ContextProvider> 
    </div>
  )
}

export default App
