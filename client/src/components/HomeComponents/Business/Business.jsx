import React from "react";
import { Link } from "react-router-dom";
import userImg from "../../../assets/images/businessImg.png";

const Business = () => {
  return (
    <section className="py-20 bg-darkblue text-white">
      <div className="contain">
        <div className="flex lg:items-center items-start justify-start flex-col lg:flex-row lg:justify-between w-full gap-8 lg:gap-5">
          <div className="flex-1 flex items-start justify-start flex-col gap-5">
            <h4 className="text-lg md:text-3xl font-bold">
              <span>CraftForFund</span>
              <span className="font-normal"> AI</span>
            </h4>
            <h2 className="text-xl md:text-4xl font-bold">
              An AI solution <br /> for{" "}
              <i className="font-light">early stage projects.</i>
            </h2>
            <Link
              to="https://my-first-workers-ai.geniusabhisheksingh2000.workers.dev/"
              className="w-fit bg-cyan-400 py-2 px-5 text-base font-semibold rounded mt-8 transition-all hover:bg-cyan-400/75"
            >
              Explore It.
            </Link>
          </div>
          <div className="flex-1">
            <img src={userImg} alt="business_image" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Business;
