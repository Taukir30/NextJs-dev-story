'use client';
import Link from 'next/link';
import React, { useState } from 'react';


const Header = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="bg-white border-b border-gray-200 fixed w-full z-20 top-0 inset-s-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <div className="shrink-0 flex items-center">
              <Link 
                href="/" 
                className="text-2xl font-bold bg-linear-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
              >
                Dev Story
              </Link>
            </div>

            <div className="hidden md:flex space-x-8 font-medium text-gray-600">
              <Link href="/" className="hover:text-blue-600 transition-colors duration-200">Home</Link>
              <Link href="/articles" className="hover:text-blue-600 transition-colors duration-200">Articles</Link>
              <Link href="/projects" className="hover:text-blue-600 transition-colors duration-200">Projects</Link>
              <Link href="/about" className="hover:text-blue-600 transition-colors duration-200">About</Link>
            </div>

            <div className="hidden md:flex items-center">
              <Link 
                href="/subscribe" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition-all duration-200"
              >
                Subscribe
              </Link>
            </div>

            <div className="flex md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 hover:text-gray-700 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                
                {/* Conditional rendering of icons based on state */}
                {!isOpen ? (
                  <svg className="h-6 w-6 block" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                ) : (
                  <svg className="h-6 w-6 block" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Menu dropdown */}
        <div 
          id="mobile-menu" 
          className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-b border-gray-200`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-gray-600 font-medium">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600">Home</Link>
            <Link href="/articles" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600">Articles</Link>
            <Link href="/projects" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600">Projects</Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600">About</Link>
            <div className="pt-4 pb-2 border-t border-gray-100 px-3">
              <Link 
                href="/subscribe" 
                onClick={() => setIsOpen(false)}
                className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm"
              >
                Subscribe
              </Link>
            </div>
          </div>
        </div>
      </nav>
            <div className="h-16" />
        </div>
    );
};

export default Header;