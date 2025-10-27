import React,{useEffect,useState} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'
import{ArrowLeft} from 'lucide-react'
import { useContext } from 'react'
import { MyContext } from '../Context/MyContext'
import toast,{Toaster} from 'react-hot-toast'
import axios from 'axios'
 
const Order = () => {
    const navigate=useNavigate()
    const{addCart,quantities}=useContext(MyContext)
    const[userdata,setUserData]=useState({
        firstName:'',
        lastName:'',
        email:'',
        street:'',
        zipcode:'',
        city:'',
        country:'',
    contact:'',
    })
    const [loading, setLoading] = useState(false);
     const loc=useLocation();

     const handleChange=(e)=>{
      const{name,value}=e.target;
      setUserData((prev)=>({...prev,[name]:value}))
     }

    const Proceedtoorder=()=>{
         navigate('/payment')
    }

   
    const gotocard=()=>{
        navigate('/card')
    }
    const DeliveryData=async(e)=>{
       e.preventDefault();
       setLoading(true);
      const res= await axios.post('http://localhost:5000/deliveryAddrees',userdata)
        try{
         toast(res.data.message)
         setUserData({firstName:'',lastName:'',email:'',street:'',zipcode:'',city:'',country:'',contact:''}) 
        }
        catch(err){
            console.log(err.message)
        }
      
    }
  
  return (
    <div className='w-screen h-screen px-10 py-10'>
        <Toaster position='top-right'/>
      <div className='flex justify-between items-center'>
          <span className='text-gray-900 text-2xl block px-5 py-5 font-bold'>Delivery Information</span>
               <ArrowLeft 
          className="rounded-full
           h-8 w-8 p-2 hover:bg-gray-200 
           cursor-pointer transition-colors 
           duration-200"
           onClick={gotocard}
        />
      </div>
       <div className='w-full lg:flex   flex-cols gap-5 bg-white
        rounded-lg
       shadow-lg'> 
       <div className=' w-full 
        gap-2 flex flex-col px-2 py-2'>
        <div className='flex gap-3 px-3 py-3'>
            <input  className="w-1/2  
        border rounded  focus:outline-none
        focus:ring-2 p-2 focus:ring-red-400"
            required type="text" name="firstName" value={userdata.firstName} onChange={handleChange} id=""
            placeholder='FirstName' />
            <input className="w-1/2 
        border rounded  focus:outline-none
        focus:ring-2 p-2 focus:ring-red-400"
            required type="text" name="lastName" value={userdata.lastName} onChange={handleChange} id=""
            placeholder='LastName' />
        </div>
   <div className='px-3 py-3'>   <input type="email"
       className="w-full 
        border rounded  focus:outline-none
        focus:ring-2 p-2 focus:ring-red-400"
            required name='email' value={userdata.email} onChange={handleChange}
            placeholder='Email' /></div>
             <div className='px-3 py-3'>  <input type="text"
       className="w-full 
        border rounded  focus:outline-none
        focus:ring-2 p-2 focus:ring-red-400"
            required  name='street' value={userdata.street} onChange={handleChange}
            placeholder='Street' />
            </div>
            <div className='flex gap-3 px-3 py-3'>
            <input  className="w-full  
        border rounded  focus:outline-none
        focus:ring-2 p-2 focus:ring-red-400"
            required type="text" name="city" value={userdata.city} onChange={handleChange} id=""
            placeholder='City' />
             
         </div>   
          
            
        <div className='flex gap-3 px-3 py-3'>
            <input  className="w-1/2  
        border rounded  focus:outline-none
        focus:ring-2 p-2 focus:ring-red-400"
            required type="text" name="zipcode" value={userdata.zipcode} onChange={handleChange} id=""
            placeholder='ZipCode' />
            <input  className="w-1/2 
        border rounded  focus:outline-none
        focus:ring-2 p-2 focus:ring-red-400"
            required type="text" name="country" value={userdata.country} onChange={handleChange} id=""
            placeholder='Country' />
        </div>
       <div className='px-3 py-3'> <input type="number"
       className="w-full 
        border rounded  focus:outline-none
        focus:ring-2 p-2 focus:ring-red-400"
            required name='contact' value={userdata.contact} onChange={handleChange}
            placeholder='Phone' /></div>
            <div className='flex justify-end'>
               <button 
 className="border  cursor-pointer text-black border-red-500 hover:text-white 
            font-semibold px-6 py-2 rounded-md
             hover:bg-red-600 transition"
onClick={DeliveryData}>Submit</button>
            </div>

          </div>
       <div className=' w-full '>
            <span className='text-2xl 
            block text-gray-900 px-5 py-5 font-bold' >Cart Total</span>
       <div className='flex
       justify-between px-2 py-2 border-b border-gray-900 '><p className=' 
       '>Total</p>
       <p>{loc.state?.totalPrice}</p></div>
     <div className='flex
       justify-between px-2 py-2 border-b border-gray-900 '><p className=' 
       '>Delivery Cost</p>
       <p>40</p></div>
       <p className='px-2 py-2 '>Total</p>
       <div className='flex justify-end px-5 py-5'>
        <button 
 className="border text-black border-red-500 hover:text-white 
              cursor-pointer font-semibold px-6 py-2 rounded-md
             hover:bg-red-600 transition"
onClick={Proceedtoorder}>Proceed to Payment</button>
            </div>
 
  </div>
            
    </div>
    </div>
  )
}

export default Order