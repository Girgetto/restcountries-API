const cardTemplate = function (countries) {
  const source = 'https://restcountries.com/v3.1/name/{name}'
  

  return `<div class="card">
              <img id="flag-image" src="ADD THE IMAGE LINK HERE" alt="flag" />
              <h1 class="center">ADD COUNTRY NAME HERE</h1>
            </div>`;
};

const countriesNode = document.getElementById("countries");

fetch(/* Need the provide API URL to get all countries */)
  .then(function (response) {
    // fetch() returns a promise containing the response (a Response object).
    // This is just an HTTP response, not the actual JSON. 
    // To extract the JSON body content from the response, 
    // we use the json() method and pass it into the next .then()
  })
  .then(function (countries) {
    // Here is where you'll need to add into the DOM all the countries received from API 

    // 1 - We will need to iterate the countries variable with a loop
    // 2 - You can use the cardTemplate() function to create a div with a class card already styled
    // 💡 you can use countriesNode variable to add elements
  });$
