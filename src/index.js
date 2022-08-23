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
  
  
   const searchCountries = e.target.value;

    fetchCountries(searchCountries)
        
    .then(countries =>{
            if (countries.length > 10) {
              return Notify.info('Too many matches found. Please enter a more specific name.');
          }
      } )
    .catch((error) =>  Notify.failure('error'))
    .finally(()=> searchCountries.reset)
};


function renderCountryList(countries) {
  const markup = countries
    .map((country) => {
      return `
          <li>
            <p><b>Name</b>: ${country.name}</p>
            <p><b>capital</b>: ${country.capital}</p>
            <p><b>population</b>: ${country.population}</p>
              <p><b>flags.svg</b>: ${country.flags.svg}</p>
              <p><b>languages</b>: ${country.languages}</p>
          </li>
      `;
    })
    .join("");
  countryList.innerHTML = markup;
}
