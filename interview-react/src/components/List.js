import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import Item from "./Item";

const List = () => {
  let token = localStorage.getItem("token");

  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const apiKey = process.env.REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1`;

    axios.get(url).then((response) => {
      const apiData = response.data;
      setMovieList(apiData.results);
    });
  }, [setMovieList]);

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="container mt-4">
        <h3>Listado</h3>
        <div className="row">
          {movieList.map((movie, index) => (
            <Item movie={movie} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default List;
