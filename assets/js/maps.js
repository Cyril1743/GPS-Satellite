//varibles for maps
var map;
var lat = 39.060150;
var long = -95.647301;
var searchInput = $("#default-search")
var searchButton = $("#search")
var geocode


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: lat, lng: long },
    zoom: 4,
  });
}

window.initMap = initMap;

searchButton.on("click", function (event) {
  event.preventDefault()
  var searchValue = searchInput.val()
  console.log(searchValue)
  var search = searchValue.replace(" ", "%20")
  var search = search.replace("&", "%26")
  var requestUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + search + "&key=AIzaSyBAc-vn35rr4MOnhvddt4qmf0EicQ-PUtM"
  fetch(requestUrl)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      var results = data
      console.log(results)
      lat = results.results[0].geometry.location.lat
      long = results.results[0].geometry.location.lng
      map = new google.maps.Map(document.getElementById("map"), {
        center:{lat: lat, lng: long},
        zoom: 8,
      })
    })
})