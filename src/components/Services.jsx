import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// JSON data for services
const servicesData = [
  {
    title: "Mobile App Development",
    description:
      "Google's open-source UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
    icon: "/imgs/flutter.png",
  },
  {
    title: "Software Development",
    description:
      "Creating, designing, testing, and maintaining software applications, ensuring functionality, performance, and scalability to meet user requirements.",
    icon: "/imgs/react.png",
  },
  {
    title: "Website Development",
    description:
      "Building and maintaining websites using front-end and back-end technologies to deliver user-friendly, responsive, and visually appealing interfaces.",
    icon: "/imgs/react.png",
  },
  {
    title: "Digital Marketing",
    description:
      "Digital marketing promotes businesses online through SEO, social media, email campaigns, and content creation, driving engagement, increasing visibility, and generating leads.",
    icon: "/imgs/app.png",
  },
  {
    title: "Graphic Designing",
    description:
      "Creating visually captivating designs for branding, marketing, and digital platforms, emphasizing aesthetics, usability, and cohesive brand identity.",
    icon: "/imgs/responsive.png",
  },
  {
    title: "Cloud Computing Services",
    description:
      "Providing scalable, on-demand cloud infrastructure and services for secure data storage, management, and processing, reducing IT costs and improving accessibility.",
    icon: "/imgs/web.jpg",
  },
];

function Services() {
  const [ref, inView] = useInView({ triggerOnce: true });

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <div className="mx-auto py-8 w-full dark:bg-gray-800">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5 }}
        className="div"
      >
        <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
          Services
        </h2>
      </motion.div>

      <div id="Services" className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            delay={index * 0.1}
          />
        ))}
      </div>
    </div>
  );
}

function ServiceCard({ title, description, icon, delay }) {
  const [ref, inView] = useInView({ triggerOnce: true });

  const variants = {
    visible: { opacity: 1, scale: 1 },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.2, delay }}
      className="bg-white max-w-96 mx-auto dark:bg-gray-900 rounded-lg shadow-md p-6 text-left flex flex-col items-"
    >
      <img className="max-h-60 w-full h-50 " src={icon} alt={title} />
      <h3 className="text-xl font-semibold mb-2 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
      {/* <button className="bg-primary items-end text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
        Start A Project
      </button> */}
    </motion.div>
  );
}

export default Services;
