import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/Contextapi";

const Nevbar = () => {
    let { user,logout } = useContext(AuthContext)
    const navigate = useNavigate();
    const handleLogout = () => {
        logout();              
        navigate("/login");    
    };
    
    return (
        <div>
            <div className='flex justify-between bg-gray-900 px-8 lg:px-39 py-2 border border-white'>
                <h1 className='text-3xl text-gray-400'>
                    ⚡Sky<span className='text-[#C8F400]'>Mart</span>
                </h1>
                <div className='hidden md:flex gap-8 mt-2'>
                    <Link to='/' className='text-[#C8F400] hover:underline'>Home</Link>
                    <Link to='/Shop' className='text-gray-400 hover:text-white'>Shop</Link>
                    <Link to='/About' className='text-gray-400 hover:text-white'>About</Link>
                </div>
                <div className='flex gap-3 items-center'>
                    <div className='border px-3 py-1 rounded-lg flex gap-2 bg-gray-600'>
                        <span className='px-2 rounded bg-[#C8F400] text-gray-700'>
                            {user?.full_name?.charAt(0).toUpperCase() || "G"}
                        </span>
                        <span className='text-gray-300 text-sm'> {user?.full_name?.length > 8
                            ? user.full_name.slice(0, 15) + "...."
                            : user?.full_name}</span>
                    </div>
                    <button className='text-white text-xl'>🛒</button>
                    <button
                        onClick={(handleLogout)}
                        className='text-white text-sm border px-2 py-1 rounded'
                    >
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Nevbar;