/* add geocoder to map */
map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
    })
);
/* add geocoder to map */
// Controls navigation (zoom, rotation) /////////////
map.addControl(new mapboxgl.NavigationControl());
// Geolocate ////////////////////////////////////
map.addControl(new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true
        }));