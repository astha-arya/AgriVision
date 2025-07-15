import React from 'react';
import { Leaf } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-green-500 p-2 rounded-full">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <h1 className="ml-3 text-2xl font-bold text-gray-800">
              Agri<span className="text-green-500">Vision</span>
            </h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-green-500">Home</a>
            <a href="#" className="text-gray-600 hover:text-green-500">About</a>
            <a href="#" className="text-gray-600 hover:text-green-500">Contact</a>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;