//lokaal werkt de api, na het pushen op github niet meer :( 


var googlemaps;

google.maps.event.addDomListener(window, 'load', initMaps);

function initMaps() {

    var divMap = document.getElementById('divMap');

    var mapOptions = {

        zoom: 17,
        center: new google.maps.LatLng(51.05049, 3.7171404)

    };

    googlemaps = new google.maps.Map(divMap, mapOptions);


}

var fieldSelect = document.getElementById('styles');
fieldSelect;




function fetchJSONFile(path, callback) {
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = function() {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                var data = JSON.parse(httpRequest.responseText);
                if (callback) callback(data);
            }
        }
    };
    httpRequest.open('GET', path);
    httpRequest.send();
}

// this requests the file and executes a callback with the parsed result once
//   it is available
/*fetchJSONFile('pathToFile.json', function(data){
    // do something with your data
    console.log(data);
});*/



//btnAddMarker.addEventListener('click', addMarker);

//function addMarker() {

//var markerPosition = new googlemaps.maps.LatLng(fieldLatitude.value, fieldLongitude.value)
//var marker = new googlemaps.maps.Marker({
//position: markerPosition
//})