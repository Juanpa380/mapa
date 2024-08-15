var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Loja_1 = new ol.format.GeoJSON();
var features_Loja_1 = format_Loja_1.readFeatures(json_Loja_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Loja_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Loja_1.addFeatures(features_Loja_1);
var lyr_Loja_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Loja_1, 
                style: style_Loja_1,
                popuplayertitle: "Loja",
                interactive: true,
                title: '<img src="styles/legend/Loja_1.png" /> Loja'
            });
var format_Cantones_Loja_2 = new ol.format.GeoJSON();
var features_Cantones_Loja_2 = format_Cantones_Loja_2.readFeatures(json_Cantones_Loja_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cantones_Loja_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cantones_Loja_2.addFeatures(features_Cantones_Loja_2);
var lyr_Cantones_Loja_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cantones_Loja_2, 
                style: style_Cantones_Loja_2,
                popuplayertitle: "Cantones_Loja",
                interactive: true,
    title: 'Cantones_Loja<br />\
    <img src="styles/legend/Cantones_Loja_2_0.png" /> CALVAS<br />\
    <img src="styles/legend/Cantones_Loja_2_1.png" /> CELICA<br />\
    <img src="styles/legend/Cantones_Loja_2_2.png" /> CHAGUARPAMBA<br />\
    <img src="styles/legend/Cantones_Loja_2_3.png" /> ESPINDOLA<br />\
    <img src="styles/legend/Cantones_Loja_2_4.png" /> GONZANAMÁ<br />\
    <img src="styles/legend/Cantones_Loja_2_5.png" /> LOJA<br />\
    <img src="styles/legend/Cantones_Loja_2_6.png" /> MACARÁ<br />\
    <img src="styles/legend/Cantones_Loja_2_7.png" /> OLMEDO<br />\
    <img src="styles/legend/Cantones_Loja_2_8.png" /> PALTAS<br />\
    <img src="styles/legend/Cantones_Loja_2_9.png" /> PINDAL<br />\
    <img src="styles/legend/Cantones_Loja_2_10.png" /> PUYANGO<br />\
    <img src="styles/legend/Cantones_Loja_2_11.png" /> QUILANGA<br />\
    <img src="styles/legend/Cantones_Loja_2_12.png" /> SARAGURO<br />\
    <img src="styles/legend/Cantones_Loja_2_13.png" /> SOZORANGA<br />\
    <img src="styles/legend/Cantones_Loja_2_14.png" /> ZAPOTILLO<br />'
        });
var format_Catamayo_3 = new ol.format.GeoJSON();
var features_Catamayo_3 = format_Catamayo_3.readFeatures(json_Catamayo_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Catamayo_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Catamayo_3.addFeatures(features_Catamayo_3);
var lyr_Catamayo_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Catamayo_3, 
                style: style_Catamayo_3,
                popuplayertitle: "Catamayo",
                interactive: true,
    title: 'Catamayo<br />\
    <img src="styles/legend/Catamayo_3_0.png" /> CATAMAYO (LA TOMA)<br />\
    <img src="styles/legend/Catamayo_3_1.png" /> EL TAMBO<br />\
    <img src="styles/legend/Catamayo_3_2.png" /> GUAYQUICHUMA<br />\
    <img src="styles/legend/Catamayo_3_3.png" /> SAN PEDRO DE LA BENDITA<br />\
    <img src="styles/legend/Catamayo_3_4.png" /> ZAMBI<br />'
        });
var format_GranjasPorcinas_4 = new ol.format.GeoJSON();
var features_GranjasPorcinas_4 = format_GranjasPorcinas_4.readFeatures(json_GranjasPorcinas_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranjasPorcinas_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranjasPorcinas_4.addFeatures(features_GranjasPorcinas_4);
var lyr_GranjasPorcinas_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranjasPorcinas_4, 
                style: style_GranjasPorcinas_4,
                popuplayertitle: "Granjas Porcinas",
                interactive: true,
                title: '<img src="styles/legend/GranjasPorcinas_4.png" /> Granjas Porcinas'
            });
