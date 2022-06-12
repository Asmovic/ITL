/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/state-in-constructor */
/* eslint-disable react/no-unused-state */
/* eslint-disable no-console */
/* eslint-disable object-curly-newline */
import React from 'react';
import axios from 'axios';
import Notification from '../helper/Notification';

class Book extends React.Component {
  INITIAL_STATE = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }

  state = this.INITIAL_STATE;

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = async (event) => {
    const URL = 'https://itl.ng/contact.php';
    event.preventDefault();
    /*  this.setState(this.INITIAL_STATE);
    Notification.success(
      'Message submitted successfully!!!'
    ); */
    const { name, email, phone, subject, message } = this.state;
    const res = await axios.post(URL, {
      name,
      email,
      phone,
      subject,
      message
    });
    if (res.data.status) {
      console.log(res);
      this.setState(this.INITIAL_STATE);
      Notification.success(
        'Message submitted successfully!!!'
      );
    } else {
      Notification.error('Their is error in your input');
    }
  }

  render() {
    const { name, email, phone, subject, message } = this.state;
    return (
      <section id="contact" className="section-book">
        <div className="row">
          <div className="book">
            <div className="book__form">
              <form onSubmit={this.handleSubmit} className="form">
                <div className="u-margin-bottom-small">
                  <h2 className="heading-secondary">
                    Contact Us
                  </h2>
                </div>
                <div className="form__group">
                  <input type="text" value={name} name="name" onChange={this.handleChange} className="form__input" placeholder="Full Name" id="name" />
                  <label htmlFor="name" className="form__label">Full Name</label>
                </div>
                <div className="form__group">
                  <input type="email" value={email} name="email" onChange={this.handleChange} className="form__input" placeholder="Email Address" id="email" />
                  <label htmlFor="email" className="form__label">Email Address</label>
                </div>
                <div className="form__group">
                  <input type="tel" value={phone} name="phone" onChange={this.handleChange} className="form__input" placeholder="phone" id="phone" />
                  <label htmlFor="phone" className="form__label">Phone</label>
                </div>
                <div className="form__group">
                  <input type="text" value={subject} name="subject" onChange={this.handleChange} className="form__input" placeholder="subject" id="subject" />
                  <label htmlFor="subject" className="form__label">Subject</label>
                </div>
                <div className="form__group">
                  <textarea type="text" value={message} name="message" onChange={this.handleChange} className="form__input" placeholder="message" id="message" />
                  <label htmlFor="message" className="form__label">Message</label>
                </div>
                <div className="form__group">
                  <button type="submit" className="btn btn--green">Submit</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Book;
