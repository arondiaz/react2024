import React, { useEffect, useState } from "react";

const Favorites = () => {
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    let favInLocal = localStorage.getItem("favs");

    if (favInLocal !== null) {
      //.map necesita una array
      setFavs(JSON.parse(favInLocal));
    }
  }, []);

  return (
    <>
      <h3>Favoritos</h3>
      <div className="container flex">
        {favs.length > 0 ? (
          favs.map((movieLocal) => (
            <div className="row col-2" key={movieLocal.id}>
              <img src={movieLocal.imgFilm} alt={movieLocal.title} />
              <h2>{movieLocal.title}</h2>
              <p>{movieLocal.overview}</p>
            </div>
          ))
        ) : (
          <h4>No hay peliculas</h4>
        )}
      </div>
    </>
  );
};

export default Favorites;
