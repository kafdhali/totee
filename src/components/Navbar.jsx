import "../components/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <div className="logo">
        <img src="./public/totee-logo.png" alt="Totee logo"></img>
      </div>
      <div className="nav-item">
        <ul className="categories">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Graphics">Graphics</Link>
          </li>
          <li>
            <Link to="/ContactUs">Contacts</Link>
          </li>
        </ul>
      </div>
      <div className="nav-item">
        <div className="nav-action">
          <img src="./public/images/i-account.png" alt="Account" />
        </div>
        <div className="nav-action">
          <Link to="/cart">
            <img src="./public/images/i-cart.png" alt="Cart" />
          </Link>
        </div>
        <div>
          <img src="./public/images/i-search.png" alt="Search" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
