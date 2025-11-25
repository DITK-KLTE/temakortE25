ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([1383245.708573, 7478759.230765, 1392314.018395, 7492243.927986]);
var wms_layers = [];


        var lyr_Positronnolabelsretina_0 = new ol.layer.Tile({
            'title': 'Positron [no labels] (retina)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}@2x.png'
            })
        });
var format_Kommuneplan_1 = new ol.format.GeoJSON();
var features_Kommuneplan_1 = format_Kommuneplan_1.readFeatures(json_Kommuneplan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kommuneplan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kommuneplan_1.addFeatures(features_Kommuneplan_1);
var lyr_Kommuneplan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kommuneplan_1, 
                style: style_Kommuneplan_1,
                popuplayertitle: 'Kommuneplan',
                interactive: true,
                title: '<img src="styles/legend/Kommuneplan_1.png" /> Kommuneplan'
            });
var format_Lokalplaner_2 = new ol.format.GeoJSON();
var features_Lokalplaner_2 = format_Lokalplaner_2.readFeatures(json_Lokalplaner_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lokalplaner_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lokalplaner_2.addFeatures(features_Lokalplaner_2);
var lyr_Lokalplaner_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lokalplaner_2, 
                style: style_Lokalplaner_2,
                popuplayertitle: 'Lokalplaner',
                interactive: true,
    title: 'Lokalplaner<br />\
    <img src="styles/legend/Lokalplaner_2_0.png" /> 001<br />\
    <img src="styles/legend/Lokalplaner_2_1.png" /> 101-1<br />\
    <img src="styles/legend/Lokalplaner_2_2.png" /> 102<br />\
    <img src="styles/legend/Lokalplaner_2_3.png" /> 103<br />\
    <img src="styles/legend/Lokalplaner_2_4.png" /> 104<br />\
    <img src="styles/legend/Lokalplaner_2_5.png" /> 105<br />\
    <img src="styles/legend/Lokalplaner_2_6.png" /> 106<br />\
    <img src="styles/legend/Lokalplaner_2_7.png" /> 108<br />\
    <img src="styles/legend/Lokalplaner_2_8.png" /> 109-1<br />\
    <img src="styles/legend/Lokalplaner_2_9.png" /> 112<br />\
    <img src="styles/legend/Lokalplaner_2_10.png" /> 115<br />\
    <img src="styles/legend/Lokalplaner_2_11.png" /> 116<br />\
    <img src="styles/legend/Lokalplaner_2_12.png" /> 118<br />\
    <img src="styles/legend/Lokalplaner_2_13.png" /> 119<br />\
    <img src="styles/legend/Lokalplaner_2_14.png" /> 120<br />\
    <img src="styles/legend/Lokalplaner_2_15.png" /> 121<br />\
    <img src="styles/legend/Lokalplaner_2_16.png" /> 122<br />\
    <img src="styles/legend/Lokalplaner_2_17.png" /> 124<br />\
    <img src="styles/legend/Lokalplaner_2_18.png" /> 126<br />\
    <img src="styles/legend/Lokalplaner_2_19.png" /> 127<br />\
    <img src="styles/legend/Lokalplaner_2_20.png" /> 128<br />\
    <img src="styles/legend/Lokalplaner_2_21.png" /> 131<br />\
    <img src="styles/legend/Lokalplaner_2_22.png" /> 132<br />\
    <img src="styles/legend/Lokalplaner_2_23.png" /> 133<br />\
    <img src="styles/legend/Lokalplaner_2_24.png" /> 134<br />\
    <img src="styles/legend/Lokalplaner_2_25.png" /> 135<br />\
    <img src="styles/legend/Lokalplaner_2_26.png" /> 137<br />\
    <img src="styles/legend/Lokalplaner_2_27.png" /> 139<br />\
    <img src="styles/legend/Lokalplaner_2_28.png" /> 140<br />\
    <img src="styles/legend/Lokalplaner_2_29.png" /> 141<br />\
    <img src="styles/legend/Lokalplaner_2_30.png" /> 142<br />\
    <img src="styles/legend/Lokalplaner_2_31.png" /> 143<br />\
    <img src="styles/legend/Lokalplaner_2_32.png" /> 144<br />\
    <img src="styles/legend/Lokalplaner_2_33.png" /> 147<br />\
    <img src="styles/legend/Lokalplaner_2_34.png" /> 148<br />\
    <img src="styles/legend/Lokalplaner_2_35.png" /> 149<br />\
    <img src="styles/legend/Lokalplaner_2_36.png" /> 150<br />\
    <img src="styles/legend/Lokalplaner_2_37.png" /> 151<br />\
    <img src="styles/legend/Lokalplaner_2_38.png" /> 152<br />\
    <img src="styles/legend/Lokalplaner_2_39.png" /> 154<br />\
    <img src="styles/legend/Lokalplaner_2_40.png" /> 202<br />\
    <img src="styles/legend/Lokalplaner_2_41.png" /> 203<br />\
    <img src="styles/legend/Lokalplaner_2_42.png" /> 206<br />\
    <img src="styles/legend/Lokalplaner_2_43.png" /> 207<br />\
    <img src="styles/legend/Lokalplaner_2_44.png" /> 208<br />\
    <img src="styles/legend/Lokalplaner_2_45.png" /> 209<br />\
    <img src="styles/legend/Lokalplaner_2_46.png" /> 210<br />\
    <img src="styles/legend/Lokalplaner_2_47.png" /> 211<br />\
    <img src="styles/legend/Lokalplaner_2_48.png" /> 216<br />\
    <img src="styles/legend/Lokalplaner_2_49.png" /> 220<br />\
    <img src="styles/legend/Lokalplaner_2_50.png" /> 221<br />\
    <img src="styles/legend/Lokalplaner_2_51.png" /> 225<br />\
    <img src="styles/legend/Lokalplaner_2_52.png" /> 226<br />\
    <img src="styles/legend/Lokalplaner_2_53.png" /> 228<br />\
    <img src="styles/legend/Lokalplaner_2_54.png" /> 229<br />\
    <img src="styles/legend/Lokalplaner_2_55.png" /> 230<br />\
    <img src="styles/legend/Lokalplaner_2_56.png" /> 231<br />\
    <img src="styles/legend/Lokalplaner_2_57.png" /> 232<br />\
    <img src="styles/legend/Lokalplaner_2_58.png" /> 233<br />\
    <img src="styles/legend/Lokalplaner_2_59.png" /> 234<br />\
    <img src="styles/legend/Lokalplaner_2_60.png" /> 236<br />\
    <img src="styles/legend/Lokalplaner_2_61.png" /> 237<br />\
    <img src="styles/legend/Lokalplaner_2_62.png" /> 238<br />\
    <img src="styles/legend/Lokalplaner_2_63.png" /> 239<br />\
    <img src="styles/legend/Lokalplaner_2_64.png" /> 240<br />\
    <img src="styles/legend/Lokalplaner_2_65.png" /> 241<br />\
    <img src="styles/legend/Lokalplaner_2_66.png" /> 301-1<br />\
    <img src="styles/legend/Lokalplaner_2_67.png" /> 303<br />\
    <img src="styles/legend/Lokalplaner_2_68.png" /> 304<br />\
    <img src="styles/legend/Lokalplaner_2_69.png" /> 305<br />\
    <img src="styles/legend/Lokalplaner_2_70.png" /> 306<br />\
    <img src="styles/legend/Lokalplaner_2_71.png" /> 313<br />\
    <img src="styles/legend/Lokalplaner_2_72.png" /> 314<br />\
    <img src="styles/legend/Lokalplaner_2_73.png" /> 316<br />\
    <img src="styles/legend/Lokalplaner_2_74.png" /> 322<br />\
    <img src="styles/legend/Lokalplaner_2_75.png" /> 323<br />\
    <img src="styles/legend/Lokalplaner_2_76.png" /> 324<br />\
    <img src="styles/legend/Lokalplaner_2_77.png" /> 325<br />\
    <img src="styles/legend/Lokalplaner_2_78.png" /> 326<br />\
    <img src="styles/legend/Lokalplaner_2_79.png" /> 327<br />\
    <img src="styles/legend/Lokalplaner_2_80.png" /> 328<br />\
    <img src="styles/legend/Lokalplaner_2_81.png" /> 329<br />\
    <img src="styles/legend/Lokalplaner_2_82.png" /> 330<br />\
    <img src="styles/legend/Lokalplaner_2_83.png" /> 331<br />\
    <img src="styles/legend/Lokalplaner_2_84.png" /> 332<br />\
    <img src="styles/legend/Lokalplaner_2_85.png" /> 335<br />\
    <img src="styles/legend/Lokalplaner_2_86.png" /> 338<br />\
    <img src="styles/legend/Lokalplaner_2_87.png" /> 339<br />\
    <img src="styles/legend/Lokalplaner_2_88.png" /> 340<br />\
    <img src="styles/legend/Lokalplaner_2_89.png" /> 341<br />\
    <img src="styles/legend/Lokalplaner_2_90.png" /> 342<br />\
    <img src="styles/legend/Lokalplaner_2_91.png" /> 343<br />\
    <img src="styles/legend/Lokalplaner_2_92.png" /> 345<br />\
    <img src="styles/legend/Lokalplaner_2_93.png" /> 403-1<br />\
    <img src="styles/legend/Lokalplaner_2_94.png" /> 404<br />\
    <img src="styles/legend/Lokalplaner_2_95.png" /> 405<br />\
    <img src="styles/legend/Lokalplaner_2_96.png" /> 407<br />\
    <img src="styles/legend/Lokalplaner_2_97.png" /> 408<br />\
    <img src="styles/legend/Lokalplaner_2_98.png" /> 409<br />\
    <img src="styles/legend/Lokalplaner_2_99.png" /> 411<br />\
    <img src="styles/legend/Lokalplaner_2_100.png" /> 412<br />\
    <img src="styles/legend/Lokalplaner_2_101.png" /> 418<br />\
    <img src="styles/legend/Lokalplaner_2_102.png" /> 423<br />\
    <img src="styles/legend/Lokalplaner_2_103.png" /> 429<br />\
    <img src="styles/legend/Lokalplaner_2_104.png" /> 432<br />\
    <img src="styles/legend/Lokalplaner_2_105.png" /> 433<br />\
    <img src="styles/legend/Lokalplaner_2_106.png" /> 440<br />\
    <img src="styles/legend/Lokalplaner_2_107.png" /> 441<br />\
    <img src="styles/legend/Lokalplaner_2_108.png" /> 447<br />\
    <img src="styles/legend/Lokalplaner_2_109.png" /> 448<br />\
    <img src="styles/legend/Lokalplaner_2_110.png" /> 452<br />\
    <img src="styles/legend/Lokalplaner_2_111.png" /> 454<br />\
    <img src="styles/legend/Lokalplaner_2_112.png" /> 455<br />\
    <img src="styles/legend/Lokalplaner_2_113.png" /> 456<br />\
    <img src="styles/legend/Lokalplaner_2_114.png" /> 457<br />\
    <img src="styles/legend/Lokalplaner_2_115.png" /> 458<br />\
    <img src="styles/legend/Lokalplaner_2_116.png" /> 459<br />\
    <img src="styles/legend/Lokalplaner_2_117.png" /> 462<br />\
    <img src="styles/legend/Lokalplaner_2_118.png" /> 463<br />\
    <img src="styles/legend/Lokalplaner_2_119.png" /> 464<br />\
    <img src="styles/legend/Lokalplaner_2_120.png" /> 466<br />\
    <img src="styles/legend/Lokalplaner_2_121.png" /> 467<br />\
    <img src="styles/legend/Lokalplaner_2_122.png" /> 468<br />\
    <img src="styles/legend/Lokalplaner_2_123.png" /> 469<br />\
    <img src="styles/legend/Lokalplaner_2_124.png" /> 470<br />\
    <img src="styles/legend/Lokalplaner_2_125.png" /> 471<br />\
    <img src="styles/legend/Lokalplaner_2_126.png" /> 472<br />\
    <img src="styles/legend/Lokalplaner_2_127.png" /> 473<br />\
    <img src="styles/legend/Lokalplaner_2_128.png" /> 475<br />\
    <img src="styles/legend/Lokalplaner_2_129.png" /> 476<br />\
    <img src="styles/legend/Lokalplaner_2_130.png" /> 504<br />\
    <img src="styles/legend/Lokalplaner_2_131.png" /> 507<br />\
    <img src="styles/legend/Lokalplaner_2_132.png" /> 508<br />\
    <img src="styles/legend/Lokalplaner_2_133.png" /> 510<br />\
    <img src="styles/legend/Lokalplaner_2_134.png" /> 511<br />\
    <img src="styles/legend/Lokalplaner_2_135.png" /> 516<br />\
    <img src="styles/legend/Lokalplaner_2_136.png" /> 518<br />\
    <img src="styles/legend/Lokalplaner_2_137.png" /> 519<br />\
    <img src="styles/legend/Lokalplaner_2_138.png" /> A1<br />\
    <img src="styles/legend/Lokalplaner_2_139.png" /> A10<br />\
    <img src="styles/legend/Lokalplaner_2_140.png" /> A11<br />\
    <img src="styles/legend/Lokalplaner_2_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/Lokalplaner_2_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/Lokalplaner_2_143.png" /> A13<br />\
    <img src="styles/legend/Lokalplaner_2_144.png" /> A14<br />\
    <img src="styles/legend/Lokalplaner_2_145.png" /> A15<br />\
    <img src="styles/legend/Lokalplaner_2_146.png" /> A3<br />\
    <img src="styles/legend/Lokalplaner_2_147.png" /> A5<br />\
    <img src="styles/legend/Lokalplaner_2_148.png" /> A7<br />\
    <img src="styles/legend/Lokalplaner_2_149.png" /> A8<br />\
    <img src="styles/legend/Lokalplaner_2_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/Lokalplaner_2_151.png" /> B17<br />\
    <img src="styles/legend/Lokalplaner_2_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/Lokalplaner_2_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/Lokalplaner_2_154.png" /> H1 tillæg 4<br />\
    <img src="styles/legend/Lokalplaner_2_155.png" /> H10<br />\
    <img src="styles/legend/Lokalplaner_2_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/Lokalplaner_2_157.png" /> H11<br />\
    <img src="styles/legend/Lokalplaner_2_158.png" /> H12<br />\
    <img src="styles/legend/Lokalplaner_2_159.png" /> H13<br />\
    <img src="styles/legend/Lokalplaner_2_160.png" /> H14<br />\
    <img src="styles/legend/Lokalplaner_2_161.png" /> H15<br />\
    <img src="styles/legend/Lokalplaner_2_162.png" /> H16<br />\
    <img src="styles/legend/Lokalplaner_2_163.png" /> H17<br />\
    <img src="styles/legend/Lokalplaner_2_164.png" /> H18<br />\
    <img src="styles/legend/Lokalplaner_2_165.png" /> H20<br />\
    <img src="styles/legend/Lokalplaner_2_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/Lokalplaner_2_167.png" /> H3<br />\
    <img src="styles/legend/Lokalplaner_2_168.png" /> H4<br />\
    <img src="styles/legend/Lokalplaner_2_169.png" /> H5<br />\
    <img src="styles/legend/Lokalplaner_2_170.png" /> H9<br />\
    <img src="styles/legend/Lokalplaner_2_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/Lokalplaner_2_172.png" /> <br />' });
