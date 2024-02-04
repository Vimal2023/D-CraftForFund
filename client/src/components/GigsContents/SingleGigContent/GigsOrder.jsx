import React from "react";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { TfiReload } from "react-icons/tfi";
import { Link } from "react-router-dom";

const GigsOrder = ({ data, id }) => {
  return (
    <div className="w-full bg-white border p-4 flex flex-col gap-4 items-start justify-start rounded">
      <div className="flex items-center justify-between gap-2 w-full">
        <h2 className="text-gray-800 text-sm font-bold">Web-App Development</h2>
        
      </div>
      <p className="text-sm font-medium text-darkColor">Allow users to create detailed profiles 
      highlighting their interests, goals, and current skill levels. Enable users to join or create groups based on shared interests, personal development goals, or specific skills they want to develop.</p>
      <div className="flex items-center justify-between gap-2 w-full">
        <div className="flex items-center justify-start gap-2 text-sm text-darkColor font-semibold">
          <AiOutlineClockCircle />
          <span>uploaded {data?.deliveryTime} Days ago</span>
        </div>
        <div className="flex items-center justify-start gap-2 text-sm text-darkColor font-semibold">
          <TfiReload />
          <span>{data?.revisionNumber} Reach</span>
        </div>
      </div>
      <div className="flex flex-col gap-1 items-start justify-start w-full">
        {data.features.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-start gap-2 text-sm text-darkColor/70 font-semibold"
          >
            <BsCheckLg className="text-cyan-400" />
            <span>{item}</span>
          </div>
        ))}
      </div>
      <Link to={`/pay/${id}`} className="w-full">
        <button className="w-full h-10 rounded bg-cyan-400/95 text-white hover:bg-cyan-400 outline-none">
          Intrested !
        </button>
      </Link>
    </div>
  );
};

export default GigsOrder;
