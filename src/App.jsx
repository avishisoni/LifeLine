import React from "react";
import Navbar from "./Components/Navbar";
import Mainsection from "./Components/Mainsection";
import Servicesection from "./Components/Servicesection";
import Login from "./Components/Login";
import Booking from "./Components/Booking";
import Footer from "./Components/Footer";
import Nearbybloodbanks from "./Components/Nearvybloodbank";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<>
          <Mainsection />
          <Servicesection />
          
        </>} />
        <Route path="/login" element={<Login />} />
        <Route path="/book" element={<Booking/>} />
        <Route path="/blood" element={<Nearbybloodbanks/>} />

      </Routes>
      <Footer/>
    </Router>
  );
}
  
  export default App
