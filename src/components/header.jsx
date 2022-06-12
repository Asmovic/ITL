/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export default () => (
  <header className="header">
    <div className="header__logo-box">
      <img className="logo" src="https://i.ibb.co/mFTCMst/header-image.png" alt="header__logo" />
    </div>
    <div className="header__text-box">
      <h1 className="heading-primary">
        <span className="heading-primary--main u-margin-bottom-medium">
          INTELLIGENCE TECHNOLOGIES LIMITED
        </span>
        <span className="heading-primary--sub u-margin-bottom-big">
          innovation driven ICT company
        </span>
      </h1>
      <a href="#ft1" className="btn btn--white btn--animated">Our Services</a>
    </div>
  </header>
);
