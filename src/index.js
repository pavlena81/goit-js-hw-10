import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

import debounce from 'lodash.debounce';

// var debounce = require('lodash.debounce');

import  fetchCountries  from './fetchCountries';

const DEBOUNCE_DELAY = 300;


const fetchCountriesById = document.querySelector('#search-box');

const countryList = document.querySelector('.country-list');

const countryInfo = document.querySelector('.country-info');

fetchCountriesById.addEventListener("input", debounce(onSearch, DEBOUNCE_DELAY));
  
  
function onSearch(e) {
  e.preventDefault();

  countryInfo.innerHTML = '';
     countryList.innerHTML = '';
   const searchCountries = e.target.value.trim();

  fetchCountries(searchCountries)
        
    .then(countries => {
      if (countries.length > 10) {
         Notify.info('Too many matches found. Please enter a more specific name.');
        return clearInput();
        
      }

      
      if (countries.length === 1) {
        return countryList.insertAdjacentHTML('beforeend', renderCountryList(countries));
        
         countryInfo.insertAdjacentHTML = '';

      }
      
      // Если бэкенд вернул от 2 - х до 10 - х стран, под тестовым полем отображается список
      //  найденных стран.Каждый элемент списка состоит из флага и имени страны.
      if (countries.length >= 2 || countries.length <= 10) {
        return countryInfo.insertAdjacentHTML('beforeend', renderCountryInfo(countries));
        // countryList.insertAdjacentHTML = '';
      }
      
      
    })
    .catch(error => {
      return Notify.failure('Oops, there is no country with that name');
      clearInput();
      return error;
    })
  
    //  .finally(()=> clearInput())
     
};


function renderCountryList(countries) {
  const markup = countries
    .map(({name,capital,population,flags,languages}) => {
      return `
          <li>
          <h2 class="country-name"<b>Name</b>:${name.official}</h2>
            
            <p><b>capital</b>: ${capital}</p>
            <p><b>population</b>: ${population}</p>
              <img class="country-flag"  src = "${flags.svg}" alt="flags of ${name.official}" width = "50">
              <p><b>languages</b>: ${Object.values(languages)}</p>
          </li>
      `;
    })
    .join("");
  return markup;
//  return countryList.innerHTML = markup;
};

function renderCountryInfo(countries) {
  const onCountryInfo = countries
    .map(({ flags, name }) => {
      return `
    <li>
      <img class="country-flag"  src = "${flags.svg}" alt="flags of ${name.official}" width = "50">
      <h2 class="country-name" <span>${name.official}</span></h2>
      </li> 
       `;
    })
    .join("");
  return onCountryInfo;
};

function clearInput() {
  // fetchCountriesById.reset();
  countryInfo.innerHTML = '';
  countryList.innerHTML = '';
};
