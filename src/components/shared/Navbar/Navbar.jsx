import React, { useState, useEffect } from 'react';
import { Menu, X, ExternalLink } from 'lucide-react';
import logo from "../../../assets/Logo.png";
import { Link } from 'react-router';
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const navLinks = [{
    href: "/",
    text: "Home"
  }, {
    href: "#about",
    text: "About"
  }, {
    href: "#services",
    text: "Team"
  }, {
    href: "#blog",
    text: "Sponsors"
  }, {
    href: "#contact",
    text: "Contact Us"
  }];
  return <header className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'bg-transparent bg-linear-to-b from-black to-black/0' : 'bg-transparent bg-linear-to-b from-black to-black/0'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 max-w-7xl">
        <div className="flex h-14 sm:h-16 lg:h-20 items-center justify-between">
          <div>
            <Link to="/">
                <img src={logo} className='w-40 h-15' alt="FIUT" />
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navLinks.map(link => <a key={link.text} href={link.href} className="text-sm lg:text-base font-bold text-white hover:text-red-500 transition-colors relative group">
                {link.text}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
              </a>)}
          </nav>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition-colors" aria-label="Toggle menu">
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map(link => <a key={link.text} href={link.href} onClick={() => setIsMenuOpen(false)} className="px-3 py-2.5 text-sm sm:text-base font-medium text-gray-600 rounded-md hover:bg-gray-100 transition-colors">
                  {link.text}
                </a>)}
            </div>
          </div>
        </div>
      </div>
    </header>;
};
export default Navbar;
