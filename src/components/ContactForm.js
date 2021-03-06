import React from "react";
import styled from "@emotion/styled";
import Button from "../utils/Button";

const ContactContent = styled.div`
  margin: 200px 200px 0px 200px;
  @media (max-width: 815px) {
    margin: 150px 10px 10px 10px;
  }
  @media (max-width: 500px) {
    margin: 50px;
  }
`;

const ContactInput = styled.input`
  width: 100%;
  border: none;
  background: transparent;
  margin: 0 0 5px;
  padding-top: 5px;
  padding-bottom: 5px;
  &:focus {
    outline: 0;
    border-bottom: 1px solid #ef626b;
  }
`;

const ContactTextArea = styled.textarea`
  border: none;
  height: 100px;
  width: 100%;
  max-width: 100%;
  resize: none;
  background: transparent;
  &:focus {
    outline: 0;
    border: 1px solid #ef626b;
  }
`;

const ContactHeading = styled.h1`
  text-align: center;
  color: #493a37;
`;

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;
    return (
      <ContactContent>
        <ContactHeading>CONTACT ME.</ContactHeading>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xwkrbyzo"
          method="POST"
        >
          <label>Name:</label>
          <ContactInput
            autoFocus
            required
            placeholder="Your Name"
            type="name"
            name="name"
          />
          <label>Email:</label>
          <ContactInput
            placeholder="Your Email Address"
            required
            type="email"
            name="email"
          />
          <label>Phone number:</label>
          <ContactInput
            placeholder="Your Phone Number (Optional)"
            type="number"
            name="number"
          />
          <label>Message:</label>
          <ContactTextArea
            required
            placeholder="Type Your Message Here..."
            type="text"
            name="message"
          />
          {status === "SUCCESS" ? (
            <p>Thankyou! I will be in contact with you soon.</p>
          ) : (
            <Button>Submit</Button>
          )}
          {status === "ERROR" && (
            <p>An error has occurred, your email has not been submitted.</p>
          )}
        </form>
      </ContactContent>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default ContactForm;
