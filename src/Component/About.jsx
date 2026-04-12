import React from 'react'

const About = () => {
  return (
    <div className="min-h-[100%] bg-[#0d0d0d] text-white px-6 py-10">
      
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        
        <h1 className="text-4xl font-bold text-[#C8F400]">
          About SkyMart
        </h1>

        <p className="text-[#b0b0b0] text-lg">
          SkyMart is your one-stop online shopping platform where you can find
          thousands of products at the best prices. We aim to deliver quality
          products with fast and reliable service.
        </p>

        <p className="text-[#b0b0b0] text-lg">
          Our mission is to make online shopping simple, affordable, and
          enjoyable for everyone. Whether you are looking for fashion,
          electronics, or daily essentials, SkyMart has everything you need.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
          
          <div className="border border-[#2f2f2f] p-4 rounded-xl text-center">
            <h2 className="text-2xl text-[#C8F400]">20K+</h2>
            <p className="text-[#b0b0b0]">Products</p>
          </div>

          <div className="border border-[#2f2f2f] p-4 rounded-xl text-center">
            <h2 className="text-2xl text-[#C8F400]">50K+</h2>
            <p className="text-[#b0b0b0]">Users</p>
          </div>

          <div className="border border-[#2f2f2f] p-4 rounded-xl text-center">
            <h2 className="text-2xl text-[#C8F400]">4.9⭐</h2>
            <p className="text-[#b0b0b0]">Rating</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About