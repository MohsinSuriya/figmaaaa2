"use client";
import Image from "next/image";
import React, { useState } from "react";
import { FaCheck } from "react-icons/fa";
import { CiCircleAlert } from "react-icons/ci";
import { BsCartDash } from "react-icons/bs";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="">
      {/* <!-- top bar --> */}
      <div className="md:px-56 hidden text-gray-200 md:flex justify-between items-center px-4 py-2 bg-[#272343]">
        <div className="text-sm flex">
          <FaCheck /> Free shipping on all orders over $50
        </div>
        <div className="flex items-center space-x-6 text-sm">
          <div className="hover:underline">Eng</div>
          <div className="hover:underline">FAQs</div>
          <div className="flex items-center space-x-1">
            <CiCircleAlert size={16} />
            <span className="hover:underline">Need Help</span>
          </div>
        </div>
      </div>

      {/* <!-- middle bar --> */}
      <div className="bg-gray-100 md:px-56 shadow-md border-b border-gray-200 px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* logo */}
          <div className="flex items-center space-x-2 size-10">
          <img src="/Logo.png" alt="Comforty Logo"  />
            <span className="text-xl font-bold text-gray-700">Comforty</span>
          </div>

          {/* cart */}
          <div className="relative hidden md:flex items-center">
            <BsCartDash size={30} className="text-gray-700" />
            <span className="absolute top-0 right-0 bg-teal-600 text-white text-xs rounded-full px-1">
              4
            </span>
          </div>

          {/* mobile menu icon */}
          <div className="md:hidden flex items-center">
            <FaBars
              size={20}
              onClick={() => setMenuOpen(!menuOpen)}
              className="cursor-pointer text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* <!-- section3 menu and contact --> */}
      <div className="hidden md:px-56 md:flex bg-white px-4 py-3">
        <div className="container mx-auto flex justify-between items-center">
          {/* Links */}
          <div className="flex space-x-6 font-thin text-gray-700">
            <a href="#" className="hover:text-teal-600">
              Home
            </a>
            <a href="#" className="hover:text-teal-600">
              Shop
            </a>
            <a href="#" className="hover:text-teal-600">
              Product
            </a>
            <a href="#" className="hover:text-teal-600">
              Pages
            </a>
            <a href="#" className="hover:text-teal-600">
              About
            </a>
          </div>
          {/* contact */}
          <div className="text-gray-700">Contact: (808) 555-0111</div>
        </div>
      </div>

      {/* mobile menu */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-white py-3 space-y-2 text-gray-700">
          <a href="#" className="hover:text-teal-600">
            Home
          </a>
          <a href="#" className="hover:text-teal-600">
            Shop
          </a>
          <a href="#" className="hover:text-teal-600">
            Product
          </a>
          <a href="#" className="hover:text-teal-600">
            Pages
          </a>
          <a href="#" className="hover:text-teal-600">
            About
          </a>
        </div>
      )}
    </div>
  );
};



export default Navbar;


