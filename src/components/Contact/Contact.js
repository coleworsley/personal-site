import React, { Component } from 'react';
import ResumePopout from './ResumePopout';
import './Contact.css';

const initialState = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

class Contact extends Component {
  constructor() {
    super();
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { name, email, subject, message } = this.state;

    return (
      <div className="contact tab">
        <h1 className="contact__title">Contact Me</h1>
        <form className="contact__form" autoComplete="off">
          <input
            className="contact__input"
            id="name"
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={e => this.handleChange(e)}
          />
          <input
            className="contact__input"
            id="email"
            type="text"
            placeholder="Email"
            name="email"
            value={email}
            onChange={e => this.handleChange(e)}
          />
          <input
            className="contact__input"
            id="subject"
            type="text"
            placeholder="Subject"
            name="subject"
            value={subject}
            onChange={e => this.handleChange(e)}
          />
          <textarea
            className="contact__input"
            name="message"
            id="message"
            placeholder="Message"
            value={message}
            onChange={e => this.handleChange(e)}
          />
          <input type="submit" value="Send" className="contact__submit" />
        </form>
      </div>
    );
  }
}

export default Contact;
