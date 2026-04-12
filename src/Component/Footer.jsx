import React from 'react'

const Footer = () => {
  return (
    <div className='flex flex-col justify-center items-center border-1 border-white bg-[#0D0D0D]'>
        <div className='text-white text-2xl p-2 mt-3 '>
            <h1 className='text-[#C8F400]'>SkyMart</h1>
        </div>
        <div className='text-white text-xs mb-7 '>
            <h1 className='text-[#565656]'>
            © 2025 SkyMart • Built with ⚛️ React, 🧠 Redux & ⚡ TanStack Query
            </h1>
        </div>
    </div>
  )
}

export default Footer