var size = 0;
var placement = 'point';
function categories_Catamayo_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                switch(value.toString()) {case 'CATAMAYO (LA TOMA)':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(240,244,2,0.504)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(101,35,216,0.504)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'EL TAMBO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(240,244,2,0.504)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(102,228,150,0.504)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'GUAYQUICHUMA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(240,244,2,0.504)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(195,239,124,0.504)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SAN PEDRO DE LA BENDITA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(240,244,2,0.504)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(217,116,180,0.504)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ZAMBI':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(240,244,2,0.504)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 0.988}),fill: new ol.style.Fill({color: 'rgba(26,149,225,0.504)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Catamayo_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("DPA_DESPAR");
    var labelText = "";
    size = 0;
    var labelFont = "15.600000000000001px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'point';
    if (feature.get("DPA_DESPAR") !== null) {
        labelText = String(feature.get("DPA_DESPAR"));
    }
    
var style = categories_Catamayo_3(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement);

    return style;
};
