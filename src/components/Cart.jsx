import React, { useState, useEffect } from "react";
import "../styles/Cart.css";
import { PiShoppingCartSimpleBold } from "react-icons/pi";
import { Footer } from "./Footer";
import { useNavigate } from "react-router-dom";
import { useCart } from "../CartContext";
import { MdDelete } from "react-icons/md";
import { Modal } from "./Modal";
import { useProducts } from "../ProductsProvider";

export const Cart = ({ handleContactClick }) => {
  const {
    cartItems,
    clearCart,
    incrementFromCart,
    decrementFromCart,
    removeFromCart,
    addToCart,
  } = useCart();
  const {
    categories,
    dropdownProducts,
    convertPrice,
    currencyTo,
    setCurrencyTo,
  } = useProducts();

  const navigate = useNavigate();
  console.log("cartItems is:", cartItems);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  //   useEffect(() => {
  //   if (isModalOpen) {
  //     document.body.style.overflow = 'hidden';
  //   } else {
  //     document.body.style.overflow = 'auto';
  //   }

  //   // Clean up if component unmounts
  //   return () => {
  //     document.body.style.overflow = 'auto';
  //   };
  // }, [isModalOpen]);

  const handleShopNowClick = () => {
    navigate("/");
  };

  const handleContactButtonClick = () => {
    const textMessage = cartItems.map((item) => item.name);
    handleContactClick(textMessage);
  };

  const handleCloseModal = () => {
    setModalOpen(!isModalOpen);
  };
  function removeHtmlTags(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  }
  return (
    <div className="mt-16 sm:mt-20">
      {cartItems.length > 0 ? (
        <div>
         <div className="relative overflow-hidden w-full bg-white text-blue-600 mb-2">
          <div className="whitespace-nowrap animate-marquee-ltr flex items-center gap-12">
            <div className="flex items-center gap-4 px-4 text-xs md:text-lg">
              {/* <p>
                <b>SAS Engineering</b>
              </p> */}
              <p>
                <b>
                  Toll Free: 9850418036 | Email:{" "}
                  <a href="mailto:marketing@sasengineering.in" className="">
                    marketing@sasengineering.in
                  </a>{" "}
                  | GST Number: 27AATCS4445F1ZY
                </b>
              </p>
            </div>
          </div>
        </div>
          <div className="bg-gray-50 flex justify-end gap-4 pr-4 pt-4 xl:!pr-6">
            {/* <h1>Cart</h1> */}

            <button
              onClick={clearCart}
              className="bg-gradient-to-r from-red-500 to-red-700  px-2 xl:!px-2 py-2 text-white rounded-md flex gap-2 items-center transition-all duration-100 transform hover:scale-95"
            >
              <span className="sm:text-xl xl:text-2xl">
                <MdDelete />
              </span>{" "}
              <span className="text-sm sm:text-base xl:text-xl font-semibold ">
                Clear Cart
              </span>
            </button>
            <button
              onClick={handleContactButtonClick}
              className="bg-gradient-to-r from-red-500 to-red-700 px-2 md:!px-4  py-2 text-white rounded-md flex gap-2 items-center text-sm sm:text-base xl:text-xl font-semibold transition-all duration-100 transform hover:scale-95 "
            >
              Get Quote
            </button>
          </div>
          <div className="grid w-full  2xl:!px-60 xl:!px-36 bg-gray-50 md:grid-cols-2  px-4 py-4 gap-y-4 md:gap-y-6 md:gap-x-6 md:justify-center md:items-center ">
            {cartItems.map((product, index) => {
              const textContent = removeHtmlTags(product.description);
              const convertedPrice = convertPrice(product.price, currencyTo);
              return (
                <div className="min-h-[150px] h-[19vh] sm:h-[22vh] md:min-h-[180px] md:h-[16vh] lg:min-h-[180px] xl:min-h-[200px] xl:h-[25vh] border-2 w-[100%] md:w-[100%]  bg-white border-gray-300 p-2 rounded-lg shadow-lg  xl:shadow-xl">
                  <div className="relative">
                    <MdDelete
                      className="absolute right-0 text-2xl  xl:text-3xl hover:text-red-500 text-red-600"
                      onClick={() => removeFromCart(product.id)}
                    />
                  </div>
                  <div className="flex h-[100%]">
                    <div className=" w-[35%]  h-[100%] ">
                      <img
                        src={
                          product.images[0]?.src || "/assets/defaultImage.jpg"
                        }
                        alt={product.name || "Product Image"}
                        className="w-[100%] h-[100%] object-contain "
                      />
                    </div>
                    <div className=" w-[65%] h-[100%] pl-2  flex flex-col justify-between">
                      <div className="flex flex-col h-[55%] justify-center  ">
                        <p className="text-[.95rem] sm:text-lg md:text-[1rem] xl:text-xl font-bold text-red-500 mont line-clamp-1">
                          {product.name}
                        </p>
                        <p className="text-xs sm:text-base md:text-sm xl:text-base font-bold text-gray-800 roboto line-clamp-2 xl:mt-2">
                          {removeHtmlTags(product.description)}
                        </p>
                      </div>

                      <div className="flex  h-[45%] w-[100%] ">
                        <div className="flex flex-col w-[50%]  justify-center ">
                          <span className="text-xs sm:text-base md:text-[.9rem] xl:text-lg font-bold text-red-500 pr-32 mont">
                            {product.stock_quantity}
                            <span className="font-semibold  pl-1 text-green-600 mont">
                              Available
                            </span>
                          </span>
                          <h3 className="text-xs sm:text-base md:text-[.9rem] xl:text-lg  text-gray-900 mont ">
                            <span className="text-red-500 font-semibold roboto">
                              ₹
                            </span>{" "}
                            {convertedPrice}
                          </h3>
                        </div>
                        <div className="w-[50%]  flex justify-center items-center ">
                          <button
                            className=" md:!border-none   rounded-lg sm:rounded-md md:rounded-lg px-2 sm:!px-3 md:!py-2 xl:!px-4 xl:!py-3   py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-bold   hover:text-white   text-xs  sm:text-base md:text-xs xl:text-[.9rem] sans transition-all duration-100 transform hover:scale-105"
                            onClick={handleContactButtonClick}
                          >
                            Get Quote
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="basketContainer">
          <PiShoppingCartSimpleBold className="text-red-600 text-9xl md:text-[9rem] lg:text-[10rem]" />
          <p className="text-base md:text-xl lg:text-2xl text-red-500 mont">
            You have no items in your cart
          </p>
          <button
            onClick={handleShopNowClick}
            className=" rounded-lg sm:rounded-md md:rounded-lg px-3  sm:!px-3 md:!px-4 md:!py-2 xl:!px-5 xl:!py-2  mt-2 md:!mt-3 lg:!mt-4 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white font-bold   hover:text-white   text-[.9rem]  sm:text-base md:text-lg xl:text-xl sans transition-all duration-100 transform hover:scale-105"
          >
            Shop Now
          </button>
        </div>
      )}
      {/* <Footer /> */}
      {isModalOpen && (
        <Modal message={modalMessage} onClose={handleCloseModal} />
      )}
    </div>
  );
};
