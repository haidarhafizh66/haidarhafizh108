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
var format_Batas_Desa1_1 = new ol.format.GeoJSON();
var features_Batas_Desa1_1 = format_Batas_Desa1_1.readFeatures(json_Batas_Desa1_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Batas_Desa1_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Batas_Desa1_1.addFeatures(features_Batas_Desa1_1);
var lyr_Batas_Desa1_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Batas_Desa1_1, 
                style: style_Batas_Desa1_1,
                interactive: true,
                title: '<img src="styles/legend/Batas_Desa1_1.png" /> Batas_Desa1'
            });
var format_Adm_Pringapus_2 = new ol.format.GeoJSON();
var features_Adm_Pringapus_2 = format_Adm_Pringapus_2.readFeatures(json_Adm_Pringapus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Adm_Pringapus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Adm_Pringapus_2.addFeatures(features_Adm_Pringapus_2);
var lyr_Adm_Pringapus_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Adm_Pringapus_2, 
                style: style_Adm_Pringapus_2,
                interactive: true,
                title: '<img src="styles/legend/Adm_Pringapus_2.png" /> Adm_Pringapus'
            });
var format_Hutan_3 = new ol.format.GeoJSON();
var features_Hutan_3 = format_Hutan_3.readFeatures(json_Hutan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hutan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hutan_3.addFeatures(features_Hutan_3);
var lyr_Hutan_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Hutan_3, 
                style: style_Hutan_3,
                interactive: true,
                title: '<img src="styles/legend/Hutan_3.png" /> Hutan'
            });
var format_Kebun_4 = new ol.format.GeoJSON();
var features_Kebun_4 = format_Kebun_4.readFeatures(json_Kebun_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kebun_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kebun_4.addFeatures(features_Kebun_4);
var lyr_Kebun_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kebun_4, 
                style: style_Kebun_4,
                interactive: true,
                title: '<img src="styles/legend/Kebun_4.png" /> Kebun'
            });
var format_Ladang_5 = new ol.format.GeoJSON();
var features_Ladang_5 = format_Ladang_5.readFeatures(json_Ladang_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ladang_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ladang_5.addFeatures(features_Ladang_5);
var lyr_Ladang_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Ladang_5, 
                style: style_Ladang_5,
                interactive: true,
                title: '<img src="styles/legend/Ladang_5.png" /> Ladang'
            });
var format_Jalan_6 = new ol.format.GeoJSON();
var features_Jalan_6 = format_Jalan_6.readFeatures(json_Jalan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jalan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jalan_6.addFeatures(features_Jalan_6);
var lyr_Jalan_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jalan_6, 
                style: style_Jalan_6,
                interactive: true,
                title: '<img src="styles/legend/Jalan_6.png" /> Jalan'
            });
var format_JalanPringapus_7 = new ol.format.GeoJSON();
var features_JalanPringapus_7 = format_JalanPringapus_7.readFeatures(json_JalanPringapus_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JalanPringapus_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JalanPringapus_7.addFeatures(features_JalanPringapus_7);
var lyr_JalanPringapus_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JalanPringapus_7, 
                style: style_JalanPringapus_7,
                interactive: true,
                title: '<img src="styles/legend/JalanPringapus_7.png" /> Jalan Pringapus'
            });
