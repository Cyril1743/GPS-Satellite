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
  var search = searchValue.replace(" ", "%20")
  var search = search.replace("&", "%26")
  var requestUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=" + search + "&key=AIzaSyBAc-vn35rr4MOnhvddt4qmf0EicQ-PUtM"
  fetch(requestUrl)
    .then(function (response) {
      return response.json()
    })
    .then(function (data) {
      var results = data
      lat = results.results[0].geometry.location.lat
      long = results.results[0].geometry.location.lng
      map = new google.maps.Map(document.getElementById("map"), {
        center:{lat: lat, lng: long},
        zoom: 8,
      })
      getPollution()
    })
})
function getPollution(){
  var apiKey = "82b6f72e416a643fc9c8ad973faf1aa5"
  var url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${apiKey}`
  fetch(url)
  .then(function(response){
    return response.json()
  })
  .then(function(data){
    var pollution = $("#pollution").children()
    var object = data.list[0].components
    var keys = Object.keys(object)
    var values = Object.values(object)
    $.each(pollution, function(){
      $(this).append("<h4>" + keys[i] + ": </h4>")
      $(this).append("<div>" + values[i] + "</div>")
    })

  })
}
  