import React from "react";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Bloodbank =()=>{
    const navigate = useNavigate();
    return(
    <div>
      <h1>Welcome to the Blood Donation Platform</h1>
      <div className="flex flex-col gap-4 mt-4">
      <button 
        onClick={() => navigate("/profile")}
        className="bg-red-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-red-600 transition cursor-pointer"
      >
        Go to Profile
      </button>
      <button 
        onClick={() => navigate("/leaderboard")}
        className="bg-red-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-red-600 transition cursor-pointer"
      >
      View Leaderboard
      </button>
        
      <button 
        onClick={() => navigate("/campaigns")}
        className="bg-red-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-red-600 transition cursor-pointer"
      >
       View Campaigns
      </button>

      <button 
        onClick={() => navigate("/donate")}
        className="bg-red-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-red-600 transition cursor-pointer"
      >
       Your Donation
      </button>
       
        <Link to="/bloodbank">
          <button className="bg-red-500 text-white font-semibold px-5 py-2 rounded-full shadow-md hover:bg-red-600 transition cursor-pointer">
            View Blood Bank
          </button>
        </Link>
      </div>
    </div>
    );
};

export default Bloodbank