var format_GranjasAvicolas_5 = new ol.format.GeoJSON();
var features_GranjasAvicolas_5 = format_GranjasAvicolas_5.readFeatures(json_GranjasAvicolas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GranjasAvicolas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GranjasAvicolas_5.addFeatures(features_GranjasAvicolas_5);
var lyr_GranjasAvicolas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GranjasAvicolas_5, 
                style: style_GranjasAvicolas_5,
                popuplayertitle: "Granjas Avicolas",
                interactive: true,
                title: '<img src="styles/legend/GranjasAvicolas_5.png" /> Granjas Avicolas'
            });
var format_Eventosanitario_6 = new ol.format.GeoJSON();
var features_Eventosanitario_6 = format_Eventosanitario_6.readFeatures(json_Eventosanitario_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Eventosanitario_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Eventosanitario_6.addFeatures(features_Eventosanitario_6);
var lyr_Eventosanitario_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Eventosanitario_6, 
                style: style_Eventosanitario_6,
                popuplayertitle: "Evento sanitario",
                interactive: true,
    title: 'Evento sanitario<br />\
    <img src="styles/legend/Eventosanitario_6_0.png" /> Circovirus Tipo II, Mycoplasma hyopneumoniae<br />\
    <img src="styles/legend/Eventosanitario_6_1.png" /> No reportado<br />'
        });
var format_CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7 = new ol.format.GeoJSON();
var features_CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7 = format_CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7.readFeatures(json_CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7.addFeatures(features_CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7);
var lyr_CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7, 
                style: style_CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7,
                popuplayertitle: "Circovirus tipo II y Mycoplasma hyopneumoniae Dic 2022",
                interactive: true,
                title: '<img src="styles/legend/CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7.png" /> Circovirus tipo II y Mycoplasma hyopneumoniae Dic 2022'
            });
var format_Vigilancia10Km2022_8 = new ol.format.GeoJSON();
var features_Vigilancia10Km2022_8 = format_Vigilancia10Km2022_8.readFeatures(json_Vigilancia10Km2022_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vigilancia10Km2022_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vigilancia10Km2022_8.addFeatures(features_Vigilancia10Km2022_8);
var lyr_Vigilancia10Km2022_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vigilancia10Km2022_8, 
                style: style_Vigilancia10Km2022_8,
                popuplayertitle: "Vigilancia 10 Km 2022",
                interactive: true,
                title: '<img src="styles/legend/Vigilancia10Km2022_8.png" /> Vigilancia 10 Km 2022'
            });
var format_Perifocal3Km2022_9 = new ol.format.GeoJSON();
var features_Perifocal3Km2022_9 = format_Perifocal3Km2022_9.readFeatures(json_Perifocal3Km2022_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perifocal3Km2022_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perifocal3Km2022_9.addFeatures(features_Perifocal3Km2022_9);
var lyr_Perifocal3Km2022_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perifocal3Km2022_9, 
                style: style_Perifocal3Km2022_9,
                popuplayertitle: "Perifocal 3 Km 2022",
                interactive: false,
                title: '<img src="styles/legend/Perifocal3Km2022_9.png" /> Perifocal 3 Km 2022'
            });
var format_CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10 = new ol.format.GeoJSON();
var features_CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10 = format_CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10.readFeatures(json_CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10.addFeatures(features_CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10);
var lyr_CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10, 
                style: style_CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10,
                popuplayertitle: "Circovirus tipo II y Mycoplasma hyopneumoniae Mar 2024",
                interactive: true,
                title: '<img src="styles/legend/CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10.png" /> Circovirus tipo II y Mycoplasma hyopneumoniae Mar 2024'
            });
var format_Vigilancia10Km2024_11 = new ol.format.GeoJSON();
var features_Vigilancia10Km2024_11 = format_Vigilancia10Km2024_11.readFeatures(json_Vigilancia10Km2024_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vigilancia10Km2024_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vigilancia10Km2024_11.addFeatures(features_Vigilancia10Km2024_11);
var lyr_Vigilancia10Km2024_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vigilancia10Km2024_11, 
                style: style_Vigilancia10Km2024_11,
                popuplayertitle: "Vigilancia 10 Km 2024",
                interactive: false,
                title: '<img src="styles/legend/Vigilancia10Km2024_11.png" /> Vigilancia 10 Km 2024'
            });
