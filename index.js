// Función que crea el HTML de cada tarjeta de país

const cardTemplate = function (country) {
  return `<div class="card">
              <img id="flag-image" src="${country.flags.png}" alt="flag of ${country.name.common}" />
              <h1 class="center">${country.name.common}</h1>
              </div>`;  
}

// Seleccionamos el nodo donde se agregarán los países y el select del filtro

const countriesNode = document.getElementById("countries");
const continentFilter = document.getElementById("continent-filter");
let allCountries = [];

// Realizamos la solicitud fetch() para obtener los datos de la API

fetch('https://restcountries.com/v3.1/all')
  .then(function (response) {
    return response.json();
  })
  .then(function (countries) {
    allCountries = countries;
    displayCountries(allCountries);
  })
  .catch(function (error) {
    console.log('Error al recuperar los países:', error);
  });

// Función para mostrar los países en el DOM

function displayCountries(countries) {
  countriesNode.innerHTML = '';
  countries.slice(0, 150).forEach(function (country) {
    const countryCard = cardTemplate(country);
    countriesNode.innerHTML += countryCard;
  });
}

// Escuchamos el cambio en el select del filtro


continentFilter.addEventListener('change', function () {
  const selectedContinent = continentFilter.value; 
  if (selectedContinent === 'all') {
    displayCountries(allCountries);
  } else {
    const filteredCountries = allCountries.filter(function (country) {
      return country.region === selectedContinent;
    });
    displayCountries(filteredCountries);
  }
});