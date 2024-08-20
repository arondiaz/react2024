import { useState, useEffect, useMemo } from "react";
import { db } from "../db/db";

const useCart = () => {
  const initialCart = () => {
    const updateCart = localStorage.getItem("cart");
    return updateCart ? JSON.parse(updateCart) : [];
  };

  const [guitar] = useState(db);
  const [cart, setCart] = useState(initialCart);

  // useEffect(() => {
  //   setGuitar(db);
  // }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    const itemExists = cart.findIndex((guitar) => guitar.id === item.id);
    if (itemExists === -1) {
      //no existe el producto en el carrito
      item.quantity = 1;
      return setCart((prevCart) => [...prevCart, item]);
    } else {
      //ya existe el producto en el carrito
      const updateQuantity = [...cart];
      updateQuantity[itemExists].quantity++;
      setCart(updateQuantity);
    }
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const incrementItem = (guitar) => {
    const guitarToIncrement = cart.map((item) => {
      if (item.id === guitar) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });
    setCart(guitarToIncrement);
  };

  const decrementItem = (id) => {
    const guitarToDecrement = cart.map((item) => {
      if (item.id === id && item.quantity > 1) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }

      return item;
    });

    setCart(guitarToDecrement);
  };

  const cleanCart = () => {
    setCart([]);
  };

  //header
  const isCartEmpty = useMemo(() => cart.length === 0, [cart]);
  const cartTotal = useMemo(
    () => cart.reduce((total, item) => total + item.quantity * item.price, 0),
    [cart]
  );

  return {
    cart,
    incrementItem,
    decrementItem,
    cleanCart,
    addToCart,
    removeFromCart,
    guitar,
    isCartEmpty,
    cartTotal,
  };
};

export default useCart;
