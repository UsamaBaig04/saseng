import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => {
    return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        setCartItems(prevItems => {
            // Check if the product already exists in the cart
            const existingProduct = prevItems.find(item => item.id === product.id);
    
            // Update cart items accordingly
            if (existingProduct) {
                return prevItems.map(item =>
                    item.id === product.id ? { ...item, count: item.count + 1 } : item
                );
            } else {
                return [...prevItems, { ...product, count: 1 }];
            }
        });
    };
    
  

    const removeFromCart = (productId) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const incrementFromCart = (productId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === productId ? { ...item, count: item.count + 1 } : item
            )
        );
    };

    const decrementFromCart = (productId) => {
      setCartItems(prevItems => 
          prevItems
              .map(item => 
                  item.id === productId
                      ? { ...item, count: item.count - 1 }
                      : item
              )
              .filter(item => item.count > 0)
      );
  };  

    const getTotalItemCount = () => {
      return cartItems.reduce((total, item) => total + item.count, 0);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, incrementFromCart,
         decrementFromCart,getTotalItemCount }}>
            {children}
        </CartContext.Provider>
    );
};
