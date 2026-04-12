import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../Context/Contextapi'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    let { login,user } = useContext(AuthContext)
    let Navigate = useNavigate()
    let { register, handleSubmit, reset, formState: { errors, isValid } } = useForm( {
        mode:'onChange'
    })
   useEffect(() => {
  if (user) {
    Navigate("/");
  }
}, [user, Navigate]);
    let onSubmitHandle = (data) => {
        let users = JSON.parse(localStorage.getItem('users')) || [];
const foundUser = users.find(
  (u) =>
    u.full_email === data.email &&
    u.full_pass === data.password
);
if (!foundUser) {
  alert("Invalid email or password ❌");
  return;
}
login(foundUser);
Navigate("/");
    }
    return (
        <div className='min-h-screen flex flex-col md:flex-row bg-black'>


            <div className='hidden md:flex md:w-1/2 flex-col py-16 px-10  border border-[#6c6f63]'>

                <div className='mb-30'>
                    <h1 className='text-4xl text-[#7B7E6F]'>
                        Sky<span className='text-[#C8F400]'>Mart</span>
                    </h1>
                </div>

                <div className='flex flex-col gap-4'>
                    <h1 className='text-2xl text-[#C8F400]'>Welcome Back</h1>

                    <div className='flex flex-col gap-2'>
                        <h1 className='text-3xl text-[#7B7E6F]'>Shop the future</h1>
                        <h1 className='text-3xl text-[#C8F400]'>Today</h1>
                    </div>

                    <div className='flex flex-col gap-6'>
                        <p className='text-lg text-[#7B7E6F]'>
                            Thousands of products, lightning-fast delivery, <br />and prices that make your wallet happy.
                        </p>


                        <div className='flex flex-wrap gap-10'>
                            <div className='border border-[#7B7E6F] rounded-2xl px-15 py-3 flex flex-col items-center'>
                                <p className='text-[#C8F400] text-2xl'>20K+</p>
                                <p className='text-[#7B7E6F]'>Product</p>
                            </div>

                            <div className='border border-[#7B7E6F] rounded-2xl px-15 py-3 flex flex-col items-center'>
                                <p className='text-[#C8F400] text-2xl'>50K+</p>
                                <p className='text-[#7B7E6F]'>User</p>
                            </div>

                            <div className='border border-[#7B7E6F] rounded-2xl px-15 py-3 flex flex-col items-center'>
                                <p className='text-[#C8F400] text-2xl'>4.9⭐</p>
                                <p className='text-[#7B7E6F]'>Rating</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center w-full md:w-1/2 p-4'>

                <div className='w-full max-w-md border-2 p-6 rounded-xl bg-[#0e0d0d] border-[#666666]'>

                    <form onSubmit={handleSubmit(onSubmitHandle)} className='flex flex-col gap-3'>

                        <div>
                            <h1 className='text-white text-2xl'>Sign in</h1>
                            <p className='text-[#666666] text-sm'>
                                Enter your credentials to continue
                            </p>
                        </div>

                        <input
                            {...register('email', { required: 'email is required' })}
                            className='w-full text-lg px-4 py-3 border bg-[#1D1D1D] text-[#928f8f] rounded-xl focus:border-[#C8F400]'
                            type="email"
                            placeholder='Email Address'
                        />
                            {errors.email && (<p className="text-red-500 text-sm">{errors.email.message}</p>)}    
                        <input
                            {...register('password', { required: 'password is required' })}
                            className='w-full text-lg px-4 py-3 border bg-[#1D1D1D] text-[#928f8f] rounded-xl focus:border-[#C8F400]'
                            type="password"
                            placeholder='Password'
                        />
                            {errors.password && (<p className="text-red-500 text-sm">{errors.password.message}</p>)}
                        <button className='w-full text-lg py-3 rounded-xl bg-[#ceed46] hover:bg-[#e6fd7c] transition'>
                            Sign in
                        </button>
                        <p className="text-sm text-center text-[#7B7E6F] cursor-pointer">
                            Don’t have an account?{" "}
                            <span className ='text-[#C8F400]'
                                onClick={() => Navigate("/register")}
                                
                            >
                                Register
                            </span>
                        </p>
                    </form>
                </div>

            </div>

        </div>
    )
}

export default Login