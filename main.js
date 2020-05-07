const btn = document.querySelector('button');
const mapStyle = 'mapbox/dark-v10';
const mymap = L.map('map').setView([38.9935252, -76.9453], 10);
function createMap(mode) {
  L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: mode,
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia25nbzEzMzciLCJhIjoiY2s4bHV3Zzl1MGc2NDNybzJtanA0NGI1dSJ9.cII2Sb1RsPFPDgyeZnpzRA'
  }).addTo(mymap);
}

createMap(mapStyle);

const redIcon = new L.Icon({
  iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const marker = L.marker([38.9935252, -76.9453], {
  icon: redIcon
}).bindPopup('<strong>Eppley Recreational Center</strong><br>4128 Valley Dr<br>College Park,<br> MD 20742').openPopup().addTo(mymap);
