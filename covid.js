const baseURL = "https://cors-anywhere.herokuapp.com/http://api.covid19api.com/summary"
const key = "5cf9dfd5-3449-485e-b5ae-70a60e997864"

const queryButton = document.querySelector('.submit');
const tableBody = document.querySelector('tbody');

queryButton.addEventListener('click', fetchResults);

function fetchResults(e) {
  console.log(e);
  e.preventDefault();
  let url = baseURL + '?api-key' + key;
  console.log(url);
  fetch(url)
    .then(function (result) {
      return result.json();
    }).then(function (json) {
      displayResults(json);
    });
};

function displayResults(json) {
  console.log(json.Countries);
  for (country of json.Countries){
    console.log(country)
    let tr = document.createElement('tr');
    let td_country = document.createElement('td');
    let td_confirmed = document.createElement('td');
    let td_recovered = document.createElement('td');
    let td_deaths = document.createElement('td');
    tableBody.appendChild(tr);
    td_country.innerText = country.Country;
    td_confirmed.innerText = country.TotalConfirmed;
    td_deaths.innerText = country.TotalDeaths;
    td_recovered.innerText = country.TotalRecovered;
    tr.appendChild(td_country);
    tr.appendChild(td_confirmed);
    tr.appendChild(td_deaths);
    tr.appendChild(td_recovered);
  }
}

