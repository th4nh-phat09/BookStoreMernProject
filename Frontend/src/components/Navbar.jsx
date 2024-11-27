import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { MdSearch } from "react-icons/md";
import { Link } from "react-router-dom";
import { PiUserCircleLight } from "react-icons/pi";
import { PiHeart } from "react-icons/pi";
import { PiShoppingCart } from "react-icons/pi";
import { useState } from "react";
import avatarImg from "../assets/avatar.png"
const navigation = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Orders", href: "/order" },
    { name: "Cart Page", href: "/cart" },
    { name: "Check Out", href: "/checkout" }
  ];
  

const Nav =()=>{
    const currentUser = false;
    const [isDropdownOpen ,setIsDropdownOpen] =useState(false);
  //  console.log(isDropdownOpen);
    
    return (
        <header className="max-w-screen-2xl mx-auto px-4 py-6">
            <nav className="flex justify-between items-center ml-9 mr-16">
                {/*Left side */}
                <div className="flex justify-center md:gap-16 gap-4">
                 <Link to="/">
                    <HiMiniBars3BottomLeft className="size-6 "/>
                 </Link>
                 <div className="relative sm:w-72 w-40 space-x-2">
                    <MdSearch className="absolute size-6 left-2 "/>
                    <input type="text" placeholder="Search here" 
                    className="bg-[#EAEAEA] w-full px-6 md:px-8 rounded-md" 
                    />
                 </div>
                </div>
                {/*Right side */}
                <div className="flex relative items-center md:space-x-3 space-x-2">
                    <div>
                        {currentUser ? <>
                            <button onClick={()=>{
                                setIsDropdownOpen(!isDropdownOpen)
                            }}>
                                {<img src={avatarImg} alt="" 
                                     className="size-7 rounded-full ring-2 ring-blue-500"
                                /> }
                            </button>
                            {/* Show Dropdown */}
                            {isDropdownOpen && (<div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md z-40">
                                <ul className="py-2">
                                    {navigation.map((item)=>(
                                        <li key={item.name} onClick={()=>{setIsDropdownOpen(false)}}>
                                            <Link to={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100" >
                                             {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>)
                            }
                            </>
                            
                            : 
                            <Link to="/login"><PiUserCircleLight className="size-6"/></Link>
                        }
                    </div>

                    <button className="hidden sm:block ">
                        <PiHeart className="size-6" />
                    </button>
                    <Link to="/cart" className="bg-primary flex p-1 sm:px-6 px-2 items-center rounded-sm">
                        <PiShoppingCart className="size-6"/>
                        <span className="text-sm font-semibold sm:ml-1">0</span>
                    </Link>
                </div>
            </nav> 
        </header>
    )
}

export default Nav;