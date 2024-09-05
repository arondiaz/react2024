import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from "./components/Details";
import Result from "./components/Result";
import Favorites from "./components/Favorites";
import "./css/bootstrap.min.css";

function App() {
  const addOrRemoveFromFavorites = (e) => {
    const divParent = e.target.parentElement.parentElement;
    const imgFilm = divParent.querySelector("img").getAttribute("src");
    const title = divParent.querySelector("h5").textContent;
    const overview = divParent.querySelector("p").textContent;
    // const id = e.target.dataset.id

    const objFav = {
      imgFilm,
      title,
      overview,
      id: e.target.dataset.id,
    };

    // Obtener los favoritos del localStorage
    const existFavoritesInLocal = localStorage.getItem("favs");

    // Convertir el string JSON a un array, o inicializar como un array vacío si no existe
    let conditionalStorage = existFavoritesInLocal
      ? JSON.parse(existFavoritesInLocal)
      : [];

    // Verificar si la película ya está en favoritos
    let existFilm = conditionalStorage.some(
      (oneFilm) => oneFilm.id === objFav.id
    );

    //existFilm, true si esta sino false-
    if (existFilm) {
      conditionalStorage = conditionalStorage.filter(
        (oneFilm) => oneFilm.id !== objFav.id
      );
    } else {
      conditionalStorage.push(objFav);
    }

    localStorage.setItem("favs", JSON.stringify(conditionalStorage));
  };

  return (
    <>
      <Header />
      <div className="container mt-3">
        <Routes>
          <Route path="/" element={<Form />} />
          <Route
            path="/list"
            element={
              <List addOrRemoveFromFavorites={addOrRemoveFromFavorites} />
            }
          />
          <Route path="/details" element={<Details />} />
          <Route path="/result" element={<Result />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
