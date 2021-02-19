/**
 * 
 * * Declaracion de variables Globales.
 * !
 * TODO
 * ?
*/
var realArrayCapas = [
    {'nombre':'Colonias', 'colorFill':'#faf2b7', 'colorStoker':'#e7c48c', 'nombreCampo':'NOMBRE', 'capa':'colonias_poligonos', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/colonias_poligonos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=colonias_poligonos%3Acolonias_poligonos&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    {'nombre':'Area Geoestadistica Municipal', 'colorFill':'#faf2b7', 'colorStoker':'#e7c48c', 'nombreCampo':'NOM_MUN', 'capa':'areageoestadisticabasicamunicipal_poligonos', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/areageoestadisticabasicamunicipal_poligonos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=areageoestadisticabasicamunicipal_poligonos%3Aareageoestadisticabasicamunicipal_poligonos&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    {'nombre':'Area Geoestadistica', 'colorFill':'#faf2b7', 'colorStoker':'#e7c48c', 'nombreCampo':'', 'capa':'areageoestadisticabasicarural_poligonos', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/areageoestadisticabasicarural_poligonos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=areageoestadisticabasicarural_poligonos%3Aareageoestadisticabasicarural_poligonos&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    {'nombre':'Localidades Rurales', 'colorFill':'#f5e1de', 'colorStoker':'#f5e1de', 'nombreCampo':'NOM_LOC', 'capa':'localidadesurbanasrurales_poligonos', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/localidadesurbanasrurales_poligonos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=localidadesurbanasrurales_poligonos%3Alocalidadesurbanasrurales_poligonos&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    {'nombre':'Localidades Urbanas', 'colorFill':'#f5e1de', 'colorStoker':'#f06de6', 'nombreCampo':'NOM_LOC', 'capa':'localidadurbanasrurales_poligonos', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/localidadurbanasrurales_poligonos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=localidadurbanasrurales_poligonos%3Alocalidadurbanasrurales_poligonos&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    {'nombre':'Zona Metropolitana', 'colorFill':'#c0ae5a', 'colorStoker':'#e7c48c', 'nombreCampo':'', 'capa':'zonametropoliana_poligonos', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/zonametropoliana_poligonos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=zonametropoliana_poligonos%3Azonametropoliana_poligonos&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    {'nombre':'Cuerpos de Agua', 'colorFill':'#abd4dc', 'colorStoker':'#abd4dc', 'nombreCampo':'OID_1', 'capa':'cuerposagua_poligonos', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/cuerposagua_poligonos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cuerposagua_poligonos%3Acuerposagua_poligonos&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    //{'nombre':'Áreas Naturales Protegidas', 'colorFill':'', 'colorStoker':'', 'nombreCampo':'', 'capa':'anp_poligonos', 'gejson':''},
    {'nombre':'AGED Rural(AM)', 'colorFill':'#f06de6', 'colorStoker':'#f5e1de', 'nombreCampo':'', 'capa':'agebruralam_poligonos', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/agebruralam_poligonos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agebruralam_poligonos%3Aagebruralam_poligonos&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    {'nombre':'AGED Rural', 'colorFill':'#f5e1de', 'colorStoker':'#f06de6', 'nombreCampo':'', 'capa':'agebrural_poligonos', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/agebrural_poligonos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=agebrural_poligonos%3Aagebrural_poligonos&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    //{'nombre':'Codigo Postal', 'colorFill':'', 'colorStoker':'', 'nombreCampo':'', 'capa':'cp_poligonos', 'gejson':''},
    {'nombre':'Codigo Postal(AM)', 'colorFill':'#f2e6e4', 'colorStoker':'#dcaccc', 'nombreCampo':'NOM_MUN', 'capa':'cpam_poligonos', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/cpam_poligonos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cpam_poligonos%3Acpam_poligonos&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    {'nombre':'Municipio', 'colorFill':'#f2e6e4', 'colorStoker':'#dcaccc', 'nombreCampo':'NOM_MUN', 'capa':'	municipio_poligonos', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/municipio_poligonos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=municipio_poligonos%3Amunicipio_poligonos&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    {'nombre':'Limites Municipales', 'colorFill':'#91522d', 'colorStoker':'#91522d', 'nombreCampo':'', 'capa':'limitemunicipio_line', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/limitemunicipio_line/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=limitemunicipio_line%3Alimitemunicipio_line&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    {'nombre':'Ríos', 'colorFill':'#abd4dc', 'colorStoker':'#abd4dc', 'nombreCampo':'NOMBRE', 'capa':'rios_linestring', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/rios_linestring/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=rios_linestring%3Arios_linestring&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    {'nombre':'Montañas', 'colorFill':'#c0ae5a', 'colorStoker':'#c0ae5a', 'nombreCampo':'', 'capa':'curvas_poligonos', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/curvas_poligonos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=curvas_poligonos%3Acurvas_poligonos&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    {'nombre':'Localidades Rurales Limites(Puntos)', 'colorFill':'#f5e1de', 'colorStoker':'#f5e1de', 'nombreCampo':'NOM_LOC', 'capa':'localidadesruralesglobales_points', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/localidadesruralesglobales_points/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=localidadesruralesglobales_points%3Alocalidadesruralesglobales_points&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    {'nombre':'Localidades Rurales(Puntos)', 'colorFill':'#f5e1de', 'colorStoker':'#f5e1de', 'nombreCampo':'NOM_LOC', 'capa':'localidadesrurales_points', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/localidadesrurales_points/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=localidadesrurales_points%3Alocalidadesrurales_points&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
    {'nombre':'Centro de Gestión Comunitaria(CGC)', 'colorFill':'#f5e1de', 'colorStoker':'#f5e1de', 'nombreCampo':'Nom_C', 'capa':'cgc_puntos', 'gejson':'http://cartografia.xalapa.gob.mx/geoserver/cgc_puntos/ows?service=WFS&version=1.0.0&request=GetFeature&typeName=cgc_puntos%3Acgc_puntos&maxFeatures=5000&outputFormat=application%2Fjson&srsname=EPSG:3857'},
];
var map;

/**
 * 
 * * Carga la informcaion de creacion de mapa y variable global de MAP.
 * !
 * TODO
 * ?
*/
(function() {
    map = new ol.Map({
        target: 'map',
        layers: [
            /**
             * 
             * * Primer apartado, cargado de mapas bases.
             * !
             * TODO
             * ?
            */
            new ol.layer.Tile({
                title: 'Aqua Colors',
                type: 'base',
                visible: false,
                source: new ol.source.Stamen({
                    layer: 'watercolor'
                })
            }),
            new ol.layer.Tile({
                title: 'Toner Colors',
                type: 'base',
                visible: false,
                source: new ol.source.Stamen({
                    layer: 'toner'
                })
            }),
            new ol.layer.Tile({
                title: 'Terreno Colors',
                type: 'base',
                visible: false,
                source: new ol.source.Stamen({
                    layer: 'terrain'
                })
            }),
            new ol.layer.Tile({
                title: 'OSM',
                type: 'base',
                visible: true,
                source: new ol.source.OSM()
            }),
        ],
        /**
         * 
         * * Informacion y configuraciones para carga de mapa central.
         * !
         * TODO
         * ?
        */
        view: new ol.View({
            center: ol.proj.transform([-96.9137, 19.5426], 'EPSG:4326', 'EPSG:900913'),
            zoom: 12,
            minZoom: 12,
        })
    });
    generateGeoJson();
})();

/**
 * 
 * * Carga de capas
 * !
 * TODO
 * ?
*/
function generateGeoJson() {
    /**
     *
     * * Primer apartado, cargado de mapas bases.
     * !
     * TODO
     * ?
    */
    realArrayCapas.forEach(
        element => {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", element['gejson'], false );
            xmlHttp.send( null );

            var createCharge = JSON.parse(xmlHttp.responseText);
            createCharge['features'].forEach(
                charges => {
                    charges['properties']['capa'] = element['nombre'];
                    var chargesProperties = JSON.stringify(charges['properties']);
                    var chargesGeometryType = charges['geometry']['type'];
                    var chargesGeometryCoordinates = JSON.stringify(charges['geometry']['coordinates']);
                    
                    var format = new ol.format.GeoJSON();
                    var features = format.readFeatures(
                        `{
                            "type":"FeatureCollection",
                            "features":[{
                                "type":"Feature",
                                "properties":`+chargesProperties+`,
                                "geometry":
                                {
                                    "type":"`+chargesGeometryType+`",
                                    "coordinates": `+chargesGeometryCoordinates+`
                                }
                            }]
                        }`
                    );

                    var capaReal = new ol.layer.Vector({
                        title: element['nombre'],
                        visible: false,
                        source: new ol.source.Vector({features: features}),
                        style: new ol.style.Style({
                            fill: new ol.style.Fill({color: element['colorFill']}),
                            stroke: new ol.style.Stroke({color: element['colorStoker']}),
                            text: new ol.style.Text({text: charges['properties'][element['nombreCampo']],})
                        })
                    })

                    map.addLayer(capaReal);
                }
            );
        }
    );
}

/**
 * 
 * * Cambia el estado de las capas en visible TRUE-FALSE, solo capas ratadas.
 * !
 * TODO
 * ?
*/
function functionViewStatus(value) {
    map.getLayers().array_.forEach(
        element => {
            if (element.values_.title == value) {
                if (element.get('visible') == true) {
                    element.setVisible(false);
                } else {
                    element.setVisible(true);
                }
            }
        }
    );
}

/**
 * 
 * * Cambia el estado de las capas en visible TRUE-FALSE, solo capas globales.
 * !
 * TODO
 * ?
*/
function functionViewPrimariCapa(id) {
    var capasCentrales = [
        'Aqua Colors',
        'Toner Colors',
        'Terreno Colors',
        'OSM'
    ];

    map.getLayers().array_.forEach(
        element => {
            if (capasCentrales.indexOf(element.values_.title) >= 0) {
                element.setVisible(false);
                if (element.values_.title == id) {
                    if (element.get('visible') == true) {
                        element.setVisible(false);
                    } else {
                        element.setVisible(true);
                    }
                }
            }
        }
    );
}

map.on('singleclick', function(evt) {  
    var feature = map.forEachFeatureAtPixel(evt.pixel, function(feature, layer) {
        return feature;
    });

    if (feature) {
        map.getLayers().array_.forEach(
            element => {
                if (element.values_.title == feature.values_.capa) {
                    realArrayCapas.forEach(
                        canalReset => {
                            if (canalReset.nombre == feature.values_.capa) {
                                element.setStyle(new ol.style.Style({
                                    fill: new ol.style.Fill({color: canalReset.colorFill}),
                                    stroke: new ol.style.Stroke({color: canalReset.colorStoker})
                                }));
                            }
                        }
                    );
                }
            }
        );

        feature.setStyle(new ol.style.Style({
            fill: new ol.style.Fill({color: '#eaa7a7'}),
            stroke: new ol.style.Stroke({color: '#f00'})
        }));
    
        var div = document.getElementById('createInfo');
        while (div.firstChild) {
            div.removeChild(div.firstChild);
        }
    
        var parentInicial = document.getElementById('createInfo');
        var parent = document.createElement("div");
    
        parentInicial.appendChild(parent);
        parent.after(feature['values_']['NOMBRE']);
    }
});