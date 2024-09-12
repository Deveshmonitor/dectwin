import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { services } from "./Store";
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
          Our Tecnologies
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ServiceCard />
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
    <>
      <div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay }}
        className="bg-white max-w-96 mx-auto dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center"
      >
        <img className="max-h-60 max-w-60" src="/imgs/flutter.png" alt="" />
        <h3
          className="text-xl font-semibold mb-2 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          Mobile App Development
        </h3>
        <p
          className="text-gray-600 dark:text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          Google's open-source UI toolkit for building natively compiled
          applications for mobile, web, and desktop from a single codebase.
        </p>
        <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
          Learn More
        </button>
      </div>
      <div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay }}
        className="bg-white max-w-96 mx-auto dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center"
      >
        <img className="max-h-60 max-w-60" src="/imgs/react.png" alt="" />
        <h3
          className="text-xl font-semibold mb-2 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          ReactJs
        </h3>
        <p
          className="text-gray-600 dark:text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          A JavaScript library for building user interfaces, focusing on
          component-based architecture and reusable code.
        </p>
        <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
          Learn More
        </button>
      </div>
      <div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay }}
        className="bg-white max-w-96 mx-auto dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center"
      >
        <img className="max-h-60 max-w-60" src="/imgs/react.png" alt="" />
        <h3
          className="text-xl font-semibold mb-2 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          React Native
        </h3>
        <p
          className="text-gray-600 dark:text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          A framework for building native mobile apps using React, enabling code
          reuse between Android and iOS.
        </p>
        <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
          Learn More
        </button>
      </div>

      {/* non ANIMATION  */}

      <div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay }}
        className="bg-white max-w-96 mx-auto dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center"
      >
        <img className="max-h-60 max-w-60" src="/imgs/app.png" alt="" />
        <h3
          className="text-xl font-semibold mb-2 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          Node.js
        </h3>
        <p
          className="text-gray-600 dark:text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          JavaScript runtime for server-side development, allowing developers to
          build scalable network applications.
        </p>
        <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
          Learn More
        </button>
      </div>
      <div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay }}
        className="bg-white max-w-96 mx-auto dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center"
      >
        <img className="max-h-60 max-w-60" src="/imgs/responsive.png" alt="" />
        <h3
          className="text-xl font-semibold mb-2 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          Next.js
        </h3>
        <p
          className="text-gray-600 dark:text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          A React-based framework for building server-side rendered and static
          websites, optimized for SEO and performance.
        </p>
        <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
          Learn More
        </button>
      </div>
      <div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay }}
        className="bg-white max-w-96 mx-auto dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center"
      >
        <img className="max-h-60 max-w-60" src="/imgs/web.jpg" alt="" />
        <h3
          className="text-xl font-semibold mb-2 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          Tailwind CSS
        </h3>
        <p
          className="text-gray-600 dark:text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          A utility-first CSS framework enabling fast and responsive UI
          development without writing custom styles.
        </p>
        <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
          Learn More
        </button>
      </div>
      <div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay }}
        className="bg-white max-w-96 mx-auto dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center"
      >
        <img className="max-h-60 max-w-60" src="/imgs/web.png" alt="" />
        <h3
          className="text-xl font-semibold mb-2 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          MongoDB
        </h3>
        <p
          className="text-gray-600 dark:text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          A NoSQL database system that stores data in flexible, JSON-like
          documents, ideal for handling unstructured data.
        </p>
        <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
          Learn More
        </button>
      </div>
      <div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay }}
        className="bg-white max-w-96 mx-auto dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center"
      >
        <img className="max-h-60 max-w-60" src="/imgs/html.png" alt="" />
        <h3
          className="text-xl font-semibold mb-2 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          Docker
        </h3>
        <p
          className="text-gray-600 dark:text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          A platform for developing, shipping, and running applications in
          containers, ensuring consistent environments across stages.
        </p>
        <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
          Learn More
        </button>
      </div>
      <div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={variants}
        transition={{ duration: 0.5, delay }}
        className="bg-white max-w-96 mx-auto dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-center"
      >
        <img className="max-h-60 max-w-60" src="/imgs/flutter.png" alt="" />
        <h3
          className="text-xl font-semibold mb-2 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.2 }}
        >
          Tailwind CSS
        </h3>
        <p
          className="text-gray-600 dark:text-gray-300 mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: delay + 0.4 }}
        >
          A utility-first CSS framework enabling fast and responsive UI
          development without writing custom styles.
        </p>
        <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
          Learn More
        </button>
      </div>
    </>
  );
}

export default Services;
