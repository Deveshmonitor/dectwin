import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

// Dummy data for demonstration, replace it with actual data from API or state
const products = [
  {
    id: 1,
    title: "Billing Software",
    description:
      "Our Billing Software is designed to simplify financial management. With features like automated invoicing, payment tracking, and real-time reporting, businesses can streamline their billing process. It also supports multiple payment methods and provides detailed insights into financial performance, ensuring efficiency and accuracy. This user-friendly system helps reduce manual errors and saves time by automating routine tasks.",
    keyFeatures: [
      "Automated invoicing",
      "Payment tracking",
      "Financial reporting",
      "Multi-payment method support",
    ],
    Steps: [
      "1. Open a web browser (e.g., Chrome, Firefox, or Safari).",
      "2. Go to the official website of the software you want to download.",
      "3. Navigate to the 'Downloads' or 'Get Started' section of the website.",
      "4. Select the version of the software that is compatible with your operating system (Windows, Mac, Linux, etc.).",
      "5. Click the 'Download' button and wait for the file to finish downloading.",
      "6. Locate the downloaded file in your system's 'Downloads' folder.",
      "7. Double-click the file to start the installation process, and follow the on-screen instructions.",
    ],
    images: ["/imgs/pro1.jpg", "/imgs/pro2.jpg", "/imgs/pro3.png"], // Multiple images
  },
  {
    id: 2,
    title: "Face Attendance Software",
    description:
      "The Face Attendance Software offers a seamless and accurate solution for tracking attendance using advanced facial recognition technology. This system reduces manual interventions, boosts security, and increases the efficiency of managing employee attendance. It integrates easily with existing payroll systems and provides real-time reporting, making it ideal for businesses of any size.",
    keyFeatures: [
      "1. Facial recognition technology",
      "2. Automated attendance tracking",
      "3. Real-time reporting",
      "4. Payroll integration",
    ],
    Steps: [
      "1. Open a web browser (e.g., Chrome, Firefox, or Safari).",
      "2. Go to the official website of the software you want to download.",
      "3. Navigate to the 'Downloads' or 'Get Started' section of the website.",
      "4. Select the version of the software that is compatible with your operating system (Windows, Mac, Linux, etc.).",
      "5. Click the 'Download' button and wait for the file to finish downloading.",
      "6. Locate the downloaded file in your system's 'Downloads' folder.",
      "7. Double-click the file to start the installation process, and follow the on-screen instructions.",
    ],
    images: ["/imgs/pro1.jpg", "/imgs/pro4.png", "/imgs/pro5.png"], // Multiple images
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const item = products.find((item) => item.id === parseInt(id));

  if (!item) {
    return <h2>Item not found!</h2>;
  }

  // State to manage the current image index for the slider
  const [currentImage, setCurrentImage] = useState(0);

  // Automatically slide to the next image every 3 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevIndex) =>
        prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change the image every 3 seconds

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [item.images.length]);

  const handleNextImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === item.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setCurrentImage((prevIndex) =>
      prevIndex === 0 ? item.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="container border-2 rounded-lg shadow-xl mx-auto w-10/12 my-10 p-6">
      <h1 className="text-4xl font-bold mb-4">{item.title}</h1>

      {/* Image slider */}
      <div className="relative w-full mx-auto">
        <img
          src={item.images[currentImage]}
          alt={item.title}
          className="w-[100%] h-80 rounded-lg"
        />
        <button
          onClick={handlePrevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded"
        >
          <FaArrowLeft className="mr-2" />
        </button>
        <button
          onClick={handleNextImage}
          className="absolute right-0 top-1/2 transform -translate-y-1/2  text-white p-2 rounded"
        >
         <FaArrowRight className="ml-2" />
        </button>
      </div>

      <h2 className="text-xl font-bold my-2 py-2 text-left text-black">
        Key Features:
      </h2>
      <ul className="text-lg text-left mb-4">
        {item.keyFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <h2 className="text-xl font-bold my-2 py-2 text-left text-black">
      Description
      </h2>
      <p className="text-xl text-left mb-4">{item.description}</p>
      <h2 className="text-xl font-bold mb-4 text-left text-black">
        How to Download
      </h2>
      <ul className="text-lg text-left mb-4">
        {item.Steps.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductDetails;
