const addressPoints = [
    {
        lat: -1.290270,
        lng: 36.817496,
        name: 'University of Nairobi',
        icon: L.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/5351/5351488.png',
            iconSize: [100, 100]
        })
    },
    {
        lat: -1.300994,
        lng: 36.822375,
        name: 'Kenyatta University',
        icon: L.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/5351/5351488.png',
            iconSize: [100, 100],
            color: 'purple'
        })
    },
    {
        lat: -1.283906,
        lng: 36.827149,
        name: 'Strathmore University',
        icon: L.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/5351/5351488.png',
            iconSize: [100, 100],
            color: 'orange'
        })
    },
    {
        lat: -1.309124,
        lng: 36.819580,
        name: 'Jomo Kenyatta University of Agriculture and Technology',
        icon: L.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/5351/5351488.png',
            iconSize: [100, 100],
            color: 'yellow'
        })
    },
    {
        lat: -1.299824,
        lng: 36.802417,
        name: 'United States International University Africa',
        icon: L.icon({
            iconUrl: 'https://cdn-icons-png.flaticon.com/512/5351/5351488.png',
            iconSize: [100, 100],
            color: 'pink'
        })
    }
];

const map = L.map('map').setView([-1.290270, 36.817496], 10);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Made with excitement by Meg Chepy 😊🚀👩‍🚀'
}).addTo(map);

const markers = L.markerClusterGroup();

for (let i = 0; i < addressPoints.length; i++) {

    const { name: title, lat, lng, icon } = addressPoints[i];

    const marker = L.marker(new L.LatLng(lat, lng), {
        title,
        icon
    });

    marker.bindPopup(title);
    markers.addLayer(marker);
};

map.addLayer(markers);
