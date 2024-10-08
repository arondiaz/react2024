import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Film from "./Film";

// eslint-disable-next-line react/prop-types
const Films = ({addOrRemoveFromFavs}) => {

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/");
    }
  }, []);

  const [films, setFilms] = useState([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-US&page=1`;

    async function fetcher() {
      try {
        const request = await fetch(url);
        const response = await request.json();
        setFilms(response.results);
      } catch (error) {
        console.log(error);
      }
    }

    fetcher();
  }, []);

  return (
    <>
      <h3>Peliculas</h3>
      <div>{films.length > 0 ? <Film films={films} addOrRemoveFromFavs={addOrRemoveFromFavs}/> : ""}</div>
    </>
  );
};

export default Films;
