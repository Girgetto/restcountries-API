// Función que crea el HTML de cada tarjeta de país
const cardTemplate = function (country) {
  return `<div class="card">
              <img id="flag-image" src="${country.flags.png}" alt="flag of ${country.name.common}" />
              <h1 class="center">${country.name.common}</h1>
            </div>`;
};

// Seleccionamos el nodo donde se agregarán los países y el select del filtro
const countriesNode = document.getElementById("countries");
const continentFilter = document.getElementById("continent-filter");

let allCountries = []; // Variable global para almacenar todos los países

// Realizamos la solicitud fetch() para obtener los datos de la API
fetch('https://restcountries.com/v3.1/all')
  .then(function (response) {
    // Convertimos la respuesta a JSON
    return response.json();
  })
  .then(function (countries) {
    allCountries = countries; // Guardamos todos los países en la variable global
    displayCountries(allCountries); // Mostramos todos los países inicialmente
  })
  .catch(function (error) {
    console.log('Error al recuperar los países:', error);
  });

// Función para mostrar los países en el DOM
function displayCountries(countries) {
  countriesNode.innerHTML = ''; // Limpiamos el contenido anterior
  countries.slice(0, 150).forEach(function (country) {
    const countryCard = cardTemplate(country); // Generamos la tarjeta HTML
    countriesNode.innerHTML += countryCard; // Agregamos la tarjeta al DOM
  });
}

// Escuchamos el cambio en el select del filtro
continentFilter.addEventListener('change', function () {
  const selectedContinent = continentFilter.value; // Obtenemos el valor seleccionado
  if (selectedContinent === 'all') {
    displayCountries(allCountries); // Si seleccionan "all", mostramos todos los países
  } else {
    const filteredCountries = allCountries.filter(function (country) {
      return country.region === selectedContinent; // Filtramos los países por continente
    });
    displayCountries(filteredCountries); // Mostramos solo los países filtrados
  }
});
