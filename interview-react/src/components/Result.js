import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  let searchResult = queryParams.get("busqueda");
  console.log(searchResult);

  return (
    <>
      <h2>Resultados</h2>
      <p>Busqueda: {searchResult}</p>
    </>
  );
};

export default Result;
