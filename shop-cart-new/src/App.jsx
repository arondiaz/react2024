/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./db/db";

function App() {
  const initialCart = () => {
    const updateCart = localStorage.getItem("cart");
    return updateCart ? JSON.parse(updateCart) : [];
  };

  const [guitar, setGuitar] = useState(db);
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

  return (
    <>
      <Header
        cart={cart}
        removeFromCart={removeFromCart}
        incrementItem={incrementItem}
        decrementItem={decrementItem}
        cleanCart={cleanCart}
      />

      <main className="container-xl mt-5">
        <h2 className="text-center">Nuestra Colección</h2>

        <div className="row mt-5">
          {guitar &&
            guitar.map((item, index) => (
              <Guitar key={index} item={item} addToCart={addToCart}>
                {" "}
              </Guitar>
            ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center fs-4 mt-4 m-md-0">
            GuitarLA - Todos los derechos Reservados
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
