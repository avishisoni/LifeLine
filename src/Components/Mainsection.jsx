import React from "react";
import { Link } from 'react-router-dom';

const Mainsection = () => {
    return (
        
         <div className="bg-red-100 flex items-center justify-between px-20 py-10 mt-5">
            <div className="flex items-center space-x-10">
                <div className="w-80 h-60">
                    <img src="/Ambulance.png" alt="Ambulance" className="w-full h-full object-contain"/>
                </div>
                
                <div className="flex flex-col space-y-4">
                    <h2 className="text-4xl font-bold text-gray-800">
                        Emergency Ambulance Booking
                    </h2>
                    <p className="text-xl text-gray-600">
                        Anytime, Anywhere
                    </p>
                    <Link to="/book">
                    <button className="bg-red-600 text-white px-2 py-3 rounded-lg text-lg font-semibold hover:bg-red-700 transition-colors">
                        Book Now
                    </button>
                    </Link>
                   
                </div>
            </div>
        </div>
     
    );
};
export default Mainsection
