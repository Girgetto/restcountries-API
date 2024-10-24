const btnSubmit = document.getElementById("formulario");
const countriesNode = document.getElementById("countries");
const urlApiCount = "https://restcountries.com/v3.1/all";
const arrayCountry = []

//Conexión con la API y guardamos la respues en un ARRAY
fetch(urlApiCount)
  .then( (response) => response.json())
  .then( (countries) => {
    countries.forEach((el)=>{
      arrayCountry.push(el)
      
    })
    addHTML(arrayCountry)
  });

const cardTemplate = (pais) => {
  const { name, flags } = pais;
  return `<img id="flag-image" src="${flags.png}" alt="flag" />
              <h1 class="center">${name.common}</h1>`;
};

const filtrar = (e) => {
  e.preventDefault();
  const valorSelect = e.target[0].value;
  console.log(valorSelect)
  filtrarArray(valorSelect)
};

const filtrarArray = (filtro) => {
if(filtro === "Todos" || !filtro){
  addHTML(arrayCountry);
  return 
}else{
  const arrayFiltrado = arrayCountry.filter((countryFilter)=> countryFilter.region == filtro )
  addHTML(arrayFiltrado)
}
 
}

const addHTML = (filtro)=>{
  console.log(filtro)
  countriesNode.innerHTML = ''
  filtro.forEach((country) => {
    const respuesta = cardTemplate(country);
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = respuesta;
    countriesNode.appendChild(div);
  });

}


btnSubmit.addEventListener("submit", filtrar);