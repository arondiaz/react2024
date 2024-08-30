import "../css/header.css";
const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="content-container">
          <nav className="nav">
            <h3 className="h3">Movie!</h3>
            <ul className="ul">
              <li>Peliculas</li>
              <li>Favoritos</li>
            </ul>
          </nav>
          <button className="btn">LogOut</button>
        </div>
      </div>
    </>
  );
};

export default Header;
