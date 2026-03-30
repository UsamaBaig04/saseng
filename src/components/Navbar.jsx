import React, { useState,useEffect } from "react";
import { 
  Menu, 
  X, 
  ShoppingCart, 
  Home, 
  Phone, 
  Settings, 
  Package, 
  ChevronDown, 
  ChevronRight,
  HelpCircle,
  Quote,
  Building2
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useProducts } from "../ProductsProvider";
import { useCart } from "../CartContext";
import { lockScroll, unlockScroll } from './scrollLock';

export const Navbar = ({ handleContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isOpen, setisOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

const toggleSidebar = () => {
  const nextOpenState = !sidebarOpen;
  setSidebarOpen(nextOpenState);
  setisOpen(false); // close any other UI, like modals

  if (nextOpenState) {
    lockScroll();
  } else {
    unlockScroll();
  }
};

useEffect(() => {
  return () => {
    if (sidebarOpen) {
      unlockScroll();
    }
  };
}, [sidebarOpen]);

  const [dropdownProducts, setDropdownProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [showCategories, setShowCategories] = useState(false);
  const { cartItems, getTotalItemCount } = useCart();
  const { categories } = useProducts();
  const totalItemCount = getTotalItemCount();

  const handleContactButtonClick = () => {
    const descriptions = cartItems.map((item) => item.description);
    handleContactClick && handleContactClick(descriptions);
  };

   const handleCategoryChange = (event) => {
    const categoryName = event.target.value;
    if (categoryName) {
      navigate(`/subcategory/${encodeURIComponent(categoryName)}`);
    } else {
      navigate("/");
    }
  };
//   useEffect(() => {
//   lockScroll();
//   return () => unlockScroll();
// }, [sidebarOpen]);
  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 sm:h-16 md:h-20 lg:h-20">
            
            {/* Logo Section */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="flex-shrink-0 bg-gradient-to-r from-red-500 via-red-600 to-red-700 rounded-xl p-1.5 sm:p-2 shadow-lg">
                <Building2 className="text-white w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" />
              </div>
              {/* <div>
                <img src="../assets/sas.png" style={{height:'50px',width:'50px'}}/>
              </div> */}
              <div className="text-red-600 ">
                <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold tracking-wide">
                  SAS ENGINEERING
                </h1>
                {/* <h1 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-bold tracking-wide"><span className="text-orange-600">SAS</span> ENGINEERING</h1> */}
                <p className="text-xs sm:text-xs md:text-sm lg:text-base text-slate-600 font-medium tracking-wider">
                  INDUSTRIAL MART
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
              <Link to ="/" 
                className="text-slate-700 hover:text-red-600 transition-colors duration-300 font-semibold text-sm lg:text-base xl:text-lg flex items-center space-x-1 lg:space-x-2 group"
              >
                <Home className="w-3 h-3 lg:w-4 lg:h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Home</span>
              </Link>

              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setisOpen(!isOpen)}
                  className="text-slate-700 hover:text-red-600 transition-colors duration-300 font-semibold text-sm lg:text-base xl:text-lg flex items-center space-x-1 lg:space-x-2 group"
                >
                  <Package className="w-3 h-3 lg:w-4 lg:h-4 group-hover:scale-110 transition-transform duration-300" />
                  <span>Products</span>
                  <ChevronDown 
                    className={`w-3 h-3 lg:w-4 lg:h-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : "rotate-0"
                    }`} 
                  />
                </button>

                {/* Desktop Dropdown */}
                {isOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[500px] md:w-[600px] lg:w-[700px] xl:w-[800px] bg-white rounded-2xl shadow-2xl border border-gray-200/50 z-50 overflow-hidden backdrop-blur-md">
                    <div className="bg-gradient-to-r from-slate-50 to-gray-50 px-4 lg:px-6 py-3 lg:py-4 border-b border-gray-200">
                      <h3 className="text-slate-800 font-bold text-base lg:text-lg">Product Categories</h3>
                      <p className="text-slate-600 text-xs lg:text-sm">Browse our comprehensive industrial solutions</p>
                    </div>
                    <div className="max-h-64 md:max-h-72 lg:max-h-80 overflow-y-auto">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-1 lg:gap-2 p-3 lg:p-4">
                        <button
                          onClick={() => {
                            handleCategoryChange({ target: { value: "" } });
                            setisOpen(false);
                          }}
                          className="text-left p-2 lg:p-3 rounded-xl hover:bg-red-50 transition-colors duration-200 border border-transparent hover:border-red-200 group"
                        >
                          <div className="font-semibold text-slate-800 text-xs lg:text-sm group-hover:text-red-700">
                            ALL CATEGORIES
                          </div>
                          <div className="text-xs text-gray-600 mt-1">
                            View all products
                          </div>
                        </button>
                        {categories.map((category, index) => (
                          <button
                            key={index}
                            onClick={() => {
                              handleCategoryChange({ target: { value: category.name}});
                              setisOpen(false);
                            }}
                            className="text-left p-2 lg:p-3 rounded-xl hover:bg-red-50 transition-colors duration-200 border border-transparent hover:border-red-200 group"
                          >
                            <div className="font-medium text-gray-800 text-xs lg:text-sm group-hover:text-red-700">
                              {category.name.toUpperCase()}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              Industrial solutions
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <Link to ="/contacts" 
                className="text-slate-700 hover:text-red-600 transition-colors duration-300 font-semibold text-sm lg:text-base xl:text-lg flex items-center space-x-1 lg:space-x-2 group"
              >
                <Phone className="w-3 h-3 lg:w-4 lg:h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Contacts</span>
              </Link>
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
              {/* Cart */}
              <Link to ="/cart" className="relative group">
                <div className="bg-slate-100 hover:bg-slate-200 rounded-xl p-2 lg:p-3 border border-slate-200 transition-all duration-300 group-hover:scale-105 group-hover:shadow-md">
                  <ShoppingCart className="text-slate-700 w-5 h-5 lg:w-6 lg:h-6" />
                  {totalItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 lg:-top-2 lg:-right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 lg:w-6 lg:h-6 rounded-full flex items-center justify-center shadow-lg">
                      {totalItemCount}
                    </span>
                  )}
                </div>
              </Link>

              {/* Get Quote Button */}
              <button
                onClick={handleContactButtonClick}
                className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-3 lg:px-6 py-2 lg:py-3 rounded-xl font-semibold text-xs lg:text-sm xl:text-base shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-1 lg:space-x-2"
              >
                <Quote className="w-3 h-3 lg:w-4 lg:h-4" />
                <span>Get Quote</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Mobile Cart */}
              <Link to="/cart" className="relative">
                <div className="bg-slate-100 hover:bg-slate-200 rounded-xl p-2 border border-slate-200 transition-all duration-300">
                  <ShoppingCart className="text-slate-700 w-5 h-5" />
                  {totalItemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-4 h-4 rounded-full flex items-center justify-center shadow-lg">
                      {totalItemCount}
                    </span>
                  )}
                </div>
              </Link>

              {/* Hamburger Menu */}
              <button
                onClick={toggleSidebar}
                className="bg-slate-100 hover:bg-slate-200 rounded-xl p-2 border border-slate-200 transition-all duration-300"
              >
                <Menu className="text-slate-700 w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 w-64 sm:w-72 h-full bg-white z-50 shadow-2xl transform ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden overflow-hidden border-l border-gray-200`}
      >
        {/* Decorative background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-gray-50"></div>
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 right-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 p-4 sm:p-6 h-full flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center mb-6 sm:mb-8">
            <div className="text-slate-800">
              <h2 className="text-lg sm:text-xl font-bold">Menu</h2>
              <p className="text-slate-600 text-xs sm:text-sm">Navigate our services</p>
            </div>
            <button
              onClick={toggleSidebar}
              className="bg-slate-100 hover:bg-slate-200 rounded-xl p-2 border border-slate-200 transition-all duration-300"
            >
              <X className="text-slate-700 w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 space-y-1 sm:space-y-2">
            <Link to ="/"
              onClick={toggleSidebar}
              className="flex items-center space-x-3 p-3 sm:p-4 rounded-xl hover:bg-red-50 transition-all duration-300 text-slate-700 hover:text-red-600 group"
            >
              <Home className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium text-sm sm:text-base">Home</span>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            <Link to ="/contacts"
              onClick={toggleSidebar}
              className="flex items-center space-x-3 p-3 sm:p-4 rounded-xl hover:bg-red-50 transition-all duration-300 text-slate-700 hover:text-red-600 group"
            >
              <Phone className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="font-medium text-sm sm:text-base">Contacts</span>
              <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Link>

            {/* Products Dropdown */}
            <div className="space-y-1 sm:space-y-2">
              <button
                onClick={() => setisOpen(!isOpen)}
                className="w-full flex items-center space-x-3 p-3 sm:p-4 rounded-xl hover:bg-red-50 transition-all duration-300 text-slate-700 hover:text-red-600 group"
              >
                <Package className="w-4 h-4 sm:w-5 sm:h-5 group-hover:scale-110 transition-transform duration-300" />
                <span className="font-medium text-sm sm:text-base">Products</span>
                <ChevronDown 
                  className={`w-3 h-3 sm:w-4 sm:h-4 ml-auto transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`} 
                />
              </button>

              {/* Mobile Products Dropdown */}
              <div
                className={`bg-slate-50 rounded-xl border border-slate-200 overflow-hidden transition-all duration-500 ease-in-out ${
                  isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="max-h-60 overflow-y-auto p-2">
                  <button
                    onClick={() => {
                      handleCategoryChange({ target: { value: ""}});
                      setSidebarOpen(false);
                      setisOpen(false);
                    }}
                    className="w-full text-left p-3 rounded-lg hover:bg-red-50 transition-colors duration-200 text-slate-700 hover:text-red-600"
                  >
                    <div className="font-semibold text-sm">ALL CATEGORIES</div>
                    <div className="text-xs text-slate-500 mt-1">View all products</div>
                  </button>
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      onClick={() => {
                        handleCategoryChange({ target: { value: category.name}});
                        setSidebarOpen(false);
                        setisOpen(false);
                      }}
                      className="w-full text-left p-3 rounded-lg hover:bg-red-50 transition-colors duration-200 text-slate-700 hover:text-red-600"
                    >
                      <div className="font-medium text-sm">{category.name.toUpperCase()}</div>
                      <div className="text-xs text-slate-500 mt-1">Industrial solutions</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Footer */}
          <div className="space-y-3 sm:space-y-4 pt-4 sm:pt-6 border-t border-slate-200">
            <button
              onClick={() => {
                toggleSidebar();
                handleContactButtonClick();
              }}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <Quote className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Get Quote</span>
            </button>

            <div className="flex items-center justify-center space-x-2 text-slate-600">
              <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs sm:text-sm font-medium">Help & Support</span>
            </div>

            <div className="text-center text-xs text-slate-500">
              Copyright 2024 © SAS Engineering
            </div>
          </div>
        </div>
      </div>

      {/* Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Desktop Dropdown Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 hidden md:block"
          onClick={() => setisOpen(false)}
        />
      )}
    </>
  );
};