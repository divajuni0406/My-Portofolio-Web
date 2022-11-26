import React, { useState, useRef, useEffect } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import Loading from "../loading/Loading";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { notifications, errorNotification } from "../../module/notification";

const Contact = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const subjectRef = useRef("");
  const messageRef = useRef("");
  const [nameValue, setNameValue] = useState("");
  const [isError, setIsError] = useState({});
  const [emailValue, setEmailValue] = useState("");
  const [subjectValue, setSubjectValue] = useState("");
  const [messageValue, setMessageValue] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const emailValidation = () => {
    const regExp = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    console.log(emailValue.length);
    if (emailValue.length === 0) {
      emailRef.current.textContent = "Email is required!";
      setIsError({ ...isError, email: true });
      return;
    }
    if (regExp.test(emailValue)) {
      emailRef.current.textContent = "";
      setIsError({ ...isError, email: false });
      return;
    }
    if (!regExp.test(emailValue)) {
      emailRef.current.textContent = "Email is not valid!";
      setIsError({ ...isError, email: true });
      return;
    }
  };

  const nameValidation = () => {
    console.log("hahahaha", nameValue.length);
    if (nameValue.length === 0) {
      nameRef.current.textContent = "Name is required!";
      setIsError({ ...isError, name: true });
      return;
    }
    if (nameValue.length < 2) {
      nameRef.current.textContent = "Minimum 2 characters!";
      setIsError({ ...isError, name: true });
      return;
    }
    nameRef.current.textContent = "";
    setIsError({ ...isError, name: false });
    return;
  };

  const subjectValidation = () => {
    console.log("hahahaha", subjectValue.length);
    if (subjectValue.length === 0) {
      subjectRef.current.textContent = "Subject is required!";
      setIsError({ ...isError, subject: true });
      return;
    }
    if (subjectValue.length <= 2) {
      subjectRef.current.textContent = "Minimum 3 characters!";
      setIsError({ ...isError, subject: true });
      return;
    }
    subjectRef.current.textContent = "";
    setIsError({ ...isError, subject: false });
    return;
  };

  function countWords(str) {
    const arr = str.split(" ");
    if (arr.filter((word) => word !== "").length === 0) {
      messageRef.current.textContent = "Message is required!";
      setIsError({ ...isError, message: true });
      return;
    }
    if (arr.filter((word) => word !== "").length <= 4) {
      messageRef.current.textContent =
        "Message should has minimum at least 5 words!";
      setIsError({ ...isError, message: true });
      return;
    }
    messageRef.current.textContent = "";
    setIsError({ ...isError, message: false });
    return;
  }

  const resetForm = () => {
    setEmailValue("");
    setSubjectValue("");
    setNameValue("");
    setMessageValue("");
    setIsError({
      name: "true",
      email: "true",
      subject: "true",
      message: "true",
    });
  };

  // condition for submitting form
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailValue.length);
    if (
      Object.keys(isError).length === 0 ||
      isError.name ||
      isError.email ||
      isError.subject ||
      isError.message
    ) {
      await notifications("");
    } else {
      try {
        let emailJs = await emailjs.sendForm(
          "gmail",
          "template_94xxms6",
          form.current,
          "AEnxDtEoxPu4CbdxT"
        );
        await notifications(emailJs);
        resetForm();
      } catch (error) {
        console.log(error.text);
        await errorNotification();
      }
    }
  };

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
        <div className="background-image-contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12 title-contact-wrapper text-center">
                <h1>CONTACT</h1>
                <h2>GET IN TOUCH</h2>
              </div>
              <div className="col-md-3 social-contact-wrapper text-center">
                <div>
                  <RiWhatsappFill size={30} />
                </div>
                <p>Whatsapp</p>
                <p>082144366265</p>
              </div>
              <div className="col-md-3 social-contact-wrapper text-center">
                <div>
                  <MdEmail size={30} />
                </div>
                <p>Email</p>
                <p>divajuni0406@gmail.com</p>
              </div>
              <div className="col-md-3 social-contact-wrapper text-center">
                <div>
                  <ImLocation2 size={30} />
                </div>
                <p>Address</p>
                <p>Badung, Bali, Indonesia</p>
              </div>
            </div>
            <form ref={form}>
              <div className="row justify-content-center">
                <div className="col-md-5">
                  <div className="name email-wrapper">
                    <p className="error-text-name" ref={nameRef}></p>
                    <input
                      type="text"
                      placeholder="Your Name"
                      name="username"
                      value={nameValue}
                      onChange={(e) => {
                        setNameValue(e.target.value);
                      }}
                      onBlur={nameValidation}
                    />
                  </div>
                  <div className="email email-wrapper">
                    <p className="error-text-name" ref={emailRef}></p>
                    <input
                      type="email"
                      placeholder="Your Email"
                      name="email"
                      value={emailValue}
                      onChange={(e) => {
                        setEmailValue(e.target.value);
                      }}
                      onBlur={emailValidation}
                    />
                  </div>
                  <div className="subject email-wrapper">
                    <p className="error-text-name" ref={subjectRef}></p>
                    <input
                      type="text"
                      placeholder="Subject"
                      name="subject"
                      value={subjectValue}
                      onBlur={subjectValidation}
                      onChange={(e) => {
                        setSubjectValue(e.target.value);
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-5 message-wrapper">
                  <p className="error-text-name mb-2" ref={messageRef}></p>
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="Your Message"
                    value={messageValue}
                    onBlur={() => {
                      countWords(messageValue);
                    }}
                    onChange={(e) => {
                      setMessageValue(e.target.value);
                    }}
                  ></textarea>
                  <div className="btn-message-wrapper">
                    <button onClick={handleSubmit}>Send Message</button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
