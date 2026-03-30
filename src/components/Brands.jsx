import React, { useState } from "react";

export const Brands = () => {
  const [visibleCount, setVisibleCount] = useState(5);

  const loadMore = () => {
    setVisibleCount((prev) => Math.min(prev + 6, brands.length));
  };

  const brands = [
    { name: "RedLion", logo: "/assets/redlion.jpg" },
    { name: "Siemens", logo: "/assets/Siemens_AG_logo.png" },
    { name: "PAM", logo: "/assets/PAM_Logo.png" },
    { name: "Klemsan", logo: "/assets/Klemsan.png" },
    { name: "ABB", logo: "/assets/abb.png" },
    { name: "Kyland", logo: "/assets/kyland.webp" },
  ];
  const brandsToShow = brands.slice(0, visibleCount);
  return (
    <section className="bg-gradient-to-br from-gray-100 to-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Trusted Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We proudly collaborate with industry-leading brands to deliver
            exceptional quality and innovation
          </p>
        </div>

        {/* Company Info Bar */}
        <div className="bg-red-600 text-white rounded-lg p-4 mb-12 shadow-lg">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold lg:text-3xl ">SAS Engineering</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-sm">
              <span className="flex items-center gap-2 lg:text-base ">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Toll Free: 9850418036
              </span>
              <span className="flex items-center gap-2 lg:text-base ">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <a
                  href="mailto:marketing@sasengineering.in"
                  className="hover:text-black transition-colors"
                >
                  marketing@sasengineering.in
                </a>
              </span>
              <span className="text-xs sm:text-sm lg:text-base">GST: 27AATCS4445F1ZY</span>
            </div>
          </div>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {brandsToShow.map((brand, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-square p-8 flex items-center justify-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain  transition-all duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* Additional Brands Carousel for more brands */}
        <div className="text-center">
          <p className="text-gray-600 mb-6">
            And many more trusted partners...
          </p>
          <button
            onClick={loadMore}
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            View All Brands
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-red-600 mb-3">
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Authorized Dealer
            </h3>
            <p className="text-sm text-gray-600">
              Official partnership with all brands
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-red-600 mb-3">
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">
              Premium Quality
            </h3>
            <p className="text-sm text-gray-600">
              Only genuine products guaranteed
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-red-600 mb-3">
              <svg
                className="w-12 h-12 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">24/7 Support</h3>
            <p className="text-sm text-gray-600">
              Expert assistance always available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
