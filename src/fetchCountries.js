//запросов к серверу 

// const refs = {
//     searchBox: document.querySelectorById('.#search-box'),
//     countryList: document.querySelector('.country-list'),
// }

// refs.searchBox.addEventListener('submit', onSearch);

// function onSearch(e){
//     e.preventDefaulte();

//     const searchForm = e.currentTarget.elements.input.value;
//   const url = "https://restcountries.com/#api-endpoints-v3-namejsonplaceholder.typicode.com/users";
//   // https://restcountries.com/#api-endpoints-v3-name
    
//     const options = {

//     }

// fetch(url, options)
//   .then(response => {
//     // Response handling
//   })
//   .then(data => {
//     // Data handling
//   })
//   .catch(error => {
//     // Error handling
//   }); 
// }

//==========================================================
const fetchCountriesById = document.querySelector('#search-box');

const  countryList = document.querySelector('.country-list');

fetchCountriesById.addEventListener("click", onSearch);
  
  
function onSearch(e) {
  e.preventDefault();
  
   fetchCountriesById.textContent = e.currentTarget.value;

  fetchCountries()
    .then(renderCountryList)
    .catch((error) => console.log(error))
    .finally(()=> reset())
};

// const SEARCH_PARAMS = 'name,capital,population,flags,languages';


function fetchCountries() { 

  
  return fetch(
    "https://restcountries.com/v2/all?fields=name,capital,population,flags,languages"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
}

function renderCountryList(users) {
  const markup = users
    .map((user) => {
      return `
          <li>
            <p><b>Name</b>: ${user.name}</p>
            <p><b>capital</b>: ${user.capital}</p>
            <p><b>population</b>: ${user.population}</p>
              <p><b>flags.svg</b>: ${user.flags.svg}</p>
              <p><b>languages</b>: ${user.languages}</p>
          </li>
      `;
    })
    .join("");
  countryList.innerHTML = markup;
}

export default fetchCountries;
//=========================================


// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// const url = `https://restcountries.com/#api-endpoints-v3-namejsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"