import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const List = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token === null) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <>
      <h1>Listadooo</h1>
    </>
  );
};

export default List;
