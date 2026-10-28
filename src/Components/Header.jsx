import useMobileMenu from "./index";
import logo from "/src/Images/JOOUST_CU_Logo_v1.jpg";

export default function Header() {
  const { isOpen, toggleMenu, closeMenu } = useMobileMenu();

  return (
    <header className="header">
      <img src={logo} alt="JOOUST Christian Union logo" className="logo-icon" />

      <button
        className="hamburger-btn"
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <i
          className={isOpen ? "fa fa-times icon-close" : "fa fa-bars icon-bars"}
        ></i>
      </button>

      <nav className="navbar">
        <ul className={isOpen ? "navbar-lists open" : "navbar-lists"}>
          <li className="navbar-links">
            <a href="#" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li className="navbar-links">
            <a href="#" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li className="navbar-links">
            <a href="#" onClick={closeMenu}>
              Gallery
            </a>
          </li>
          <li className="navbar-links">
            <a href="#" onClick={closeMenu}>
              Events
            </a>
          </li>
          <li className="navbar-links">
            <a href="#" onClick={closeMenu}>
              Blogs
            </a>
          </li>
          <li className="navbar-links">
            <a href="#" onClick={closeMenu}>
              About Us
            </a>
          </li>
          <li className="navbar-links">
            <a href="#" onClick={closeMenu}>
              Contact Us
            </a>
          </li>
        </ul>
      </nav>

      {isOpen && <div className="menu-backdrop" onClick={closeMenu}></div>}
    </header>
  );
}
