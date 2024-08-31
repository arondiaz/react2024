import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../css/header.css";

const Header = () => {
  const navigate = useNavigate();

  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <>
      <div className="header-container">
        <div className="content-container">
          <nav className="nav">
            <h3 className="h3">Movie!</h3>
            <ul className="ul">
              <li>
                <Link to={"/films"}> Peliculas </Link>
              </li>
              <li>
                <Link to={"/favorites"}> Favoritos </Link>
              </li>
            </ul>
          </nav>
          <button className="btn" onClick={logOut}>
            LogOut
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
