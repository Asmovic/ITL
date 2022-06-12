/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export default () => (
  <section id="about" className="section-about">
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">
        About Us
      </h2>
    </div>
    <div className="row">
      <div className="col-1-of-2">
        <p className="paragraph">
          Intelligence technologies limited is an Information Technology company that focuses on using technology and innovations to drive businesses, small and medium enterprises, and large organizations.
        </p>
        <p className="paragraph">
          As a company, we make use of the latest technology tools to develop solutions that solves the problems that faces the growth of businesses in Nigeria.
        </p>
        {/*  <a href="#" className="btn-text">Learn more →</a> */}
      </div>
      <div className="col-1-of-2">
        <div className="composition">
          <img srcSet="https://i.ibb.co/74SkFWy/digital-marketing.jpg 300w, https://i.ibb.co/74SkFWy/digital-marketing.jpg 1000w" sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="photo 1" src="https://i.ibb.co/74SkFWy/digital-marketing.jpg" className="composition__photo composition__photo--p1" />
          <img srcSet="https://i.ibb.co/mJQyJtY/software-development.jpg 300w, https://i.ibb.co/mJQyJtY/software-development.jpg 1000w" sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="photo 2" src="https://i.ibb.co/mJQyJtY/software-development.jpg" className="composition__photo composition__photo--p2" />
          <img srcSet="https://i.ibb.co/bX4N91c/cybersecurity.jpg 300w, https://i.ibb.co/bX4N91c/cybersecurity.jpg 1000w" sizes="(max-width: 56.25em) 20vw, (max-width: 37.5em) 30vw, 300px" alt="photo 3" src="https://i.ibb.co/bX4N91c/cybersecurity.jpg" className="composition__photo composition__photo--p3" />
          {/*                         <img src="img/nat-1-large.jpg" alt="photo 1" class="composition__photo composition__photo--p1">
        <img src="img/nat-2-large.jpg" alt="photo 2" class="composition__photo composition__photo--p2">
        <img src="img/nat-3-large.jpg" alt="photo 3" class="composition__photo composition__photo--p3"> */}
        </div>
      </div>
    </div>
  </section>
);
