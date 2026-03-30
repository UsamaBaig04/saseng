import React,{useState} from 'react'
import './App.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Products } from './components/Products';
import {CarouselSlider} from './components/CarouselSlider';
import { Brands } from './components/Brands';
import { Subcategory } from './components/Subcategory';
import {Router} from './components/Router';
import { BrowserRouter, Routes, Route,useParams } from "react-router-dom";
import { Modal } from './components/Modal';
import { Cart } from './components/Cart';
import { CartProvider } from './CartContext';
import { ProductsProvider } from './ProductsProvider';
import { Contacts } from './components/Contacts';
import { AboutUs } from './components/AboutUs';
import { Dropdown } from './components/Dropdown';
import  ScrollToTop  from './components/ScrollToTop';
// import { Brands } from './components/Brands';
function App() {
//   [].forEach.call(document.querySelectorAll('*'), function(el) {
//   if (el.offsetWidth > document.documentElement.clientWidth) {
//     console.log('Overflowing element:', el);
//     el.style.outline = '2px solid red';
//   }
// });

  const {encodedName} = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState('');
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const handleContactClick = (descriptions) => {
    const concatenatedDescriptions = descriptions.join(', ');
    setModalMessage(concatenatedDescriptions);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
  <BrowserRouter>
    <CartProvider>
      <ProductsProvider>
        <div className="App flex flex-col min-h-screen w-full relative ">
          <ScrollToTop />
          <Navbar
            toggleModal={toggleModal}
            handleContactClick={handleContactClick}
          />

          <main className="flex-grow w-full ">
            <Routes>
              <Route path="/" element={<Router />} />
              <Route
                path="/subcategory/:encodedName"
                element={<Subcategory toggleModal={toggleModal} />}
              />
              <Route
                path="/subcategory/:encodedName/:subcatName"
                element={<Subcategory toggleModal={toggleModal} />}
              />
              <Route
                path="/cart"
                element={<Cart handleContactClick={handleContactClick} />}
              />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/aboutUs" element={<AboutUs />} />
              {/* <Route path="/dropdown" element={<Dropdown />} /> */}
            </Routes>
            {isModalOpen && (
              <Modal message={modalMessage} onClose={handleCloseModal} />
            )}
          </main>

          <Footer />
        </div>
      </ProductsProvider>
    </CartProvider>
  </BrowserRouter>
);
}

export default App;
