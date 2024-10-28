const cardTemplate = function (flagUrl, countryName) {
  return `<div class="card">
              <img id="flag-image" src="${flagUrl}" alt="flag" />
              <h1 class="center">${countryName}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");
let countriesObject;

fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
    if (!response.ok) {
      throw new Error('Something went wrong making the request.');
    }
    return response.json();
  })
  .then(function (countries) {
    countriesObject = countries;
    
    countries.map((country) => {
      countriesNode.innerHTML += cardTemplate(country.flags.svg, country.name.common);
    })
  });

document.getElementById("continent").addEventListener("change", function() {

  if (countriesObject != undefined) {
    const continent = this.value;
    countriesNode.innerHTML = "";
    if (continent != "") {
      countriesObject.map((country) => {
        if (country.continents.some((element) => element.toLowerCase() == continent.toLowerCase())) {
          countriesNode.innerHTML += cardTemplate(country.flags.svg, country.name.common);
        }
      })
    } else {
      countriesObject.map((country) => {
        countriesNode.innerHTML += cardTemplate(country.flags.svg, country.name.common);
      })
    }
  }

});