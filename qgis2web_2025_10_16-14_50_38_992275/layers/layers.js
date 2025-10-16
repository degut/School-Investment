var wms_layers = [];

var format_Project_AOI_0 = new ol.format.GeoJSON();
var features_Project_AOI_0 = format_Project_AOI_0.readFeatures(json_Project_AOI_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Project_AOI_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Project_AOI_0.addFeatures(features_Project_AOI_0);
var lyr_Project_AOI_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Project_AOI_0, 
                style: style_Project_AOI_0,
                popuplayertitle: 'Project_AOI',
                interactive: true,
                title: '<img src="styles/legend/Project_AOI_0.png" /> Project_AOI'
            });
var format_Water_Ways_1 = new ol.format.GeoJSON();
var features_Water_Ways_1 = format_Water_Ways_1.readFeatures(json_Water_Ways_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_Ways_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_Ways_1.addFeatures(features_Water_Ways_1);
var lyr_Water_Ways_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Water_Ways_1, 
                style: style_Water_Ways_1,
                popuplayertitle: 'Water_Ways',
                interactive: true,
                title: '<img src="styles/legend/Water_Ways_1.png" /> Water_Ways'
            });
var format_Roads_2 = new ol.format.GeoJSON();
var features_Roads_2 = format_Roads_2.readFeatures(json_Roads_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Roads_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Roads_2.addFeatures(features_Roads_2);
var lyr_Roads_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Roads_2, 
                style: style_Roads_2,
                popuplayertitle: 'Roads',
                interactive: true,
                title: '<img src="styles/legend/Roads_2.png" /> Roads'
            });
var format_Existing_Schools_3 = new ol.format.GeoJSON();
var features_Existing_Schools_3 = format_Existing_Schools_3.readFeatures(json_Existing_Schools_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Existing_Schools_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Existing_Schools_3.addFeatures(features_Existing_Schools_3);
var lyr_Existing_Schools_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Existing_Schools_3, 
                style: style_Existing_Schools_3,
                popuplayertitle: 'Existing_Schools',
                interactive: true,
                title: '<img src="styles/legend/Existing_Schools_3.png" /> Existing_Schools'
            });
var format_Singleparts_4 = new ol.format.GeoJSON();
var features_Singleparts_4 = format_Singleparts_4.readFeatures(json_Singleparts_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Singleparts_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Singleparts_4.addFeatures(features_Singleparts_4);
var lyr_Singleparts_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Singleparts_4, 
                style: style_Singleparts_4,
                popuplayertitle: 'Single parts',
                interactive: true,
    title: 'Single parts<br />\
    <img src="styles/legend/Singleparts_4_0.png" /> Most Suitable<br />\
    <img src="styles/legend/Singleparts_4_1.png" /> Suitable<br />\
    <img src="styles/legend/Singleparts_4_2.png" /> Moderate<br />\
    <img src="styles/legend/Singleparts_4_3.png" /> Not Suitable<br />' });
var group_Input_Data = new ol.layer.Group({
                                layers: [lyr_Water_Ways_1,lyr_Roads_2,lyr_Existing_Schools_3,],
                                fold: 'close',
                                title: 'Input_Data'});