var format_rencana_jaringan_jalan_330020190617102456_8 = new ol.format.GeoJSON();
var features_rencana_jaringan_jalan_330020190617102456_8 = format_rencana_jaringan_jalan_330020190617102456_8.readFeatures(json_rencana_jaringan_jalan_330020190617102456_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_rencana_jaringan_jalan_330020190617102456_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_rencana_jaringan_jalan_330020190617102456_8.addFeatures(features_rencana_jaringan_jalan_330020190617102456_8);
var lyr_rencana_jaringan_jalan_330020190617102456_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_rencana_jaringan_jalan_330020190617102456_8, 
                style: style_rencana_jaringan_jalan_330020190617102456_8,
                interactive: true,
                title: '<img src="styles/legend/rencana_jaringan_jalan_330020190617102456_8.png" /> rencana_jaringan_jalan_330020190617102456'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_Batas_Desa1_1.setVisible(true);lyr_Adm_Pringapus_2.setVisible(true);lyr_Hutan_3.setVisible(true);lyr_Kebun_4.setVisible(true);lyr_Ladang_5.setVisible(true);lyr_Jalan_6.setVisible(true);lyr_JalanPringapus_7.setVisible(true);lyr_rencana_jaringan_jalan_330020190617102456_8.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Batas_Desa1_1,lyr_Adm_Pringapus_2,lyr_Hutan_3,lyr_Kebun_4,lyr_Ladang_5,lyr_Jalan_6,lyr_JalanPringapus_7,lyr_rencana_jaringan_jalan_330020190617102456_8];
