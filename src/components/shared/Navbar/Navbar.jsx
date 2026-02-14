import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import logo from "../../../assets/Logo.png";
import { Link, NavLink } from 'react-router';
const Navbar = () => {

  // Menubar For small devices
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navbar routes
  const navLinks = <>
    <>
      <li className="list-none">
        <NavLink to="/" className="relative group text-white transition-colors duration-300 hover:text-red-500">
          Home
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink to="/about" className="relative group text-white transition-colors duration-300 hover:text-red-500">
          About Us
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink to="/team" className="relative group text-white transition-colors duration-300 hover:text-red-500">
          Team
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink to="/sponsors" className="relative group text-white transition-colors duration-300 hover:text-red-500">
          Sponsors
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      </li>
      <li className="list-none">
        <NavLink to="/contact" className="relative group text-white transition-colors duration-300 hover:text-red-500">
          Contact Us
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
        </NavLink>
      </li>
    </>
  </>

  return <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isMenuOpen ? 'bg-black' : 'bg-transparent bg-linear-to-b from-black to-black/0'}`}>
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-10xl pt-5 md:pt-0">
      <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between">
        
        {/* Logo */}
        <div>
          <Link to="/">
            <img src={logo} className='w-40 h-15' alt="FIUT" />
          </Link>
        </div>

        {/* Navlinks */}
        <nav className="hidden md:flex items-center text-xl font-bold space-x-4 lg:space-x-6 xl:space-x-8">
          {
            navLinks
          }
        </nav>

        {/* Menubar for small devices */}
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-white hover:bg-gray-100 rounded-md transition-colors" aria-label="Toggle menu">
          {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
        </button>
      </div>
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 bg-black' : 'max-h-0 opacity-0'}`}>
        <div className="py-4 border-t border-gray-800">
          <div className="flex flex-col space-y-1">
            {
              navLinks
            }
          </div>
        </div>
      </div>
      
    </div>
  </header>;
};
export default Navbar;
