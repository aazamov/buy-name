import Navbar from "../components/navbar/navbar";
import emailjs from "emailjs-com";
import classes from "../styles/contact.module.css";

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm(
      "gmail",
      "template_bu2cyan",
      e.target,
      "user_XnJaA0lWaEoQiecWa2rP9"
    )
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  e.target.reset();
}

function Contact() {
  return (
    <div>
      <Navbar />
      <div className={classes["container"]}>
        <h1>Contact Us </h1>
        <form onSubmit={sendEmail}>
          <div>
            <input
              className={classes.input}
              type="text"
              placeholder="Name"
              name="name"
            />
          </div>
          <div>
            <input
              className={classes.input}
              type="email"
              placeholder="Email Address"
              name="email"
            />
          </div>
          <div>
            <input
              className={classes.input}
              type="text"
              placeholder="Subject"
              name="subject"
            />
          </div>
          <div>
            <textarea
              className={classes.inputtxt}
              id=""
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>
          <div>
            <input
              className={classes.inputbtn}
              type="submit"
              value="Send Message"
            ></input>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
