const cardTemplate = function (country) {
  return `<div class="card">
              <img id="flag-image" src="${country.flags.svg}" alt="flag" />
              <h1 class="center">${country.name.common}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch('https://restcountries.com/v3.1/all')
  .then(function (response) {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(function (countries) {
    countries.forEach(function(country) {
      const pais = cardTemplate(country);
      countriesNode.innerHTML += pais;
    });
  })
  .catch(function (error) {
    console.error('There was a problem with the fetch operation:', error);
  });

  
    // Here is where you'll need to add into the DOM all the countries received from API 

    // 1 - We will need to iterate the countries variable with a loop
    // 2 - You can use the cardTemplate() function to create a div with a class card already styled
    // 💡 you can use countriesNode variable to add elements;
