import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <nav className="d-flex justify-content-center">
          <ul className="list-unstyled d-flex">
            <li className="mx-3">
              <Link
                to="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                IG
              </Link>
            </li>
            {/* Puedes agregar más enlaces aquí si es necesario */}
          </ul>
        </nav>
        <p className="text-center mb-0">
          Alk & Aron {"<3"} Copyright &copy; 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;
