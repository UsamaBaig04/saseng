import React,{useEffect,useRef,useState} from "react";
import { Package, ArrowRight, Loader2 } from "lucide-react";
import { useProducts } from "../ProductsProvider";
import { useNavigate } from "react-router-dom";
import { useInView } from 'react-intersection-observer';
export const Products = ({handleContactClick}) => {
  const { categories, loading } = useProducts();
  const { ref, inView } = useInView({ triggerOnce: true });
  const navigate = useNavigate();
  // Mock data - replace with your actual useProducts hook
  // const loading = false; // Set to true to see loading state
  const categoriess = [
      { id: 1, name: "ABB", image: { src: "/assets/abb.png" } },
      { id: 2, name: "SIEMENS", image: { src: "/assets/Siemens_AG_logo.png" } },
      { id: 3, name: "INOVANCE", image: { src: "/assets/PAM_Logo.png" } },
      { id: 4, name: "KLEMSAN", image: { src: "/assets/Klemsan.png" } },
      { id: 5, name: "KYLAND", image: { src: "/assets/kyland.webp" } },
      { id: 6, name: "HELMHOLZ", image: { src: "/assets/Helmholz-logo.png" } },
      // { id: 7, name: "Power Systems", image: { src: "/assets/power.jpg" } },
      // { id: 8, name: "Instrumentation", image: { src: "/assets/instruments.jpg" } },
      // { id: 9, name: "Process Control", image: { src: "/assets/process.jpg" } },
      // { id: 10, name: "Communication Modules", image: { src: "/assets/communication.jpg" } },
      // { id: 11, name: "Human Machine Interface", image: { src: "/assets/hmi.jpg" } },
      // { id: 12, name: "Variable Frequency Drives", image: { src: "/assets/drives.jpg" } },
  ];

  // categoryMap.js
// const categoryMap = {
//   "Switch Gear": [
//     { label: "ABB Switchgear", value: "ABB DCS" },
//     { label: "Siemens Switchgear", value: "SIEMENS SWITCHGEAR" },
//     // { label: "Switchgear Bhima Koregaon", value: "SWITCHGEAR BHIMA KOREGAON" }
//   ],
//   "Cable": [{ label: "INOVANCE CABLE", value: "INOVANCE CABLE" },
//     { label: "ABB CABLE", value: "ABB CABLE" }
//   ],
//   "VFD": [{ label: "INOVANCE VFD", value: "INOVANCE VFD" },
//     {label:"ABB VFD", value: "ABB VFD"}
//   ],
//   "HMI": [{ label: "INOVANCE HMI", value: "INOVANCE HMI" },
//       {label:"ABB HMI", value: "ABB HMI"}
//   ],
//   "Kyland": [{ label: "IPC", value: "KYLAND IPC" },
//       // {label:"ABB HMI", value: "ABB HMI"}
//   ],
//    "Helhmholz": [
//       {label:"Profinet", value: "PROFINET"}
//   ],
// };


const categoryMap = {
  "ABB": ["DCS", "SWITCHGEAR", "CABLE", "VFD", "HMI"],
  "SIEMENS": ["DCS", "SWITCHGEAR", "CABLE", "VFD", "HMI"],
  "INOVANCE": ["VFD", "PLC", "INOVANCE SERVO", "HMI"],
  "KLEMSAN": ["KLEMSAN TERMINALS", "KLEMSAN CONNECTORS"],
  "KYLAND": ["KYLAND SWITCHGEAR", "KYLAND NETWORK", "KYLAND INDUSTRIAL ETHERNET"],
  "HELMOLZ": ["HELMOLZ TERMINALS", "HELMOLZ CONNECTORS"]
};
  // Enhanced Loading Component
  
  const LoadingState = () => (
    <div className="mt-16 sm:mt-20 lg:mt-24 min-h-screen bg-gradient-to-br from-gray-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Loading Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center space-x-3 mb-4">
            <div className="bg-gradient-to-r from-red-500 to-red-700 p-3 rounded-full">
              <Package className="w-8 h-8 text-white" />
            </div>
            <div className="h-8 bg-gray-300 rounded-lg w-48 animate-pulse"></div>
          </div>
          <div className="h-4 bg-gray-200 rounded w-64 mx-auto animate-pulse"></div>
        </div>

        {/* Loading Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {[...Array(10)].map((_, index) => (
            <>
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse"
              >
                <div className="aspect-square bg-gray-300"></div>
                <div className="p-4">
                  <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto"></div>
                </div>
              </div>
            </>
          ))}
        </div>

        {/* Loading Spinner */}
        <div className="flex items-center justify-center mt-12">
          <div className="flex items-center space-x-3 text-red-600">
            <Loader2 className="w-6 h-6 animate-spin" />
            <span className="text-lg font-semibold text-black">
              Loading Categories...
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  // Show loading state
  if (loading) {
    return <LoadingState />;
  }

  /* const handleCategoryClick = (categoryName) => {
    const encodedName = encodeURIComponent(categoryName);
    navigate(`/subcategory/${encodedName}`);
    // navigate(`/${encodedName}`);
    console.log(`Navigating to: /subcategory/${encodedName}`);
    // Replace with your navigation logic
    // navigate(`/subcategory/${encodedName}`);
  }; */

// Ak
  const handleCategoryClick = (categoryName) => {
  const encodedName = encodeURIComponent(categoryName);

  navigate(`/subcategory/${encodedName}`, {
    state: {
      subcategories: categoryMap[categoryName] || []
    }
  });
};


  const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = parseInt(target.replace(/\D/g, '')); // extract numbers
    if (start === end) return;

    let duration = 200;
    let stepTime = Math.abs(Math.floor(duration / end));

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count}
      {target.includes('+') && '+'}
      {target.includes('/') && '/7'}
    </span>
  );
};

  return (
    <div className="pt-16 sm:pt-20 lg:pt-24 min-h-screen bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-200 rounded-full opacity-20"></div>
        <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-red-300 rounded-full opacity-15"></div>
        {/* <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-red-100 rounded-full opacity-25"></div> */}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="bg-gradient-to-r from-red-500 to-red-700 p-4 rounded-full shadow-lg">
              <Package className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
            </div>
            <div className="">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-red-700 ">
                Product Categories
              </h1>
            </div>
          </div>
          <p className="text-gray-600 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Explore our comprehensive range of industrial engineering solutions
            and equipment
          </p>
          <div className="mt-6 h-1 w-24 bg-gradient-to-r from-red-500 to-red-700 rounded-full mx-auto"></div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6  gap-4 sm:gap-6 lg:gap-8 ">
          {/* <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3  gap-4"> */}
          {categoriess &&
            categoriess.map((product) => {
              const category = product.name;

              return (
                <div
                  key={product.id}
                  className=""
                  onClick={() => handleCategoryClick(category)}
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl overflow-hidden border border-gray-100 transition-all duration-300 group-hover:border-red-200">
                    {/* Image Container */}
                    {/* <div className="relative aspect-square overflow-hidden "> */}
                      <div className="relative aspect-square flex items-center justify-center bg-white overflow-hidden">
                      <img
                        src={product.image?.src || "/assets/defaultImage.jpg"}
                        alt={product.name || "Product Image"}
                        // className="w-full h-full object-cover "
                        className="max-w-full max-h-full object-contain p-4"
                        onError={(e) => {
                          e.target.src = "/assets/defaultImage.jpg";
                        }}
                      />

                      {/* Overlay */}
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div> */}

                      {/* Hover Icon */}
                      {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                                            <ArrowRight className="w-4 h-4 text-red-600" />
                                        </div> */}

                      {/* Category Badge */}
                      {/* <div className="absolute bottom-4 left-4 right-4">
                                            <div className="bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                                <div className="flex items-center space-x-2">
                                                    <Package className="w-4 h-4 text-red-600 flex-shrink-0" />
                                                    <span className="text-sm font-semibold text-gray-800 truncate">
                                                        {category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div> */}
                    </div>

                    {/* Content */}
                        {/* <div className="p-1">
                            <h3 className="font-bold text-gray-800 text-center text-sm sm:text-base lg:text-lg group-hover:text-red-700 transition-colors duration-300 leading-tight">
                            {category}
                            </h3>
                            <div className="mt-2 h-0.5 bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div> */}
                  </div>

                  {/* External Category Label (for smaller screens) */}
                  <div className=" mt-3 text-center">
                    <p className="font-semibold text-gray-800 text-sm group-hover:text-red-700 transition-colors duration-300">
                      {category}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 sm:mt-20 text-center">
          <div className="bg-gradient-to-r from-red-600 to-red-800 rounded-2xl p-8 sm:p-12 shadow-2xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
              Need Custom Solutions?
            </h2>
            <p className="text-red-100 text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
              Our engineering experts are ready to help you find the perfect
              industrial solution for your specific requirements.
            </p>
            <button className="bg-white text-red-700 hover:bg-red-50 px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center space-x-2"
             onClick={() => handleContactClick([""])}>
              <span>Contact Our Experts</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 sm:mt-20" ref={ref}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-4">
            {[
              { number: "700+", label: "Products Available" },
              { number: "20+", label: "Categories" },
              { number: "1000+", label: "Happy Clients" },
              { number: "24/", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white rounded-2xl h-36 lg:h-40 flex flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group-hover:border-red-200">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-2">
                    {inView ? <Counter target={stat.number} /> : '0'}
                  </div>
                  <div className="text-gray-600 font-medium text-sm sm:text-base">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