lyr_Project_AOI_0.setVisible(true);lyr_Water_Ways_1.setVisible(true);lyr_Roads_2.setVisible(true);lyr_Existing_Schools_3.setVisible(true);lyr_Singleparts_4.setVisible(true);
var layersList = [lyr_Project_AOI_0,group_Input_Data,lyr_Singleparts_4];
lyr_Project_AOI_0.set('fieldAliases', {'ZONE_': 'ZONE_', 'LUSE_CODE': 'LUSE_CODE', 'Use_Type': 'Use_Type', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'WOREDA': 'WOREDA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Water_Ways_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'osm_versio': 'osm_versio', 'osm_timest': 'osm_timest', 'osm_uid': 'osm_uid', 'osm_user': 'osm_user', 'osm_change': 'osm_change', 'tunnel': 'tunnel', 'waterway': 'waterway', 'bridge': 'bridge', 'name_am': 'name_am', 'board_type': 'board_type', 'width': 'width', 'intermitte': 'intermitte', 'name': 'name', 'layer': 'layer', 'level': 'level', 'boat': 'boat', });
lyr_Roads_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'service': 'service', 'junction': 'junction', 'highway': 'highway', 'covered': 'covered', 'embankment': 'embankment', 'tracktype': 'tracktype', 'source_ref': 'source_ref', 'is_in_city': 'is_in_city', 'ref': 'ref', 'name_zh': 'name_zh', 'name_en': 'name_en', 'tunnel': 'tunnel', 'motorroad': 'motorroad', 'source_r_1': 'source_r_1', 'mapillary': 'mapillary', 'lane_marki': 'lane_marki', 'access': 'access', 'horse': 'horse', 'sidewalk': 'sidewalk', 'noname': 'noname', 'maxspeed_t': 'maxspeed_t', 'lit': 'lit', 'lanes': 'lanes', 'layer': 'layer', 'bridge': 'bridge', 'surface': 'surface', 'maxspeed': 'maxspeed', 'city': 'city', 'name_am': 'name_am', 'name': 'name', 'cycleway_r': 'cycleway_r', 'oneway': 'oneway', });
lyr_Existing_Schools_3.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'amenity': 'amenity', 'addr_subur': 'addr_subur', 'addr_paren': 'addr_paren', 'addr_count': 'addr_count', 'religion': 'religion', 'operator_t': 'operator_t', 'grades': 'grades', 'office': 'office', 'name_de': 'name_de', 'mapillary': 'mapillary', 'level': 'level', 'tourism': 'tourism', 'wheelchair': 'wheelchair', 'internet_a': 'internet_a', 'designatio': 'designatio', 'descriptio': 'descriptio', 'building': 'building', 'addr_house': 'addr_house', 'name_zh': 'name_zh', 'wikipedia': 'wikipedia', 'wikidata': 'wikidata', 'opening_ho': 'opening_ho', 'addr_stree': 'addr_stree', 'email': 'email', 'access': 'access', 'source_ref': 'source_ref', 'phone': 'phone', 'addr_postc': 'addr_postc', 'shop': 'shop', 'addr_hou_1': 'addr_hou_1', 'is_in_city': 'is_in_city', 'contact_mo': 'contact_mo', 'contact_fa': 'contact_fa', 'addr_kebel': 'addr_kebel', 'source_am': 'source_am', 'contact_po': 'contact_po', 'contact_em': 'contact_em', 'contact_p.': 'contact_p.', 'contact_ph': 'contact_ph', 'operator': 'operator', 'website': 'website', 'name_en': 'name_en', 'motorcycle': 'motorcycle', 'motorcar': 'motorcar', 'foot': 'foot', 'bicycle': 'bicycle', 'barrier': 'barrier', 'addr_subci': 'addr_subci', 'addr_city': 'addr_city', 'name_am': 'name_am', 'name': 'name', });
lyr_Singleparts_4.set('fieldAliases', {'ZONE_': 'ZONE_', 'LUSE_CODE': 'LUSE_CODE', 'Use_Type': 'Use_Type', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'WOREDA': 'WOREDA', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'service': 'service', 'junction': 'junction', 'highway': 'highway', 'covered': 'covered', 'embankment': 'embankment', 'tracktype': 'tracktype', 'source_ref': 'source_ref', 'is_in_city': 'is_in_city', 'ref': 'ref', 'name_zh': 'name_zh', 'name_en': 'name_en', 'tunnel': 'tunnel', 'motorroad': 'motorroad', 'source_r_1': 'source_r_1', 'mapillary': 'mapillary', 'lane_marki': 'lane_marki', 'access': 'access', 'horse': 'horse', 'sidewalk': 'sidewalk', 'noname': 'noname', 'maxspeed_t': 'maxspeed_t', 'lit': 'lit', 'lanes': 'lanes', 'layer': 'layer', 'bridge': 'bridge', 'surface': 'surface', 'maxspeed': 'maxspeed', 'city': 'city', 'name_am': 'name_am', 'name': 'name', 'cycleway_r': 'cycleway_r', 'oneway': 'oneway', 'Suitability': 'Suitability', });
lyr_Project_AOI_0.set('fieldImages', {'ZONE_': 'Range', 'LUSE_CODE': 'TextEdit', 'Use_Type': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'WOREDA': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Water_Ways_1.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'osm_versio': 'TextEdit', 'osm_timest': 'TextEdit', 'osm_uid': 'TextEdit', 'osm_user': 'TextEdit', 'osm_change': 'TextEdit', 'tunnel': 'TextEdit', 'waterway': 'TextEdit', 'bridge': 'TextEdit', 'name_am': 'TextEdit', 'board_type': 'TextEdit', 'width': 'TextEdit', 'intermitte': 'TextEdit', 'name': 'TextEdit', 'layer': 'TextEdit', 'level': 'TextEdit', 'boat': 'TextEdit', });
lyr_Roads_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'service': '', 'junction': '', 'highway': '', 'covered': '', 'embankment': '', 'tracktype': '', 'source_ref': '', 'is_in_city': '', 'ref': '', 'name_zh': '', 'name_en': '', 'tunnel': '', 'motorroad': '', 'source_r_1': '', 'mapillary': '', 'lane_marki': '', 'access': '', 'horse': '', 'sidewalk': '', 'noname': '', 'maxspeed_t': '', 'lit': '', 'lanes': '', 'layer': '', 'bridge': '', 'surface': '', 'maxspeed': '', 'city': '', 'name_am': '', 'name': '', 'cycleway_r': '', 'oneway': '', });
lyr_Existing_Schools_3.set('fieldImages', {'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'amenity': 'TextEdit', 'addr_subur': 'TextEdit', 'addr_paren': 'TextEdit', 'addr_count': 'TextEdit', 'religion': 'TextEdit', 'operator_t': 'TextEdit', 'grades': 'TextEdit', 'office': 'TextEdit', 'name_de': 'TextEdit', 'mapillary': 'TextEdit', 'level': 'TextEdit', 'tourism': 'TextEdit', 'wheelchair': 'TextEdit', 'internet_a': 'TextEdit', 'designatio': 'TextEdit', 'descriptio': 'TextEdit', 'building': 'TextEdit', 'addr_house': 'TextEdit', 'name_zh': 'TextEdit', 'wikipedia': 'TextEdit', 'wikidata': 'TextEdit', 'opening_ho': 'TextEdit', 'addr_stree': 'TextEdit', 'email': 'TextEdit', 'access': 'TextEdit', 'source_ref': 'TextEdit', 'phone': 'TextEdit', 'addr_postc': 'TextEdit', 'shop': 'TextEdit', 'addr_hou_1': 'TextEdit', 'is_in_city': 'TextEdit', 'contact_mo': 'TextEdit', 'contact_fa': 'TextEdit', 'addr_kebel': 'TextEdit', 'source_am': 'TextEdit', 'contact_po': 'TextEdit', 'contact_em': 'TextEdit', 'contact_p.': 'TextEdit', 'contact_ph': 'TextEdit', 'operator': 'TextEdit', 'website': 'TextEdit', 'name_en': 'TextEdit', 'motorcycle': 'TextEdit', 'motorcar': 'TextEdit', 'foot': 'TextEdit', 'bicycle': 'TextEdit', 'barrier': 'TextEdit', 'addr_subci': 'TextEdit', 'addr_city': 'TextEdit', 'name_am': 'TextEdit', 'name': 'TextEdit', });
lyr_Singleparts_4.set('fieldImages', {'ZONE_': 'Range', 'LUSE_CODE': 'TextEdit', 'Use_Type': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'WOREDA': 'Range', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'full_id': 'TextEdit', 'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'service': 'TextEdit', 'junction': 'TextEdit', 'highway': 'TextEdit', 'covered': 'TextEdit', 'embankment': 'TextEdit', 'tracktype': 'TextEdit', 'source_ref': 'TextEdit', 'is_in_city': 'TextEdit', 'ref': 'TextEdit', 'name_zh': 'TextEdit', 'name_en': 'TextEdit', 'tunnel': 'TextEdit', 'motorroad': 'TextEdit', 'source_r_1': 'TextEdit', 'mapillary': 'TextEdit', 'lane_marki': 'TextEdit', 'access': 'TextEdit', 'horse': 'TextEdit', 'sidewalk': 'TextEdit', 'noname': 'TextEdit', 'maxspeed_t': 'TextEdit', 'lit': 'TextEdit', 'lanes': 'TextEdit', 'layer': 'TextEdit', 'bridge': 'TextEdit', 'surface': 'TextEdit', 'maxspeed': 'TextEdit', 'city': 'TextEdit', 'name_am': 'TextEdit', 'name': 'TextEdit', 'cycleway_r': 'TextEdit', 'oneway': 'TextEdit', 'Suitability': 'TextEdit', });
lyr_Project_AOI_0.set('fieldLabels', {'ZONE_': 'no label', 'LUSE_CODE': 'no label', 'Use_Type': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'WOREDA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Water_Ways_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'osm_versio': 'no label', 'osm_timest': 'no label', 'osm_uid': 'no label', 'osm_user': 'no label', 'osm_change': 'no label', 'tunnel': 'no label', 'waterway': 'no label', 'bridge': 'no label', 'name_am': 'no label', 'board_type': 'no label', 'width': 'no label', 'intermitte': 'no label', 'name': 'no label', 'layer': 'no label', 'level': 'no label', 'boat': 'no label', });
lyr_Roads_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'service': 'no label', 'junction': 'no label', 'highway': 'no label', 'covered': 'no label', 'embankment': 'no label', 'tracktype': 'no label', 'source_ref': 'no label', 'is_in_city': 'no label', 'ref': 'no label', 'name_zh': 'no label', 'name_en': 'no label', 'tunnel': 'no label', 'motorroad': 'no label', 'source_r_1': 'no label', 'mapillary': 'no label', 'lane_marki': 'no label', 'access': 'no label', 'horse': 'no label', 'sidewalk': 'no label', 'noname': 'no label', 'maxspeed_t': 'no label', 'lit': 'no label', 'lanes': 'no label', 'layer': 'no label', 'bridge': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'city': 'no label', 'name_am': 'no label', 'name': 'no label', 'cycleway_r': 'no label', 'oneway': 'no label', });
lyr_Existing_Schools_3.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'amenity': 'no label', 'addr_subur': 'no label', 'addr_paren': 'no label', 'addr_count': 'no label', 'religion': 'no label', 'operator_t': 'no label', 'grades': 'no label', 'office': 'no label', 'name_de': 'no label', 'mapillary': 'no label', 'level': 'no label', 'tourism': 'no label', 'wheelchair': 'no label', 'internet_a': 'no label', 'designatio': 'no label', 'descriptio': 'no label', 'building': 'no label', 'addr_house': 'no label', 'name_zh': 'no label', 'wikipedia': 'no label', 'wikidata': 'no label', 'opening_ho': 'no label', 'addr_stree': 'no label', 'email': 'no label', 'access': 'no label', 'source_ref': 'no label', 'phone': 'no label', 'addr_postc': 'no label', 'shop': 'no label', 'addr_hou_1': 'no label', 'is_in_city': 'no label', 'contact_mo': 'no label', 'contact_fa': 'no label', 'addr_kebel': 'no label', 'source_am': 'no label', 'contact_po': 'no label', 'contact_em': 'no label', 'contact_p.': 'no label', 'contact_ph': 'no label', 'operator': 'no label', 'website': 'no label', 'name_en': 'no label', 'motorcycle': 'no label', 'motorcar': 'no label', 'foot': 'no label', 'bicycle': 'no label', 'barrier': 'no label', 'addr_subci': 'no label', 'addr_city': 'no label', 'name_am': 'no label', 'name': 'no label', });
lyr_Singleparts_4.set('fieldLabels', {'ZONE_': 'no label', 'LUSE_CODE': 'no label', 'Use_Type': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', 'WOREDA': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'service': 'no label', 'junction': 'no label', 'highway': 'no label', 'covered': 'no label', 'embankment': 'no label', 'tracktype': 'no label', 'source_ref': 'no label', 'is_in_city': 'no label', 'ref': 'no label', 'name_zh': 'no label', 'name_en': 'no label', 'tunnel': 'no label', 'motorroad': 'no label', 'source_r_1': 'no label', 'mapillary': 'no label', 'lane_marki': 'no label', 'access': 'no label', 'horse': 'no label', 'sidewalk': 'no label', 'noname': 'no label', 'maxspeed_t': 'no label', 'lit': 'no label', 'lanes': 'no label', 'layer': 'no label', 'bridge': 'no label', 'surface': 'no label', 'maxspeed': 'no label', 'city': 'no label', 'name_am': 'no label', 'name': 'no label', 'cycleway_r': 'no label', 'oneway': 'no label', 'Suitability': 'inline label - always visible', });
lyr_Singleparts_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});