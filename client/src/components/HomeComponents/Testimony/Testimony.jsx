import React from "react";
import { BsPlayFill } from "react-icons/bs";

const Testimony = ({ item }) => {
  return (
    <div className="relative inline-block cursor-pointer w-full lg:mx-4 p-4 pt-0">
      <div className="w-full flex items-start lg:items-center flex-col lg:flex-row gap-7 justify-start">
        <div className="w-full lg:w-[40%] relative">
          <img src="https://img.freepik.com/free-vector/company-employees-sharing-thoughts-ideas_74855-5469.jpg" alt=''className="w-full rounded-md" />
          
        </div>
        <div className="flex flex-col items-start justify-start gap-5 w-full lg:w-[60%]">
          <h2 className="sm:text-xl text-base tracking-wide font-semibold text-gray-500">{item.title} | </h2>
          <p className="lg:text-3xl text-xl w-full lg:max-w-[670px] whitespace-normal text-navbg">
            <i>{item.details}</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimony;
