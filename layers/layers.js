var wms_layers = [];

var lyr_section_of_kumasi_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'section_of_kumasi<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/section_of_kumasi_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-180640.779400, 745122.242600, -179639.334900, 745774.943200]
        })
    });
var format_Major_roads_1 = new ol.format.GeoJSON();
var features_Major_roads_1 = format_Major_roads_1.readFeatures(json_Major_roads_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Major_roads_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Major_roads_1.addFeatures(features_Major_roads_1);
var lyr_Major_roads_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Major_roads_1, 
                style: style_Major_roads_1,
                popuplayertitle: 'Major_roads',
                interactive: true,
                title: '<img src="styles/legend/Major_roads_1.png" /> Major_roads'
            });
var format_Neighbourhood_2 = new ol.format.GeoJSON();
var features_Neighbourhood_2 = format_Neighbourhood_2.readFeatures(json_Neighbourhood_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Neighbourhood_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Neighbourhood_2.addFeatures(features_Neighbourhood_2);
var lyr_Neighbourhood_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Neighbourhood_2, 
                style: style_Neighbourhood_2,
                popuplayertitle: 'Neighbourhood',
                interactive: true,
                title: '<img src="styles/legend/Neighbourhood_2.png" /> Neighbourhood'
            });
var format_Recreational_3 = new ol.format.GeoJSON();
var features_Recreational_3 = format_Recreational_3.readFeatures(json_Recreational_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recreational_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recreational_3.addFeatures(features_Recreational_3);
var lyr_Recreational_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Recreational_3, 
                style: style_Recreational_3,
                popuplayertitle: 'Recreational',
                interactive: true,
                title: '<img src="styles/legend/Recreational_3.png" /> Recreational'
            });

lyr_section_of_kumasi_0.setVisible(true);lyr_Major_roads_1.setVisible(true);lyr_Neighbourhood_2.setVisible(true);lyr_Recreational_3.setVisible(true);
var layersList = [lyr_section_of_kumasi_0,lyr_Major_roads_1,lyr_Neighbourhood_2,lyr_Recreational_3];
lyr_Major_roads_1.set('fieldAliases', {'id': 'id', 'rd_name': 'rd_name', });
lyr_Neighbourhood_2.set('fieldAliases', {'id': 'id', 'name': 'name', 'N_ID': 'N_ID', 'Land_Size': 'Land_Size', });
lyr_Recreational_3.set('fieldAliases', {'id': 'id', 'name': 'name', 'Descript': 'Descript', 'RC_ID': 'RC_ID', 'Land_Size': 'Land_Size', });
lyr_Major_roads_1.set('fieldImages', {'id': 'Hidden', 'rd_name': 'TextEdit', });
lyr_Neighbourhood_2.set('fieldImages', {'id': 'Hidden', 'name': 'TextEdit', 'N_ID': 'TextEdit', 'Land_Size': 'TextEdit', });
lyr_Recreational_3.set('fieldImages', {'id': 'Hidden', 'name': 'TextEdit', 'Descript': 'TextEdit', 'RC_ID': 'TextEdit', 'Land_Size': 'TextEdit', });
lyr_Major_roads_1.set('fieldLabels', {'rd_name': 'inline label - always visible', });
lyr_Neighbourhood_2.set('fieldLabels', {'name': 'inline label - always visible', 'N_ID': 'inline label - always visible', 'Land_Size': 'inline label - always visible', });
lyr_Recreational_3.set('fieldLabels', {'name': 'inline label - always visible', 'Descript': 'inline label - always visible', 'RC_ID': 'inline label - always visible', 'Land_Size': 'inline label - always visible', });
lyr_Recreational_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});