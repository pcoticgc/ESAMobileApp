/* Create map and make style */
mapboxgl.accessToken = "pk.eyJ1IjoidG9uaWxvZ2FyIiwiYSI6ImNqYjZlamY1dzBtMXEzM3FxbmppeXBpeHoifQ.DbzKh1wtO4p4QOUjj9eg1w";
var map = new mapboxgl.Map({
    container: "map",
    /* style: "https://geoserveis.icgc.cat/contextmaps/hibrid.json", */
    style: "mapbox://styles/mapbox/streets-v11",
    zoom: 13.1,
    center: [1.380, 41.525],
    maxZoom: 20,
    minZoom: 1.65,
    zoom: 7
});
/* Create map and make style */
map.on('load', function () {
    map.addSource('mapbox-dem', {
        'type': 'raster-dem',
        'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
        'tileSize': 512,
        'maxzoom': 14
    });
    // add the DEM source as a terrain layer with exaggerated height
    map.setTerrain({ 'source': 'mapbox-dem', 'exaggeration': 1.5 });

    // add a sky layer that will show when the map is highly pitched
    map.addLayer({
        'id': 'sky',
        'type': 'sky',
        'paint': {
            // set up the sky layer to use a color gradient
            'sky-type': 'gradient',
            // the sky will be lightest in the center and get darker moving radially outward
            // this simulates the look of the sun just below the horizon
            'sky-gradient': [
                'interpolate',
                ['linear'],
                ['sky-radial-progress'],
                0.8,
                'rgba(135, 206, 235, 1.0)',
                1,
                'rgba(0,0,0,0.1)'],
            'sky-gradient-center': [0, 0],
            'sky-gradient-radius': 90,
            'sky-opacity': [
                'interpolate',
                ['exponential', 0.1],
                ['zoom'],
                5,
                0,
                22,
                1]
        }
    });
});
