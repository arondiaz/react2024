import { Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import List from "./components/List";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Details from "./components/Details";
import Result from "./components/Result";
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

    console.log(objFav);
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
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