var format_Strandbeskyttelse_3 = new ol.format.GeoJSON();
var features_Strandbeskyttelse_3 = format_Strandbeskyttelse_3.readFeatures(json_Strandbeskyttelse_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelse_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelse_3.addFeatures(features_Strandbeskyttelse_3);
var lyr_Strandbeskyttelse_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelse_3, 
                style: style_Strandbeskyttelse_3,
                popuplayertitle: 'Strandbeskyttelse',
                interactive: false,
                title: '<img src="styles/legend/Strandbeskyttelse_3.png" /> Strandbeskyttelse'
            });
var format_Folkeskoler_4 = new ol.format.GeoJSON();
var features_Folkeskoler_4 = format_Folkeskoler_4.readFeatures(json_Folkeskoler_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_4.addFeatures(features_Folkeskoler_4);
var lyr_Folkeskoler_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_4, 
                style: style_Folkeskoler_4,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_4.png" /> Folkeskoler'
            });
var format_Togstationer_5 = new ol.format.GeoJSON();
var features_Togstationer_5 = format_Togstationer_5.readFeatures(json_Togstationer_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_5.addFeatures(features_Togstationer_5);
var lyr_Togstationer_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_5, 
                style: style_Togstationer_5,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_5.png" /> Togstationer'
            });

lyr_Positronnolabelsretina_0.setVisible(true);lyr_Kommuneplan_1.setVisible(true);lyr_Lokalplaner_2.setVisible(true);lyr_Strandbeskyttelse_3.setVisible(true);lyr_Folkeskoler_4.setVisible(true);lyr_Togstationer_5.setVisible(true);
var layersList = [lyr_Positronnolabelsretina_0,lyr_Kommuneplan_1,lyr_Lokalplaner_2,lyr_Strandbeskyttelse_3,lyr_Folkeskoler_4,lyr_Togstationer_5];
lyr_Kommuneplan_1.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Lokalplaner_2.set('fieldAliases', {'plannr': 'plannr', 'plannavn': 'plannavn', 'datovedt': 'datovedt', 'doklink': 'doklink', 'anvendelse': 'anvendelse', });
lyr_Strandbeskyttelse_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_Folkeskoler_4.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Togstationer_5.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Kommuneplan_1.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Hidden', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'Hidden', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'Hidden', 'datoopdt': 'Hidden', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_Lokalplaner_2.set('fieldImages', {'plannr': 'TextEdit', 'plannavn': 'TextEdit', 'datovedt': 'TextEdit', 'doklink': 'TextEdit', 'anvendelse': 'TextEdit', });
lyr_Strandbeskyttelse_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_Folkeskoler_4.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'Hidden', 'osm_id': 'Hidden', 'display_na': 'Hidden', 'category': 'Hidden', 'type': 'Hidden', 'latlong': 'Hidden', });
lyr_Togstationer_5.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Kommuneplan_1.set('fieldLabels', {'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_Lokalplaner_2.set('fieldLabels', {'plannr': 'inline label - always visible', 'plannavn': 'inline label - always visible', 'datovedt': 'inline label - always visible', 'doklink': 'inline label - always visible', 'anvendelse': 'inline label - always visible', });
lyr_Strandbeskyttelse_3.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_Folkeskoler_4.set('fieldLabels', {'Skolenavn': 'inline label - always visible', 'Adresse': 'inline label - always visible', 'By': 'inline label - always visible', 'Hjemmeside': 'inline label - always visible', });
lyr_Togstationer_5.set('fieldLabels', {'Name': 'inline label - always visible', });
lyr_Togstationer_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});