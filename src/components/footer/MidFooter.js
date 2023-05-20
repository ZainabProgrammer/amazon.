import React from "react";
import { logo } from "../../assets";

const MidFooter = () => {
  return (
    <>
      <div className="w-full bg-amazon_light border-b  border-b-gray-500">
        <div className=" max-w-6xl  text-whiteText py-10 mx-auto ">
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-4 md:place-items-start md:items-start p-10  gap-5">
            <div>
              <h4>Get to know us</h4>
              <div>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Careers
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Blogs
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  About Amazon
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Investor Relations
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Amazon Devices
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Amazon Science
                </p>
              </div>
            </div>
            <div>
              <h4>Make Money with Us</h4>
              <div>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Sell products on Amazon
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Sell on Amazon Business
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Sell apps on Amazon
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Become an Affiliate
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Advertise Your Products
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Host an Amazon Hub
                </p>
              </div>
            </div>
            <div>
              <h4>Amazon Payment Products</h4>
              <div>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Amazon Business Card
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Shop with Points
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Reload Your Balance
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Amazon Currency Converter
                </p>
              </div>
            </div>
            <div>
              <h4>Let Us Help You</h4>
              <div>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Amazon and COVID-19
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Your Account
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Your Orders
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Shipping Rates & Policies
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Returns & Replacements
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Manage Your Content and Devices
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Amazon Assistant
                </p>
                <p className="hover:underline text-gray-400 cursor-pointer">
                  Help
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center  bg-amazon_light py-3 text-whiteText">
        <div className="text-center md:px-6 flex gap-7 py-3 items-center">
          <img src={logo} className="w-20 pt-4 ml-2" alt="logos" />

          <ul className="flex justify-between items-center gap-4">
            <li className="list-none border-gray-300 md:px-8  md:py-3 md:text-md text-[10px] p-1 w-full rounded-md border">
              English
            </li>
            <li className="list-none border-gray-300 md:px-8 md:py-1 md:text-md text-[10px] px-1 w-full rounded-md border">
              USD-U.S. Dollars
            </li>
            <li className="list-none border-gray-300 md:px-8 md:py-1 md:text-md text-[10px] px-1 w-full rounded-md border">
              United States
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MidFooter;
