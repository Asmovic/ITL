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
import Noty from 'noty';
import 'noty/src/noty.scss';
import 'noty/src/themes/metroui.scss';

let noty = null;
export default class Notification {
  constructor() {
    this.options = {
      layout: 'topRight',
      timeout: 6000,
      theme: 'metroui',
      closeWith: ['click', 'button'],
      progressBar: true,
      modal: false,
    };
  }

  _notify(msg, optx) {
    if (msg === null) {
      throw new Error('Please supply message');
    }

    const opts = optx || {};
    this.options = { ...this.options, ...opts };
    this.options.text = msg;
    return new Noty(this.options).show();
  }

  static error(text) {
    if (!noty) noty = new this();
    noty._notify(`<p><i class="fa fa-times-circle"></i> ${text}</p>`, {
      type: 'error',
    });
  }

  static success(text) {
    if (!noty) noty = new this();
    noty._notify(`<p><i class="fa fa-check-circle"></i> ${text}</p>`, {
      type: 'success',
    });
  }

  static warning(text) {
    if (!noty) noty = new this();
    noty._notify(text, {
      type: 'warning',
    });
  }

  static alert(text) {
    if (!noty) noty = new this();
    noty._notify(text, {
      type: 'alert',
    });
  }

  static info(text) {
    if (!noty) noty = new this();
    noty._notify(text, {
      type: 'info',
    });
  }
}
