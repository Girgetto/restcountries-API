const cardTemplate = (pais) => {
  const { name, flags } = pais;
  return `<img id="flag-image" src="${flags.png}" alt="flag" />
              <h1 class="center">${name.common}</h1>`;
};

const countriesNode = document.getElementById("countries");

const urlApiCount = "https://restcountries.com/v3.1/all";

fetch(urlApiCount)
  .then(function (response) {
    return (json = response.json());
  })
  .then(function (countries) {
    countries.forEach((country) => {
      const respuesta = cardTemplate(country);
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = respuesta;
      countriesNode.appendChild(div);
    });
  });

const filtrar = (e) => {
  e.preventDefault();
  const valorSelect = e.target[0].value;
  let url;
  valorSelect === "Todos" ? url = "all" : url = 'region/' + valorSelect
  filtrarApi(url)
};
const btnSubmit = document.getElementById("formulario");
btnSubmit.addEventListener("submit", filtrar);


const filtrarApi = async(url) =>{
  countriesNode.innerHTML = ""
  const urlCustom = `https://restcountries.com/v3.1/${url}`
  fetch(urlCustom)
  .then(function (response) {
    return (json = response.json());
  })
  .then(function (countries) {
    countries.forEach((country) => {
      const respuesta = cardTemplate(country);
      const div = document.createElement("div");
      div.className = "card";
      div.innerHTML = respuesta;
      countriesNode.appendChild(div);
    });
  });
  
}