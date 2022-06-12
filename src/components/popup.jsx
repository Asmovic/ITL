/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
import React from 'react';

export default () => (
  <div className="popup" id="popup">
    <div className="popup__content">
      <div className="popup__left">
        <img src="https://i.ibb.co/VqRFbTQ/nat-8.jpg" alt="Tour photo" className="popup__image" />
        <img src="https://i.ibb.co/DfHWcjw/nat-9.jpg" alt="Tour photo" className="popup__image" />
      </div>
      <div className="popup__right">
        <a href="#section-tours" className="popup__close">×</a>
        <h2 className="heading-secondary u-margin-bottom-small">Start booking now</h2>
        <h3 className="heading-tertiary u-margin-bottom-small">
          Important ‐ please read this terms before
          booking
        </h3>
        <p className="popup__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat pretium nibh ipsum
          consequat nisl vel pretium lectus quam. Id ornare arcu odio ut sem. Malesuada proin libero nunc
          consequat interdum varius sit. Urna id volutpat lacus laoreet non curabitur gravida. Tellus orci ac
          auctor augue mauris. Id aliquet risus feugiat in ante metus dictum. Nibh cras pulvinar mattis nunc
          sed blandit libero volutpat. Semper feugiat nibh sed pulvinar proin. Nibh tellus molestie nunc non.
          Tellus at urna condimentum mattis pellentesque. Consectetur adipiscing elit duis tristique
          sollicitudin nibh sit amet commodo. Elit eget gravida cum sociis natoque penatibus.
        </p>
        <a href="#" className="btn btn--green">Book now</a>
      </div>
    </div>
  </div>
);
