import contactImg from "../assets/img/contact-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import SendIcon from "@mui/icons-material/Send";
import Button from "@mui/material/Button";
import { Email } from "@mui/icons-material";
import emailjs from "@emailjs/browser";

const sendEmail = (e) => {
  e.preventDefault();
  alert("submitted");

  emailjs.sendForm(
    "service_edc4a9j",
    "template_i6pdty4",
    e.target,
    "TuJsb_u7hZKFJFsoo"
  );
};

const Contact = () => {
  return (
    <div className="contact">
      <div className="contactg">
        <TrackVisibility once>
          {({ isVisible }) => (
            <img
              className={isVisible ? "animate__animated animate__zoomIn" : ""}
              src={contactImg}
              alt="Contact Us"
            />
          )}
        </TrackVisibility>
      </div>
      <div className="contactd">
        <div className="App">
          <h1 className="page__title">Contactez-moi</h1>
          <form className="contact__form" onSubmit={sendEmail}>
            <label htmlFor="emailFrom">Email:</label>
            <input
              type="text"
              name="email_from"
              id="emailFrom"
              className="email__from"
              placeholder="person@example.com"
            />
            <label htmlFor="message">Message:</label>
            <textarea
              name="message"
              id="message"
              className="message__box"
            ></textarea>
            <Button
              type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              className="submit__btn"
              style={{ marginTop: "5px" }}
            >
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
