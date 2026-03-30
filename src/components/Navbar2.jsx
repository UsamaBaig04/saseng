import React,{useState} from 'react'
import '../styles/Navbar.css';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';
import { useProducts } from '../ProductsProvider';
import { IoIosArrowForward } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import axios from 'axios';

export const Navbar = ({handleContactClick}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [IsOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [dropdownProducts, setDropdownProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [showCategories, setShowCategories] = useState(false);
  const navigate = useNavigate();
  const { cartItems, getTotalItemCount } = useCart();
  const { categories } = useProducts();
  const totalItemCount = getTotalItemCount();

  const handleContactButtonClick = () => {
    const descriptions = cartItems.map(item => item.description);
    handleContactClick(descriptions);
  };

  const fetchProducts = async (categoryName) => {
    try {
      const response = await axios.get(`https://ecombackend1-git-main-nileshs-projects-68bb2634.vercel.app/products/${encodeURIComponent(categoryName)}`);
      setDropdownProducts(response.data);
      console.log("response is", response.data);
    } catch (err) {
      console.error('Error fetching products:', err);
    }
  };

  const handleCategoryChange = (event) => {
    const categoryName = event.target.value; 
    if (categoryName) {
      navigate(`/subcategory/${encodeURIComponent(categoryName)}`);
    } else {
      navigate('/');
    }
  };

  const handleDropdownChange = (event) => {
    const categoryName = event.target.value;
    setSelectedCategory(categoryName);
    setShowCategories(true);
    if (categoryName) {
      fetchProducts(categoryName);
    } else {
      setDropdownProducts([]);
    }
  };

  return (
    <div className='navContainer'>
      <div className="navContainer1">
      
        <div className='w-48 lg:w-72' >
          <h1 className='text-md text-center md:text-lg lg:text-3xl'>SAS ENGINEERING</h1>
          <h4 className='text-[.7rem] text-center md:text-md lg:text-lg ' style={{lineHeight:'.9rem'}}>INDUSTRIAL MART</h4>
        </div>

      <div className="inputBox">
     
           <div className="menuContainer">  
      <div className={`menu ${menuOpen ? 'open' : ''}`}>
      {menuOpen && 
      <div className="cartIconDiv1">
        <Link to='/cart'>
      <FaShoppingCart size={30} color={'black'} id='cartIcon1' />
      {totalItemCount > 0 && <span id='cartTotal1'>{totalItemCount}</span>}
    </Link>
      </div>
      
      }
          <ul>
          {menuOpen && <li  onClick={handleContactButtonClick}>
            {/* <a href="#new">Get Quote</a> */}
            </li>}
            <li><Link to ='/'>Home</Link></li>
            <li 
          style={{ position: 'relative' }} 
          onClick={()=>setIsOpen(!IsOpen)}
            >
              Products
              { IsOpen &&  <div style={{
              position: 'absolute', 
              width: '700%', 
              height: '25vh', 
              background: 'white', 
              zIndex: 100, 
              top: '13vh',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' // Box shadow added here
                }}>
                {/* <div className="searchBox">
                  <input placeholder='Search here'/>
                </div> */}
                <div className="categoriesDropdown">
                  <ul>
                  <li onClick={() => handleCategoryChange({ target: { value: "" } })}>ALL CATEGORIES</li>

                  {categories && categories.map((category, index) => (
                  <li key={index} onClick={() => handleCategoryChange({ target: { value: category.name} })}>
                   {category.name.toUpperCase()}
                  </li>
                  ))}  
                 
                  </ul>
                </div>
              </div>}
              {/* Products */}

            </li>
            <li><Link to="/aboutUs">About</Link></li>
            <li><Link to="#services">Services</Link></li>
            <li><Link to="/contacts">Contact</Link></li>
          </ul>
        </div>
      </div>
      </div>
      <div className="cartContainer">
        <Link to='/cart'>
            <FaShoppingCart size={38} color={'black'} className='cartIcon' />
            {totalItemCount > 0 && <span className='cartTotal'>{totalItemCount}</span>}
        </Link>
          <div> <button onClick={handleContactButtonClick} id='quoteButton'>Get Quote</button><br/>
          {/* <div className={`hamburger ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
              <div className='bar'></div>
              <div className='bar'></div>
              <div className='bar'></div>
            </div> */}
          </div>
          <div className="hamburger" onClick={toggleMenu}>
            <div id="bar"></div>
            <div id="bar"></div>
            <div id="bar"></div>
          </div>
      </div>
      </div>
      
     
    </div>
  )
}
