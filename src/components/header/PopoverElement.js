import React from "react";
import { Popover, Whisper } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MenuPopover = React.forwardRef(({ ...rest }, ref) => (
  <Popover ref={ref} {...rest} full arrow={false}>
    <div className="text-white mdl:inline-flex hidden  items-center flex-col text-sm px-2 py-3 pt-3 ">
      <div id="popoverContent" className=" text-amazon_light p-2 w-96">
        <div className="flex items-center justify-center rounded-md border-b flex-col">
          <Link to="/signin">
            <button className="bg-[#FFD814] p-2 text-amazon_blue text-center rounded-md w-52">
              Sign In
            </button>
          </Link>

          <span className="text-sm flex items-center justify-center my-2">
            New customer?{" "}
            <Link
              to="/registration"
              className=" text-blue-500 hover:text-amazon_yellow hover:underline duration-100 hover:cursor-pointer"
            >
              start here
            </Link>
          </span>
        </div>
        <div className="flex items-start justify-between font-bold text-lg">
          <div className="">
            {" "}
            <h3>Your Lists</h3>
            <p className="text-sm pt-2 hover:text-amazon_yellow hover:underline hover:cursor-pointer">
              Create a list
            </p>
            <p className="text-sm pt-2 hover:text-amazon_yellow hover:underline hover:cursor-pointer">
              Find a list or Registry
            </p>
          </div>
          <div className="p-2 border-l-gray-200 border-l-[1px]">
            {" "}
            <h3>Your Account</h3>
            <p className="text-sm pt-2 hover:text-amazon_yellow hover:underline hover:cursor-pointer">
              Accounts
            </p>
            <p className="text-sm pt-2 hover:text-amazon_yellow hover:underline hover:cursor-pointer">
              Orders
            </p>
            <p className="text-sm pt-2 hover:text-amazon_yellow hover:underline hover:cursor-pointer">
              Recommendations
            </p>
            <p className="text-sm pt-2 hover:text-amazon_yellow hover:underline hover:cursor-pointer">
              Browsing History
            </p>
            <p className="text-sm pt-2 hover:text-amazon_yellow hover:underline hover:cursor-pointer">
              Watch List
            </p>
            <p className="text-sm pt-2 hover:text-amazon_yellow hover:underline hover:cursor-pointer">
              Music Library
            </p>
          </div>
        </div>
      </div>
    </div>{" "}
  </Popover>
));

const PopoverElement = () => {
  const userState = useSelector((state) => state.products.userInfo);
  const ref = React.useRef();
  function handleSelectMenu() {
    ref.current.close();
  }
  return (
    <div className="mx-7">
      <Whisper
        placement="bottom"
        controlId="control-id-with-dropdown"
        trigger="hover"
        ref={ref}
        enterable
        speaker={<MenuPopover onSelect={handleSelectMenu} />}
      >
        <div>
          {" "}
          {userState ? (
            <span
              className=" text-gray-100 headerHover  flex items-center flex-col text-medium bg-amazon_blue"
              id="popoverButton"
            >
              {userState.userName}
              <span className="font-semibold hidden mdl:inline-flex  -mt-1 text-whiteText">
                Accounts & Lists
                <span>
                  <ArrowDropDownOutlinedIcon />
                </span>
              </span>
            </span>
          ) : (
            <span
              className=" text-lightText headerHover  flex items-center flex-col text-sm bg-amazon_blue"
              id="popoverButton"
            >
              Hello, sign in{" "}
              <span className="font-semibold hidden mdl:inline-flex  -mt-1 text-whiteText">
                Accounts & Lists
                <ArrowDropDownOutlinedIcon />
              </span>
            </span>
          )}
        </div>
      </Whisper>
    </div>
  );
};

export default PopoverElement;
