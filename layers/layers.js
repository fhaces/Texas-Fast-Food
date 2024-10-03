var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Wendys_1 = new ol.format.GeoJSON();
var features_Wendys_1 = format_Wendys_1.readFeatures(json_Wendys_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wendys_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wendys_1.addFeatures(features_Wendys_1);
var lyr_Wendys_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Wendys_1, 
                style: style_Wendys_1,
                interactive: true,
                title: '<img src="styles/legend/Wendys_1.png" /> Wendy\'s'
            });
var format_TacoBellPH_2 = new ol.format.GeoJSON();
var features_TacoBellPH_2 = format_TacoBellPH_2.readFeatures(json_TacoBellPH_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TacoBellPH_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TacoBellPH_2.addFeatures(features_TacoBellPH_2);
var lyr_TacoBellPH_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TacoBellPH_2, 
                style: style_TacoBellPH_2,
                interactive: true,
                title: '<img src="styles/legend/TacoBellPH_2.png" /> Taco Bell PH'
            });
var format_TacoBellLJSs_3 = new ol.format.GeoJSON();
var features_TacoBellLJSs_3 = format_TacoBellLJSs_3.readFeatures(json_TacoBellLJSs_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TacoBellLJSs_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TacoBellLJSs_3.addFeatures(features_TacoBellLJSs_3);
var lyr_TacoBellLJSs_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TacoBellLJSs_3, 
                style: style_TacoBellLJSs_3,
                interactive: true,
                title: '<img src="styles/legend/TacoBellLJSs_3.png" /> Taco Bell LJSs'
            });
var format_TacoBellKFC_4 = new ol.format.GeoJSON();
var features_TacoBellKFC_4 = format_TacoBellKFC_4.readFeatures(json_TacoBellKFC_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TacoBellKFC_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TacoBellKFC_4.addFeatures(features_TacoBellKFC_4);
var lyr_TacoBellKFC_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TacoBellKFC_4, 
                style: style_TacoBellKFC_4,
                interactive: true,
                title: '<img src="styles/legend/TacoBellKFC_4.png" /> Taco Bell KFC'
            });
var format_TacoBell_5 = new ol.format.GeoJSON();
var features_TacoBell_5 = format_TacoBell_5.readFeatures(json_TacoBell_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TacoBell_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TacoBell_5.addFeatures(features_TacoBell_5);
var lyr_TacoBell_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TacoBell_5, 
                style: style_TacoBell_5,
                interactive: true,
                title: '<img src="styles/legend/TacoBell_5.png" /> Taco Bell'
            });
var format_Subway_6 = new ol.format.GeoJSON();
var features_Subway_6 = format_Subway_6.readFeatures(json_Subway_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Subway_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subway_6.addFeatures(features_Subway_6);
var lyr_Subway_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Subway_6, 
                style: style_Subway_6,
                interactive: true,
                title: '<img src="styles/legend/Subway_6.png" /> Subway'
            });
var format_McDonaldsPlayPlace_7 = new ol.format.GeoJSON();
var features_McDonaldsPlayPlace_7 = format_McDonaldsPlayPlace_7.readFeatures(json_McDonaldsPlayPlace_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_McDonaldsPlayPlace_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_McDonaldsPlayPlace_7.addFeatures(features_McDonaldsPlayPlace_7);
var lyr_McDonaldsPlayPlace_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_McDonaldsPlayPlace_7, 
                style: style_McDonaldsPlayPlace_7,
                interactive: true,
                title: '<img src="styles/legend/McDonaldsPlayPlace_7.png" /> McDonalds PlayPlace'
            });
var format_McDonalds_8 = new ol.format.GeoJSON();
var features_McDonalds_8 = format_McDonalds_8.readFeatures(json_McDonalds_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_McDonalds_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_McDonalds_8.addFeatures(features_McDonalds_8);
var lyr_McDonalds_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_McDonalds_8, 
                style: style_McDonalds_8,
                interactive: true,
                title: '<img src="styles/legend/McDonalds_8.png" /> McDonalds'
            });
