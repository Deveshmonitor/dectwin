import React from "react";
import { Link } from "react-router-dom";

const products = [
  {
    id: 1,
    title: "Dectwin Billing Software",
    description:
      "Our Billing Software is designed to simplify financial management. With features like automated invoicing, payment tracking, and real-time reporting, businesses can streamline their billing process. It also supports multiple payment methods and provides detailed insights into financial performance, ensuring efficiency and accuracy. This user-friendly system helps reduce manual errors and saves time by automating routine tasks.",
    keyFeatures: [
      "Automated invoicing",
      "Payment tracking",
      "Financial reporting",
      "Multi-payment method support",
    ],
    image: "/imgs/pro2.jpg",
  },
  {
    id: 2,
    title: "Face Attendance Software",
    description:
      "The Face Attendance Software offers a seamless and accurate solution for tracking attendance using advanced facial recognition technology. This system reduces manual interventions, boosts security, and increases the efficiency of managing employee attendance. It integrates easily with existing payroll systems and provides real-time reporting, making it ideal for businesses of any size.",
    keyFeatures: [
      "Facial recognition technology",
      "Automated attendance tracking",
      "Real-time reporting",
      "Payroll integration",
    ],
    image: "/imgs/pro1.jpg",
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
    image: "/imgs/pro3.png",
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
    image: "/imgs/pro5.png",
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
    image: "/imgs/pro6.png",
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
    image: "/imgs/pro4.png",
  },
];

const Products = () => {
  return (
    <div className="mx-auto py-8 w-full dark:bg-gray-800">
      <h2 className="text-3xl font-bold mb-8 text-center dark:text-white">
        Our Products
      </h2>
      <div className="grid w-11/12 mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 flex flex-col items-start"
          >
            <img
              className=" h-52 max-h-60 text-left w-full border-2 rounded-md mb-4"
              src={product.image}
            />
            <h3 className="text-xl font-semibold line-clamp-2 text-left mb-2 dark:text-white">
              {product.title}
            </h3>
            <p className="text-gray-600 text-left line-clamp-6 dark:text-gray-300 mb-4">
              {product.description}
            </p>
            <Link
              to={`/productdetails/${product.id}`}
              className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded"
            >
              Know More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
