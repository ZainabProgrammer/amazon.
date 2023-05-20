import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopFooter = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };

  window.addEventListener("scroll", toggleVisible);
  return (
    <div>
      <div className="w-full border-t-[1px] border-t-gray-400 mt-7 border-b-[1px] border-b-gray-400">
        <div className="py-2 text-center p-1">
          <p className="pb-2">See personalized recommendations</p>
          <span></span>
          <Link to="/signin">
            <button className=" text-gray-200 p-2 w-32 bg-yellow-400 rounded-md py-1 font-semibold cursor-pointer hover:bg-yellow-500 active:bg-yellow-700">
              Sign in
            </button>
          </Link>

          <p className="text-sm pt-2">
            New Customer?
            <Link to="/registration" className="hover:no-underline">
              <span className="text-green-700  cursor-pointer hover:text-red-500 text-sm">
                {" "}
                Start here.
              </span>
            </Link>
          </p>
        </div>
      </div>

      <div className="bg-gray-700 text-whiteText w-full mt-2 p-1 text-center hover:bg-gray-600">
        <p className="cursor-pointer p-2  text-white " onClick={scrollToTop}>
          Back to top
        </p>
      </div>
    </div>
  );
};

export default TopFooter;