var format_Dominos_9 = new ol.format.GeoJSON();
var features_Dominos_9 = format_Dominos_9.readFeatures(json_Dominos_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dominos_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dominos_9.addFeatures(features_Dominos_9);
var lyr_Dominos_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Dominos_9, 
                style: style_Dominos_9,
                interactive: true,
                title: '<img src="styles/legend/Dominos_9.png" /> Dominos'
            });
var format_ChickfilA_10 = new ol.format.GeoJSON();
var features_ChickfilA_10 = format_ChickfilA_10.readFeatures(json_ChickfilA_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ChickfilA_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChickfilA_10.addFeatures(features_ChickfilA_10);
var lyr_ChickfilA_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ChickfilA_10, 
                style: style_ChickfilA_10,
                interactive: true,
                title: '<img src="styles/legend/ChickfilA_10.png" /> Chick-fil-A'
            });
var format_BurgerKing_11 = new ol.format.GeoJSON();
var features_BurgerKing_11 = format_BurgerKing_11.readFeatures(json_BurgerKing_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BurgerKing_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BurgerKing_11.addFeatures(features_BurgerKing_11);
var lyr_BurgerKing_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BurgerKing_11, 
                style: style_BurgerKing_11,
                interactive: true,
                title: '<img src="styles/legend/BurgerKing_11.png" /> Burger King'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Wendys_1.setVisible(true);lyr_TacoBellPH_2.setVisible(true);lyr_TacoBellLJSs_3.setVisible(true);lyr_TacoBellKFC_4.setVisible(true);lyr_TacoBell_5.setVisible(true);lyr_Subway_6.setVisible(true);lyr_McDonaldsPlayPlace_7.setVisible(true);lyr_McDonalds_8.setVisible(true);lyr_Dominos_9.setVisible(true);lyr_ChickfilA_10.setVisible(true);lyr_BurgerKing_11.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Wendys_1,lyr_TacoBellPH_2,lyr_TacoBellLJSs_3,lyr_TacoBellKFC_4,lyr_TacoBell_5,lyr_Subway_6,lyr_McDonaldsPlayPlace_7,lyr_McDonalds_8,lyr_Dominos_9,lyr_ChickfilA_10,lyr_BurgerKing_11];
