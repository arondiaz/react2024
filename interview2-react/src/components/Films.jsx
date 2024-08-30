import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Films = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      return navigate("/");
    }
  }, []);

  return <div>Films</div>;
};

export default Films;
