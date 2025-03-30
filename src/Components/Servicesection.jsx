import React from "react";
import groupIcon from "/Group.png"; 
import bloodBankIcon from "/bloodbank.png"; 
import { Link } from 'react-router-dom';


const Servicesection = () => {
    const services = [
        {
            title: "Instant Ambulance Booking & Real-Time Tracking",
            img: groupIcon,
            buttonLabel: "BOOK NOW",
        },
        {
            title: "Find Nearby Blood Banks Instantly",
            img: bloodBankIcon,
            buttonLabel: "LOCATE NOW",
        },
        {
            title: "Effortless Blood Bank Locator for Instant Access to Nearby Blood Supplies",
            img: bloodBankIcon,
            buttonLabel: "LOCATE NOW",
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center m-20">
            {services.map((service, index) => (
                <div key={index} className="bg-orange-50 shadow-lg rounded-xl p-6 w-full max-w-xxs text-center hover:shadow-xl transition rounded-lg ">
                    <h3 className="text-lg font-semibold text-gray-700 mb-4 min-h-20">{service.title}</h3>
                    <div className="flex justify-center">
                        <img src={service.img} alt="service icon" className=" w-30 h-30 mb-4  p-2 rounded-lg" />
                    </div>
                    <Link to="/blood">
                    <button className="bg-red-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-red-600 transition cursor-pointer">
                        {service.buttonLabel}
                    </button>
                    </Link>
                    
                </div>
            ))}

        </div>
    );
};

export default Servicesection