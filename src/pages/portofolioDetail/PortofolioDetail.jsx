import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Loading from "../loading/Loading";
import { Link } from "react-router-dom";
import "./PortofolioDetail.css";
import { MdCancel } from "react-icons/md";
import { ImPlus, ImMinus } from "react-icons/im";
// E-COMMERCE
import Ecommerce1 from "../../assets/ECommerceProject/ECommerce1.png";
import Ecommerce2 from "../../assets/ECommerceProject/ECommerce2.png";
import Ecommerce3 from "../../assets/ECommerceProject/ECommerce3.png";
import Ecommerce4 from "../../assets/ECommerceProject/ECommerce4.png";
import Ecommerce5 from "../../assets/ECommerceProject/ECommerce5.png";
import Ecommerce6 from "../../assets/ECommerceProject/ECommerce6.png";
import Ecommerce7 from "../../assets/ECommerceProject/ECommerce7.png";
import Ecommerce8 from "../../assets/ECommerceProject/ECommerce8.png";
import Ecommerce9 from "../../assets/ECommerceProject/ECommerce9.png";
import Ecommerce10 from "../../assets/ECommerceProject/ECommerce10.png";
import Ecommerce11 from "../../assets/ECommerceProject/ECommerce11.png";
import Ecommerce12 from "../../assets/ECommerceProject/ECommerce12.png";
import Ecommerce13 from "../../assets/ECommerceProject/ECommerce13.png";
import Ecommerce14 from "../../assets/ECommerceProject/ECommerce14.png";
import Ecommerce15 from "../../assets/ECommerceProject/ECommerce15.png";
import Ecommerce16 from "../../assets/ECommerceProject/ECommerce16.png";
import Ecommerce17 from "../../assets/ECommerceProject/ECommerce17.png";
import Ecommerce18 from "../../assets/ECommerceProject/ECommerce18.png";
import Ecommerce19 from "../../assets/ECommerceProject/ECommerce19.png";
// GAMESUIT
import suit1 from "../../assets/GameSuitProject/suit1.png";
import suit2 from "../../assets/GameSuitProject/suit2.png";
import suit3 from "../../assets/GameSuitProject/suit3.png";
import suit4 from "../../assets/GameSuitProject/suit4.png";
import suit5 from "../../assets/GameSuitProject/suit5.png";
import suit6 from "../../assets/GameSuitProject/suit6.png";
import suit7 from "../../assets/GameSuitProject/suit7.png";
import suit8 from "../../assets/GameSuitProject/suit8.png";
import suit9 from "../../assets/GameSuitProject/suit9.png";
// CALCULATOR
import calcultor from "../../assets/CalculatorProject/calculator.png";

