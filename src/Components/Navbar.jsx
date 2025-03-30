import React, { useState } from "react";
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
  

    const handleMouseEnter = (menu) => {
        setOpenDropdown(menu);
    };
    
    const handleMouseLeave = () => {
        setOpenDropdown(null);
    };

    return (
        <header className="shadow-md bg-white  ">
            <div className="flex items-center justify-between px-10 py-4  ">
            <Link to="/" className="h-full w-1/5">
  <img src="/logo-main.png" alt="logo" className=" h-full w-full object-contain" />
</Link>
                <nav className="flex items-center ">
                    <ul className="flex flex-row justify-end mt-3">
                        <li> <button
                                className="bg-red-200 text-black font-semibold px-3 py-2 rounded-full shadow-md m-2 cursor-pointer"
                            >
                                Track Ambulance
                            </button></li>
                        <li className="relative" onMouseEnter={() => handleMouseEnter("emergency")}
                        onMouseLeave={handleMouseLeave}>
                            <button className="bg-red-200 text-black font-semibold px-3 py-2 rounded-full shadow-md m-2 cursor-pointer ">
                                Emergency Contacts
                            </button>
                            {openDropdown === "emergency" && (
                                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">

                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200"> Nearest Hospitals</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200"> My Emergency Contacts</a>
                                </div>
                            )}
                        </li>
                        <li className="relative" onMouseEnter={() => handleMouseEnter("hospitals")}
                        onMouseLeave={handleMouseLeave}>
                            <button  className="bg-red-200 text-black font-semibold px-3 py-2 rounded-full shadow-md m-2 cursor-pointer">
                                Hospital Nearby
                            </button>
                            {openDropdown === "hospitals" && (
                                <div className="absolute left-0 mt-2 w-48 bg-white text-black shadow-lg rounded-lg">
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200"> View All Hospitals</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Emergency Trauma Centers</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200"> ICU Availability</a>
                                </div>
                            )}</li>
                            <li className="relative" onMouseEnter={() => handleMouseEnter("blood")}
                        onMouseLeave={handleMouseLeave}>
                                <button className="bg-red-200 text-black font-semibold px-3 py-2 rounded-full shadow-md m-2 cursor-pointer">
                                    Find Blood Bank 
                                </button>
                                {openDropdown === "blood" && (
                                    <div className="absolute left-0 mt-2 w-52 bg-white text-black shadow-lg rounded-lg">
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200"> Available Blood Types</a>
                                        <a href="#" className="block px-4 py-2 hover:bg-gray-200"> Nearest Blood Bank</a> <a href="#" className="block px-4 py-2 hover:bg-gray-200"> Contact Blood Bank</a>
                                    </div>
                                )}
                            </li>
                    </ul>
                    <Link to="/login">
                       <img src="/login.jpeg" alt="login" className="h-15 w-15 rounded-full mt-7 cursor-pointer"  />
                   </Link>
                </nav>

            </div>
            <button className="bg-red-600 text-white px-3 py-1 rounded-lg flex items-center ml-30 cursor-pointer">
                Book an Ambulance 🚑
            </button>
        </header>
    )
};

export default Navbar