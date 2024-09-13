import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAppContext } from "../AppContext";
import { FiMenu } from "react-icons/fi";
import { RiCloseFill } from "react-icons/ri";
import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";

const Navbar = () => {
  const { darkMode, handleToggle, handleCallButtonClick } = useAppContext();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
  };

  return (
    <>
      <motion.nav
        className="bg-white dark:bg-dark_bg py-2 font-custom"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-11/12 mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* Logo or Brand */}
            <motion.div
              className="flex font-custom items-center space-x-3 font-bold text-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img
                className="h-11 w-11 rounded-full"
                src="../../logo.png"
                alt=""
              />
              <a href="/" className="text-primary">
                Dectwin
              </a>
            </motion.div>
          </div>
          {/* Navigation Links (visible on larger screens) */}
          <motion.div
            className="hidden text-gray-400 md:flex space-x-4 text-gray font-normal text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <a href="/about" className="hover:underline text-base font-custom">
              About Us
            </a>
            <a href="/t" className="hover:underline text-base font-custom">
              Our Team
            </a>
            {/* <a
              href="/services"
              className="hover:underline text-base font-custom"
            >
              Blog
            </a> */}
            <Link to={"/k"} className="hover:underline text-base font-custom">
              Services
            </Link>
            <a
              href="/contact"
              className="hover:underline text-base font-custom"
            >
              Contact Us
            </a>
            <a
              href="/careers"
              className="hover:underline text-base font-custom"
            >
              Carrer
            </a>
          </motion.div>

          <motion.div
            className="flex flex-row items-center space-x-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {/* <button onClick={handleToggle} className="text-primary">
              {darkMode ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
            </button> */}

            <div
              className="md:hidden ml-3 transition-all duration-300  ease-in-out cursor-pointer"
              onClick={toggleMobileMenu}
            >
              {isMobileMenuOpen ? (
                <RiCloseFill
                  size={24}
                  className="dark:text-white ease-in-out transition-all duration-100"
                />
              ) : (
                <FiMenu size={22} className="dark:text-white" />
              )}
            </div>
            <a href="/signup">
              <button className="px-4 py-1.5 md:flex hidden text-base font-semibold font-custom text-primary rounded-md">
                Sign Up
              </button>
            </a>

            <motion whileHover={{ scale: 1.1 }} className="div">
              {" "}
              <a href="/login">
                <button className="bg-primary md:flex hidden font-semibold font-custom text-white text-base  md:px-4  py-1.5 rounded-md">
                  Login
                </button>
              </a>
            </motion>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu (visible on mobile screens) */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden bg-white dark:bg-dark_bg px-6 py-4 transition-all duration-300"
          variants={imageVariants}
        >
          <a href="/about" className="block dark:text-white py-2 font-custom">
            About Us
          </a>
          <a href="/about" className="block dark:text-white py-2 font-custom">
            Why Us?
          </a>
          <a
            href="/services"
            className="block dark:text-white py-2 font-custom"
          >
            Blog
          </a>
          <a href="/about" className="block dark:text-white py-2 font-custom">
            Journey
          </a>
          <a href="/contact" className="block dark:text-white py-2 font-custom">
            Help
          </a>
          <a href="/careers" className="block dark:text-white py-2 font-custom">
            Career
          </a>
          <a
            href="/login"
            className="bg-primary w-full justify-center flex  font-semibold text-white text-base px-3 py-2 rounded-md mt-4 font-custom"
          >
            Login
          </a>
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
