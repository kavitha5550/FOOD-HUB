import React, { useEffect, useContext, useState,useMemo } from "react";
import { MyContext } from "../Context/MyContext";
import { ArrowLeft,IndianRupee} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { assets, menu_list } from "../assets/frontend_assets/assets";


const Card = () => {
  const { addCart, setAddCart, quantities, setQuantities } =
    useContext(MyContext);

  const navigate = useNavigate();

  if (!Array.isArray(addCart)) return null;

  const gotoShop = () => {
    navigate("/");
  };

  const buy = (index) => {
    setQuantities((prev) => {
      const updatedIndex = [...prev];
      updatedIndex[index] = (updatedIndex[index] || 0) + 1;
      return updatedIndex;
    });
  };

  const cancel = (index) => {
    setQuantities((prev) => {
      const removeIndex = [...prev];
      removeIndex[index] = Math.max(1, removeIndex[index] || 0) - 1;
      return removeIndex;
    });
  };
const removeProduct = (name) => {
  setAddCart((prev) => prev.filter((item) => item.name !== name));
};



  const total= useMemo(()=>{
 return addCart.reduce((sum,item,index)=>{
      const qty=quantities[index]||0
      return sum+item.price*qty
  },0)
  })
   



  const ShopProduct = () => {
  
       navigate("/shop",{state:{totalPrice:total}});
  };

  return (
    <div
      className="bg-white 
     w-screen h-screen px-20 py-20"
    >
      <div className="flex justify-between items-center">
        
        <p className="text-2xl  py-5 font-bold text-gray-900">My Orders</p>
        <ArrowLeft
          className="rounded-full
   h-8 w-8 p-2 hover:bg-gray-200 
   cursor-pointer transition-colors 
   duration-200"
          onClick={gotoShop}
        />
      </div>
      <table className="min-w-full border-collapse border border-gray-300 shadow-md">
        <thead>
          <tr className="bg-gray-100 text-gray-700 uppercase text-sm font-medium">
            <th className="px-4 py-3 border border-gray-300">S.No</th>
            <th className="px-4 py-3 border border-gray-300">Image</th>
            <th className="px-4 py-3 border border-gray-300">Name</th>
            <th className="px-4 py-3 border border-gray-300">Price</th>
            <th className="px-4 py-3 border border-gray-300">Quantity</th>
            <th className="px-4 py-3 border border-gray-300">Remove</th>
          </tr>
        </thead>

        <tbody>
          {Array.isArray(addCart) &&
            addCart.map((item, index) => (
              <tr
                key={index}
                className="text-center border border-gray-300 hover:bg-gray-50 transition-all"
              >
                <td className="px-4 py-3 border border-gray-300">
                  {index + 1}
                </td>
                <td className="px-4 py-3 flex justify-center">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="px-4 py-3 border border-gray-300">
                  {item.name}
                </td>
                <td className="px-4 py-3 border border-gray-300">
                  ₹{item.price}
                </td>
                <td
                  className="px-4 py-3 
        flex items-center relative  gap-5 justify-center"
                >
                  <img
                    className="h-8 w-8"
                    onClick={() => {
                      buy(index);
                    }}
                    src={assets.add_icon_green}
                    alt="add"
                  />

                  <span>{quantities[index] || 0}</span>
                  <img
                    className="h-8 w-8"
                    onClick={() => {
                      cancel(index);
                    }}
                    src={assets.remove_icon_red}
                    alt="cancel"
                  />
                </td>
                <td>
                  {" "}
                  <button
                    onClick={() => removeProduct(item.name)}
                    className="ml-3 
        text-red-600 hover:text-red-800 
        font-bold text-lg"
                    title="Remove Item"
                  >
                    Clear
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <div className="flex flex-col items-end justify-end ">
    <div className="flex justify-around px-2 py-2 items-center"> 
    <p className='text-red-500 text-3xl font-bold'>Total:</p> 
      <IndianRupee className=" text-red-500 mt-1 " size={20} /><span
      className='text-xl font-bold'>{total}</span></div>
      
     <div>
         <button
          className="border text-black border-red-500
           hover:text-white 
            font-semibold px-6 py-2 rounded-md
             hover:bg-red-600  cursor-pointer transition"
          onClick={()=>{ShopProduct(addCart)}}
        
        >
          Shop
        </button>
     </div>
     </div>
    </div>
  );
};

export default Card;
