//varibles for maps
var map;
var lat = 39.06015;
var long = -95.647301;
var searchInput = $("#default-search");
var searchButton = $("#search");
var geocode;
var recentMap;

function initMap() {
  if (localStorage.getItem("lastSearch")) {
    // console.log(localStorage.getItem("lastSearch"));
    var lastSearch = localStorage.getItem("lastSearch");
    var lastSearch = lastSearch.replace(" ", "%20");
    var lastSearch = lastSearch.replace("&", "%26");
    var requestUrl =
      "https://maps.googleapis.com/maps/api/geocode/json?address=" +
      lastSearch +
      "&key=AIzaSyBAc-vn35rr4MOnhvddt4qmf0EicQ-PUtM";
    console.log(requestUrl);
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        var results = data;
        var mlat = results.results[0].geometry.location.lat;
        var mlong = results.results[0].geometry.location.lng;
        map = new google.maps.Map(document.getElementById("map"), {
          center: { lat: lat, lng: long },
          zoom: 4,
          gestureHandling: "cooperative",
        });
        var markerPosition = { lat: mlat, lng: mlong };
        var marker = new google.maps.Marker({
          position: markerPosition,
          map,
          title: "Last Searched City",
        });
      });
  } else {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: lat, lng: long },
      zoom: 4,
      gestureHandling: "cooperative",
    });
  }
}

window.initMap = initMap;

searchButton.on("click", function (event) {
  event.preventDefault();
  var searchValue = searchInput.val();
  //TODO: Store last searched city in local storage:
  localStorage.setItem("lastSearch", searchValue);
  var search = searchValue.replace(" ", "%20");
  var search = search.replace("&", "%26");
  var requestUrl =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    search +
    "&key=AIzaSyBAc-vn35rr4MOnhvddt4qmf0EicQ-PUtM";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var results = data;
      lat = results.results[0].geometry.location.lat;
      long = results.results[0].geometry.location.lng;
      makeMap(map, "map");
      getPollution();
    });
});

function getPollution() {
  var apiKey = "82b6f72e416a643fc9c8ad973faf1aa5";
  var url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${long}&appid=${apiKey}`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var pollution = $("#pollution-container").children();
      var object = data.list[0].components;
      var keys = Object.keys(object);
      var values = Object.values(object);
      $.each(pollution, function (i) {
        $(this).append(
          "<h4 class='font-bold text-xl text-white mb-2'>" + keys[i] + ": </h4>"
        );
        $(this).append(
          "<div class='font-bold text-xl text-white mb-2'>" +
            values[i] +
            "</div>"
        );
      });
    });
}

function makeMap(varible, element) {
  varible = new google.maps.Map(document.getElementById(element), {
    center: { lat: lat, lng: long },
    zoom: 8,
    gestureHandling: "cooperative",
  });
}

//TODO: Retrieve the last search value from local storage and render it to the page:
function renderLastRegistered() {
  var lastSearch = localStorage.getItem("lastSearch");
  localStorage.setItem("lastSearch", searchValue);
  var search = searchValue.replace(" ", "%20");
  var search = search.replace("&", "%26");
  var requestUrl =
    "https://maps.googleapis.com/maps/api/geocode/json?address=" +
    search +
    "&key=AIzaSyBAc-vn35rr4MOnhvddt4qmf0EicQ-PUtM";

  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var results = data;
      lat = results.results[0].geometry.location.lat;
      long = results.results[0].geometry.location.lng;
      var marker = new google.maps.Marker({
        position: { lat: lat, lng: long },
      });
    });
}
