import { useState } from "react";

const Search = () => {
  const [busqueda, setBusqueda] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(busqueda);
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
