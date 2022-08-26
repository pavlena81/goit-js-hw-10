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


// const SEARCH_PARAMS = 'name,capital,population,flags,languages';
const URL = 'https://restcountries.com/v3.1/name/';
const fieldsFilter = 'fields=name,capital,population,flags,languages';

function fetchCountries(name) { 

  
  return fetch(
    `${URL}${name}?${fieldsFilter}`
    // `https://restcountries.com/v2/name/{name}?fields=name,capital,population,flags,languages`
    // "https://restcountries.com/v2/all?fields=name,capital,population,flags,languages"
  ).then((response) => {
    if (!response.ok) {
      throw new Error(response.status);     
    }
    return response.json();
  });
}


export default fetchCountries;
//=========================================


// console.log(searchParams.toString()); // "_limit=5&_sort=name"

// const url = `https://restcountries.com/#api-endpoints-v3-namejsonplaceholder.typicode.com/users?${searchParams}`;
// console.log(url); // "https://jsonplaceholder.typicode.com/users?_limit=5&_sort=name"