lyr_Batas_Desa1_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'FID_mfd_20': 'FID_mfd_20', 'FID_ADMI_1': 'FID_ADMI_1', 'WADMPR': 'WADMPR', 'KODE_KAB': 'KODE_KAB', 'KABUPATEN': 'KABUPATEN', 'DESA': 'DESA', 'KODE_KEC': 'KODE_KEC', 'KECAMATAN': 'KECAMATAN', 'ID_2018': 'ID_2018', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Adm_Pringapus_2.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_Hutan_3.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_Kebun_4.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_Ladang_5.set('fieldAliases', {'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'NL_NAME_1': 'NL_NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'NL_NAME_2': 'NL_NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'VARNAME_3': 'VARNAME_3', 'NL_NAME_3': 'NL_NAME_3', 'TYPE_3': 'TYPE_3', 'ENGTYPE_3': 'ENGTYPE_3', 'CC_3': 'CC_3', 'HASC_3': 'HASC_3', });
lyr_Jalan_6.set('fieldAliases', {'FID_Batas': 'FID_Batas', 'GID_0': 'GID_0', 'NAME_0': 'NAME_0', 'GID_1': 'GID_1', 'NAME_1': 'NAME_1', 'GID_2': 'GID_2', 'NAME_2': 'NAME_2', 'GID_3': 'GID_3', 'NAME_3': 'NAME_3', 'GID_4': 'GID_4', 'NAME_4': 'NAME_4', 'VARNAME_4': 'VARNAME_4', 'TYPE_4': 'TYPE_4', 'ENGTYPE_4': 'ENGTYPE_4', 'CC_4': 'CC_4', });
lyr_JalanPringapus_7.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'OBJECTID': 'OBJECTID', 'LAYER': 'LAYER', 'KETERANGAN': 'KETERANGAN', 'SOURCETHM': 'SOURCETHM', 'LENGTH_FEE': 'LENGTH_FEE', 'SHAPE_LENG': 'SHAPE_LENG', 'SHAPE_LE_1': 'SHAPE_LE_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Le_3': 'Shape_Le_3', });
lyr_rencana_jaringan_jalan_330020190617102456_8.set('fieldAliases', {'fungsi': 'fungsi', 'rencana': 'rencana', });
lyr_Batas_Desa1_1.set('fieldImages', {'OBJECTID': '', 'FID_mfd_20': '', 'FID_ADMI_1': '', 'WADMPR': '', 'KODE_KAB': '', 'KABUPATEN': '', 'DESA': '', 'KODE_KEC': '', 'KECAMATAN': '', 'ID_2018': '', 'Shape_Leng': '', 'Shape_Area': '', });
lyr_Adm_Pringapus_2.set('fieldImages', {'GID_0': '', 'NAME_0': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'NL_NAME_2': '', 'GID_3': '', 'NAME_3': '', 'VARNAME_3': '', 'NL_NAME_3': '', 'TYPE_3': '', 'ENGTYPE_3': '', 'CC_3': '', 'HASC_3': '', });
lyr_Hutan_3.set('fieldImages', {'GID_0': '', 'NAME_0': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'NL_NAME_2': '', 'GID_3': '', 'NAME_3': '', 'VARNAME_3': '', 'NL_NAME_3': '', 'TYPE_3': '', 'ENGTYPE_3': '', 'CC_3': '', 'HASC_3': '', });
lyr_Kebun_4.set('fieldImages', {'GID_0': '', 'NAME_0': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'NL_NAME_2': '', 'GID_3': '', 'NAME_3': '', 'VARNAME_3': '', 'NL_NAME_3': '', 'TYPE_3': '', 'ENGTYPE_3': '', 'CC_3': '', 'HASC_3': '', });
lyr_Ladang_5.set('fieldImages', {'GID_0': '', 'NAME_0': '', 'GID_1': '', 'NAME_1': '', 'NL_NAME_1': '', 'GID_2': '', 'NAME_2': '', 'NL_NAME_2': '', 'GID_3': '', 'NAME_3': '', 'VARNAME_3': '', 'NL_NAME_3': '', 'TYPE_3': '', 'ENGTYPE_3': '', 'CC_3': '', 'HASC_3': '', });
lyr_Jalan_6.set('fieldImages', {'FID_Batas': '', 'GID_0': '', 'NAME_0': '', 'GID_1': '', 'NAME_1': '', 'GID_2': '', 'NAME_2': '', 'GID_3': '', 'NAME_3': '', 'GID_4': '', 'NAME_4': '', 'VARNAME_4': '', 'TYPE_4': '', 'ENGTYPE_4': '', 'CC_4': '', });
lyr_JalanPringapus_7.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID_2': '', 'OBJECTID': '', 'LAYER': '', 'KETERANGAN': '', 'SOURCETHM': '', 'LENGTH_FEE': '', 'SHAPE_LENG': '', 'SHAPE_LE_1': '', 'Shape_Le_2': '', 'Shape_Le_3': '', });
lyr_rencana_jaringan_jalan_330020190617102456_8.set('fieldImages', {'fungsi': '', 'rencana': '', });
lyr_Batas_Desa1_1.set('fieldLabels', {'OBJECTID': 'no label', 'FID_mfd_20': 'no label', 'FID_ADMI_1': 'no label', 'WADMPR': 'no label', 'KODE_KAB': 'no label', 'KABUPATEN': 'no label', 'DESA': 'no label', 'KODE_KEC': 'no label', 'KECAMATAN': 'no label', 'ID_2018': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_Adm_Pringapus_2.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_Hutan_3.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_Kebun_4.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_Ladang_5.set('fieldLabels', {'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'NL_NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'NL_NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'VARNAME_3': 'no label', 'NL_NAME_3': 'no label', 'TYPE_3': 'no label', 'ENGTYPE_3': 'no label', 'CC_3': 'no label', 'HASC_3': 'no label', });
lyr_Jalan_6.set('fieldLabels', {'FID_Batas': 'no label', 'GID_0': 'no label', 'NAME_0': 'no label', 'GID_1': 'no label', 'NAME_1': 'no label', 'GID_2': 'no label', 'NAME_2': 'no label', 'GID_3': 'no label', 'NAME_3': 'no label', 'GID_4': 'no label', 'NAME_4': 'no label', 'VARNAME_4': 'no label', 'TYPE_4': 'no label', 'ENGTYPE_4': 'no label', 'CC_4': 'no label', });
lyr_JalanPringapus_7.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'OBJECTID': 'no label', 'LAYER': 'no label', 'KETERANGAN': 'no label', 'SOURCETHM': 'no label', 'LENGTH_FEE': 'no label', 'SHAPE_LENG': 'no label', 'SHAPE_LE_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Le_3': 'no label', });
lyr_rencana_jaringan_jalan_330020190617102456_8.set('fieldLabels', {'fungsi': 'no label', 'rencana': 'no label', });
lyr_rencana_jaringan_jalan_330020190617102456_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});