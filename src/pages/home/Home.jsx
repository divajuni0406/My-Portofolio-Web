import "./Home.css";
import React from "react";
import { Link } from "react-router-dom";
import {
  AiFillContacts,
  AiFillCopyrightCircle,
  AiFillGithub,
} from "react-icons/ai";
import { BsLinkedin, BsFillInfoCircleFill } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { ImLocation2 } from "react-icons/im";

const Home = () => {
  return (
    <section className="background-image">
      <div className="container">
        <div className="row justify-content-center" id="content-home-wrapper">
          <div>
            <p className="text-copyright">
              <AiFillCopyrightCircle /> 2022 Diva Juni Artha
            </p>
          </div>
          <div className="col-md-4 text-wrapper">
            <h1>Hi, I'am Diva</h1>
            <h4>Software Developer</h4>
            <p>
              Switching careers to software developer.<br></br>I just graduated
              from Binar Academy Bootcamp.<br></br>When i decided to be a
              software developer,<br></br>it means i'am ready to be a long life
              learner
            </p>
            <p>
              <ImLocation2 /> Nusa Dua, Bali, Indonesia
            </p>
            <div className="d-flex">
              <Link
                to={"/about-me"}
                className="btn-about d-flex justify-content-center align-items-center"
              >
                More About Me
                <div className="ms-2">
                  <BsFillInfoCircleFill size={18} />
                </div>
              </Link>
              <Link
                to={"/contact"}
                className="btn-contact d-flex justify-content-center align-items-center"
              >
                Contact Me
                <div className="ms-2">
                  <AiFillContacts size={22} />
                </div>
              </Link>
            </div>
            <div className="mt-5 social-icon-wrapper d-flex">
              <a
                href="https://github.com/divajuni0406"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 social-icon"
              >
                <AiFillGithub size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/divajuniartha/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3 social-icon linkedin"
              >
                <BsLinkedin size={23} />
              </a>
              <a
                href="https://wa.me/082144366265"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon wa"
              >
                <RiWhatsappFill size={28} />
              </a>
            </div>
          </div>
          <div className="col-md-5">
            <img
              src={require("../../assets/myimg/myimg2.jpeg")}
              className="pofile-img"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
