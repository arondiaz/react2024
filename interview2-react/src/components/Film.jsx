/* eslint-disable react/prop-types */
import "../css/film.css";
const Film = ({ films }) => {
 
  return (
    <>
      <div className="film-container">
        {films.map((film, index) => (
          <div className="film-card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              className="film-poster"
              alt={film.title}
            />
            <div className="film-details">
              <h3 className="film-title">{film.title}</h3>
              <p className="film-language">
                Language: {film.original_language.toUpperCase()}
              </p>
              <p className="film-rating">Rating: {film.vote_average}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Film;
