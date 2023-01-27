//Import lon & lat variables from maps.js
import { lat, long } from "./maps.js";
console.log(lat);
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

var spectatorSearch =
  //https:api.spectator.earth/overpass/?api_key=KEY&bbox=19.59,49.90,20.33,50.21&satellites=Sentinel-2A
  "https://api.nasa.gov/planetary/earth/imagery?lon=" +
  long1 +
  "&lat=" +
  lat1 +
  long1 +
  "&lat=" +
  lat1 +
  ;

//Use Fetch Request to ake finished nasaSearch string and send to NASA Earth API

function getApi() {
  // Insert the API url to get a list of your repos
  var requestUrl = spectatorSearch;

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
        repoList.appendChild(listItem);
      }
    });
}

//search - bar.addEventListener("click", getApi);
