import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Contextapi";

const Shop = () => {
 let {products,setProducts} =useContext(AuthContext)
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        console.log(res.data); 
        setProducts(res.data); 
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <div className="bg-[#0D0D0D]">
     
      <div className="flex justify-between items-center mx-auto max-w-7xl lg:px-20 mt-3">
        <h1 className="text-white text-2xl">All Products</h1>

        <button
          onClick={() =>{ navigate("/")}}
          className="text-white border rounded-2xl px-4 py-2 bg-green-600 hover:bg-green-700 transition"
        >
          Back to Home
        </button>
      </div>

     
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
         <button className="text-white border rounded-2xl px-4 py-2  " onClick={()=>{navigate("nasted")}}> open page</button>
     <Outlet/>
        {products?.map((item) => (
          <div
          onClick={()=>{navigate(`/productdetail/${item.id}`)}}
            key={item.id}
            className="p-4 border rounded-xl shadow border-[#2f2f2f] hover:-translate-y-2 transition duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-40 w-full object-contain rounded hover:scale-95 transition duration-300"
            />

            <h2 className="text-sm font-semibold mt-2 text-[#D1D1D1]">
              {item.title.slice(0, 40)}...
            </h2>

            <p className="text-gray-400">₹{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;