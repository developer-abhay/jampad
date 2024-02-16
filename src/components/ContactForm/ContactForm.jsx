import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const contactForm = document.querySelector("#contact-form");

    emailjs
      .sendForm(
        "jampad_and_studios",
        "jampad_contact_form",
        form.current,
        "kTvhuWO_TJBurp48r"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    contactForm.reset();
  };
  return (
    <div className="form-container">
      <h1>Send a message to us!</h1>
      <form ref={form} onSubmit={sendEmail} id="contact-form">
        <input type="text" name="name" placeholder="Name" />
        <input type="tel" name="mobile" placeholder="Phone" />
        <input type="text" name="subject" placeholder="Subject" />
        <textarea type="text" name="message" placeholder="Message" rows="4" />
        <button className="btn" type="submit" value="Send">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
