/* eslint-disable no-unused-vars */
import { useState } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./db/db";

function App() {
  const [guitar, setGuitar] = useState(db);
  const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   setGuitar(db);
  // }, []);

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

  return (
    <>
      <Header />

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
