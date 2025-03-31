import React from "react";
import Navbar from "./Components/Navbar";
import Mainsection from "./Components/Mainsection";
import Servicesection from "./Components/Servicesection";
import Login from "./Components/Login";
import Booking from "./Components/Booking";
import Footer from "./Components/Footer";
import Leaderboard from "./Components/Leaderboard";
import AuthProvider, { AuthContext } from "./Components/AuthProvider";
import Bloodbank from "./Components/Bloodbank";
import Campaigns from "./Components/Campaigns";
import Profile from "./Components/Profile";
import Donate from "./Components/Donate";
import Register from "./Components/Register";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<><Mainsection /><Servicesection /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/book" element={<Booking />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/blood" element={<Bloodbank />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/campaigns" element={<Campaigns />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/register" element={<Register />} />
         


        </Routes>
        <Footer />
      </Router>
   
      </AuthProvider>
  );
}

export default App
