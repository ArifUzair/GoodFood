import React,{useState} from "react";
import { AiOutlineMenu,AiOutlineSearch,AiOutlineClose,AiFillTag } from 'react-icons/ai';
import {BsFillCartFill,BsFillSaveFill} from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb';
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'

const Navbar = () => {
    const  [nav,setNav]= useState(false)
    return (
        <div className="max-w-[1640px] mx-auto flex justify-between  p-4">
            <div className="flex items-center">
                <div className="cursor-pointer">
                    <AiOutlineMenu size={30} onClick={()=>setNav(true)}/>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">Good<span className="font-bold">Food</span></h1>
                <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[18px]">
                    <p className="bg-black text-white rounded-full p-2">Delivery</p>
                    <p className="p-2">Pickup</p>
                </div>
            </div>

            {/* searchInput */}
            <div className="bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]">
                <AiOutlineSearch size={25}/>
                <input className="bg-transparent p-2 w-full outline-none " type="text" placeholder="Search foods" />
            </div>
            {/* Cart Button */}

            <button className="bg-black text-white hidden md:flex items-center py-2 rounded-full px-7">
                <BsFillCartFill size={24} className="mr-2"/> <span className="text-[18px]">Cart</span>
            </button>

            {/* Mobile Menu  */}
                {/* overlay */}
                {nav?<div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0" onClick={()=>setNav(!nav)}> </div>
:'' }
            
            {/* side drawer menu  */}

            <div className={nav?'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300':'hidden'}>
                <AiOutlineClose size={30} className="absolute right-4 top-4 cursor-pointer" 
                    onClick={()=>setNav(!nav)}
                />
                <h2 className="text-2xl p-4">
                Good <span className="font-bold">Food</span>
                 </h2>
                 <nav>
                    <ul className="flex flex-col p-4 text-gray-800 cursor-pointer">
                        <li className="text-xl py-4 flex items-center "><TbTruckDelivery size={30} className="mr-4 "/>Orders</li>
                        <li className="text-xl py-4 flex items-center "><MdFavorite size={30} className="mr-4 "/>Favorites</li>
                        <li className="text-xl py-4 flex items-center "><FaWallet size={30} className="mr-4 "/>Wallet</li>
                        <li className="text-xl py-4 flex items-center "><MdHelp size={30} className="mr-4 "/>Help</li>
                        <li className="text-xl py-4 flex items-center "><AiFillTag size={30} className="mr-4 "/>Promotions</li>
                        <li className="text-xl py-4 flex items-center "><BsFillSaveFill size={30} className="mr-4 "/>Best One</li>
                        <li className="text-xl py-4 flex items-center "><FaUserFriends size={30} className="mr-4 "/>Invite Friends</li>
                        
                    </ul>
                 </nav>
            </div>
        </div>
    )
}

export default Navbar;