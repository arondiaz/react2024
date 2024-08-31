import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import "../css/detail.css";

const Detail = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const urlID = queryParams.get("filmId");

  const [filmDetails, setFilmDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!urlID) {
      console.error("No film ID provided.");
      return;
    }

    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/movie/${urlID}?api_key=${apiKey}&language=en-US`;
    async function fetcher() {
      try {
        const response = await fetch(url);
        const data = await response.json();

        setFilmDetails(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetcher();
  }, [urlID]);

  const {
    homepage,
    origin_country,
    title,
    overview,
    release_date,
    poster_path,
  } = filmDetails;

  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <div className="container-detail">
          <div className="container-image">
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          </div>
          <div className="movie-info">
            <h3>{title}</h3>
            <p>{overview}</p>
            <p>
              <strong>País:</strong> {origin_country}
            </p>
            <p>
              <strong>Fecha de lanzamiento:</strong> {release_date}
            </p>

            <button className="btn-visit">
              <Link to={homepage} target="_blank" rel="noopener noreferrer">
                Visitar
              </Link>
            </button>
          </div>
        </div>
      )}{" "}
    </>
  );
};

export default Detail;
