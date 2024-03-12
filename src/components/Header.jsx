import React from "react";
const Header = () => {
  return (
    <header className="header" style={{ backgroundColor: "#000" }} id="header">
      <nav className="nav container">
        <a href="#home" class="nav__logo">
          Coffee<span>.</span>co{" "}
        </a>

        <div className="nav__menu" id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" class="nav__link active-link">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#products" class="nav__link">
                Products
              </a>
            </li>
            <li className="nav__item">
              <a href="#place" class="nav__link">
                Place
              </a>
            </li>
            <li className="nav__item">
              <a href="#blog" class="nav__link">
                Blog
              </a>
            </li>
          </ul>

          <div className="nav__close" id="nav-close">
            <i className="bx bx-x"></i>
          </div>
        </div>

        <div className="nav__toggle" id="nav-toggle">
          <i className="bx bx-grid-alt"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
