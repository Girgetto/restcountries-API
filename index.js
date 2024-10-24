const cardTemplate = (country) => {
  const countryUrl = `https://restcountries.com/v3.1/name/${country.name.common}`;
  return (
    `<a class="link" href="${countryUrl}" target="_blank">
      <div class="card">
        <img id="flag-image" src="${country.flags.png}" alt="flag" />
        <h1 class="center">${country.name.common}</h1>
      </div>
    </a>`
  );
};

const countriesNode = document.getElementById("countries");
const countriesApi = "https://restcountries.com/v3.1/all";
let allCountries = [];

fetch(countriesApi)
  .then((response) => {
    if (!response.ok) {
      throw new Error("La solicitud ha fallado");
    }
    return response.json();
  })
  .then((countries) => {
    allCountries = countries;
    const sortedCountries = countries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    renderCountries(sortedCountries);
  })
  .catch((error) => {
    console.log(error);
  });

const renderCountries = (countries) => {
  countriesNode.innerHTML = '';
  countries.forEach((country) => {
    const card = cardTemplate(country);
    countriesNode.innerHTML += card;
  });
};

const filterByContinent = (continent) => {
  let filteredCountries = [];

  if(continent === 'Americas') {
    filteredCountries = allCountries.filter(country => {
       return country.continents.includes('North America') || country.continents.includes('South America');
    });

  } else {
    filteredCountries = allCountries.filter(country => {
       return country.continents.includes(continent)});
  };
  
  renderCountries(filteredCountries);
};