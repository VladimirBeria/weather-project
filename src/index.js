import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.css';

import './style/reset.scss';
import './style/global.scss';
import './style/header.scss';
import './style/content.scss';
import './style/side-nav.scss';

import './js/view.js';

if (typeof require !== 'undefined') {
  var customSelect = require("custom-select").default;
  require("custom-select/build/custom-select.css");
}

const mySelects = customSelect("#langSelector");

console.log(mySelects);
