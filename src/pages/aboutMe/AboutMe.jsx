import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./AboutMe.css";
import { BsLinkedin } from "react-icons/bs";
import { RiWhatsappFill } from "react-icons/ri";
import { AiFillGithub, AiFillInstagram, AiFillFacebook } from "react-icons/ai";
import { FaShoppingBag } from "react-icons/fa";
import { FcGraduationCap } from "react-icons/fc";
import { GiAchievement } from "react-icons/gi";
import Loading from "../loading/Loading";

const AboutMe = () => {
  const [portofolioSection, setPortofolioSection] = useState("skill");
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
        <div className="background-image-about">
          <div className="container">
            <div className="row top-content-wrapper justify-content-center">
              <div className="col-md-12 text-center title-about-wrapper">
                <h1>MAIN INFO</h1>
                <h2>ABOUT ME</h2>
              </div>
              <div className="col-md-4 img-about-wrapper">
                <div className="profile-about-wrapper">
                  <img
                    src={require("../../assets/myimg/myimg2.jpeg")}
                    className="pofile-img-about"
                    alt=""
                  />
                </div>
                <div className="social-iconAbout-wrapper d-flex ms-sm-3">
                  <a
                    href="https://github.com/divajuni0406"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-lg-4 me-md-2 social-iconAbout"
                  >
                    <AiFillGithub className="icon-about1" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/divajuniartha/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-lg-4 me-md-2 linkedin"
                  >
                    <BsLinkedin className="icon-about2" />
                  </a>
                  <a
                    href="https://wa.me/082144366265"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-lg-4 me-md-2 social-iconAbout instagram"
                  >
                    <AiFillInstagram className="icon-about1" />
                  </a>
                  <a
                    href="https://wa.me/082144366265"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="me-lg-4 me-md-2 social-iconAbout facebook"
                  >
                    <AiFillFacebook className="icon-about1" />
                  </a>
                  <a
                    href="https://wa.me/082144366265"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-iconAbout wa"
                  >
                    <RiWhatsappFill className="icon-about1" />
                  </a>
                </div>
              </div>
              <div className="col-md-6">
                <p className="text-about">
                  I am a graduate of the Bali tourism polytechnic, majoring in
                  D4 tourism management, previously working in the hospitality
                  and tourism sector, I am currently changing careers to become
                  a software developer, because I see opportunities and the need
                  for digital experts is urgently needed even in Indonesia there
                  is still a shortage of digital talent, one one of them is
                  coding skills, I even read in one of the articles that
                  software developers will be needed until 2030, I am very
                  interested in continuing to explore coding skills, and will
                  continue to learn. And I have a goal that in the next 4 - 5
                  years I have to become a senior software developer.
                </p>
                <Link
                  to="/DIVA-JUNI-ARTHA-resume.pdf"
                  target="_blank"
                  download
                  className="btn-cv"
                >
                  See CV
                </Link>
              </div>
              <div
                className="col-md-12 text-center d-flex justify-content-center"
                id="button-wrapper"
              >
                <button
                  className={
                    portofolioSection === "skill"
                      ? "btn-skill btn-skill-active"
                      : "btn-skill"
                  }
                  onClick={() => {
                    setPortofolioSection("skill");
                  }}
                >
                  Skill
                </button>
                <button
                  className={
                    portofolioSection === "exp"
                      ? "btn-exp btn-exp-active"
                      : "btn-exp"
                  }
                  onClick={() => {
                    setPortofolioSection("exp");
                  }}
                >
                  Experience
                </button>
                <button
                  className={
                    portofolioSection === "education"
                      ? "btn-education btn-education-active"
                      : "btn-education"
                  }
                  onClick={() => {
                    setPortofolioSection("education");
                  }}
                >
                  Education
                </button>
                <button
                  className={
                    portofolioSection === "certificate"
                      ? "btn-certificate btn-certificate-active"
                      : "btn-certificate"
                  }
                  onClick={() => {
                    setPortofolioSection("certificate");
                  }}
                >
                  Certificate
                </button>
              </div>
              {/* SKILL */}
              {portofolioSection === "skill" && (
                <div
                  className={
                    portofolioSection === "skill"
                      ? "row justify-content-center fadedown fadedown-active"
                      : "row justify-content-center fadedown"
                  }
                >
                  <div className="col-md-5 me-sm-5">
                    <div>
                      <p>HTML & CSS</p>
                      <div class="progress-wrapper">
                        <div class="progress">
                          <div
                            class="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="90"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "90%" }}
                          >
                            90%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p>Javascript</p>
                      <div className="progress-wrapper">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p>Bootstrap</p>
                      <div className="progress-wrapper">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="80"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "80%" }}
                          >
                            80%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p>React JS</p>
                      <div className="progress-wrapper">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p>Next JS</p>
                      <div className="progress-wrapper">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p>Redux</p>
                      <div className="progress-wrapper">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="60"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "60%" }}
                          >
                            60%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p>Node JS</p>
                      <div className="progress-wrapper">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-5">
                    <div>
                      <p>Express JS</p>
                      <div className="progress-wrapper">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p>Swagger</p>
                      <div className="progress-wrapper">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "50%" }}
                          >
                            50%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p>Mongo DB</p>
                      <div className="progress-wrapper">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="70"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "70%" }}
                          >
                            70%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p>MySQL</p>
                      <div className="progress-wrapper">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="50"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "50%" }}
                          >
                            50%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p>GIT Version Control System</p>
                      <div className="progress-wrapper">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p>RestFul API</p>
                      <div className="progress-wrapper">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "75%" }}
                          >
                            75%
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p>Jest with Supertest</p>
                      <div className="progress-wrapper">
                        <div className="progress">
                          <div
                            className="progress-bar progress-bar-striped progress-bar-animated"
                            role="progressbar"
                            aria-valuenow="68"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ width: "68%" }}
                          >
                            68%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Experience */}
              {portofolioSection === "exp" && (
                <div
                  className={
                    portofolioSection === "exp"
                      ? "fadedown fadedown-active"
                      : "fadedown"
                  }
                >
                  <div className="box-experience-wrapper">
                    <div className="box-experience">
                      <div className="box-experience-inner">
                        <div className="icon-experience">
                          <FaShoppingBag />
                        </div>
                        <p className="date-experience">May - November 2022</p>
                        <p className="role-experience">
                          Fullstack Web Developer
                        </p>
                        <em className="company-experience">Binar Academy</em>
                        <p className="description-experience">
                          participated in incentive learning as a frontend and
                          backend for six months, and made a final project as a
                          team.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Education */}
              {portofolioSection === "education" && (
                <div
                  className={
                    portofolioSection === "education"
                      ? "fadedown fadedown-active"
                      : "fadedown"
                  }
                >
                  <div className="box-experience-wrapper">
                    <div className="box-experience">
                      <div className="box-experience-inner">
                        <div className="icon-experience">
                          <FcGraduationCap />
                        </div>
                        <p className="date-edu">May - November 2022</p>
                        <em className="grade-edu">Fullstack Web Developer</em>
                        <p className="school-edu">Binar Academy</p>
                      </div>
                    </div>
                    <div className="box-experience">
                      <div className="box-experience-inner">
                        <div className="icon-experience">
                          <FcGraduationCap />
                        </div>
                        <p className="date-edu">July 2017 - August 2021</p>
                        <em className="grade-edu">
                          Tourism Management (Diploma 4)
                        </em>
                        <p className="school-edu">Bali Tourism Polytechnic</p>
                      </div>
                    </div>
                    <div className="box-experience">
                      <div className="box-experience-inner">
                        <div className="icon-experience">
                          <FcGraduationCap />
                        </div>
                        <p className="date-edu">July 2014 - August 2017</p>
                        <em className="grade-edu">Junior High School</em>
                        <p className="school-edu">
                          Vocational High School of Nusa Dua
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {/* Certificate */}
              {portofolioSection === "certificate" && (
                <div
                  className={
                    portofolioSection === "certificate"
                      ? "fadedown fadedown-active"
                      : "fadedown"
                  }
                >
                  <div className="box-experience-wrapper">
                    <div className="box-experience">
                      <div className="box-experience-inner">
                        <div className="icon-experience">
                          <GiAchievement />
                        </div>
                        <p className="date-certificate">
                          Issued, 23 November 2022
                        </p>
                        <em className="program-certificate">
                          Fullstack Web Developer
                        </em>
                        <p className="company-certificate">Binar Academy</p>
                        <em className="link-title-certificate">
                          Check It Out Here:{" "}
                        </em>
                      </div>
                    </div>
                    <div className="box-experience">
                      <div className="box-experience-inner">
                        <div className="icon-experience">
                          <GiAchievement />
                        </div>
                        <p className="date-certificate">
                          Issued, September 2022
                        </p>
                        <em className="program-certificate">
                          CSS And Javascript Complete Course For Beginner
                        </em>
                        <p className="company-certificate">Udemy</p>
                        <em className="link-title-certificate">
                          Check It Out Here:{" "}
                          <a
                            href="https://www.udemy.com/certificate/UC-46f1c4b2-2213-483d-a827-855cb7d6a829/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-certificate"
                          >
                            https://www.udemy.com/certificate/UC-46f1c4b2-2213-483d-a827-855cb7d6a829/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email
                          </a>
                        </em>
                      </div>
                    </div>
                    <div className="box-experience">
                      <div className="box-experience-inner">
                        <div className="icon-experience">
                          <GiAchievement />
                        </div>
                        <p className="date-certificate">Issued, October 2022</p>
                        <em className="program-certificate">
                          Bootstrap 5 Course: Build Responsive Websites like a
                          Pro
                        </em>
                        <p className="company-certificate">Udemy</p>
                        <em className="link-title-certificate">
                          Check It Out Here:{" "}
                          <a
                            href="https://www.udemy.com/certificate/UC-6ab64656-8618-4766-8288-6799a0355191/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-certificate"
                          >
                            https://www.udemy.com/certificate/UC-6ab64656-8618-4766-8288-6799a0355191/?utm_source=sendgrid.com&utm_medium=email&utm_campaign=email
                          </a>
                        </em>
                      </div>
                    </div>
                    <div className="box-experience">
                      <div className="box-experience-inner">
                        <div className="icon-experience">
                          <GiAchievement />
                        </div>
                        <p className="date-certificate">Issued, June 2022</p>
                        <em className="program-certificate">
                          Digitalent Scholarship React Js
                        </em>
                        <p className="company-certificate">
                          Digitalent Kominfo
                        </p>
                        <em className="link-title-certificate">
                          Check It Out Here:{" "}
                          <a
                            href="https://digitalent.kominfo.go.id/cek-sertifikat?registrasi=149252629100-409"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-certificate"
                          >
                            https://digitalent.kominfo.go.id/cek-sertifikat?registrasi=149252629100-409
                          </a>
                        </em>
                      </div>
                    </div>
                    <div className="box-experience">
                      <div className="box-experience-inner">
                        <div className="icon-experience">
                          <GiAchievement />
                        </div>
                        <p className="date-certificate">Issued, June 2022</p>
                        <em className="program-certificate">
                          GIT (Version Control System)
                        </em>
                        <p className="company-certificate">Progate</p>
                        <em className="link-title-certificate">
                          Check It Out Here:{" "}
                          <a
                            href="https://progate.com/course_certificate/25b4944arct6dn"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-certificate"
                          >
                            https://progate.com/course_certificate/25b4944arct6dn
                          </a>
                        </em>
                      </div>
                    </div>
                    <div className="box-experience">
                      <div className="box-experience-inner">
                        <div className="icon-experience">
                          <GiAchievement />
                        </div>
                        <p className="date-certificate">Issued, June 2022</p>
                        <em className="program-certificate">
                          Javascript Fundamentals
                        </em>
                        <p className="company-certificate">Progate</p>
                        <em className="link-title-certificate">
                          Check It Out Here:{" "}
                          <a
                            href="https://progate.com/course_certificate/c86a505frcugmq"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-certificate"
                          >
                            https://progate.com/course_certificate/c86a505frcugmq
                          </a>
                        </em>
                      </div>
                    </div>
                    <div className="box-experience">
                      <div className="box-experience-inner">
                        <div className="icon-experience">
                          <GiAchievement />
                        </div>
                        <p className="date-certificate">Issued, June 2022</p>
                        <em className="program-certificate">React Js</em>
                        <p className="company-certificate">Progate</p>
                        <em className="link-title-certificate">
                          Check It Out Here:{" "}
                          <a
                            href="https://progate.com/course_certificate/3d9c07d8rd1jl6"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-certificate"
                          >
                            https://progate.com/course_certificate/3d9c07d8rd1jl6
                          </a>
                        </em>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AboutMe;
