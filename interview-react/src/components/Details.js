import { Navigate } from "react-router-dom";

const Details = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }
  return <div>Details</div>;
};

export default Details;
