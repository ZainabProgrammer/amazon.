import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/Footer";
import HeaderTop from "../header/HeaderTop";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../../features/ProductsSlice";

const Cart = ({ searchCategory, setsearchCategory }) => {
  const [items, setitems] = useState([]);
  const [total, settotal] = useState(0);
  const state = useSelector((state) => state.products.cart);
  const dispatch = useDispatch();
  const searchText = useSelector((state) => state.products.searchText);
  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
    setitems(state);
    let Total = 0;
    state.map((e) => {
      Total += e.price * e.cartQty;
      return settotal(Total.toFixed(3));
    });
  }, [state]);
  const navigate = useNavigate();
  useEffect(() => {
    if (searchText?.length > 0) {
      if (window.location.pathname.includes("cart")) {
        navigate("/");
      }
    }
    //eslint-disable-next-line
  }, [searchCategory, searchText]);

  return (
    <>
      <HeaderTop
        searchCategory={searchCategory}
        setsearchCategory={setsearchCategory}
      />

      {items.length === 0 ? (
        <>
          {" "}
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className=" bg-white max-w-7xl mx-auto  my-9"
          >
            <div className="md:flex   items-center justify-center my-3 ">
              <img
                className="w-[30rem] object-containe md:m-5"
                src="https://m.media-amazon.com/images/G/01/cart/empty/kettle-desaturated._CB445243794_.svg"
                alt="img"
              />
              <div className="flex flex-col items-center">
                <h3 className="text-center">Your Amazon Cart is Empty</h3>
                <div className="flex gap-3 my-3 ">
                  <span>
                    <Link to="/signin">
                      {" "}
                      <button className="rounded-md shadow-md bg-yellow-300 hover:border-yellow-500 duration-200 text-black  opacity-80 hover:opacity-100 p-2">
                        Sign into Your Account
                      </button>
                    </Link>
                  </span>
                  <span>
                    <Link to="/registration">
                      <button className="rounded-md bg-gray-100 shadow-md opacity-80 hover:opacity-100 border-gray-200 hover:border-gray-300 duration-200 text-black p-2">
                        Sign Up Now
                      </button>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      ) : (
        <>
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="container mx-auto  md:grid grid-cols-7 h-auto gap-8 w-full "
          >
            <div className="col-span-5 w-full h-full px-4 bg-white">
              <div className="flex  justify-between font-titleFont border-b-[1px] border-b-gray-400 py-3">
                <div className="text-3xl font-medium">Shopping Cart</div>
                <div className="text-md mt-7 invisible mdl:visible font-semibold">
                  Price
                </div>
              </div>
              <div>
                {state.map((e) => {
                  return (
                    <div
                      className="md:flex border-b-gray-300 my-2 items-start   w-full gap-6 border-b-[1px]"
                      key={e.id}
                    >
                      <div className="md:w-1/5 ">
                        <img
                          className="w-full h-44 object-contain"
                          src={e.images[0]}
                          alt="img"
                        />
                      </div>

                      <div>
                        <div className="flex items-center justify-start  ">
                          <div className="w-full text-black col-span-4 ">
                            <div className="text-lg font-bold">
                              {e.description.slice(0, 70)}
                            </div>
                            <span className="text-green-600 text-semibold">
                              {e.stock ? "In Stock" : ""}
                            </span>
                            <div className="font-bold my-1">{e.brand}</div>
                            <div className="flex items-center gap-3">
                              <div className="bg-[#F0F2F2] flex justify-center mt-3 items-center gap-2 w-36 py-1 text-center drop-shadow-lg rounded-md">
                                <p className="text-base font-bold">Qty:</p>
                                <button
                                  className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
                                  onClick={() => dispatch(decrementQty(e.id))}
                                >
                                  -
                                </button>
                                <p className="font-titleFont text-base font-semibold text-amazon_blue">
                                  {isNaN(e.cartQty) ? 1 : e.cartQty}
                                </p>
                                <button
                                  className="cursor-pointer bg-gray-200 px-2 rounded-sm hover:bg-gray-400 font-semibold duration-300"
                                  onClick={() => dispatch(incrementQty(e.id))}
                                >
                                  +
                                </button>
                              </div>
                              <div className="mt-3">
                                <span className=" h-4 mt-1  w-[1px] bg-gray-300 absolute "></span>
                                <button
                                  key={e.id}
                                  className="text-teal-500 hover:underline cursor-pointer mx-2 font-bold text-xs"
                                  onClick={() => dispatch(removeFromCart(e.id))}
                                >
                                  Delete
                                </button>
                                <span className="h-4 mt-1 w-[1px] bg-gray-300 absolute "></span>
                                <span className=" h-4 mt-1  w-[1px] bg-gray-300 absolute "></span>
                                <span className="text-teal-500 mx-2 font-bold text-xs">
                                  Save for later
                                </span>
                                <span className="h-4 mt-1 w-[1px] bg-gray-300 absolute "></span>
                                <span className=" h-4 mt-1  w-[1px] bg-gray-300 absolute "></span>
                                <span className="text-teal-500 mx-2 font-bold text-xs">
                                  Compare
                                </span>
                                <span className="h-4 mt-1 w-[1px] bg-gray-300 absolute "></span>
                                <span className=" h-4 mt-1  w-[1px] bg-gray-300 absolute "></span>
                                <span className="text-teal-500 mx-2 font-bold text-xs">
                                  Share
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="font-bold ml-auto xs:py-4 text-black ">
                        ${e.price * e.cartQty}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-span-2 bg-white w-full h-44">
              <div className="flex w-full justify-center items-center my-4">
                <h6 className="px-6 pt-3 text-md font-bold">
                  Subtotal: ({state.length}) items:{" "}
                  <span className="text-black">${total}</span>
                </h6>
              </div>
              <div className="flex justify-center items-center">
                <button className=" p-2  cursor-not-allowed  w-[80%] rounded-full text-normal font-bold bg-[#FFD814] shadow-btnShadow hover:bg-[#F7CA00] duration-300">
                  Proceed to checkout
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
      <Footer />
    </>
  );
};

export default Cart;
