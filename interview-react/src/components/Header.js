import { Link, useNavigate } from "react-router-dom";
import Search from "./Search";

const Header = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logOut = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">
            Alk challenge
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/list">
                  Listado
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/favorites">
                  Favoritos
                </Link>
              </li>
            </ul>
          </div>

          <Search />

          {token && (
            <button className=" btn btn-danger" onClick={logOut}>
              Cerrar Sesión
            </button>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
