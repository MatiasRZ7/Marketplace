"use client";

import React from 'react';
import { usePathname } from 'next/navigation';

const Footer: React.FC = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  if (!isHomePage) {
    return null;
  }

  return (
    <footer className="bg-gradient-to-t from-black to-white text-white py-16 mt-10 rounded-xl">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-bold">Marketplace <span className='text-black'>LaGranaina</span></h2>
            <p className="text-sm">© 2024 LaGranaina. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="/" className="text-sm hover:underline">
              About Us
            </a>
            <a href="/" className="text-sm hover:underline">
              Contact
            </a>
            <a href="/" className="text-sm hover:underline">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;