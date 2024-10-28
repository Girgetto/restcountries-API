const cardTemplate = function (countries) {
  const sourceLink = 'https://restcountries.com/v3.1/name/${country.name.common}';
   return `<div class="card">
              <img id="flag-image" src="${countries.flags.png}" alt="flag" />
              <h1 class="center">${countries.name.common}</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch("https://restcountries.com/v3.1/all")
  .then(function (response) {
     if (!response.ok) {
      throw new Error('La solicitud no fue exitosa');
    }

   return response.json(); // Convierte la respuesta en formato JSON
  })

    // fetch() returns a promise containing the response (a Response object).
    // This is just an HTTP response, not the actual JSON. 
    // To extract the JSON body content from the response, 
    // we use the json() method and pass it into the next .then()
 
  .then(function (countries) {

    console.log(countries);
   countries.forEach(function(country) {
   console.log(name.common)
   console.log(countriesNode)
  countriesNode.innerHTML += cardTemplate(country)
   });
  
    // Here is where you'll need to add into the DOM all the countries received from API 
      
    // 1 - We will need to iterate the countries variable with a loop
    // 2 - You can use the cardTemplate() function to create a div with a class card already styled
    // 💡 you can use countriesNode variable to add elements
  });
