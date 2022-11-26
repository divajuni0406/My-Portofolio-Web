import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_94xxms6", form.current, "AEnxDtEoxPu4CbdxT")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="mt-5 pt-5">
      <div>
        <label>Subject</label>
        <input type="text" name="subject" />
      </div>
      <div>
        <label>Name</label>
        <input type="text" name="username" />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Message</label>
        <textarea name="message" />
      </div>
      <input type="submit" value="Send" />
    </form>
  );
};
