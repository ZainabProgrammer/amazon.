import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import StarIcon from "@mui/icons-material/Star";
import StarHalfIcon from "@mui/icons-material/StarHalf";
import { motion } from "framer-motion";
import { getProducts, handleSearchItems } from "../../features/ProductsSlice";
import { addToCart } from "../../features/ProductsSlice";
import Banner from "./Banner";
import HeaderTop from "../header/HeaderTop";
import Footer from "../footer/Footer";

const Products = () => {
  const [products, setproducts] = useState([]);
  const dispatch = useDispatch();
  const state = useSelector((state) => state.products.allProducts);
  const filtered = useSelector((state) => state.products.searchedItems);
  const category = useSelector((state) => state.products.searchCategories);

  useEffect(() => {
    dispatch(getProducts());

    filtered.length < 1 ? setproducts(state) : setproducts(filtered);
  }, []);

  return (
    <div>
      <HeaderTop />

      <Banner />
      <motion.div
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-screen-2xl mx-auto px-0 sm:px-7 container grid grid-cols-1 md:-mt-[5rem] -mt-[2rem]  md:grid-cols-2 xl:grid-cols-3 gap-10   xl:-mt-[15rem]  z-20 relative"
      >
        {filtered.length < 1
          ? products.map((e) => {
              return (
                <div
                  key={e.id}
                  className=" bg-white p-8 xs:p-5 flex justify-center items-center  hover:shadow-testShadow border-[1px] border-gray-200 hover:border-transparent w-full duration-200 shadow-none relative h-auto cursor-pointer rounded-md "
                >
                  <div
                    key={e.id}
                    className="items-center flex justify-center relative"
                  >
                    <div className="flex flex-col items-center relative">
                      <img
                        src={e.images[0]}
                        alt="prodc"
                        className="h-64 w-52 object-contain"
                      />
                      <div className="absolute top-[-2rem] left-[-1.9rem]"></div>
                      <div className=" flex flex-col gap-2">
                        <p className="text-[1.2rem] hover:text-red-500">
                          {e.description}
                        </p>
                        <p className=" font-bold  tracking-wider  text-[#100c0c]">
                          {e.brand}
                        </p>

                        <h4 className="font-bold text-2xl">
                          <span className="text-sm">$</span>
                          {e.price}
                        </h4>
                        <span className="text-black">
                          ${e.price + 207} delivery
                        </span>

                        <span>
                          {e.rating <= 4.23 ? (
                            <>
                              <div className="text-yellow-400 flex items-center gap-2">
                                <span className="text-black">
                                  {Math.floor(e.rating)}
                                </span>
                                <div>
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="text-yellow-400 flex items-center gap-2">
                              <span className="text-black">{e.rating}</span>
                              <div>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                              </div>
                            </div>
                          )}
                        </span>

                        <button
                          onClick={() => {
                            dispatch(addToCart(e));
                          }}
                          className="w-60 h-9 rounded-full text-base font-bold bg-[#FFD814] shadow-btnShadow hover:bg-[#F7CA00] duration-300"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : filtered.map((e) => {
              return (
                <div
                  key={e.id}
                  className=" bg-white p-8 xs:p-5 flex justify-center items-center  hover:shadow-testShadow border-[1px] border-gray-200 hover:border-transparent w-full duration-200 shadow-none relative h-auto cursor-pointer rounded-md "
                >
                  <div
                    key={e.id}
                    className="items-center flex justify-center relative"
                  >
                    <div className="flex flex-col items-center relative">
                      <img
                        src={e.images[0]}
                        alt="prodc"
                        className="h-64 w-52 object-contain"
                      />

                      <div className=" flex flex-col gap-2">
                        <p className="text-[1.2rem] hover:text-red-500">
                          {e.description}
                        </p>
                        <p className=" font-bold  tracking-wider  text-[#100c0c]">
                          {e.brand}
                        </p>

                        <h4 className="font-bold text-2xl">
                          <span className="text-sm">$</span>
                          {e.price}
                        </h4>
                        <span className="text-black">
                          ${e.price + 207} delivery
                        </span>

                        <span>
                          {e.rating <= 4.23 ? (
                            <>
                              <div className="text-yellow-400 flex items-center gap-2">
                                <span className="text-black">
                                  {Math.floor(e.rating)}
                                </span>
                                <div>
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="text-yellow-400 flex items-center gap-2">
                              <span className="text-black">{e.rating}</span>
                              <div>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                              </div>
                            </div>
                          )}
                        </span>

                        <button
                          onClick={() => dispatch(addToCart(e))}
                          className="w-60 h-9 rounded-full text-base font-bold bg-[#FFD814] shadow-btnShadow hover:bg-[#F7CA00] duration-300"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        {category === null
          ? products.map((e) => {
              return (
                <div
                  key={e.id}
                  className=" bg-white p-8 xs:p-5 flex justify-center items-center  hover:shadow-testShadow border-[1px] border-gray-200 hover:border-transparent w-full duration-200 shadow-none relative h-auto cursor-pointer rounded-md "
                >
                  <div
                    key={e.id}
                    className="items-center flex justify-center relative"
                  >
                    <div className="flex flex-col items-center relative">
                      <img
                        src={e.images[0]}
                        alt="prodc"
                        className="h-64 w-52 object-contain"
                      />
                      <div className="absolute top-[-2rem] left-[-1.9rem]"></div>
                      <div className=" flex flex-col gap-2">
                        <p className="text-[1.2rem] hover:text-red-500">
                          {e.description}
                        </p>
                        <p className=" font-bold  tracking-wider  text-[#100c0c]">
                          {e.brand}
                        </p>

                        <h4 className="font-bold text-2xl">
                          <span className="text-sm">$</span>
                          {e.price}
                        </h4>
                        <span className="text-black">
                          ${e.price + 207} delivery
                        </span>

                        <span>
                          {e.rating <= 4.23 ? (
                            <>
                              <div className="text-yellow-400 flex items-center gap-2">
                                <span className="text-black">
                                  {Math.floor(e.rating)}
                                </span>
                                <div>
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="text-yellow-400 flex items-center gap-2">
                              <span className="text-black">{e.rating}</span>
                              <div>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                              </div>
                            </div>
                          )}
                        </span>

                        <button
                          onClick={() => dispatch(addToCart(e))}
                          className="w-60 h-9 rounded-full text-base font-bold bg-[#FFD814] shadow-btnShadow hover:bg-[#F7CA00] duration-300"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          : category.map((e) => {
              return (
                <div
                  key={e.id}
                  className=" bg-white p-8 xs:p-5 flex justify-center items-center  hover:shadow-testShadow border-[1px] border-gray-200 hover:border-transparent w-full duration-200 shadow-none relative h-auto cursor-pointer rounded-md "
                >
                  <div
                    key={e.id}
                    className="items-center flex justify-center relative"
                  >
                    <div className="flex flex-col items-center relative">
                      <img
                        src={e.images[0]}
                        alt="prodc"
                        className="h-64 w-52 object-contain"
                      />

                      <div className=" flex flex-col gap-2">
                        <p className="text-[1.2rem] hover:text-red-500">
                          {e.description}
                        </p>
                        <p className=" font-bold  tracking-wider  text-[#100c0c]">
                          {e.brand}
                        </p>

                        <h4 className="font-bold text-2xl">
                          <span className="text-sm">$</span>
                          {e.price}
                        </h4>
                        <span className="text-black">
                          ${e.price + 207} delivery
                        </span>

                        <span>
                          {e.rating <= 4.23 ? (
                            <>
                              <div className="text-yellow-400 flex items-center gap-2">
                                <span className="text-black">
                                  {Math.floor(e.rating)}
                                </span>
                                <div>
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                  <StarIcon />
                                </div>
                              </div>
                            </>
                          ) : (
                            <div className="text-yellow-400 flex items-center gap-2">
                              <span className="text-black">{e.rating}</span>
                              <div>
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarIcon />
                                <StarHalfIcon />
                              </div>
                            </div>
                          )}
                        </span>

                        <button
                          onClick={() => dispatch(addToCart(e))}
                          className="w-60 h-9 rounded-full text-base font-bold bg-[#FFD814] shadow-btnShadow hover:bg-[#F7CA00] duration-300"
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
      </motion.div>
      <div className="lg:mt-[17rem] xxl:mt-[17rem]   mdl:mt-[5rem] md:mt-[5rem]">
        <Footer />;
      </div>
    </div>
  );
};

export default Products;
