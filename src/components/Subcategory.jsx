import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/Subcategory.css";
import { useCart } from "../CartContext";
import { useProducts } from "../ProductsProvider";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import { MdOutlineSearch } from "react-icons/md";

export const Subcategory = ({ toggleModal, handleContactClick }) => {
  const {
    categories,
    dropdownProducts,
    convertPrice,
    currencyTo,
    setCurrencyTo,
  } = useProducts();
  const { encodedName } = useParams();
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(20);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [addedProducts, setAddedProducts] = useState([]);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Filtering function
  const filterDataByCategoryOG = () => {
    const dataFiltered = dropdownProducts.filter((prod) =>
      prod.categories.some(
        (cat) => cat.name === decodeURIComponent(encodedName),
      ),
    );
    setFilterData(dataFiltered);
    console.log("filtered data is", dataFiltered);
  };
  const normalize = (str) => str?.toLowerCase().trim();

  const filterDataByCategory = () => {
    let dataFiltered = dropdownProducts;

    // ❗ ONLY filter by subcategory (because API only has this)
    if (selectedSubcategory) {
      dataFiltered = dataFiltered.filter((prod) =>
        prod.categories.some(
          (cat) => normalize(cat.name) === normalize(selectedSubcategory),
        ),
      );
    }

    setFilterData(dataFiltered);
  };
  useEffect(() => {
    if (dropdownProducts.length > 0) {
      filterDataByCategory();
      setLoading(false);
    }
  }, [dropdownProducts, encodedName, selectedSubcategory]);

  //  useEffect(() => {
  //   if (subcategories.length > 0) {
  //     setSelectedSubcategory(subcategories[0]);
  //   }
  // }, [encodedName]);

  // AK
  useEffect(() => {
    if (subcategories.length > 0) {
      setSelectedSubcategory(subcategories[0].value);
    }
  }, [encodedName]);

  // useEffect(() => {
  //   window.scrollTo({ top: 0});
  // }, [encodedName]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-screen">
  //       <p className="text-lg font-bold">Loading products...</p>
  //     </div>
  //   );
  // }

  function removeHtmlTags(html) {
    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = html;
    return tempDiv.textContent || tempDiv.innerText || "";
  }
  // console.log("filtered data is", filterData);

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => {
      setVisibleCount((prev) => prev + 20);
      setLoadingMore(false);
      window.scrollTo({
        top: document.documentElement.scrollTop + 200,
        behavior: "smooth",
      });
    }, 500);
  };

  const filteredAndSearchedData = filterData.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // AK
  // const categoryMap = {
  //   "Switch Gear": [
  //     { label: "ABB Switchgear", value: "ABB DCS" },
  //     { label: "Siemens Switchgear", value: "SIEMENS SWITCHGEAR" },
  //     // { label: "Switchgear Bhima Koregaon", value: "SWITCHGEAR BHIMA KOREGAON" }
  //   ],
  //   Cable: [
  //     { label: "INOVANCE CABLE", value: "INOVANCE CABLE" },
  //     { label: "ABB CABLE", value: "ABB CABLE" },
  //   ],
  //   VFD: [
  //     { label: "INOVANCE VFD", value: "INOVANCE VFD" },
  //     { label: "ABB VFD", value: "ABB VFD" },
  //   ],
  //   HMI: [
  //     { label: "INOVANCE HMI", value: "INOVANCE HMI" },
  //     { label: "ABB HMI", value: "ABB HMI" },
  //   ],
  //   Kyland: [
  //     { label: "IPC", value: "KYLAND IPC" },
  //     // {label:"ABB HMI", value: "ABB HMI"}
  //   ],
  //   Helmholz: [{ label: "Profinet", value: "PROFINET" }],
  // };

