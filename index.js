//Para crear HTML de cada país:
const cardTemplate = (country) => {
  return `<div class="card">
            <img id="flag-image" src="${country.flags.png}" alt="flag" />
            <h1 class="center">${country.name.common}</h1>
          </div>`;
};

const countriesNode = document.getElementById("countries");

// Realizamos la solicitud para obtener los datos de la API:
fetch("https://restcountries.com/v3.1/all")
  .then((response) => {
    if(!response.ok){
      throw new Error("La solicitud no fue exitosa") 
    }
    return response.json();
  })
  // y agregar al DOM:
  .then((countries) => {
    countries.map((country) => {
      countriesNode += cardTemplate(country.flags.png, country.name.common)
    })
  .catch((error) => {
      console.log(error);
  });
});
