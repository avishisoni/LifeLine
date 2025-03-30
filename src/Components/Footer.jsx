import React from "react";

const Footer = () => {
    return(
        <>
  <footer className="bg-gray-900 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Emergency Quick Actions */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">🚨 Emergency Actions</h3>
          <a href="tel:+441234567890" className="block mt-2 text-red-400 hover:text-red-500">📞 Call Ambulance Now</a>
          <a href="#" className="block text-blue-400 hover:text-blue-500">📍 Share My Location</a>
          <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 mt-2 rounded-lg">
            🚑 Book an Ambulance
          </button>
        </div>

        {/* Quick Links */}
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">🏥 Quick Links</h3>
          <ul>
            <li><a href="#" className="hover:text-gray-400">Track Ambulance</a></li>
            <li><a href="#" className="hover:text-gray-400">Find Blood Bank</a></li>
            <li><a href="#" className="hover:text-gray-400">Emergency Contacts</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold">📞 Contact Us</h3>
          <p>Email: <a href="mailto:support@lifeline.com" className="text-blue-400 hover:underline">support@lifeline.com</a></p>
          <p>Hotline: <a href="tel:+441234567890" className="text-red-400 hover:text-red-500">+44 123 456 7890</a></p>
        </div>
      </div>

      {/* Bottom Copyright & Social Media */}
      <div className="border-t border-gray-700 mt-4 pt-4 text-center">
        <p>© 2025 LifeLine. All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-2">
          <a href="#" className="hover:text-blue-400">X (Twitter)</a>
          <a href="#" className="hover:text-blue-400">Facebook</a>
          <a href="#" className="hover:text-blue-400">Instagram</a>
        </div>
      </div>
    </footer>
        </>
    );
};
export default Footer