lyr_Wendys_1.set('fieldAliases', {'longitude': 'longitude', 'latitude': 'latitude', 'Restaurant': 'Restaurant', 'Location': 'Location', 'Address': 'Address', });
lyr_TacoBellPH_2.set('fieldAliases', {'longitude': 'longitude', 'latitude': 'latitude', 'Restaurant': 'Restaurant', 'Location': 'Location', 'Address': 'Address', });
lyr_TacoBellLJSs_3.set('fieldAliases', {'longitude': 'longitude', 'latitude': 'latitude', 'Restaurant': 'Restaurant', 'Location': 'Location', 'Address': 'Address', });
lyr_TacoBellKFC_4.set('fieldAliases', {'longitude': 'longitude', 'latitude': 'latitude', 'Restaurant': 'Restaurant', 'Location': 'Location', 'Address': 'Address', });
lyr_TacoBell_5.set('fieldAliases', {'longitude': 'longitude', 'latitude': 'latitude', 'Restaurant': 'Restaurant', 'Location': 'Location', 'Address': 'Address', });
lyr_Subway_6.set('fieldAliases', {'longitude': 'longitude', 'latitude': 'latitude', 'Restaurant': 'Restaurant', 'Location': 'Location', 'Address': 'Address', });
lyr_McDonaldsPlayPlace_7.set('fieldAliases', {'longitude': 'longitude', 'latitude': 'latitude', 'Restaurant': 'Restaurant', 'Location': 'Location', 'Address': 'Address', });
lyr_McDonalds_8.set('fieldAliases', {'longitude': 'longitude', 'latitude': 'latitude', 'Restaurant': 'Restaurant', 'Location': 'Location', 'Address': 'Address', });
lyr_Dominos_9.set('fieldAliases', {'longitude': 'longitude', 'latitude': 'latitude', 'Restaurant': 'Restaurant', 'Location': 'Location', 'Address': 'Address', });
lyr_ChickfilA_10.set('fieldAliases', {'longitude': 'longitude', 'latitude': 'latitude', 'Restaurant': 'Restaurant', 'Location': 'Location', 'Address': 'Address', });
lyr_BurgerKing_11.set('fieldAliases', {'longitude': 'longitude', 'latitude': 'latitude', 'Restaurant': 'Restaurant', 'Location': 'Location', 'Address': 'Address', });
lyr_Wendys_1.set('fieldImages', {'longitude': '', 'latitude': '', 'Restaurant': '', 'Location': '', 'Address': '', });
lyr_TacoBellPH_2.set('fieldImages', {'longitude': '', 'latitude': '', 'Restaurant': '', 'Location': '', 'Address': '', });
lyr_TacoBellLJSs_3.set('fieldImages', {'longitude': '', 'latitude': '', 'Restaurant': '', 'Location': '', 'Address': '', });
lyr_TacoBellKFC_4.set('fieldImages', {'longitude': '', 'latitude': '', 'Restaurant': '', 'Location': '', 'Address': '', });
lyr_TacoBell_5.set('fieldImages', {'longitude': '', 'latitude': '', 'Restaurant': '', 'Location': '', 'Address': '', });
lyr_Subway_6.set('fieldImages', {'longitude': '', 'latitude': '', 'Restaurant': '', 'Location': '', 'Address': '', });
lyr_McDonaldsPlayPlace_7.set('fieldImages', {'longitude': '', 'latitude': '', 'Restaurant': '', 'Location': '', 'Address': '', });
lyr_McDonalds_8.set('fieldImages', {'longitude': '', 'latitude': '', 'Restaurant': '', 'Location': '', 'Address': '', });
lyr_Dominos_9.set('fieldImages', {'longitude': '', 'latitude': '', 'Restaurant': '', 'Location': '', 'Address': '', });
lyr_ChickfilA_10.set('fieldImages', {'longitude': '', 'latitude': '', 'Restaurant': '', 'Location': '', 'Address': '', });
lyr_BurgerKing_11.set('fieldImages', {'longitude': '', 'latitude': '', 'Restaurant': '', 'Location': '', 'Address': '', });
lyr_Wendys_1.set('fieldLabels', {'longitude': 'no label', 'latitude': 'no label', 'Restaurant': 'inline label', 'Location': 'inline label', 'Address': 'inline label', });
lyr_TacoBellPH_2.set('fieldLabels', {'longitude': 'no label', 'latitude': 'no label', 'Restaurant': 'inline label', 'Location': 'inline label', 'Address': 'inline label', });
lyr_TacoBellLJSs_3.set('fieldLabels', {'longitude': 'no label', 'latitude': 'no label', 'Restaurant': 'inline label', 'Location': 'inline label', 'Address': 'inline label', });
lyr_TacoBellKFC_4.set('fieldLabels', {'longitude': 'no label', 'latitude': 'no label', 'Restaurant': 'inline label', 'Location': 'inline label', 'Address': 'inline label', });
lyr_TacoBell_5.set('fieldLabels', {'longitude': 'no label', 'latitude': 'no label', 'Restaurant': 'inline label', 'Location': 'inline label', 'Address': 'inline label', });
lyr_Subway_6.set('fieldLabels', {'longitude': 'no label', 'latitude': 'no label', 'Restaurant': 'inline label', 'Location': 'inline label', 'Address': 'inline label', });
lyr_McDonaldsPlayPlace_7.set('fieldLabels', {'longitude': 'no label', 'latitude': 'no label', 'Restaurant': 'inline label', 'Location': 'inline label', 'Address': 'inline label', });
lyr_McDonalds_8.set('fieldLabels', {'longitude': 'no label', 'latitude': 'no label', 'Restaurant': 'inline label', 'Location': 'inline label', 'Address': 'inline label', });
lyr_Dominos_9.set('fieldLabels', {'longitude': 'no label', 'latitude': 'no label', 'Restaurant': 'inline label', 'Location': 'inline label', 'Address': 'inline label', });
lyr_ChickfilA_10.set('fieldLabels', {'longitude': 'no label', 'latitude': 'no label', 'Restaurant': 'inline label', 'Location': 'inline label', 'Address': 'inline label', });
lyr_BurgerKing_11.set('fieldLabels', {'longitude': 'no label', 'latitude': 'no label', 'Restaurant': 'inline label', 'Location': 'inline label', 'Address': 'inline label', });
lyr_BurgerKing_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});