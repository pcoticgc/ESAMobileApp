map.on('load', function() {
    ////////////////// Green points //////////////////////////////////////
    map.addSource("VERDE_punts_no_aquifer", {
        "type": "vector",
        "tiles": ["https://tilemaps.icgc.cat/tileserver/tileserver.php/VERDE_punts_no_aquifer/{z}/{x}/{y}.pbf"],
        /* "url": "mapbox://tonilogar.84dugze6", */
       /*  "url": "http://localhost:8081/data/CAT_S1_UD_A132D037_201601_201912_4326_WSG_84-f-pf-pk.json",  */
         "minzoom": 0,
        "maxzoom": 7 
    });       
    map.addLayer({
        "id": "Non aquifer motion points",
        "source": "VERDE_punts_no_aquifer",
        "source-layer": "VERDE_punts_no_aquifer",
        "type": "circle",
        "layout": {
        "visibility": "visible"
        },
        "paint": {
            "circle-radius": 6,
            "circle-color": "green"
        }
    });
    ////////////////// Green points //////////////////////////////////////
    ////////////////// Blue points //////////////////////////////////////
    map.addSource("outDef", {
        "type": "vector",
        "tiles": ["https://tilemaps.icgc.cat/tileserver/tileserver.php/pousCat/{z}/{x}/{y}.pbf"],
        "minzoom": 0,
        "maxzoom": 7
    });       
    map.addLayer({
        "id": "Declared wells",
        "source": "outDef",
        "source-layer": "in",
        "type": "circle",
        "layout": {
        "visibility": "visible"
        },
        "paint": {
            "circle-radius": 3,
            "circle-color": "blue"
        }
    });
    ////////////////// Blue points //////////////////////////////////////
    ////////////////// Red points //////////////////////////////////////
    var rojoSource=map.addSource("ROJO_punts_aquifer_detectats", {
        "type": "vector",
        "tiles": ["https://tilemaps.icgc.cat/tileserver/tileserver.php/ROJO_punts_aquifer_detectats/{z}/{x}/{y}.pbf"],
        "minzoom": 0,
        "maxzoom": 7 
    });       
    map.addLayer({
        "id": "Aquifer motion points",
                "source": "ROJO_punts_aquifer_detectats",
                "source-layer": "ROJO_punts_aquifer_detectats",
                "type": "circle",
                "layout": {
                "visibility": "visible"
                },
                "paint": {
                    "circle-radius": 6,
                    "circle-color": "red"
                }
            });
    ////////////////// Red points //////////////////////////////////////
}); 