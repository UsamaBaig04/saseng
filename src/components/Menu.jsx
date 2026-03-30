// Menu.js
import React, { useState } from "react";
import { categories } from "./data";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setSelectedSubcategory(null); // Reset subcategory when category changes
  };

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  return (
    <div>
      <h1>Menu</h1>
      <div>
        {categories.map((category, index) => (
          <div key={index}>
            <h2 onClick={() => handleCategoryClick(category)}>
              {category.name}
            </h2>
            {selectedCategory === category &&
              category.subcategories.map((subcategory, subIndex) => (
                <div key={subIndex} style={{ paddingLeft: "20px" }}>
                  <h3 onClick={() => handleSubcategoryClick(subcategory)}>
                    {subcategory.name}
                  </h3>
                  {selectedSubcategory === subcategory &&
                    subcategory.products.map((product, prodIndex) => (
                      <p key={prodIndex} style={{ paddingLeft: "40px" }}>
                        {product}
                      </p>
                    ))}
                </div>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
