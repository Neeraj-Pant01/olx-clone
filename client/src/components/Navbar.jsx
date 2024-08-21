import React, { useState } from 'react';
import {AiOutlineArrowLeft, AiOutlineSearch } from "react-icons/ai"
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Navbar({setLogin}) {
    const [showDropdown, setShowDropdown] = useState(false);

    const location = useLocation();

    console.log(location)

    const navigate = useNavigate();

    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    };

    return (
        <nav className="bg-gray-100 flex items-center justify-between py-3 shadow-md sticky top-0 px-3 z-[991]">
            {
                location.pathname === "/upload" ?
                <div className='h-[40px] items-center flex'>
                    <Link to={'/'}>
                    <AiOutlineArrowLeft className='text-2xl' />
                    </Link>
                </div>
                :
                <>
                <Link to={`/`} className='text-2xl font-bold text-[#002f34]'>OLX</Link>
            <div className="flex items-center justify-between">
                <select className='py-3 px-2 border-2 w-[300px] border-[#002f34] focus:outline cursor-pointer outline-[#41b0d5] focus:border-0'>
                    <option value="india">India</option>
                    <option value="delhi">Delhi</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="banglore">Banglore</option>
                    <option value="chennai">Chennai</option>
                    <option value="pune">Pune</option>
                </select>
            </div>
            <div className="flex items-center border bg-[#002f34]">
                <input placeholder='find cars, mobile phones and more...' className='py-3 w-[750px] px-2 border-2 border-[#002f34] focus:outline outline-[#41b0d5] focus:border-0'>
                </input>
                <div className={`flex h-[100%] flex-1 px-4`}>
                    <AiOutlineSearch className='text-2xl text-[white]' />
                </div>
            </div>
            <div className='text-[#002f34] font-semibold text-lg'>
                ENGLISH
            </div>
            <div className="flex items-center gap-[20px]">
                <span className='text-[#002f34] text-lg underline font-semibold cursor-pointer' onClick={()=>setLogin(true)}>Login</span>
                <button className="relative inline-flex items-center justify-center px-4 py-2 font-bold text-white bg-white rounded-full shadow-md focus:outline-none" onClick={()=>navigate(`/upload`)}>
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-green-400 via-yellow-400 to-blue-500 p-[2px]"></span>
                    <span className="relative flex items-center bg-white rounded-full px-4 py-1">
                        <span className="text-[#002f34]">+ SELL</span>
                    </span>
                </button>
            </div>
                </>
            }
        </nav>
    );
}

export default Navbar;