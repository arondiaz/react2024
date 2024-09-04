import "../css/favourites.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Favourites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    let existFav = localStorage.getItem("favs");
    if (existFav) {
      setFavorites(JSON.parse(existFav));
    }
  }, []);

  const navigate = useNavigate();

  const redirectToDetails = (id) => {
    navigate(`/detail?filmId=${id}`);
  };

  return (
    <>
      <h2 className="fav-title">Favoritos</h2>
      <div className="container-fav">
        {favorites.length > 0 ? (
          favorites.map((movFav) => (
            <div className="card-fav" key={movFav.id}>
              <img
                className="fav-img"
                src={movFav.img}
                onClick={() => redirectToDetails(movFav.id)}
              />
              <h3 className="fav-title">{movFav.title}</h3>
            </div>
          ))
        ) : (
          <h3 className="fav-noresults">Sin resultados</h3>
        )}
      </div>
    </>
  );
};

export default Favourites;
