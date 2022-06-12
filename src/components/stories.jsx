/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
/* eslint-disable import/no-absolute-path */
/* eslint-disable import/no-unresolved */
import React from 'react';
/* import vid1 from '/dist/videos/video.mp4';
import vid2 from '/dist/videos/video.webm'; */

export default () => (
  <section id="stories" className="section-stories">
    <div className="bg-video">
      <video className="bg-video__content" autoPlay muted loop>
        <source src="" type="video/mp4" />
        <source src="" type="video/webm" />
        Your browser is not supported!
      </video>
    </div>
    <div className="u-center-text u-margin-bottom-big">
      <h2 className="heading-secondary">
        We make people genuinely happy
      </h2>
    </div>
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src="https://i.ibb.co/2jS66Qc/Processed-with-VSCO-with-e1-preset.jpg" alt="tour image" className="story__image" />
          <figcaption className="story__caption">Adenuga Hellen</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            One of the best company I ever work with.
          </h3>
          <p>
            I only went there for content Development but I ended up being one of their main customer in all I.T areas because of their
            professionalism, accuracy, timeliness and quality of Service.
          </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="story">
        <figure className="story__shape">
          <img src="https://i.ibb.co/h1F41DZ/realtor-1.png" alt="tour image" className="story__image" />
          <figcaption className="story__caption">Olajuwon Eric</figcaption>
        </figure>
        <div className="story__text">
          <h3 className="heading-tertiary u-margin-bottom-small">
            I am really impressed by the quality of services I received from ITL company.
          </h3>
          <p>
            You were right on schedule, charged reasonable prices, were professional and courteous in dealings,
            and delivered items well before time. I have got a good e-commerce site for my products.
            My revenue has increased because of ITL and I will definitely use your services again.
          </p>
        </div>
      </div>
    </div>
    {/*  <div className="u-center-text u-margin-top-huge">
      <a href="#" className="btn-text">Read all stories →</a>
    </div> */}
  </section>
);
