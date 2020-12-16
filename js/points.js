map.on('load', function() {
    ////////////////// Green points //////////////////////////////////////
    map.addSource("CAT_S1_UD_A132D037_201601_201912_EPSG_4326_WGS_84", {
        "type": "vector",
        "tiles": ["http://localhost:8081/data/CAT_S1_UD_A132D037_201601_201912_EPSG_4326_WGS_84-f-pf-pk/{z}/{x}/{y}.pbf"],
        /* "url": "mapbox://tonilogar.84dugze6", */
       /*  "url": "http://localhost:8081/data/CAT_S1_UD_A132D037_201601_201912_4326_WSG_84-f-pf-pk.json",  */
         "minzoom": 0,
        "maxzoom": 14 
    });       
    map.addLayer({
        "id": "Green",
        "source": "CAT_S1_UD_A132D037_201601_201912_EPSG_4326_WGS_84",
        "source-layer": "CAT_S1_UD_A132D037_201601_201912_EPSG_4326_WGS_84",
        "type": "circle",
        "layout": {
        "visibility": "visible"
        },
        "paint": {
            "circle-radius": 8,
            "circle-color": "orange"
        }
    });
    ////////////////// Green points //////////////////////////////////////
    ////////////////// Blue points //////////////////////////////////////
    map.addSource("CAT_S1_UD_A030D110_201601_201912_EPSG_4326_WGS_84", {
        "type": "vector",
        "tiles": ["http://localhost:8081/data/CAT_S1_UD_A030D110_201601_201912_EPSG_4326_WGS_84-f-pf-pk/{z}/{x}/{y}.pbf"],
        "minzoom": 0,
        "maxzoom": 14
    });       
    map.addLayer({
        "id": "blue",
        "source": "CAT_S1_UD_A030D110_201601_201912_EPSG_4326_WGS_84",
        "source-layer": "CAT_S1_UD_A030D110_201601_201912_EPSG_4326_WGS_84",
        "type": "circle",
        "layout": {
        "visibility": "visible"
        },
        "paint": {
            "circle-radius": 8,
            "circle-color": "orange"
        }
    });
    ////////////////// Blue points //////////////////////////////////////
    ////////////////// Red points //////////////////////////////////////
    map.addSource("CAT_S1_UD_A132D110_201601_201912_EPSG_4326_WGS_84", {
        "type": "vector",
        "tiles": ["http://localhost:8081/data/CAT_S1_UD_A132D110_201601_201912_EPSG_4326_WGS_84-f-pf-pk/{z}/{x}/{y}.pbf"],
        "minzoom": 0,
        "maxzoom": 14 
    });       
    map.addLayer({
        "id": "Red",
        "source": "CAT_S1_UD_A132D110_201601_201912_EPSG_4326_WGS_84",
        "source-layer": "CAT_S1_UD_A132D110_201601_201912_EPSG_4326_WGS_84",
        "type": "circle",
        "layout": {
        "visibility": "visible"
        },
        "paint": {
            "circle-radius": 8,
            
            "circle-color": "orange"
        }
    });
    ////////////////// Red points //////////////////////////////////////
}); 