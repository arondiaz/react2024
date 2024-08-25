import { Navigate } from "react-router-dom";

const List = () => {
  let token = localStorage.getItem("token");

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
