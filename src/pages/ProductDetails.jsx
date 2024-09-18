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
      "A key feature of the app is Inventory management. This allows users to add, update, and track their inventory items with ease. The system includes detailed item descriptions and stock levels, with automated alerts for low stock, ensuring businesses never run out of essential products.",
      "The Sale Invoice feature lets users generate professional invoices with customizable templates, including options for tax rates and discounts. The Sale History section keeps a comprehensive record of all past sales transactions, making it easy to search for specific invoices and analyze sales trends.",
      "The app also excels in managing Purchase Invoices. Users can create purchase invoices for their suppliers, maintaining accurate records of all procurement activities. The Purchase History feature tracks all supplier transactions and outstanding payments, facilitating efficient supply chain management.",
      "Multi-payment method supportFor generating quotes, the Estimate Invoice feature allows users to create detailed estimates for potential clients, which can later be converted into sale invoices. This ensures a seamless sales process, with the Estimate History section allowing users to review, edit, and follow up on previous quotes.",
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
    images: [
      "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(136).png?alt=media&token=dbe0f073-cf79-45ab-a68b-171868a0f159",
      "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(137).png?alt=media&token=df7103c5-f6ae-42d6-b7eb-f16ff0ffca59",
      "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(138).png?alt=media&token=3574fe15-0e8a-4b08-84d8-629b38eeae07",
      "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(139).png?alt=media&token=ddbd813a-6eb3-4c2f-9f2f-735938071956",
      "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(140).png?alt=media&token=e14b33d0-0670-485b-bfef-de00f757818b",
    ], // Multiple images
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
    images: [
      "https://lh3.googleusercontent.com/K-VkQyV_MLKHT11V17U_uD1M00WEpQ_p9qHmeCj9jfl9uZBWrAK-Wa-o9aWRaBBNsYM",
      "https://lh3.googleusercontent.com/0lKBqquffrILDXzo1-OARrBjCp9Wd1XTGnrx6frlB2yw2iNbzCsVOZGy0ktMJ8ElPA",
      "https://lh3.googleusercontent.com/RHgs_dsrdI_4Jh2cQcyHpz7zbFre7dj73nzusBeaqSOBYq5UTOMw3souoIX5Tlg4hg",
      "https://lh3.googleusercontent.com/PXvcAi10ToQiirfygazjFwYH7FkOy0JYEpOa0QUZVqZcsF3X9yQabtZbHcRhVshUwuQ",
      "https://lh3.googleusercontent.com/7wulb40Ze8tdZ2JtBi_njrpdETrF_OJn53VrlBjtvcvT018dzalq4SIKafyrSRWPuQ",
    ], // Multiple images
  },
  {
    id: 3,
    title: "MLM Software Multichain",
    description:
      "Our MLM Software supports both binary and multichain structures, making it ideal for companies looking to manage complex networks and compensation plans. With real-time analytics, multi-tier commission management, and customizable reporting tools, this software empowers businesses to efficiently track member activity and growth.",
    keyFeatures: [
      "Binary & multichain support",
      "Commission management",
      "Real-time analytics",
      "Customizable reporting",
    ],
    images: [
      "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(141).png?alt=media&token=e2432858-5ff2-46c2-b1b7-43c84f4d3ae9",
      "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(142).png?alt=media&token=1eef01ee-7629-4933-b27a-ba5711ef5f81",
      "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(143).png?alt=media&token=413ff3db-6b37-4336-8887-1384e68ef5b3",
      "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(144).png?alt=media&token=1a54eb04-8581-42d6-9fcd-7d2c965059ab",
      "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(145).png?alt=media&token=f18685d3-0a01-4112-90d9-06b9333d7ace",
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
  },
  {
    id: 4,
    title: "Gym Software",
    description:
      "This Gym Software is a comprehensive tool that helps gym owners and managers run their operations smoothly. It offers features like membership tracking, class scheduling, billing, and attendance tracking. The software helps streamline daily operations, manage client information, and ensure a seamless experience for both staff and members.",
    keyFeatures: [
      "Membership tracking",
      "Class scheduling",
      "Billing and invoicing",
      "Attendance tracking",
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
    images: ["https://images.g2crowd.com/uploads/attachment/file/1213762/image-2021-12-22T10-11-48-219Z-_1_.png", "https://images.g2crowd.com/uploads/attachment/file/1213763/image-2021-12-22T10-12-08-186Z.png"],
  },
  {
    id: 5,
    title: "Salon Software",
    description:
      "Our Salon Software simplifies the management of appointments, customer data, billing, and inventory for beauty and wellness businesses. The system offers an intuitive interface, making it easy to manage bookings, payments, and client information, ensuring a smooth customer experience and operational efficiency.",
    keyFeatures: [
      "Appointment management",
      "Customer data tracking",
      "Inventory management",
      "Billing and invoicing",
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
    images: [
        "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(136).png?alt=media&token=dbe0f073-cf79-45ab-a68b-171868a0f159",
        "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(137).png?alt=media&token=df7103c5-f6ae-42d6-b7eb-f16ff0ffca59",
        "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(138).png?alt=media&token=3574fe15-0e8a-4b08-84d8-629b38eeae07",
        "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(139).png?alt=media&token=ddbd813a-6eb3-4c2f-9f2f-735938071956",
        "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(140).png?alt=media&token=e14b33d0-0670-485b-bfef-de00f757818b",
      ], 
  },
  {
    id: 6,
    title: "Real Estate Software",
    description:
    "This Real Estate Software is tailored for property agents and agencies, helping them manage property listings, customer inquiries, and sales. It features an easy-to-use interface for tracking contracts, managing listings, and processing sales, allowing agents to focus on customer satisfaction and closing deals efficiently.",
  keyFeatures: [
    "Property listing management",
    "Customer inquiry tracking",
    "Contract management",
    "Sales processing",
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
    images: [
        "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(136).png?alt=media&token=dbe0f073-cf79-45ab-a68b-171868a0f159",
        "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(137).png?alt=media&token=df7103c5-f6ae-42d6-b7eb-f16ff0ffca59",
        "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(138).png?alt=media&token=3574fe15-0e8a-4b08-84d8-629b38eeae07",
        "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(139).png?alt=media&token=ddbd813a-6eb3-4c2f-9f2f-735938071956",
        "https://firebasestorage.googleapis.com/v0/b/square-group-of-c.appspot.com/o/Screenshot%20(140).png?alt=media&token=e14b33d0-0670-485b-bfef-de00f757818b",
      ], 
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const item = products.find((item) => item.id === parseInt(id));
  console.log(item,"data")

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
      <div className="relative w-10/12 mx-auto">
        <img
          src={item.images[currentImage]}
          alt={item.title}
          className="w-auto mx-auto h-80 rounded-lg"
        />
        <button
          onClick={handlePrevImage}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-500 rounded-full  text-white p-2 "
        >
          <FaArrowLeft className="" />
        </button>
        <button
          onClick={handleNextImage}
          className="absolute right-0 top-1/2 fld bg-red-500 rounded-full   transform -translate-y-1/2  text-white p-2 "
        >
          <FaArrowRight className="" />
        </button>
      </div>

      <h2 className="text-xl font-bold my-2 py-2 text-left text-black">
        Description
      </h2>
      <p className="text-xl text-left mb-4">{item.description}</p>
      <h2 className="text-xl font-bold my-2 py-2 text-left text-black">
        Key Features:
      </h2>
      <ul className="text-lg text-left mb-4">
        {item.keyFeatures.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
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
