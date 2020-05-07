import React from "react";

const ContactForm = () => (
  <div className="container">
    <div className="wrapper">
      <div class="section_one">
        <div className="email_image">
          <img src="../static/images/email.png" alt="email"></img>
        </div>
      </div>
      <div class="section_two">
      <h1>Contact Us</h1>
        <p>Please reach out to us if you have any questions!</p>
        <article className="contactMain">
          <form>
            <ul>
              <li>
                <input
                  type="text"
                  id="name"
                  name="user_name"
                  placeholder="Name"
                  maxLength="140"
                />
              </li>
              <li>
                <input
                  type="text"
                  id="email"
                  name="user_email"
                  placeholder="Email"
                />
              </li>
              <li>
                <input
                  type="text"
                  id="message"
                  name="user_message"
                  placeholder="Message"
                />
              </li>
            </ul>
          </form>
          <button type="submit">Send</button>
        </article>
      </div>
    </div>
  </div>
);

export default ContactForm;
