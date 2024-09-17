import React from "react";

const products = [
  {
    title: "Billing Software",
    description:
      "Efficient and user-friendly billing software designed to streamline invoicing, track payments, and manage financial data with ease.",
    image: "/imgs/pro2.jpg",
  },
  {
    title: "Face Attendance Software",
    description:
      "Cutting-edge face recognition software for automated attendance tracking, ensuring accuracy and reducing manual intervention.",
    image: "/imgs/pro1.jpg",
  },
  {
    title: "MLM Software: Binary & Multichain",
    description:
      "Comprehensive MLM software with both binary and multichain support for managing complex network structures and compensation plans.",
    image: "/imgs/pro3.png",
  },
  {
    title: "Gym Software",
    description:
      "All-in-one gym management software that tracks memberships, schedules classes, and helps run gym operations efficiently.",
    image: "/imgs/pro5.png",
  },
  {
    title: "Salon Software",
    description:
      "Intuitive salon management software to handle appointments, customer data, billing, and inventory for beauty and wellness businesses.",
    image: "/imgs/pro6.png",
  },
  {
    title: "Real Estate Software",
    description:
      "A powerful solution for real estate agents to manage property listings, customer inquiries, contracts, and sales from a single platform.",
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
              className="max-h-60 text-left w-full border-2 rounded-md mb-4"
              src={product.image}
            />
            <h3 className="text-xl font-semibold text-left mb-2 dark:text-white">
              {product.title}
            </h3>
            <p className="text-gray-600 text-left dark:text-gray-300 mb-4">
              {product.description}
            </p>
            <button className="bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">
              Known More
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
