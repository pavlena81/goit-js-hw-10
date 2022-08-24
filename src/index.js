import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import debounce from 'lodash.debounce';

// var debounce = require('lodash.debounce');

import fetchCountries from './fetchCountries';

const DEBOUNCE_DELAY = 300;


const fetchCountriesById = document.querySelector('#search-box');

const countryList = document.querySelector('.country-list');

const countryInfo = document.querySelector('.country-info');

fetchCountriesById.addEventListener("input", debounce(onSearch,DEBOUNCE_DELAY));
  
  
function onSearch(e) {
  e.preventDefault();
  
  // countryList.innerHTML = '';
   const searchCountries = e.target.value.trim();

    fetchCountries(searchCountries)
        
    .then(countries =>{
            if (countries.length > 10) {
              return Notify.info('Too many matches found. Please enter a more specific name.');
      };
    //  return renderCountryList;
      } )
    .catch((error) =>  Notify.failure('error'))
    // .finally(()=> searchCountries.reset)
};


function renderCountryList(countries) {
  const markup = countries
    .map(({name,capital,population,flags,languages}) => {
      return `
          <li>
          <h2 class="country-name">b>Name</b>:${name.official}</h2>
            <p><b>Name</b>: ${name.official}</p>
            <p><b>capital</b>: ${capital}</p>
            <p><b>population</b>: ${population}</p>
              <img class="country-flag" <b>flags</b>: src = "${flags.svg}" alt="flags of ${name.official}" width = "50">
              <p><b>languages</b>: ${languages}</p>
          </li>
      `;
    })
    .join("");
  countryList.innerHTML = markup;
}
