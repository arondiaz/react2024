import "../css/favourites.css";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Favourites = () => {
  let existFav = localStorage.getItem("favs");

  let favsArray = existFav ? JSON.parse(existFav) : [];

  const navigate = useNavigate();
  // function goToDetail(id) {
  //   const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;
  //   const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`;

  //   console.log(url);

  //   async function callApi() {
  //     const response = await fetch(url);
  //     const request = await response.json();
  //     console.log(request);
  //   }

  //   callApi();
  // }

  const redirectToDetails = (id) => {
    navigate(`/detail?filmId=${id}`);
  };

  return (
    <>
      <h2 className="fav-title">Favoritos</h2>
      <div className="container-fav">
        {existFav.length > 0 ? (
          favsArray.map((movFav) => (
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
