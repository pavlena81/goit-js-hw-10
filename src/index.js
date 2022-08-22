import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import _ from 'lodash.debounce';

// var debounce = require('lodash.debounce');

import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;
