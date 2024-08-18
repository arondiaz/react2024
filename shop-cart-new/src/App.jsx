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
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <>
      <Header cart={cart} />

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
