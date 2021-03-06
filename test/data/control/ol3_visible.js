var format_airports = new ol.format.GeoJSON();
var features_airports = format_airports.readFeatures(geojson_airports, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_airports = new ol.source.Vector();
jsonSource_airports.addFeatures(features_airports);var lyr_airports = new ol.layer.Vector({
                source:jsonSource_airports, 
                style: style_airports,
                title: "airports"
            });

lyr_airports.setVisible(false);
var layersList = [lyr_airports];
