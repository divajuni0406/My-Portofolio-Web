import React, { useState, useEffect } from "react";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";
import "./Portofolio.css";
import gif from "../../assets/myimg/43e2ebe8cc474dc2a7a51248439a7d01.gif";
import Ecommerce6 from "../../assets/ECommerceProject/ECommerce6.png";

const Portofolio = () => {
  const [portofolioSection, setPortofolioSection] = useState("all");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div className="background-image-portofolio">
          <div className="container">
            <div className="row content-wrapper">
              <div className="col-md-12 text-center title-wrapper">
                <h3>PORTOFOLIO</h3>
                <h1>MY PROJECTS</h1>
              </div>
              <div
                className="col-md-12 text-center d-flex justify-content-center"
                id="button-wrapper"
              >
                <button
                  className={
                    portofolioSection === "all"
                      ? "btn-all btn-all-active"
                      : "btn-all"
                  }
                  onClick={() => {
                    setPortofolioSection("all");
                  }}
                >
                  All
                </button>
                <button
                  className={
                    portofolioSection === "web"
                      ? "btn-web btn-web-active"
                      : "btn-web"
                  }
                  onClick={() => {
                    setPortofolioSection("web");
                  }}
                >
                  Web App
                </button>
                <button
                  className={
                    portofolioSection === "mobile"
                      ? "btn-mobile btn-mobile-active"
                      : "btn-mobile"
                  }
                  onClick={() => {
                    setPortofolioSection("mobile");
                  }}
                >
                  Mobile App
                </button>
              </div>
            </div>
            {/* all */}
            {portofolioSection === "all" && (
              <div
                className={
                  portofolioSection === "all"
                    ? "row portofolio-wrapper portofolio-wrapper-active"
                    : "row portofolio-wrapper"
                }
              >
                <div className="col-lg-3 col-md-5 project-wrapper offset-lg-1">
                  <div className="project-image-wrapper">
                    <img src={Ecommerce6} alt="" />
                    <Link to={"/portofolio-detail/1"} className="my-text">
                      View Project
                    </Link>
                    <p>E-Commerce Website App</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 project-wrapper">
                  <div className="project-image-wrapper">
                    <img src={Ecommerce6} alt="" />
                    <Link to={"/portofolio-detail/2"} className="my-text">
                      View Project
                    </Link>
                    <p>Game Suit Website App</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 project-wrapper">
                  <div className="project-image-wrapper">
                    <img src={Ecommerce6} alt="" />
                    <Link to={"/portofolio-detail/3"} className="my-text">
                      View Project
                    </Link>
                    <p>My Portofolio Website App</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 project-wrapper offset-lg-1">
                  <div className="project-image-wrapper">
                    <img src={Ecommerce6} alt="" />
                    <span className="my-text">View Project</span>
                    <p>Simple Calculator</p>
                  </div>
                </div>
              </div>
            )}
            {/* web app */}
            {portofolioSection === "web" && (
              <div
                className={
                  portofolioSection === "web"
                    ? "row portofolio-wrapper portofolio-wrapper-active"
                    : "row portofolio-wrapper"
                }
              >
                <div className="col-lg-3 col-md-5 project-wrapper offset-lg-1">
                  <div className="project-image-wrapper">
                    <img src={Ecommerce6} alt="" />
                    <Link to={"/portofolio-detail/1"} className="my-text">
                      View Project
                    </Link>
                    <p>E-Commerce Website App</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 project-wrapper">
                  <div className="project-image-wrapper">
                    <img src={Ecommerce6} alt="" />
                    <Link to={"/portofolio-detail/2"} className="my-text">
                      View Project
                    </Link>
                    <p>Game Suit Website App</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 project-wrapper">
                  <div className="project-image-wrapper">
                    <img src={Ecommerce6} alt="" />
                    <Link to={"/portofolio-detail/3"} className="my-text">
                      View Project
                    </Link>
                    <p>My Portofolio Website App</p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-5 project-wrapper offset-lg-1">
                  <div className="project-image-wrapper">
                    <img src={Ecommerce6} alt="" />
                    <span className="my-text">View Project</span>
                    <p>Simple Calculator</p>
                  </div>
                </div>
              </div>
            )}
            {/* mobile app */}
            {portofolioSection === "mobile" && (
              <div
                className={
                  portofolioSection === "mobile"
                    ? "row portofolio-wrapper justify-content-center portofolio-wrapper-active"
                    : "row portofolio-wrapper justify-content-center"
                }
              >
                <div className="col-md-12 mb-4 text-center text-mobile-project">
                  <h3>Don't Have Any Projects Yet !</h3>
                </div>
                <div className="col-md-4 m-lg-auto gif-wrapper-img">
                  <img src={gif} alt="cry-gif" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Portofolio;
