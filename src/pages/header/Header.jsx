import React from "react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Header.css";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const Pathname = () => {
    const location = useLocation();
    return location.pathname;
  };

  const IsHeaderVisible = () => {
    const location = useLocation();
    if (location.pathname.includes("/portofolio-detail")) {
      return true;
    }
    return false;
  };

  const handleToggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className={loading ? "d-none" : ""}>
      <header
        className={
          IsHeaderVisible() ? "navbar-wrapper d-none" : "navbar-wrapper"
        }
      >
        <nav className="container d-flex navbar">
          <div>
            <Link to={"/"} className="navBrand">
              D
            </Link>
          </div>
          <div className="isActive-navbar-pc">
            <Link
              to={"/"}
              className={
                Pathname() === "/"
                  ? "navLink-active navLink me-5"
                  : "navLink me-5"
              }
            >
              Home
            </Link>
            <Link
              to={"/about-me"}
              className={
                Pathname() === "/about-me"
                  ? "navLink-active navLink me-5"
                  : "navLink me-5"
              }
            >
              About Me
            </Link>
            <Link
              to={"/portofolio"}
              className={
                Pathname() === "/portofolio"
                  ? "navLink-active navLink me-5"
                  : "navLink me-5"
              }
            >
              Portofolio
            </Link>
            <Link
              to={"/contact"}
              className={
                Pathname() === "/contact"
                  ? "navLink-active navLink me-5"
                  : "navLink me-5"
              }
            >
              Contact
            </Link>
          </div>
          <div className="ms-auto isActive-navbar-mobile">
            {isOpen ? (
              <>
                <div onClick={handleToggleNavbar} className="back-button">
                  <GiCancel size={27} />
                </div>
                <div className="navbar-mobile-area navbar-mobile-active"></div>
                <div className="navLink-mobile-wrapper navLink-mobile-wrapper-active">
                  <Link
                    to={"/"}
                    className="navLink-mobile"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    to={"/about-me"}
                    className="navLink-mobile"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    About Me
                  </Link>
                  <Link
                    to={"/portofolio"}
                    className="navLink-mobile"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Portofolio
                  </Link>
                  <Link
                    to={"/contact"}
                    className="navLink-mobile"
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    Contact
                  </Link>
                </div>
              </>
            ) : (
              <>
                <span onClick={handleToggleNavbar}>
                  <GiHamburgerMenu size={27} />
                </span>
                <div className="navbar-mobile-area"></div>
                <div className="navLink-mobile-wrapper">
                  <Link to={"/"} className="navLink-mobile">
                    Home
                  </Link>
                  <Link to={"/about-me"} className="navLink-mobile">
                    About Me
                  </Link>
                  <Link to={"/portofolio"} className="navLink-mobile">
                    Portofolio
                  </Link>
                  <Link to={"/contact"} className="navLink-mobile">
                    Contact
                  </Link>
                </div>
              </>
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
