import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

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

  console.log(movieList);

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <h1>Listadooo</h1>
    </>
  );
};

export default List;
