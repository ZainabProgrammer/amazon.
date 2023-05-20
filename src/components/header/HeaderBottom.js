import React, { useRef, useState, useEffect } from "react";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";
import SideHeader from "../home/SideHeader";
import { useSelector } from "react-redux";
const HeaderBottom = () => {
  const [sideBar, setsideBar] = useState(false);
  const userState = useSelector((state) => state.products.userInfo);

  const ref = useRef();

  const handleSideBar = () => {
    setsideBar(true);
  };
  const handleClose = () => {
    setsideBar(false);
  };
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setsideBar(false);
      }
    });
  }, [ref, setsideBar]);

  return (
    <div>
      <ul className="flex px-2 gap-3 justify-start text-sm items-center bg-amazon_light text-white">
        <li className="headerHover py-2">
          {" "}
          <MenuOutlinedIcon onClick={handleSideBar} /> All
        </li>
        <li className=" hidden md:inline-flex headerHover py-2">
          Today's Deals
        </li>
        <li className=" hidden md:inline-flex headerHover py-2 ">
          Customer Service
        </li>
        <li className=" hidden md:inline-flex headerHover py-2 ">Registry</li>
        <li className=" hidden md:inline-flex headerHover py-2">Gift Cards</li>
        <li className=" hidden md:inline-flex headerHover py-2">Sell</li>
        <li className=" hidden md:inline-flex ml-auto headerHover py-2">
          Shop deals in Electronics
        </li>
      </ul>
      {sideBar && (
        <div className="fixed top-0 bg-black left-0 h-screen w-full bg-opacity-80">
          <div className="w-full h-full relative ">
            <motion.div
              ref={ref}
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
              }}
              className="h-full w-[80%]  md:w-[350px] bg-white border-black overflow-y-scroll border "
            >
              <div className="bg-amazon_light text-whiteText p-3 flex items-center px-7 font-extrabold">
                {userState ? (
                  <span className="w-10">
                    <img src={userState.image} className=" rounded-3xl" />
                  </span>
                ) : (
                  <span>
                    <AccountCircleIcon />
                  </span>
                )}

                {userState ? (
                  <h3 className=" px-3 font-titleFont font-bold text-lg tracking-wide ">
                    {" "}
                    {userState.userName}
                  </h3>
                ) : (
                  <h3 className=" px-3 font-titleFont font-bold text-lg tracking-wide ">
                    {" "}
                    Hello, sign in
                  </h3>
                )}
              </div>
              <SideHeader
                title="Digital Content & Devices"
                item1="Amazon Music"
                item2=" Kindle E-readers & Books"
                item3="Amazon Appstore"
              />
              <SideHeader
                title="Shop By Department"
                item1="Elecronics"
                item2="Computers"
                item3="Smart HOme"
              />
              <SideHeader
                title="Programs & Features"
                item1="Gift Cards"
                item2="Shop Ny Interest"
                item3="International Shopping"
              />
              <SideHeader
                title="Help & Settings"
                item1="Your Account"
                item2="Customer Service"
                item3="Sign in"
              />
              <span
                className="absolute text-white md:right-0 right-0   sml:right-0 mdl:left-[22rem]  cursor-pointer top-3"
                onClick={handleClose}
              >
                <CloseIcon style={{ fontSize: "2rem" }} />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
