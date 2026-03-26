"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full">
      <div className="max-w-[1920px] mx-auto px-6 border border-[#E5E8EB]">
        
        <div className="flex justify-between h-16 items-center">
          
          <div className="flex gap-2 items-center">
            <Image
              src="/ConnectUniIcon.png"
              alt="Connect Uni Icon"
              width={20}
              height={20}
            />
            <p className="font-semibold text-lg">Connect Uni</p>
          </div>

          
          <div className="hidden md:flex gap-8 items-center">
            <ul className="flex gap-9">
              <li><Link href="/" className="hover:text-blue-500">Home</Link></li>
              <li><Link href="#" className="hover:text-blue-500">Projects</Link></li>
              <li><Link href="#" className="hover:text-blue-500">Internships</Link></li>
              <li><Link href="#" className="hover:text-blue-500">About Us</Link></li>
            </ul>
            <Link href="/signin">
            <button className="bg-[#E8EDF2] rounded-xl px-4 py-2 hover:bg-gray-200 transition cursor-pointer">
              Login
            </button>
            </Link>
          </div>

        
          <button
            onClick={toggleMenu}
            aria-label="Toggle Menu"
            className="md:hidden"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>


        <div
          className={`md:hidden flex flex-col gap-4 py-4 transition-all duration-300 ${
            isOpen ? "opacity-100" : "opacity-0 hidden"
          }`}
        >
          <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-blue-500">
            Home
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-blue-500">
            Projects
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-blue-500">
            Internships
          </Link>
          <Link href="#" onClick={() => setIsOpen(false)} className="hover:text-blue-500">
            About Us
          </Link>

          <button className="bg-[#E8EDF2] rounded-xl px-4 py-2 hover:bg-gray-200 transition w-fit">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;