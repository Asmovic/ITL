/* eslint-disable linebreak-style */
/* eslint-disable no-tabs */
/* eslint-disable max-len */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/button-has-type */
/* eslint-disable react/display-name */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/sort-comp */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-console */

import React from 'react';

class Navigation extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    this.background = React.createRef();
    this.nav = React.createRef();
    this.state = {
      toggleVisibility: false,
      chk: true
    };
  }

  /*   closeNav = () => {
    document.getElementById('myNav').style.width = 0;
    document.getElementById('myNav').style.opacity = 0;
    document.getElementById('myBack').style.transform = 'scale(0)';
    document.getElementById('navigation-toggle').checked = false;
  }; */

  /*   styles = {
    background: {
      transform: 'scale(0)'
    }
  } */

  tog = () => {
    const { toggleVisibility } = this.state;
    /*     document.getElementById('navigation-toggle').checked = false; */
    this.setState({ toggleVisibility: !toggleVisibility },
      () => {
        document.getElementById('navigation-toggle').checked = toggleVisibility;
      });
  }

  chk = () => {
    this.setState({ toggleVisibility: false });
    document.getElementById('navigation-toggle').checked = false;
  }

  render() {
    return (
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navigation-toggle" />
        <label onClick={this.tog} htmlFor="navigation-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>
        {this.state.toggleVisibility ? (
          <>
            <div id="myBack" ref={this.background} className="navigation__background">&nbsp;</div>
            <nav id="myNav" className="navigation__nav">
              <ul className="navigation__list">
                <li className="navigation__item">
                  <a onClick={this.chk} href="#about" className="navigation__link">
                    <span>01</span>
                    About ITL
                  </a>
                </li>
                <li className="navigation__item">
                  <a onClick={this.chk} href="#ft1" className="navigation__link">
                    <span>02</span>
                    Our services
                  </a>
                </li>
                <li className="navigation__item">
                  <a onClick={this.chk} href="#stories" className="navigation__link">
                    <span>03</span>
                    Testimonies
                  </a>
                </li>
                <li className="navigation__item">
                  <a onClick={this.chk} href="#contact" className="navigation__link">
                    <span>04</span>
                    Contact Us
                  </a>
                </li>
                <li className="navigation__item">
                  <a onClick={this.chk} href="#" className="navigation__link">
                    <span>05</span>
                    Our Team
                  </a>
                </li>
              </ul>
            </nav>
          </>
        ) : <> </>}

      </div>
    );
  }
}

export default Navigation;
