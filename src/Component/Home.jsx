import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/Contextapi'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    let {user} = useContext(AuthContext)
    const navigate = useNavigate();
     useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

    return (
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10  bg-black '>
            <div className='flex  justify-between gap-6 border border-white  rounded-2xl p-6'>
                <div className='flex flex-col gap-4'>
                    <h1 className='text-[#C8F400] text-sm'>
                        Good afternoon 👋
                    </h1>
                    <h1 className='text-gray-300 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight'>
                        Welcome back,
                        <span className='block text-[#C8F400]'>{user ? user.full_name.split(" ")[0] : "Guest"}!</span>
                    </h1>
                    <p className='text-gray-300 text-sm sm:text-base'>
                        Discover today's picks — hand-curated products across <br /> electronics, fashion, and more.
                    </p>
                    <div className='flex  gap-3'>
                        <button className='text-gray-300 border rounded-xl px-4 py-2'>
                            Shop now
                        </button>
                        <button className='text-gray-300 border rounded-xl px-4 py-2'>
                            View all products
                        </button>
                    </div>
                </div>
                <div className='flex flex-row gap-4 mt-15 sm:flex-col '>
                    <div className='border border-[#C8F400] rounded-xl p-4 bg-[#23280F] flex flex-col items-center justify-center '>
                        <p className='text-[#C8F400] text-xl'>20+</p>
                        <p className='text-[#7B7E6F] text-xs'>Products Available</p>
                    </div>
                    <div className='border border-white rounded-xl p-4 flex flex-col items-center justify-center '>
                        <p className='text-white text-xl'>Free</p>
                        <p className='text-[#7B7E6F] text-xs'>Delivery on ₹999+</p>
                    </div>

                </div>
            </div>
            <div className='grid  sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-8'>

                <div className='flex flex-col justify-center border-2 p-5 rounded-2xl border-[#E5E7EB]'>
                    <h1 className='font-bold text-2xl text-white'>0</h1>
                    <h1 className='text-lg text-[#888888]'>Cart Items</h1>
                    <p className='text-xs text-[#4D4D4D]'>In your bag</p>
                </div>

                <div className='flex flex-col justify-center border-2 p-5 rounded-2xl border-[#E5E7EB]'>
                    <h1 className='font-bold text-2xl text-white'>$0.00</h1>
                    <h1 className='text-lg text-[#888888]'>Cart Value</h1>
                    <p className='text-xs text-[#4D4D4D]'>Ready to checkout</p>
                </div>

                <div className='flex flex-col justify-center border-2 p-5 rounded-2xl border-[#E5E7EB]'>
                    <h1 className='font-bold text-2xl text-white'>5</h1>
                    <h1 className='text-lg text-[#888888]'>Top Products</h1>
                    <p className='text-xs text-[#4D4D4D]'>Highly rated</p>
                </div>

                <div className='flex flex-col justify-center border-2 p-5 rounded-2xl border-[#E5E7EB]'>
                    <h1 className='font-bold text-2xl text-white'>6</h1>
                    <h1 className='text-lg text-[#888888]'>Categories</h1>
                    <p className='text-xs text-[#4D4D4D]'>To explore</p>
                </div>

            </div>
            <div>
                <div className='flex justify-between p-4'>
                    <h1 className='text-white'>Shop by Category</h1>
                    <h1 className='text-[#abd103] hover:text-[#dcf95d] cursor-pointer'>View All</h1>
                </div>
                </div>
                <div className='grid  lg:grid-cols-4 sm:grid-cols-2 gap-5 '>
                    <div className='bg-white border-2 flex flex-col justify-center items-center rounded-2xl py-6 translate-y-1 hover:translate-y-0 transition duration-500'>
                    <h1>Electronics</h1>
                     <p>17 iteams</p>
                     </div>
                     <div className='bg-white border-2 flex flex-col justify-center items-center rounded-2xl py-6 translate-y-1 hover:translate-y-0 transition duration-500'>
                        <h1>Clothing</h1>
                        <p>2 items</p>
                     </div>
                     <div className='bg-white flex flex-col justify-center items-center rounded-2xl py-6 translate-y-1 hover:translate-y-0 transition duration-500'>
                        <h1>Furniture</h1>
                        <p>3 iteams</p>
                     </div>
                
                <div  className='bg-white flex flex-col justify-center items-center rounded-2xl py-6 translate-y-1 hover:translate-y-0 transition duration-500'>
                    <h1>Home</h1>
                    <p>14 iteams</p>
                </div>
                <div  className='bg-white flex flex-col justify-center items-center rounded-2xl py-6 translate-y-1 hover:translate-y-0 transition duration-500'>
                    <h1>Sports</h1>
                    <p>8 iteams</p>
                </div>
                <div  className='bg-white flex flex-col justify-center items-center rounded-2xl py-6 translate-y-1 hover:translate-y-0 transition duration-500'>
                    <h1>Accessories</h1>
                    <p>6 iteams</p>
                </div>
            </div>
            <div className='grid  lg:grid-cols-2 sm:grid-cols-1  gap-4 mt-4'>
                <div className='bg-white rounded-2xl'>
                    <h1>⭐ Top Rated</h1>
                </div>
                <div className='bg-white rounded-2xl'>
                    <h1>⚡ New Ariivals</h1>
                </div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 gap-5 mt-12 '>
                <div className='border-2 border-[#E5E7EB] rounded-2xl p-5 flex flex-col justify-center'>
                    <h1 className='text-[#CFCFCF]'>⚡Fast Delivery</h1>
                    <p className='text-[#595959]'>Same-day on select items</p>
                </div>
                <div className='border-2 border-[#E5E7EB] rounded-2xl p-5 flex flex-col justify-center'>
                    <h1 className='text-[#CFCFCF]'>
                        🛡️ Secure Payments
                    </h1>
                    <p className='text-[#595959]'>100% encrypted checkout</p>
                </div>
                <div className='border-2 border-[#E5E7EB] rounded-2xl p-5 flex flex-col justify-center'>
                    <h1 className='text-[#CFCFCF]'>🏷️ Best Price</h1>
                    <p className='text-[#595959]'>Price-match guarantee</p>
                </div>
            </div>
        </div>
    )
}

export default Home