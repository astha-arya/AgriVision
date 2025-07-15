import React from 'react';
import { Leaf, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <div className="bg-green-500 p-2 rounded-full">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <h2 className="ml-2 text-xl font-bold">
                Agri<span className="text-green-400">Vision</span>
              </h2>
            </div>
            <p className="text-gray-400">
              AI-powered agricultural assistant helping farmers maximize yield and protect crops.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400">Services</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-green-400">Disease Detection</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400">Crop Information</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400">Weather Insights</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400">Risk Prediction</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-green-400" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-green-400" />
                <span className="text-gray-400">info@agrivision.com</span>
              </li>
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-green-400" />
                <span className="text-gray-400">123 Farm Road, Agritown</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} AgriVision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;