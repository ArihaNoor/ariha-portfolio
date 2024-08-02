"use client"
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`w-full bg-white shadow z-50 transition-all duration-300 ${
        isScrolled ? "fixed top-0" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" passHref>
            <Image className="" src="/Logo.png" alt="Logo" width={120} height={100} />
        </Link>
        <div className="hidden lg:flex items-center gap-6">
          <ul className="flex gap-6 list-none">
            <li>
              <Link href="#services" passHref>
                <p className="text-black cursor-pointer uppercase text-md font-semibold link">
                  Services
                </p>
              </Link>
            </li>
            <li>
              <Link href="#skills" passHref>
                <p className="text-black cursor-pointer uppercase text-md font-semibold link">
                  Skills
                </p>
              </Link>
            </li>
            <li>
              <Link href="#projects" passHref>
                <p className="text-black cursor-pointer uppercase text-md font-semibold link">
                  Projects
                </p>
              </Link>
            </li>
          </ul>
          <button className="bg-black flex items-center text-xl font-bold px-6 py-3 text-white rounded-xl shadow-lg hover:bg-coolBlue-medium hover:text-white transition-all duration-150">
           <Link href="#contact" className="flex items-center justify-center gap-2">
           <Image src="/letter.gif" width={35} height={35} className="px-1" alt="Reach Out" />
           Reach Out
           </Link>
          </button>
        </div>
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-black">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-white shadow-lg">
          <ul className="flex flex-col items-center py-4">
            <li className="my-2">
              <Link href="#services" passHref>
                <p className="text-black cursor-pointer uppercase text-md font-semibold link">
                  Services
                </p>
              </Link>
            </li>
            <li className="my-2">
              <Link href="#skills" passHref>
                <p className="text-black cursor-pointer uppercase text-md font-semibold link">
                  Skills
                </p>
              </Link>
            </li>
            <li className="my-2">
              <Link href="#projects" passHref>
                <p className="text-black cursor-pointer uppercase text-md font-semibold link">
                  Projects
                </p>
              </Link>
            </li>
            <li className="my-2">
              <button className="bg-black flex items-center text-xl font-bold px-6 py-3 text-white rounded-xl shadow-lg hover:bg-coolBlue-medium hover:text-white transition-all duration-150">
               <Link href="#contact" className="flex justify-center items-center gap-2">
               <Image src="/letter.gif" width={35} height={35} className="px-1" alt="Reach Out" />
               Reach Out
               </Link>
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
