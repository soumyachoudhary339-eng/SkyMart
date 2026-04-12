import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        mode: 'onChange'
    })

    const onSubmit = (data) => {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        const exists = users.find(
            (u) => u.full_email === data.full_email
        );
        if (exists) {
            alert("User already exists ⚠️");
            return;
        }
        if (data.full_pass !== data.full_conpass) {
            alert("Passwords do not match ❌");
            return;
        }
        users.push(data);
        localStorage.setItem("users", JSON.stringify(users));
        alert("Registered successfully ✅");
        reset();
        navigate("/login");
    }
    return (
        <div className='flex flex-col justify-center items-center h-screen bg-[#0D0D0D]'>

            <div className='mb-8 flex items-center gap-2'>
                <h1 className='text-2xl'>⚡</h1>
                <h1 className='text-3xl text-[#666666]'>
                    Sky<span className='text-[#C8F400]'>Mart</span>
                </h1>
            </div>

            <form
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col border rounded-2xl py-5 px-7 gap-3 min-w-[30%] bg-[#111111] border-[#666666]'
            >

                <h1 className='text-2xl text-white'>Create account</h1>

                <input
                    {...register('full_name', { required: 'Name is required' })}
                    placeholder='Full name'
                    className='px-3 py-2 border rounded-xl bg-[#1D1D1D] text-[#928f8f]'
                />
                {errors.full_name && <p className="text-red-500 text-sm">{errors.full_name.message}</p>}

                <input
                    {...register('full_email', { required: 'Email is required' })}
                    placeholder='Email Address'
                    className='px-3 py-2 border rounded-xl bg-[#1D1D1D] text-[#928f8f]'
                />
                {errors.full_email && <p className="text-red-500 text-sm">{errors.full_email.message}</p>}

                <input
                    {...register('full_pass', {
                        required: 'Password is required',
                        minLength: { value: 6, message: 'Min 6 chars' }
                    })}
                    type="password"
                    placeholder='Password'
                    className='px-3 py-2 border rounded-xl bg-[#1D1D1D] text-[#928f8f]'
                />
                {errors.full_pass && <p className="text-red-500 text-sm">{errors.full_pass.message}</p>}

                <input
                    {...register('full_conpass', { required: 'Confirm password required' })}
                    type="password"
                    placeholder='Confirm Password'
                    className='px-3 py-2 border rounded-xl bg-[#1D1D1D] text-[#928f8f]'
                />
                {errors.full_conpass && <p className="text-red-500 text-sm">{errors.full_conpass.message}</p>}

                <button className='py-2 rounded-xl bg-[#ceed46] hover:bg-[#e6fd7c] transition'>
                    Create account
                </button>

                <p className="text-sm text-center text-[#7B7E6F]">
                    Already have an account?{" "}
                    <span
                        onClick={() => navigate("/login")}
                        className="text-[#C8F400] cursor-pointer"
                    >
                        Login
                    </span>
                </p>

            </form>
        </div>
    )
}

export default Register