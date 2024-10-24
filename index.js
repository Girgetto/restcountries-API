const cardTemplate = function (flagUrl, countryName) {
  return `<div class="card">
              <img id="flag-image" src="${flagUrl}" alt="flag" />
              <h1 class="center">${countryName}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
    if (!response.ok) {
      throw new Error('Something went wrong making the request.');
    }
    return response.json();
  })
  .then(function (countries) {
    countries.map((country) => {
      countriesNode.innerHTML += cardTemplate(country.flags.svg, country.name.common);
    })
  });