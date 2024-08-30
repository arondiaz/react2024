import { useLocation, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import swAlert from "@sweetalert/with-react";
import axios from "axios";

const Result = () => {
  const location = useLocation();

  const [userSearch, setUserSearch] = useState([]);

  const queryParams = new URLSearchParams(location.search);
  const searchResult = queryParams.get("busqueda");

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&include_adult=false&language=en-US&query=${searchResult}&page=1`;
    axios
      .get(url)
      .then((response) => {
        const apiResults = response.data.results;
        if (apiResults.length === 0) {
          return swAlert(<h3>Sin resultados</h3>);
        }
        setUserSearch(apiResults);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [searchResult]);

  console.log(userSearch);

  //   const {original_title, popularity, poster_path, realese_data, title} = userSearch
  return (
    <>
      <h2 className="mb-4 text-center">Resultados</h2>
      <p className="mb-4 text-center">
        Busqueda: <strong>{searchResult}</strong>
      </p>
      <div className="container">
        <div className="row justify-content-center">
          {userSearch.map((result, index) => (
            <div key={index} className="col-md-6 mb-4">
              <div
                className="card"
                style={{ backgroundColor: "#f8f9fa", borderRadius: "8px" }}
              >
                <div className="d-flex align-items-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w200${result.poster_path}`}
                    alt={result.original_title}
                    className="me-3"
                    style={{
                      width: "150px",
                      height: "225px",
                      objectFit: "cover",
                      borderRadius: "8px",
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{result.original_title}</h5>
                    <p className="card-text">
                      <strong>Popularidad:</strong> {result.popularity}
                    </p>
                    <p className="card-text">
                      <strong>Fecha de lanzamiento:</strong>{" "}
                      {result.release_date}
                    </p>

                    <Link
                      to={`/details?movieID=${result.id}`}
                      className="btn btn-primary"
                    >
                      Detalles
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Result;
