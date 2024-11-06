var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_abc_1 = new ol.format.GeoJSON();
var features_abc_1 = format_abc_1.readFeatures(json_abc_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_abc_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_abc_1.addFeatures(features_abc_1);
var lyr_abc_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_abc_1, 
                style: style_abc_1,
                popuplayertitle: "abc",
                interactive: true,
                title: '<img src="styles/legend/abc_1.png" /> abc'
            });
var format_point_2 = new ol.format.GeoJSON();
var features_point_2 = format_point_2.readFeatures(json_point_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_2.addFeatures(features_point_2);
var lyr_point_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_2, 
                style: style_point_2,
                popuplayertitle: "point",
                interactive: true,
                title: '<img src="styles/legend/point_2.png" /> point'
            });

lyr_OSMStandard_0.setVisible(true);lyr_abc_1.setVisible(true);lyr_point_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_abc_1,lyr_point_2];
lyr_abc_1.set('fieldAliases', {'id': 'id', });
lyr_point_2.set('fieldAliases', {'id': 'id', });
lyr_abc_1.set('fieldImages', {'id': '', });
lyr_point_2.set('fieldImages', {'id': '', });
lyr_abc_1.set('fieldLabels', {'id': 'no label', });
lyr_point_2.set('fieldLabels', {'id': 'no label', });
lyr_point_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});