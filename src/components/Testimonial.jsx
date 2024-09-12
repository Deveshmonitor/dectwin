import React, { useState } from "react";
import Card1 from "./Card1";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useAppContext } from "../AppContext";

function Testimonial({ review }) {
  const [index, setIndex] = useState(0);
  const { darkMode } = useAppContext(); // Getting dark mode from context

  function handleSurprise() {
    const randomIndex = Math.floor(Math.random() * review.length);
    setIndex(randomIndex);
  }

  function handleLeftShift() {
    setIndex((prevIndex) =>
      prevIndex - 1 < 0 ? review.length - 1 : prevIndex - 1
    );
  }

  function handleRightShift() {
    setIndex((prevIndex) =>
      prevIndex + 1 >= review.length ? 0 : prevIndex + 1
    );
  }

  return (
    <div
      className={`max-w-full md:max-w-[50vw] w-[90%] mx-auto flex flex-col justify-center items-center mt-10 p-6 sm:p-10 
      transition-transform duration-500 ease-in-out hover:shadow-xl 
      ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}
    >
      <Card1 review={review} />
      <div className="flex text-3xl mt-5 gap-4 text-violet-400 dark:text-violet-300">
        <button onClick={handleLeftShift} aria-label="Left Shift">
          <FiChevronLeft className="cursor-pointer hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200" />
        </button>
        <button onClick={handleRightShift} aria-label="Right Shift">
          <FiChevronRight className="cursor-pointer hover:text-violet-500 dark:hover:text-violet-400 transition-colors duration-200" />
        </button>
      </div>
      <button
        onClick={handleSurprise}
        className="py-2 px-8 bg-violet-400 hover:bg-violet-500 dark:bg-violet-500 dark:hover:bg-violet-600 transition-all 
        duration-200 text-white font-semibold mt-5 rounded-md text-sm"
      >
        Surprise Me
      </button>
    </div>
  );
}

export default Testimonial;