const categoryMap = {
  ABB: [
    { label: "DCS", value: "ABB DCS" },
    { label: "Switchgear", value: "ABB SWITCHGEAR" },
    { label: "Cable", value: "ABB CABLE" },
    { label: "VFD", value: "ABB VFD" },
    { label: "HMI", value: "ABB HMI" },
  ],

  SIEMENS: [
    { label: "DCS", value: "SIEMENS DCS" },
    { label: "Switchgear", value: "SIEMENS SWITCHGEAR" },
    { label: "Cable", value: "SIEMENS CABLE" },
    { label: "VFD", value: "SIEMENS VFD" },
    { label: "HMI", value: "SIEMENS HMI" },
  ],

  INOVANCE: [
    { label: "Switchgear", value: "ABB SWITCHGEAR" },
    { label: "VFD", value: "INOVANCE VFD" },
    { label: "Cable", value: "INOVANCE CABLE" },
    { label: "HMI", value: "INOVANCE HMI" },
    { label: "PLC", value: "INOVANCE PLC" },
    { label: "SERVO", value: "INOVANCE SERVO" },
  ],

  KLEMSAN: [
    { label: "KLEMSAN", value: "KLEMSAN" },
    { label: "Connectors", value: "KLEMSAN CONNECTORS" },
  ],

  KYLAND: [
    { label: "Switchgear", value: "KYLAND SWITCHGEAR" },
    { label: "Network", value: "KYLAND NETWORK" },
    { label: "Industrial Ethernet", value: "KYLAND INDUSTRIAL ETHERNET" },
  ],

  HELMOLZ: [
    { label: "Terminals", value: "HELMOLZ TERMINALS" },
    { label: "Connectors", value: "HELMOLZ CONNECTORS" },
  ],
};
  const categoryMap = {
    "Switch Gear": [
      { label: "ABB Switchgear", value: "ABB DCS" },
      { label: "Siemens Switchgear", value: "SIEMENS SWITCHGEAR" },
      // { label: "Switchgear Bhima Koregaon", value: "SWITCHGEAR BHIMA KOREGAON" }
    ],
    Cable: [
      { label: "INOVANCE CABLE", value: "INOVANCE CABLE" },
      { label: "ABB CABLE", value: "ABB CABLE" },
    ],
    VFD: [
      { label: "INOVANCE VFD", value: "INOVANCE VFD" },
      { label: "ABB VFD", value: "ABB VFD" },
    ],
    HMI: [
      { label: "INOVANCE HMI", value: "INOVANCE HMI" },
      { label: "ABB HMI", value: "ABB HMI" },
    ],
    Kyland: [
      { label: "IPC", value: "KYLAND IPC" },
      // {label:"ABB HMI", value: "ABB HMI"}
    ],
    Helmholz: [{ label: "Profinet", value: "PROFINET" }],
  };
  const decodedCategory = decodeURIComponent(encodedName);

  const subcategories = categoryMap[decodedCategory] || [];
  console.log("subcategories is>>>>>>>>>", subcategories);
  const renderItem = filteredAndSearchedData
    .slice(0, visibleCount)
    .map((product, index) => {
      const textContent = removeHtmlTags(product.description);
      const convertedPrice = convertPrice(product.price, currencyTo);
      return (
        // card Container

        <div className=" min-h-[145px] h-[20vh] sm:h-[22vh] md:min-h-[180px] md:h-[16vh] lg:min-h-[180px] lg:h-[22vh] xl:min-h-[200px] xl:h-[18vh]  border-2 w-full md:w-full bg-white border-gray-300 px-2 py-2 rounded-lg shadow-lg  xl:shadow-xl ">
          <div className="flex h-[100%] ">
            <div className="w-[30%] h-[100%]">
              <img
                src={product.images[0]?.src || "/assets/defaultImage.jpg"}
                alt={product.name || "Product Image"}
                className="w-full h-full   object-contain bg-white"
              />
            </div>
            <div className=" w-[70%] h-[100%] pl-2  flex flex-col justify-between">
              <div className="flex flex-col h-[70%]   ">
                <p className="text-sm sm:text-lg md:text-[1rem] lg:text-lg xl:text-xl font-bold text-red-500 mont line-clamp-1 md:line-clamp-2">
                  {product.name}
                </p>
                <p className="text-[.85rem] sm:text-base md:text-sm lg:text-base xl:text-lg font-bold text-black roboto line-clamp-3">
                  {removeHtmlTags(product.description)}
                </p>
              </div>

              <div className="flex  h-[25%] w-[100%] ">
                <div className="flex flex-col w-[50%]  justify-end ">
                  <span className="text-sm sm:text-base md:text-[.9rem] lg:text-[1rem] xl:text-xl font-bold text-red-500 pr-32 mont">
                    {product.stock_quantity}
                    <span className="font-semibold  pl-1 text-green-600 mont">
                      Available
                    </span>
                  </span>
                  <h3 className="text-sm sm:text-base md:text-[.9rem] lg:text-[1rem] xl:text-xl  text-gray-900 mont ">
                    <span className="text-red-500 font-semibold roboto">₹</span>{" "}
                    {convertedPrice}
                  </h3>
                </div>
                <div className="w-[50%]  flex justify-center items-center ">
                  <button
                    className={`rounded-lg sm:rounded-md md:rounded-lg px-2 sm:!px-3 md:!py-2 xl:!px-5 xl:!py-3 py-2 text-white font-bold text-xs sm:text-base md:text-xs lg:text-sm xl:text-[.9rem] sans transition-all duration-200 transform hover:scale-95 ${
                      addedProducts.includes(product.id)
                        ? "bg-gradient-to-r from-green-600 to-green-800 hover:bg-green-700"
                        : "bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800"
                    }`}
                    onClick={() => {
                      if (addedProducts.includes(product.id)) {
                        navigate("/cart");
                      } else {
                        addToCart(product);
                        setAddedProducts((prev) => [...prev, product.id]);
                      }
                    }}
                  >
                    {addedProducts.includes(product.id)
                      ? "View Cart"
                      : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

  const SkeletonLoader = ({ count = 8 }) => {
    return (
      <div className="grid w-full bg-gray-100 md:grid-cols-2  px-4 py-4 gap-y-4 md:gap-y-6 md:gap-x-6 md:justify-center md:items-center mt-20">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse h-[19vh] sm:h-[22vh] md:h-[16vh] xl:h-[25vh] border-2 w-full bg-white border-gray-300 p-2 rounded-lg shadow-lg"
          >
            <div className="flex h-full">
              <div className="w-[35%] h-full bg-gray-300 rounded" />
              <div className="w-[65%] h-full p-2 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="h-4 bg-gray-300 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-300 rounded w-full"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-gray-300 rounded w-1/2"></div>
                  <div className="h-4 bg-gray-300 rounded w-1/4"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  if (loading) {
    return <SkeletonLoader count={8} />;
  }
  return (
    <div className="mainContainer bg-white/95 mt-24 mb-10">
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
        <div className="w-full flex justify-center items-center  py-2">
          <div className="relative w-[90%] max-w-md">
            <MdOutlineSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={handleSearch}
              className="border-2 border-gray-600 rounded-md p-2 pl-10 w-full"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 justify-center my-4">
        {/* {subcategories.map((sub, index) => (
    <button
      key={index}
      onClick={() => {
  console.log("Selected Subcategory:", sub);
  setSelectedSubcategory(sub);
}}
      className={`px-4 py-2 rounded-full border font-semibold transition ${
        selectedSubcategory === sub
          ? "bg-red-600 text-white"
          : "bg-white text-gray-700 hover:bg-red-100"
      }`}
    >
      {sub}
    </button>
  ))} */}

        {/* Ak */}
        {subcategories.map((sub, index) => (
          <button
            key={index}
            onClick={() => setSelectedSubcategory(sub.value)}
            className={`px-4 py-2 rounded-full border font-semibold ${
              selectedSubcategory === sub.value
                ? "bg-red-600 text-white"
                : "bg-white text-gray-700 hover:bg-red-100"
            }`}
          >
            {sub.label}
          </button>
        ))}
        {/* Reset button */}
        {/* <button
    onClick={() => setSelectedSubcategory(null)}
    className="px-4 py-2 rounded-full border bg-gray-200"
  >
    All
  </button> */}
      </div>
      {/* <div className="grid w-full 2xl:!px-48 xl:!px-40 bg-white/95  md:grid-cols-2 px-4 py-4 gap-y-4 md:gap-y-6 md:gap-x-6 md:justify-center md:items-center">
        {renderItem}
      </div> */}

      <div className="grid w-full 2xl:!px-48 xl:!px-40 bg-white/95 md:grid-cols-2 px-4 py-4 gap-y-4 md:gap-y-6 md:gap-x-6 md:justify-center md:items-center">
        {filteredAndSearchedData.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center text-center py-20">
            <p className="text-xl md:text-2xl font-bold text-gray-700 mb-3">
              Products not listed yet
            </p>
            <p className="text-gray-500 mb-5">
              We couldn’t find any products in this category.
            </p>

            <button
              onClick={() => handleContactClick(["No products available in this category"])}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-semibold"
            >
              Contact Us
            </button>
          </div>
        ) : (
          renderItem
        )}
      </div>

      <div className="flex justify-center  text-gray-700 font-semibold text-sm md:text-base">
        Showing {Math.min(visibleCount, filterData.length)} of{" "}
        {filterData.length} products
      </div>

      {visibleCount < filterData.length && (
        <div className="flex justify-center my-2">
          <button
            onClick={handleLoadMore}
            className={` rounded-lg px-6 py-2 text-white font-bold bg-gradient-to-r from-red-500 to-red-700 hover:text-white transition ${
              loadingMore ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loadingMore}
          >
            {loadingMore ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
};
