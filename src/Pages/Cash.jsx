import React,{useEffect, useState} from "react";
import { CreditCard, Smartphone, Wallet, ArrowLeft } from "lucide-react";

const Cash = () => {
  const[confirmPayment,setConfirmPayment]=useState(false)
  const handleContinue=()=>{
    setConfirmPayment(prev=>!prev)
  
  }
 
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-6 py-10">
      {/* Header */}
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-between border-b pb-4 mb-4">
        
            <ArrowLeft className="mr-2 w-5 h-5"  onClick={() => window.history.back()} />
         
          <h1 className="text-2xl font-semibold text-gray-800">Proceed to Payment</h1>
          <div></div>
        </div>

      
        
        

        {/* Payment Options */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-4">Choose Payment Method</h2>

          <div className="space-y-3">
            {/* UPI */}
            <button className="w-full flex items-center justify-between bg-white border hover:border-red-400 hover:bg-red-50 rounded-xl p-4 transition">
              <div className="flex items-center space-x-3">
                <Smartphone className="text-red-500" />
                <span className="text-gray-800 font-medium">UPI Payment</span>
              </div>
              <span className="text-gray-500 text-sm">Google Pay / PhonePe / Paytm</span>
            </button>

            {/* Credit / Debit Card */}
            <button className="w-full flex items-center justify-between bg-white border hover:border-red-400 hover:bg-red-50 rounded-xl p-4 transition">
              <div className="flex items-center space-x-3">
                <CreditCard className="text-red-500" />
                <span className="text-gray-800 font-medium">Credit / Debit Card</span>
              </div>
              <span className="text-gray-500 text-sm">Visa / Mastercard / RuPay</span>
            </button>

            {/* Wallets */}
            <button className="w-full flex items-center justify-between bg-white border hover:border-red-400 hover:bg-red-50 rounded-xl p-4 transition">
              <div className="flex items-center space-x-3">
                <Wallet className="text-red-500" />
                <span className="text-gray-800 font-medium">Wallets</span>
              </div>
              <span className="text-gray-500 text-sm">Amazon Pay / Freecharge / Paytm</span>
            </button>
          </div>
        </div>

        {/* Proceed Button */}
        <div className="mt-8 flex justify-end">
           <button
          onClick={handleContinue}
          className="border text-black border-red-500
           hover:text-white 
            font-semibold px-6 py-2 rounded-md
             cursor-pointer hover:bg-red-600 transition"
        >
          Continue Shopping
        </button>
       
        </div>
         {confirmPayment&&(
           <div>
             <h2 className="text-3xl font-bold text-gray-800 mb-2">Payment Successful!</h2>
        <p className="text-gray-600 mb-6">
          Your order has been confirmed. A confirmation email will be sent to you shortly.
        </p>
            </div>
        )}
      </div>
      
    </div>
  );
};

export default Cash;
