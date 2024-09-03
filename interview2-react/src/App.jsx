import { Routes, Route } from "react-router-dom";
import Inicio from "./components/Inicio";
import "./App.css";
import Header from "./components/Header";
import Films from "./components/Films";
import Favourites from "./components/Favourites";
import Detail from "./components/Detail";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const favs = localStorage.getItem("favs");

  let tempFavsMovies;

  if (favs === null) {
    tempFavsMovies = [];
  } else {
    tempFavsMovies = JSON.parse(favs);
  }

  const addOrRemoveFromFavs = (e) => {
    const btnParent = e.target.parentElement;
    const img = btnParent.querySelector("img").getAttribute("src");
    const title = btnParent.querySelector("h3").innerText;

    const objFav = {
      img,
      title,
      id: e.target.dataset.movieId,
    };

    let detectDuplicateMovie = tempFavsMovies.find((oneMovie) => {
      return oneMovie.id === objFav.id;
    });
    //Si la pelicula no esta en el array tempFavsMovies, lo agrega
    if (detectDuplicateMovie === undefined) {
      tempFavsMovies.push(objFav);
      localStorage.setItem("favs", JSON.stringify(tempFavsMovies));
      toast.success(`${objFav.title} agregado a Favoritos!`);
    } else {
      // Si la película ya existe en el array, reasigna el array sin la pelicula duplicada
      tempFavsMovies = tempFavsMovies.filter((oneMovie) => {
        return oneMovie.id !== objFav.id;
      });
      localStorage.setItem("favs", JSON.stringify(tempFavsMovies));
      toast.error(`${objFav.title} eliminado de Favoritos`);
    }
  };

  return (
    <>
      <Toaster />

      <Header />

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route
          path="/films"
          element={<Films addOrRemoveFromFavs={addOrRemoveFromFavs} />}
        />
        <Route path="/detail" element={<Detail />} />
        <Route path="/favorites" element={<Favourites />} />
      </Routes>
    </>
  );
}

export default App;
