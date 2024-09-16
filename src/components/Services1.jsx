import React from "react";

function Services1() {
  return (
    <div>
      <div className="dark:bg-dark_bg">
        <div className="w-full mx-auto py-10 rounded-lg">
          <div className="container mx-auto w-full p-10 md:flex space-y-12 items-center">
            <div className="w-full">
              <img src="/imgs/service.png" alt="" />
            </div>
            <div className="w-full ">
              <h2 className="md:text-xl text-base md:text-left text-center font-Poppins my-2 text-primary font-semibold">
                Delivering Excellence Through Structured Development
              </h2>
              <h1 className="md:text-5xl dark:text-white text-xl my-4 leading-tight font-custom font-bold mb-4">
                Structured Innovation, Delivering Excellence.
              </h1>
              <p className="text-Gray p-1 font-normal leading-snug my-2 md:text-base text-sm font-custom">
                At Dectwin World, we follow a formal software development
                process, ensuring structured, high-quality solutions that meet
                client requirements and industry standards. At Dectwin World, we
                follow a formal software development process based on the SDLC
                cycle. This structured approach ensures that each phase, from
                planning to maintenance, is meticulously executed, resulting in
                high-quality software solutions that meet client needs and
                deliver long-term value.
              </p>
              <button
                type="submit"
                className="bg-primary cursor-pointer my-4 hover:bg-sky-400 font-semibold text-white text-[16px] font-Poppins px-6 py-4 rounded-md"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="dark:bg-dark_bg">
        <div className="w-full mx-auto py-10 rounded-lg">
          <div className="container mx-auto w-full p-10 md:flex space-y-12 md:space-x-12 items-center">
            <div className="w-full ">
              <h2 className="md:text-xl text-base md:text-left text-center font-Poppins my-2 text-primary font-semibold">
                Driving Innovation Together
              </h2>
              <h1 className="md:text-5xl dark:text-white md:text-left text-xl my-4 font-bold mb-4 font-custom ">
                Building the Future, Make Good Quality Product.
              </h1>
              <p className="text-Gray p-1 font-normal md:text-left leading-snug my-2 md:text-base text-sm font-custom">
                At Dectwin World, our experienced, collaborative team uses
                cutting-edge technologies to deliver innovative, tailored
                solutions that exceed client expectations.
              </p>
              <button
                type="submit"
                className="bg-primary cursor-pointer md:text-left my-4 hover:bg-sky-400 font-semibold text-white text-[16px] font-Poppins px-6 py-4 rounded-md"
              >
                Started Product
              </button>
            </div>
            <div className="w-full">
              <img className="md:h-[439px]" src="/imgs/team.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services1;
