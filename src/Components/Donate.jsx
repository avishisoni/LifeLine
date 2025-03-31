import React, { useState, useContext } from "react";
import { AuthContext } from "./AuthProvider"; 

const Donate = () => {
  const { token } = useContext(AuthContext); 
  const [message, setMessage] = useState("");
  const [hearts, setHearts] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleDonate = async () => {
    if (!token) {
      setMessage("Please log in to donate.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://192.168.1.4:8001/donate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // If using authentication
        },
      });

      if (!response.ok) {
        throw new Error("Donation failed. Please try again.");
      }

      const data = await response.json();
      setMessage(data.message);
      setHearts(data.hearts);
    } catch (error) {
      setMessage(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow-md">
      <button
        onClick={handleDonate}
        className="bg-red-500 text-white font-bold px-5 py-2 rounded-full shadow-md hover:bg-red-600 transition"
        disabled={loading}
      >
        {loading ? "Processing..." : "Donate ❤️"}
      </button>

      {message && (
        <p className="mt-3 text-green-600 font-semibold">{message}</p>
      )}

      {hearts > 0 && (
        <p className="mt-2">Total Hearts: <span className="font-bold">{hearts}</span> ❤️</p>
      )}
    </div>
  );
};

export default Donate;
