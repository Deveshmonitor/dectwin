import React, { useState } from "react";

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

function Card1(Props) {
  let review = Props.review;

  return (
    <>
      <div className="flex flex-col relative mx-auto ">
        <div className="absolute top-[-6rem] z-[10] mx-auto">
          <img
            className="aspect-square rounded-full w-[100px] h-[100px] z-25"
            src={"/imgs/flutter.png"}
          />
          <div
            className="bg-violet-500 h-[100px]  w-[100px] absolute top-[-0.2rem] 
            rounded-full left-[0.5rem] z-[-8] rig"
          ></div>
        </div>

        <div className="text-center mt-7">
          <p className="capitalize text-2xl font-bold ">{review.name}</p>
          <p className="text-violet-400  text-sm uppercase ">{review.job}</p>
        </div>

        <div className="text-violet-400 mx-auto mt-5">
          <FaQuoteLeft />
        </div>
        <div className="text-slate-400 text-xs text-center mt-5">
          <p>{review.paragraph}</p>
        </div>
        <div className="text-violet-400 mx-auto mt-5">
          <FaQuoteRight />
        </div>
      </div>
    </>
  );
}

export default Card1;
