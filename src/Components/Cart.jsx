import React, { useState, useEffect } from "react";
import { food_list } from "../assets/frontend_assets/assets";
import { IndianRupee } from "lucide-react";
import { assets } from "../assets/frontend_assets/assets";
import { useContext } from "react";
import { MyContext } from "../Context/MyContext";
import Pagination from "../Pages/Pagination";
import Footer from "../Components/Footer";

const Cart = () => {
  const { search } = useContext(MyContext);
  const { addCart, setAddCart, setQuantities } = useContext(MyContext);
  const [currentpage, setCurrentPage] = useState(1);
  const [postPage, setPostPage] = useState(18);

  const addProduct = (product) => {
    const exists = addCart.find((item) => item._id === product._id);

    if (exists) {
      // Product already in cart → increment its quantity
      setQuantities((prev) =>
        prev.map((qty, i) => (addCart[i].id === product._id ? qty + 1 : qty))
      );
    } else {
      // Product not in cart → add it and set quantity 1
      setAddCart((prev) => [...prev, product]);
      setQuantities((prev) => [...prev, 1]);
    }
  };

  // Pagination
  const lastIndex = currentpage * postPage;
  const firstIndex = lastIndex - postPage;
  const indexPage = food_list.slice(firstIndex, lastIndex);

  return (
    <div className="mt-10 px-10 py-10 gap-10">
      <div
        className="grid lg:grid-cols-3
        sm:grid-cols-1 md:grid-cols-2 gap-5"
      >
        {indexPage?.filter((item) => {
    // if search is empty, show all items
    const safeSearch=(search||"").trim().toLowerCase();
    if (safeSearch === "") return true;
    // otherwise, filter items that match the search
    return (item?.name || "")
      .toLowerCase()
      .includes(safeSearch);
  })
          .map((foods, index) => (
            <div
              className="bg-white shadow-lg rounded-lg hover:scale-95
        transform-transition duration-300"
              key={index}
            >
              <img className="rounded-lg relative" src={foods.image} />
              <div className="flex mr-10 cursor-pointer px-2 relative">
                {/* Main White Add Icon */}
                <img
                  className="absolute h-10 rounded-full border-2
         border-transparent hover:border-red-500 -top-15 right-0"
                  src={assets.add_icon_white}
                  alt="Add"
                  onClick={() => addProduct(foods)}
                />
              </div>
              <div
                className="flex justify-between
          items-center"
              >
                <p
                  className="text-md text-gray-800
            font-bold px-2 py-2"
                >
                  {foods.name}
                </p>
                <img className="px-10 h-5" src={assets.rating_starts} />
              </div>
              <p className="px-2 py-2 text-10">{foods.description}</p>
              <p
                className="flex items-center justify-start
                text-gray-800 font-semibold 
                rounded-lg px-3 py-2"
              >
                <IndianRupee size={14} className="mr-1 text-red-500" />
                {foods.price}
              </p>
            </div>
          ))}
      </div>
      <Pagination
        foodlist={food_list.length}
        postPage={postPage}
        setCurrentPage={setCurrentPage}
        currentpage={currentpage}
      />
      <Footer />
    </div>
  );
};

export default Cart;
