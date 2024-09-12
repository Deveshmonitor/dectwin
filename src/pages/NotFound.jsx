// src/pages/NotFound.js
import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation

function NotFound() {
  return (
    <div className="text-center py-10 px-4">
      <img
        src="/imgs/404.png" // Update with the correct path to your 404 image
        alt="404 - Page Not Found"
        className="mx-auto mb-4 max-w-xs md:max-w-md"
      />
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-4">
        Sorry, the page you're looking for doesn't exist.
      </p>
      <Link to="/" className="text-blue-500 hover:underline text-lg">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
