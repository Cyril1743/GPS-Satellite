//Import lon & lat variables from maps.js
import { lat, long } from "./maps.js";
//

//Example Query:
//https://api.nasa.gov/planetary/earth/imagery?lon=100.75&lat=1.5&date=2014-02-01&api_key=DEMO_KEY

//https://api.nasa.gov/planetary/earth/imagery?
//lon=100.75 - Sets longitude(lon)
//&
//lat=1.5 - Sets latitude (lat)
//&
//date=2014-02-01 - Sets date
//&
//api_key=DEMO_KEY

var nasaSearch =
  "https://api.nasa.gov/planetary/earth/imagery?lon=" +
  long +
  "&lat=" +
  lat +
  "&api_key=wYyOJOzsmeJEEGefWLuXKSD9WkHU5nxlaJUQ1biR";

console.log(nasaSearch);

//Use Fetch Request to ake finished nasaSearch string and send to NASA Earth API

function getApi() {
  // Insert the API url to get a list of your repos
  var requestUrl = nasaSearch;

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      //looping over the fetch response and inserting the URL of your repos into a list
      for (var i = 0; i < data.length; i++) {
        //Create a list element
        var listItem = document.createElement("li");

        //Set the text of the list element to the JSON response's .html_url property
        listItem.textContent = data[i].html_url;

        //Append the li element to the id associated with the ul element.
        //Need to update which element in html is being appended.
        repoList.appendChild(listItem);
      }
    });
}

search - bar.addEventListener("click", getApi);
