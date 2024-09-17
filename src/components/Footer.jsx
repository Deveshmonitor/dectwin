import React from "react";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { useAppContext } from "../AppContext";
const Footer = () => {
  const { handleCallButtonClick } = useAppContext();
  return (
    <div>
      <footer id="footer" className="bg-bg dark:bg-dar_bg_secondary ">
        <div className="container mx-auto md:py-6 p-2 flex flex-col md:flex-row justify-between">
          {/* Left Side - Logo */}
          <div className="w-full md:w-1/4 pl-6 mb-6 md:mb-0">
            <div className="flex md:justify-start justify-center font-custom items-center space-x-3 font-bold text-5xl mb-4">
              <img
                className="h-11 w-11 rounded-full"
                src="../../logo.png"
                alt=""
              />
              <a href="/" className="text-primary text-base">
                Dectwin Services
              </a>
            </div>
            <p className="text-gray-800 font-normal md:text-left text-center leading-snug my-2 text-sm md:text-[16px] font-custom">
              Dectwin World offers tailored software solutions, empowering
              businesses with innovative technology to drive growth and
              efficiency.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="h-6 w-6 text-blue-600 hover:text-blue-800" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="h-6 w-6 text-blue-400 hover:text-blue-600" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn className="h-6 w-6 text-blue-700 hover:text-blue-900" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="h-6 w-6 text-pink-500 hover:text-pink-700" />
              </a>
            </div>

            <div className="flex justify-center md:justify-start">
              <img className="md:w-13" src="../../footer.png" alt="" />
            </div>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="flex flex-col md:flex-row p-4 md:p-1 gap-6">
            <div className="flex text-left leading-none flex-col gap-3">
              <h1 className="text-black dark:text-white font-bold my-2 text-sm md:text-[16px]">
                Help
              </h1>
              <a
                href="/house-rules"
                className="text-gray-800 hover:underline font-custom"
              >
                House Rules
              </a>
              <a
                href="/our-terms"
                className="text-gray-800 hover:underline font-custom"
              >
                Our Terms
              </a>
              <a
                href="/policy"
                className="text-gray-800 hover:underline font-custom"
              >
                Privacy & Policy
              </a>
            </div>
            <div className="flex text-left leading-none flex-col gap-3">
              <h1 className="text-black dark:text-white font-bold my-2 text-[16px]">
                Resources
              </h1>
              <a
                href="/about"
                className="text-gray-800 hover:underline font-custom"
              >
                About Us
              </a>
              <a
                href="/journey"
                className="text-gray-800 hover:underline font-custom"
              >
                Journey
              </a>
              <a
                href="/blog"
                className="text-gray-800 hover:underline font-custom"
              >
                Blog
              </a>
              <a
                href="/contact"
                className="text-gray-800 hover:underline font-custom"
              >
                Contact
              </a>
              <a
                href="/help"
                className="text-gray-800 hover:underline font-custom"
              >
                Help
              </a>
            </div>

            <div className="flex flex-col leading-none md:justify-start justify-center md:items-start items-center gap-3">
              <h1 className="text-black dark:text-white font-bold my-2 text-sm md:text-[16px]">
                Contact Us
              </h1>
              <a
                href="/address"
                className="text-gray-800 flex text-left hover:underline font-custom"
              >
                <FaLocationDot className="mr-1" />
                85/47, CY Chintamani Rd,
                <br /> Darbhanga Colony, George Town, <br />
                Prayagraj, Uttar Pradesh 211002
              </a>
              <a
                href="/phone"
                className="text-gray-800 flex items-center hover:underline font-custom"
                onClick={handleCallButtonClick}
              >
                <MdOutlinePhonelinkRing className="mr-1" />
                +91 94547 22998
              </a>
              <a
                href="/email"
                className="text-gray-800 flex items-center hover:underline font-custom"
              >
                <IoMdMail className="mr-1" />
                info@dectwinservices.com
              </a>
            </div>
            <div className="flex flex-col justify-center items-center">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3049.0521084096627!2d81.85138267462509!3d25.452557577547438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399acabb3e743b69%3A0x372aa9382285c38b!2s85%2F47%2C%20CY%20Chintamani%20Rd%2C%20Darbhanga%20Colony%2C%20George%20Town%2C%20Prayagraj%2C%20Uttar%20Pradesh%20211002!5e1!3m2!1sen!2sin!4v1726334032432!5m2!1sen!2sin"
                width="250"
                height="250"
                style={{
                  border: 0,
                }} /* Use double curly braces for inline styles in JSX */
                allowFullScreen="" /* Change 'allowfullscreen' to 'allowFullScreen' */
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </footer>
      <h1 className="text-center font-Poppins font-normal text-sm md:text-base dark:bg-dark_bg dark:text-white p-4">
        Copyright dectwinservices 2024. All Rights Reserved.
      </h1>
    </div>
  );
};

export default Footer;
