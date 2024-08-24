import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        <nav>
          <ul>
            <li>
              <Link to="https://instagram.com" rel="noopener noreferrer">
                IG
              </Link>
            </li>
          </ul>
        </nav>
        <p>Copyright</p>
      </footer>
    </>
  );
};

export default Footer;
