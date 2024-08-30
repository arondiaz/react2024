import { Navigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Details = () => {
  const token = localStorage.getItem("token");

  //Leer url y guardar el id de la pelicula en movieID, (sin usar hooks)
  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");

  const [selectMovie, setSelectMovie] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${movieID}?api_key=${apiKey}&language=en-US`;

    axios
      .get(url)
      .then((response) => {
        let movieDetails = response.data;
        setSelectMovie(movieDetails);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [movieID]);

  const { homepage, title, overview, poster_path, release_date, genres } = selectMovie;

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="row">
        {selectMovie && (
          <>
            <div className="col-4">
              <img
                src={`https://image.tmdb.org/t/p/w500/${poster_path}`}
                alt="Imagen de ejemplo"
                className="img-fluid"
              />
            </div>
            <div className="col-4">
              <h3>{title}</h3>
              <h4>Lanzamiento: {release_date}</h4>
              <p>{overview}</p>

               {/* <ul>
                {genres.length > 0 ? (
                  genres.map((oneGenre, index) => <li key={index}>{oneGenre.name}</li>)
                ) : (
                  <li> No hay generos</li>
                )}
              </ul>  */}

              <Link to={homepage} target="_blank" className="btn btn-primary">
                Visitar
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Details;