var format_Perifocal3Km2024_12 = new ol.format.GeoJSON();
var features_Perifocal3Km2024_12 = format_Perifocal3Km2024_12.readFeatures(json_Perifocal3Km2024_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perifocal3Km2024_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perifocal3Km2024_12.addFeatures(features_Perifocal3Km2024_12);
var lyr_Perifocal3Km2024_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Perifocal3Km2024_12, 
                style: style_Perifocal3Km2024_12,
                popuplayertitle: "Perifocal 3 Km 2024",
                interactive: false,
                title: '<img src="styles/legend/Perifocal3Km2024_12.png" /> Perifocal 3 Km 2024'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Loja_1.setVisible(true);lyr_Cantones_Loja_2.setVisible(true);lyr_Catamayo_3.setVisible(true);lyr_GranjasPorcinas_4.setVisible(false);lyr_GranjasAvicolas_5.setVisible(false);lyr_Eventosanitario_6.setVisible(false);lyr_CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7.setVisible(false);lyr_Vigilancia10Km2022_8.setVisible(false);lyr_Perifocal3Km2022_9.setVisible(false);lyr_CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10.setVisible(false);lyr_Vigilancia10Km2024_11.setVisible(false);lyr_Perifocal3Km2024_12.setVisible(false);
var layersList = [lyr_GoogleSatellite_0,lyr_Loja_1,lyr_Cantones_Loja_2,lyr_Catamayo_3,lyr_GranjasPorcinas_4,lyr_GranjasAvicolas_5,lyr_Eventosanitario_6,lyr_CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7,lyr_Vigilancia10Km2022_8,lyr_Perifocal3Km2022_9,lyr_CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10,lyr_Vigilancia10Km2024_11,lyr_Perifocal3Km2024_12];
lyr_Loja_1.set('fieldAliases', {'DPA_DESPRO': 'DPA_DESPRO', });
lyr_Cantones_Loja_2.set('fieldAliases', {'DPA_DESCAN': 'DPA_DESCAN', });
lyr_Catamayo_3.set('fieldAliases', {'DPA_DESPAR': 'DPA_DESPAR', });
lyr_GranjasPorcinas_4.set('fieldAliases', {'ID': 'ID', 'Propietari': 'Propietari', 'Parroquia': 'Parroquia', 'Explotacio': 'Explotacio', 'Estatus': 'Estatus', 'Evento_san': 'Evento_san', 'X': 'X', 'Y': 'Y', });
lyr_GranjasAvicolas_5.set('fieldAliases', {'ID': 'ID', 'Propietari': 'Propietari', 'Parroquia': 'Parroquia', 'Explotacio': 'Explotacio', 'Estatus': 'Estatus', 'Evento_san': 'Evento_san', 'X': 'X', 'Y': 'Y', });
lyr_Eventosanitario_6.set('fieldAliases', {'ID': 'ID', 'Propietario': 'Propietario', 'Parroquia': 'Parroquia', 'Explotacion': 'Explotacion', 'Estatus': 'Estatus', 'Evento_sanitario': 'Evento_sanitario', 'X': 'X', 'Y': 'Y', });
lyr_CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7.set('fieldAliases', {'ID': 'ID', 'Propietari': 'Propietari', 'Parroquia': 'Parroquia', 'Explotacio': 'Explotacio', 'Estatus': 'Estatus', 'Evento_san': 'Evento_san', 'X': 'X', 'Y': 'Y', });
lyr_Vigilancia10Km2022_8.set('fieldAliases', {'ID': 'ID', 'Propietari': 'Propietari', 'Parroquia': 'Parroquia', 'Explotacio': 'Explotacio', 'Estatus': 'Estatus', 'Evento_san': 'Evento_san', 'X': 'X', 'Y': 'Y', 'mrb_dist': 'mrb_dist', });
lyr_Perifocal3Km2022_9.set('fieldAliases', {'ID': 'ID', 'Propietari': 'Propietari', 'Parroquia': 'Parroquia', 'Explotacio': 'Explotacio', 'Estatus': 'Estatus', 'Evento_san': 'Evento_san', 'X': 'X', 'Y': 'Y', 'mrb_dist': 'mrb_dist', });
lyr_CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10.set('fieldAliases', {'ID': 'ID', 'Propietari': 'Propietari', 'Parroquia': 'Parroquia', 'Explotacio': 'Explotacio', 'Estatus': 'Estatus', 'Evento_san': 'Evento_san', 'X': 'X', 'Y': 'Y', });
lyr_Vigilancia10Km2024_11.set('fieldAliases', {'ID': 'ID', 'Propietari': 'Propietari', 'Parroquia': 'Parroquia', 'Explotacio': 'Explotacio', 'Estatus': 'Estatus', 'Evento_san': 'Evento_san', 'X': 'X', 'Y': 'Y', 'mrb_dist': 'mrb_dist', });
lyr_Perifocal3Km2024_12.set('fieldAliases', {'ID': 'ID', 'Propietari': 'Propietari', 'Parroquia': 'Parroquia', 'Explotacio': 'Explotacio', 'Estatus': 'Estatus', 'Evento_san': 'Evento_san', 'X': 'X', 'Y': 'Y', 'mrb_dist': 'mrb_dist', });
lyr_Loja_1.set('fieldImages', {'DPA_DESPRO': 'TextEdit', });
lyr_Cantones_Loja_2.set('fieldImages', {'DPA_DESCAN': 'TextEdit', });
lyr_Catamayo_3.set('fieldImages', {'DPA_DESPAR': 'TextEdit', });
lyr_GranjasPorcinas_4.set('fieldImages', {'ID': 'TextEdit', 'Propietari': 'TextEdit', 'Parroquia': 'TextEdit', 'Explotacio': 'TextEdit', 'Estatus': 'TextEdit', 'Evento_san': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_GranjasAvicolas_5.set('fieldImages', {'ID': 'TextEdit', 'Propietari': 'TextEdit', 'Parroquia': 'TextEdit', 'Explotacio': 'TextEdit', 'Estatus': 'TextEdit', 'Evento_san': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Eventosanitario_6.set('fieldImages', {'ID': 'TextEdit', 'Propietario': 'TextEdit', 'Parroquia': 'TextEdit', 'Explotacion': 'TextEdit', 'Estatus': 'TextEdit', 'Evento_sanitario': 'TextEdit', 'X': 'Range', 'Y': 'Range', });
lyr_CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7.set('fieldImages', {'ID': 'TextEdit', 'Propietari': 'TextEdit', 'Parroquia': 'TextEdit', 'Explotacio': 'TextEdit', 'Estatus': 'TextEdit', 'Evento_san': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Vigilancia10Km2022_8.set('fieldImages', {'ID': 'TextEdit', 'Propietari': 'TextEdit', 'Parroquia': 'TextEdit', 'Explotacio': 'TextEdit', 'Estatus': 'TextEdit', 'Evento_san': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'mrb_dist': 'TextEdit', });
lyr_Perifocal3Km2022_9.set('fieldImages', {'ID': 'TextEdit', 'Propietari': 'TextEdit', 'Parroquia': 'TextEdit', 'Explotacio': 'TextEdit', 'Estatus': 'TextEdit', 'Evento_san': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'mrb_dist': 'TextEdit', });
lyr_CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10.set('fieldImages', {'ID': 'TextEdit', 'Propietari': 'TextEdit', 'Parroquia': 'TextEdit', 'Explotacio': 'TextEdit', 'Estatus': 'TextEdit', 'Evento_san': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', });
lyr_Vigilancia10Km2024_11.set('fieldImages', {'ID': 'TextEdit', 'Propietari': 'TextEdit', 'Parroquia': 'TextEdit', 'Explotacio': 'TextEdit', 'Estatus': 'TextEdit', 'Evento_san': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'mrb_dist': 'TextEdit', });
lyr_Perifocal3Km2024_12.set('fieldImages', {'ID': 'TextEdit', 'Propietari': 'TextEdit', 'Parroquia': 'TextEdit', 'Explotacio': 'TextEdit', 'Estatus': 'TextEdit', 'Evento_san': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'mrb_dist': 'TextEdit', });
lyr_Loja_1.set('fieldLabels', {'DPA_DESPRO': 'inline label - always visible', });
lyr_Cantones_Loja_2.set('fieldLabels', {'DPA_DESCAN': 'hidden field', });
lyr_Catamayo_3.set('fieldLabels', {'DPA_DESPAR': 'hidden field', });
lyr_GranjasPorcinas_4.set('fieldLabels', {'ID': 'inline label - always visible', 'Propietari': 'inline label - always visible', 'Parroquia': 'inline label - always visible', 'Explotacio': 'inline label - always visible', 'Estatus': 'inline label - always visible', 'Evento_san': 'inline label - always visible', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_GranjasAvicolas_5.set('fieldLabels', {'ID': 'inline label - always visible', 'Propietari': 'inline label - always visible', 'Parroquia': 'inline label - always visible', 'Explotacio': 'inline label - always visible', 'Estatus': 'inline label - always visible', 'Evento_san': 'inline label - always visible', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Eventosanitario_6.set('fieldLabels', {'ID': 'inline label - always visible', 'Propietario': 'inline label - always visible', 'Parroquia': 'inline label - always visible', 'Explotacion': 'inline label - always visible', 'Estatus': 'inline label - always visible', 'Evento_sanitario': 'inline label - always visible', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_CircovirustipoIIyMycoplasmahyopneumoniaeDic2022_7.set('fieldLabels', {'ID': 'inline label - always visible', 'Propietari': 'inline label - always visible', 'Parroquia': 'inline label - always visible', 'Explotacio': 'inline label - always visible', 'Estatus': 'inline label - visible with data', 'Evento_san': 'inline label - visible with data', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Vigilancia10Km2022_8.set('fieldLabels', {'ID': 'no label', 'Propietari': 'no label', 'Parroquia': 'no label', 'Explotacio': 'no label', 'Estatus': 'no label', 'Evento_san': 'no label', 'X': 'no label', 'Y': 'no label', 'mrb_dist': 'no label', });
lyr_Perifocal3Km2022_9.set('fieldLabels', {'ID': 'inline label - always visible', 'Propietari': 'inline label - always visible', 'Parroquia': 'inline label - always visible', 'Explotacio': 'inline label - always visible', 'Estatus': 'inline label - always visible', 'Evento_san': 'inline label - always visible', 'X': 'hidden field', 'Y': 'hidden field', 'mrb_dist': 'hidden field', });
lyr_CircovirustipoIIyMycoplasmahyopneumoniaeMar2024_10.set('fieldLabels', {'ID': 'inline label - always visible', 'Propietari': 'inline label - always visible', 'Parroquia': 'inline label - always visible', 'Explotacio': 'inline label - always visible', 'Estatus': 'inline label - always visible', 'Evento_san': 'inline label - always visible', 'X': 'hidden field', 'Y': 'hidden field', });
lyr_Vigilancia10Km2024_11.set('fieldLabels', {'ID': 'no label', 'Propietari': 'no label', 'Parroquia': 'no label', 'Explotacio': 'no label', 'Estatus': 'no label', 'Evento_san': 'no label', 'X': 'no label', 'Y': 'no label', 'mrb_dist': 'no label', });
lyr_Perifocal3Km2024_12.set('fieldLabels', {'ID': 'no label', 'Propietari': 'no label', 'Parroquia': 'no label', 'Explotacio': 'no label', 'Estatus': 'no label', 'Evento_san': 'no label', 'X': 'no label', 'Y': 'no label', 'mrb_dist': 'no label', });
lyr_Perifocal3Km2024_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});