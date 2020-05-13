import React from "react";

export default class ContactForm extends React.Component {
  constructor() {
    super();

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleFormSubmit() {
    const name = document.querySelector('input[name="user_name"]');
    const email = document.querySelector('input[name="user_email"]');
    const message = document.querySelector('input[name="user_message"]');

    fetch("/api/form/submit", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });
  }

  render() {
    return (
      <div className="container">
        <div className="wrapper">
          <div className="section-one">
            <h1>Don't be a stranger</h1>
            <h2>just reach out.</h2>
          </div>
          <div className="contact-wrapper">
            <div className="section-two">
              <p>
                Feel free to get in touch with us with any questions or
                inquiries. We are always open to discussing new projects,
                creative ideas or opportunities to be part of your visions.
              </p>
              <h5>Need help?</h5>
              <h6>INST377homeCheck@gmail.com</h6>
            </div>
            <div className="section-three">
              <article className="contact-main">
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
                    <button
                      className="form-btn"
                      onClick={this.handleFormSubmit}
                    >
                      Send
                    </button>
                  </ul>
                </form>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
