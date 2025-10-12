import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; 
import logo from "../assets/logo.jpg";
import { Link } from "react-router-dom";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[95%] max-w-6xl z-50">
      <div className="navbar-container flex justify-between items-center 
                      bg-white/20 backdrop-blur-md shadow-2xl px-6 py-4 rounded-3xl">
        {/* Logo */}
        <div className="navbar-logo flex items-center space-x-3" >
          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-md">
            <img src={logo} alt="Logo" className="w-full h-full object-cover cursor-pointer"/>
          </div>
          <h1 className="text-gray-800 font-bold text-[18px] tracking-wide">Shriharidas Parivaar</h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 text-gray-800 font-semibold text-lg">
          <Link to="/" className="relative group">
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/about" className="relative group">
            About
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/seva" className="relative group">
            Seva
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/store" className="relative group">
            Store
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/contact" className="relative group">
            Contact
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </Link>
          <Link to="/gallery" className="relative group">
            Gallery
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gray-800 transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>

        {/* Hamburger - Mobile */}
        <div className="md:hidden text-gray-800">
          {isOpen ? (
            <HiX size={30} onClick={() => setIsOpen(false)} className="cursor-pointer" />
          ) : (
            <HiMenu size={30} onClick={() => setIsOpen(true)} className="cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-6 
                        bg-white/20 backdrop-blur-md text-gray-800 font-semibold py-6 shadow-2xl rounded-3xl mt-2">
          <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/seva" onClick={() => setIsOpen(false)}>Seva</Link>
          <Link to="/store" onClick={() => setIsOpen(false)}>Store</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/Gallery" onClick={() => setIsOpen(false)}>Gallery</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
