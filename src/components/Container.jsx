import { React, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import Services1 from "./Services1";

function Container() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  const textVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } },
  };
  const [stats, setStats] = useState({
    clients: 0,
    users: 0,
    team: 0,
    products: 0,
  });

  useEffect(() => {
    // Mock API request to simulate fetching data
    const fetchData = () => {
      setTimeout(() => {
        setStats({
          clients: 500,
          users: 1000,
          team: 25,
          products: 8,
        });
      }, 1000); // Simulating a 1-second delay
    };

    fetchData();
  }, []);

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="bg-bg dark:bg-dar_bg_secondary"
      >
        <div className="pt-10 w-11/12 mx-auto flex justify-between flex-col md:flex-row">
          {/* Left Side - Heading */}
          <motion.div
            className="md:w-1/2 text-center md:pt-4 md:pl-4 md:text-left w-full"
            variants={textVariants}
          >
            <h4 className="text-xl font-Poppins my-2 text-primary font-medium">
              Best Software It Company
            </h4>

            <h1 className="text-3xl md:text4-xl my-4 dark:text-white font-custom leading-tight font-bold mb-4 px-6 md:px-0">
              Welcome To <span className="text-primary">Dectwin Services</span>{" "}
              <br />
            </h1>
            <div className="text-xl md:text-xl my-4 dark:text-white font-custom leading-tight font-bold mb-4 px-6 md:px-0">
              <Typewriter
                options={{
                  strings: [
                    "Web Development",
                    "App Development",
                    "iOS Development",
                    "ERP Development",
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeeds: 20,
                }}
              />
            </div>

            <p className="text-Gray font-normal leading-snug my-2 text-sm font-custom">
              Dectwin World is a private software service provider specializing
              in delivering innovative and tailored technology solutions to meet
              diverse client needs. With expertise in software development,
              cloud solutions, and IT consulting, Dectwin World focuses on
              helping businesses enhance efficiency and scalability. Committed
              to delivering high-quality services, the company leverages modern
              technologies and industry best practices to provide seamless and
              robust software solutions. ensuring client success in a rapidly
              evolving technological landscape.
            </p>
            <div className="my-10">
              <motion.button
                className="bg-primary hover:bg-rose-600 cursor-pointer font-semibold text-white text-[16px] font-Poppins px-6 py-4 rounded-md"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Services
              </motion.button>
              <a href="https://play.google.com/store/apps/details?id=com.dectwinbilling.dectwinbillingandroid&hl=en-US&ah=rUOTPBKW_U_WZZPk5z6Uj5UJsBQ&pli=1">
                <motion.button
                  className="px-4 py-2 cursor-pointer text-[16px] font-Poppins font-semibold text-primary rounded-md"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Download App
                </motion.button>
              </a>

              <div className="md:flex hidden items-center space-x-4">
                {/*<img src="../../Vector.png" alt="" />
              <img src="../../Vector (1).png" alt="" />*/}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="w-full h-full md:w-[40%]"
            variants={imageVariants}
          >
            <img
              className="w-full max-h-[80%] rounded-md animate-float"
              src={"../../imgs/main.png"}
              alt="Your Image Description"
            />
          </motion.div>
        </div>
      </motion.div>
      <div className="mt-16 ">
        <motion.div className="w-full h-full p-10">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-900 dark:text-white">
              Our Achievements
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Clients */}
              <div className="flex flex-col items-center">
                <h3 className="text-5xl font-extrabold text-primary">
                  {stats.clients}+
                </h3>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  Happy Clients
                </p>
              </div>
              {/* Team */}
              <div className="flex flex-col items-center">
                <h3 className="text-5xl font-extrabold text-primary">
                  {stats.team}+
                </h3>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  Team Members
                </p>
              </div>
              {/* Users */}
              <div className="flex flex-col items-center">
                <h3 className="text-5xl font-extrabold text-primary">
                  {stats.users}+
                </h3>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  Users
                </p>
              </div>

              {/* Products */}
              <div className="flex flex-col items-center">
                <h3 className="text-5xl font-extrabold text-primary">
                  {stats.products}+
                </h3>
                <p className="text-xl text-gray-700 dark:text-gray-300">
                  Products
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      <Services1 />
    </>
  );
}

export default Container;