const PortofolioDetail = () => {
  const [isDetailActive, setIsDetailActive] = useState(false);
  const [loading, setLoading] = useState(false);

  let { id } = useParams();

  let settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <Arrow />,
    prevArrow: <Arrow />,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          nextArrow: "",
          prevArrow: "",
        },
      },
    ],
  };

  function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", filter: "invert(1)" }}
        onClick={onClick}
      />
    );
  }

  const projectECommerceImg = [
    {
      image: Ecommerce1,
    },
    {
      image: Ecommerce2,
    },
    {
      image: Ecommerce3,
    },
    {
      image: Ecommerce4,
    },
    {
      image: Ecommerce5,
    },
    {
      image: Ecommerce6,
    },
    {
      image: Ecommerce7,
    },
    {
      image: Ecommerce8,
    },
    {
      image: Ecommerce9,
    },
    {
      image: Ecommerce10,
    },
    {
      image: Ecommerce11,
    },
    {
      image: Ecommerce12,
    },
    {
      image: Ecommerce13,
    },
    {
      image: Ecommerce14,
    },
    {
      image: Ecommerce15,
    },
    {
      image: Ecommerce16,
    },
    {
      image: Ecommerce17,
    },
    {
      image: Ecommerce18,
    },
    {
      image: Ecommerce19,
    },
  ];

  const projectGameSuit = [
    {
      image: suit1,
    },
    {
      image: suit2,
    },
    {
      image: suit3,
    },
    {
      image: suit4,
    },
    {
      image: suit5,
    },
    {
      image: suit6,
    },
    {
      image: suit7,
    },
    {
      image: suit8,
    },
    {
      image: suit9,
    },
  ];

  console.log(isDetailActive, "hhhhhhhhhhhhhhhhhhhhhhh");

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading && <Loading />}
      {id === "1" && (
        <div className="background-image-detail">
          <div className="container">
            <div
              className={
                isDetailActive
                  ? "detail-description-wrapper active"
                  : "detail-description-wrapper"
              }
            >
              <div className="row mb-3 mt-4  project-box-wrapper">
                <div className="col-md-12">
                  <h1 className="text-title-detail">
                    E-Commerce Web App (Sober)
                  </h1>
                  <p className="text-description-detail">Category: Web App</p>
                </div>
              </div>
              <div className="row project-box-wrapper">
                <div className="col-md-7 me-5 project-brief-wrapper">
                  <h1 className="text-title-detail">Project Brief</h1>
                  <p className="text-description-detail">
                    Javascript based as a frontend and backend to made this
                    project. It has a Home page, Register page, Admin Page,
                    Carts page, Profile page, Forgot Password page, Shop page,
                    404 Page, About Us page, Blog page, and users can check
                    their transaction history and print it, change their
                    password on the profile page.
                  </p>
                </div>
                <div className="col-md-4 project-info-wrapper">
                  <h1 className="text-title-detail">Project Info</h1>
                  <p className="text-description-detail">Date: 2022</p>
                  <p className="text-description-detail">
                    Web:{" "}
                    <a
                      href="https://id-sober.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="web-link"
                    >
                      https://id-sober.vercel.app/
                    </a>
                  </p>
                  <p className="text-description-detail">
                    Frontend Tools: HTML, CSS, Javascript, Bootstrap, Next Js,
                    Redux, Tailwind
                  </p>
                  <p className="text-description-detail">
                    Backend Tools & Others: Node Js, Express Js, MongoDb, Jest
                    With Supertest, CI/CD, RestFul API
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex mt-3">
              <div className="detail-button-wrapper">
                <button
                  className="detail-button text-center d-flex align-items-center"
                  onClick={() => {
                    setIsDetailActive(!isDetailActive);
                  }}
                >
                  Project Details
                  <div className="ms-2">
                    {isDetailActive ? <ImMinus /> : <ImPlus />}
                  </div>
                </button>
              </div>
              <div className="back-button-detail-wrapper text-end">
                <Link to={"/portofolio"} className="back-button-detail">
                  <MdCancel className="back-button-size-detail" />
                </Link>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <Slider {...settings}>
                {projectECommerceImg.map((data, i) => (
                  <div
                    className="col-ms-10 text-center img-project-detail"
                    key={i}
                  >
                    <img src={data.image} alt="ECommerceImage" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
      {id === "2" && (
        <div className="background-image-detail">
          <div className="container">
            <div
              className={
                isDetailActive
                  ? "detail-description-wrapper active"
                  : "detail-description-wrapper"
              }
            >
              <div className="row mb-3 mt-4  project-box-wrapper">
                <div className="col-md-12">
                  <h1 className="text-title-detail">Web & Game Suit</h1>
                  <p className="text-description-detail">Category: Web App</p>
                </div>
              </div>
              <div className="row project-box-wrapper">
                <div className="col-md-7 me-5 project-brief-wrapper">
                  <h1 className="text-title-detail">Project Brief</h1>
                  <p className="text-description-detail">
                    Javascript based as a frontend and backend to made this
                    project. It has a Home page, Register page, Super Admin
                    page, Player 1 vs Com page, Player 1 vs Player 2 page, About
                    Page, Game History page, Authorization Page.
                  </p>
                </div>
                <div className="col-md-4 project-info-wrapper">
                  <h1 className="text-title-detail">Project Info</h1>
                  <p className="text-description-detail">Date: 2022</p>
                  <p className="text-description-detail">Web: Just In Local</p>
                  <p className="text-description-detail">
                    Frontend Tools: HTML, CSS, Javascript, Bootstrap
                  </p>
                  <p className="text-description-detail">
                    Backend Tools & Others: Node Js, Express Js, MongoDb,
                    RestFul API, Socket
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex mt-3">
              <div className="detail-button-wrapper">
                <button
                  className="detail-button text-center d-flex align-items-center"
                  onClick={() => {
                    setIsDetailActive(!isDetailActive);
                  }}
                >
                  Project Details
                  <div className="ms-2">
                    {isDetailActive ? <ImMinus /> : <ImPlus />}
                  </div>
                </button>
              </div>
              <div className="back-button-detail-wrapper text-end">
                <Link to={"/portofolio"} className="back-button-detail">
                  <MdCancel className="back-button-size-detail" />
                </Link>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <Slider {...settings}>
                {projectGameSuit.map((data, i) => (
                  <div
                    className="col-ms-10 text-center img-project-detail"
                    key={i}
                  >
                    <img src={data.image} alt="GameSuitImage" />
                  </div>
                ))}
              </Slider>
            </div>
          </div>
        </div>
      )}
      {id === "3" && (
        <div className="background-image-detail">
          <div className="container">
            <div
              className={
                isDetailActive
                  ? "detail-description-wrapper active"
                  : "detail-description-wrapper"
              }
            >
              <div className="row mb-3 mt-4  project-box-wrapper">
                <div className="col-md-12">
                  <h1 className="text-title-detail">Simple Calculator</h1>
                  <p className="text-description-detail">Category: Web App</p>
                </div>
              </div>
              <div className="row project-box-wrapper">
                <div className="col-md-7 me-5 project-brief-wrapper">
                  <h1 className="text-title-detail">Project Brief</h1>
                  <p className="text-description-detail">
                    Javascript based as a frontend to made this project.
                  </p>
                </div>
                <div className="col-md-4 project-info-wrapper">
                  <h1 className="text-title-detail">Project Info</h1>
                  <p className="text-description-detail">Date: 2022</p>
                  <p className="text-description-detail">Web: Just In Local</p>
                  <p className="text-description-detail">
                    Frontend Tools: HTML, CSS, Javascript
                  </p>
                  <p className="text-description-detail">Backend Tools: -</p>
                </div>
              </div>
            </div>
            <div className="d-flex mt-3">
              <div className="detail-button-wrapper">
                <button
                  className="detail-button text-center d-flex align-items-center"
                  onClick={() => {
                    setIsDetailActive(!isDetailActive);
                  }}
                >
                  Project Details
                  <div className="ms-2">
                    {isDetailActive ? <ImMinus /> : <ImPlus />}
                  </div>
                </button>
              </div>
              <div className="back-button-detail-wrapper text-end">
                <Link to={"/portofolio"} className="back-button-detail">
                  <MdCancel className="back-button-size-detail" />
                </Link>
              </div>
            </div>
            <div className="row justify-content-center mt-5">
              <div className="col-ms-10 text-center img-project-detail">
                <img src={calcultor} alt="CalculatorImage" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortofolioDetail;
