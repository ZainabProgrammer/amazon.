import React, { useState } from "react";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { logo } from "../../assets/index";
import HeaderBottom from "./HeaderBottom";
import PopoverElement from "./PopoverElement";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logout, searching } from "../../features/ProductsSlice";

const HeaderTop = ({ searchCategory, setsearchCategory }) => {
  const cartState = useSelector((state) => state.products.cart);
  const userState = useSelector((state) => state.products.userInfo);
  const items = useSelector((state) => state.products.allProducts);
  const [showItems, setshowItems] = useState(false);
  const [selec, setselec] = useState(true);
  const searchText = useSelector((state) => state.products.searchText);

  const dispatch = useDispatch();
  let uniqueCategories = [...new Set(items.map((item) => item.category))];

  const handleDropDown = () => {
    setshowItems(!showItems);
  };

  const handleSearch = (e) => {
    dispatch(searching({ searchText: e.target.value }));
  };

  const handleCategory = (e) => {
    let value = e.target.value;
    setsearchCategory(value);
    setselec(!selec);
    document.getElementById("searchbar").focus();
  };

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
    <div className="w-full sticky top-0 z-50">
      <div className="bg-amazon_blue w-full text-white px-3 py-2 flex flex-col justify-center">
        <div className="px-2 xs:px-0 flex items-center  ">
          <div className=" flex gap-16 xs:gap-0 sm:gap-0 xxs:gap-0">
            <Link to="/">
              <div
                className="headerHover flex items-center w-[120px] md:mt-0 mt-2"
                onClick={scrollToTop}
              >
                <img
                  className="mdl:w-full w-[70%] h-full  "
                  src={logo}
                  alt="logo"
                />
              </div>
            </Link>
            <div className="sm:flex xs:inline-flex xxs:flex hidden  items-center ">
              {userState ? (
                <span className="mdl:hidden headerHover py-1 px-2 text-white font-bold  flex text-[12px] items-center">
                  {userState.userName}
                </span>
              ) : (
                <Link to="/signin" className="hover:no-underline ">
                  <span className="mdl:hidden  py-1 px-2 headerHover text-white font-bold text-[12px] ">
                    Sign in
                  </span>
                </Link>
              )}
              <div className=" headerHover mdl:hidden sm:inline-flex   p-1  ">
                <span
                  className="font-semibold  text-[12px] text-white "
                  onClick={() => dispatch(logout())}
                >
                  Logout
                </span>
              </div>
              <Link to="/cart" className="hover:no-underline">
                <div
                  className="text-white w-full   md:hidden flex items-center justify-start mdl:items-end mdl:justify-end headerHover  relative"
                  onClick={scrollToTop}
                >
                  <span className="absolute mdl:bottom-4 mdl:right-12 left-4 bottom-5  text-amazon_yellow">
                    {cartState.length > 0 ? cartState.length : 0}
                  </span>{" "}
                  <ShoppingCartIcon className="text-white  " />
                  <span className="font-semibold xs:text-[12px] text-sm pt-3  text-white ">
                    Cart
                  </span>
                </div>
              </Link>
            </div>
          </div>

          <div className=" headerHover hidden xl:inline-flex  h-[80%] pl-1">
            <LocationOnOutlinedIcon />
            <p className="flex flex-col text-sm text-lightText ">
              Deliver to
              <span className="font-semibold text-sm -mt-1 text-whiteText">
                Pakistan
              </span>
            </p>
          </div>
          <div className="h-10 rounded-md mdl:inline-flex px-2  flex-grow outline-none relative items-center text-amazon_light ">
            <div className="bg-gray-200 h-full  hidden items-center mdl:inline-flex justify-center font-titleFont px-1 outline-none border-none  rounded-bl-md rounded-tl-md cursor-pointer duration-300 hover:bg-gray-300 focus:border-amazon_yellow">
              <span className="text-sm focus:border-amazon_yellow outline-none border-none hidden mdl:inline-flex ">
                <select
                  className="px-0 outline-none border-none bg-gray-200 w-full"
                  onChange={handleCategory}
                  value={searchCategory}
                >
                  <option value="all" className="border-none outline-none">
                    All
                  </option>

                  {uniqueCategories.map((e) => {
                    return (
                      <option key={e} value={e}>
                        {e}
                      </option>
                    );
                  })}
                </select>
              </span>

              {showItems && (
                <div>
                  <ul className="absolute top-10 p-3 left-0  bg-[#5a5353] text-gray-200 z-50 flex flex-col items-start  border-[1px] gap-1 overflow-y-scroll w-52 h-80 duration-0 overflow-x-hidden border-amazon_blue rounded-md">
                    {}
                    <li className="hover:bg-blue-600 w-full px-1 rounded-md duration-75">
                      Departments
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <input
              id="searchbar"
              type="text"
              value={searchText}
              className={
                selec
                  ? "h-full flex-grow mdl:inline-flex hidden relative outline-none border-none px-2 text-amazon_blue focus:outline-amazon_yellow select-auto"
                  : "h-full flex-grow mdl:inline-flex hidden relative border-none outline-none px-2 text-amazon_blue focus:outline-amazon_yellow "
              }
              placeholder="Search Amazon"
              onChange={handleSearch}
            />
            <span className=" bg-amazon_yellow w-12 h-full mdl:inline-flex hidden  items-center justify-center rounded-tr-md rounded-br-md cursor-pointer duration-300 hover:bg-[#f3a847]">
              <SearchOutlinedIcon />
            </span>
            <span className="hidden xl:inline-flex">
              <PopoverElement />
            </span>

            <div className="text-lightText headerHover pt-1 pb-1  mdl:inline-flex hidden  items-center flex-col text-sm">
              Returns{" "}
              <span className="font-semibold -mt-1 text-whiteText">
                & Orders
              </span>
            </div>
            <Link to="/cart" className="hover:no-underline">
              <div
                className="text-white w-full sml:hidden xs:hidden  xxs:hidden md:flex mdl:flex lg:flex lgl:flex xxl:flex xl:flex items-center justify-start mdl:items-end mdl:justify-end headerHover  relative"
                onClick={scrollToTop}
              >
                <span className="absolute mdl:bottom-4 mdl:right-12 left-4 bottom-5  text-amazon_yellow">
                  {cartState.length > 0 ? cartState.length : 0}
                </span>{" "}
                <ShoppingCartIcon className="text-white  " />
                <span className="font-semibold xs:text-[12px] text-sm pt-3  text-white ">
                  Cart
                </span>
              </div>
            </Link>
          </div>
          <div className=" headerHover hidden mdl:inline-flex   h-[80%] p-1">
            <span
              className="font-semibold  text-[12px] px-2 pt-3 text-white "
              onClick={() => dispatch(logout())}
            >
              Logout
            </span>
          </div>
        </div>
      </div>

      <HeaderBottom />
    </div>
  );
};

export default HeaderTop;
