import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [busqueda, setBusqueda] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    navigate(`/result?busqueda=${busqueda}`);

    setBusqueda("");
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="d-flex align-items-center">
        <div className="mx-2">
          <input
            type="text"
            name="search"
            className="form-control"
            placeholder="busca la pelicula"
            onChange={(e) => setBusqueda(e.target.value)}
            value={busqueda}
          />
        </div>

        <input
          type="submit"
          value="Buscar"
          disabled={busqueda.trim().length <= 1}
          className="btn btn-primary disabled:opacity-5"
        />
      </div>
    </form>
  );
};

export default Search;
