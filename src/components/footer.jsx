/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export default () => (
  <footer className="footer">
    {/*     <div className="footer__logo-box">
      <picture className="footer__logo">
        <source srcSet="https://i.ibb.co/LvTLCnQ/footer-image.png 1x, https://i.ibb.co/LvTLCnQ/footer-image.png 2x" media="(max-width: 37.5em)" />
        <img srcSet="https://i.ibb.co/LvTLCnQ/footer-image.png 1x, https://i.ibb.co/LvTLCnQ/footer-image.png 2x" alt="Footer Logo" src="https://i.ibb.co/LvTLCnQ/footer-image.png" />
      </picture>
    </div> */}
    <div className="footer-main">
      <div className="footer-main__about-us">
        {/*  <picture className="footer__logo">
          <source srcSet="https://i.ibb.co/LvTLCnQ/footer-image.png 1x, https://i.ibb.co/LvTLCnQ/footer-image.png 2x" media="(max-width: 37.5em)" />
          <img srcSet="https://i.ibb.co/LvTLCnQ/footer-image.png 1x, https://i.ibb.co/LvTLCnQ/footer-image.png 2x" alt="Footer Logo" src="https://i.ibb.co/LvTLCnQ/footer-image.png" />
        </picture> */}
        <h3>ABOUT US</h3>
        <p className="footer__para">
          Intelligence Technologies Limited is an Information Technology company that focuses on using technology and innovations to drive businesses, small and medium enterprises, and large organizations.
        </p>
      </div>
      <div className="footer-main__useful-link">
        <h3>USEFUL LINK</h3>
        <a className="footer-main__link" href="#">Facebook</a>
        <a className="footer-main__link" href="#">LinkedIn</a>
        <a className="footer-main__link" href="#">Instagram</a>
      </div>
      <div className="footer-main__contact-us">
        <h3>CONTACT US</h3>
        <p className="footer__para">
          Suite 6 Block B, Alausa Shopping Mall,
          131, Obafemi Awolowo Way,
          Ikeja, Lagos. +23481400002000.
          info@itl.ng
        </p>
      </div>
    </div>
    <div className="footer__copyright">
      Copyright &copy;
      {' '}
      Intelligence Technologies Limited.
    </div>
  </footer>
);
