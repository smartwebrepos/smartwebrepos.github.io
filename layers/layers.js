var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Subsistricts2021_Pop_1 = new ol.format.GeoJSON();
var features_Subsistricts2021_Pop_1 = format_Subsistricts2021_Pop_1.readFeatures(json_Subsistricts2021_Pop_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Subsistricts2021_Pop_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Subsistricts2021_Pop_1.addFeatures(features_Subsistricts2021_Pop_1);
var lyr_Subsistricts2021_Pop_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Subsistricts2021_Pop_1,
maxResolution:280.0446615226196,
 
                style: style_Subsistricts2021_Pop_1,
                interactive: true,
                title: '<img src="styles/legend/Subsistricts2021_Pop_1.png" /> Subsistricts2021_Pop'
            });
var format_District2021_Pop_2 = new ol.format.GeoJSON();
var features_District2021_Pop_2 = format_District2021_Pop_2.readFeatures(json_District2021_Pop_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_District2021_Pop_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_District2021_Pop_2.addFeatures(features_District2021_Pop_2);
var lyr_District2021_Pop_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_District2021_Pop_2,
maxResolution:560.0893230452392,
 
                style: style_District2021_Pop_2,
                interactive: true,
                title: '<img src="styles/legend/District2021_Pop_2.png" /> District2021_Pop'
            });
var format_All_HFs_Data_3 = new ol.format.GeoJSON();
var features_All_HFs_Data_3 = format_All_HFs_Data_3.readFeatures(json_All_HFs_Data_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_All_HFs_Data_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_All_HFs_Data_3.addFeatures(features_All_HFs_Data_3);
var lyr_All_HFs_Data_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_All_HFs_Data_3,
maxResolution:560.0893230452392,
 
                style: style_All_HFs_Data_3,
                interactive: true,
                title: '<img src="styles/legend/All_HFs_Data_3.png" /> All_HFs_Data'
            });
var format_Population2021_4 = new ol.format.GeoJSON();
var features_Population2021_4 = format_Population2021_4.readFeatures(json_Population2021_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Population2021_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Population2021_4.addFeatures(features_Population2021_4);
var lyr_Population2021_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Population2021_4,
maxResolution:560.0893230452392,
 
                style: style_Population2021_4,
                interactive: true,
                title: '<img src="styles/legend/Population2021_4.png" /> Population2021'
            });
var format_Gov2021_Hospitals_5 = new ol.format.GeoJSON();
var features_Gov2021_Hospitals_5 = format_Gov2021_Hospitals_5.readFeatures(json_Gov2021_Hospitals_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gov2021_Hospitals_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gov2021_Hospitals_5.addFeatures(features_Gov2021_Hospitals_5);
var lyr_Gov2021_Hospitals_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gov2021_Hospitals_5,
maxResolution:1120.1786460904784,
 minResolution:560.0893230452392,

                style: style_Gov2021_Hospitals_5,
                interactive: true,
                title: '<img src="styles/legend/Gov2021_Hospitals_5.png" /> Gov2021_Hospitals'
            });
var format_Govs2021_All_HFs_6 = new ol.format.GeoJSON();
var features_Govs2021_All_HFs_6 = format_Govs2021_All_HFs_6.readFeatures(json_Govs2021_All_HFs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Govs2021_All_HFs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Govs2021_All_HFs_6.addFeatures(features_Govs2021_All_HFs_6);
var lyr_Govs2021_All_HFs_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Govs2021_All_HFs_6,
maxResolution:1120.1786460904784,
 minResolution:560.0893230452392,

                style: style_Govs2021_All_HFs_6,
                interactive: true,
                title: '<img src="styles/legend/Govs2021_All_HFs_6.png" /> Govs2021_All_HFs'
            });
var format_Gov2021_Birth_7 = new ol.format.GeoJSON();
var features_Gov2021_Birth_7 = format_Gov2021_Birth_7.readFeatures(json_Gov2021_Birth_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gov2021_Birth_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gov2021_Birth_7.addFeatures(features_Gov2021_Birth_7);
var lyr_Gov2021_Birth_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Gov2021_Birth_7,
maxResolution:1120.1786460904784,
 minResolution:560.0893230452392,

                style: style_Gov2021_Birth_7,
                interactive: true,
                title: '<img src="styles/legend/Gov2021_Birth_7.png" /> Gov2021_Birth'
            });
var format_Govs2021_Pop_8 = new ol.format.GeoJSON();
var features_Govs2021_Pop_8 = format_Govs2021_Pop_8.readFeatures(json_Govs2021_Pop_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Govs2021_Pop_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Govs2021_Pop_8.addFeatures(features_Govs2021_Pop_8);
var lyr_Govs2021_Pop_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Govs2021_Pop_8,
maxResolution:1120.1786460904784,
 minResolution:560.0893230452392,

                style: style_Govs2021_Pop_8,
                interactive: true,
                title: '<img src="styles/legend/Govs2021_Pop_8.png" /> Govs2021_Pop'
            });
var format_Yemen_9 = new ol.format.GeoJSON();
var features_Yemen_9 = format_Yemen_9.readFeatures(json_Yemen_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Yemen_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Yemen_9.addFeatures(features_Yemen_9);
var lyr_Yemen_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Yemen_9,
maxResolution:28004.466152261964,
 minResolution:1120.1786460904784,

                style: style_Yemen_9,
                interactive: true,
                title: '<img src="styles/legend/Yemen_9.png" /> Yemen'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Subsistricts2021_Pop_1.setVisible(true);lyr_District2021_Pop_2.setVisible(true);lyr_All_HFs_Data_3.setVisible(true);lyr_Population2021_4.setVisible(true);lyr_Gov2021_Hospitals_5.setVisible(true);lyr_Govs2021_All_HFs_6.setVisible(true);lyr_Gov2021_Birth_7.setVisible(true);lyr_Govs2021_Pop_8.setVisible(true);lyr_Yemen_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Subsistricts2021_Pop_1,lyr_District2021_Pop_2,lyr_All_HFs_Data_3,lyr_Population2021_4,lyr_Gov2021_Hospitals_5,lyr_Govs2021_All_HFs_6,lyr_Gov2021_Birth_7,lyr_Govs2021_Pop_8,lyr_Yemen_9];
lyr_Subsistricts2021_Pop_1.set('fieldAliases', {'Shape_Area': 'Shape_Area', 'Shape_Leng': 'Shape_Leng', 'NO': 'NO', 'Gov_code': 'Gov_code', 'Gov_AR': 'Gov_AR', 'Gov_Eng': 'Gov_Eng', 'Dist_code': 'Dist_code', 'Dist_AR': 'Dist_AR', 'Dist_Eng': 'Dist_Eng', 'SubD_Code': 'SubD_Code', 'SubD_Ar': 'SubD_Ar', 'SubD_eng': 'SubD_eng', 'Total_Pop': 'Total_Pop', 'Males': 'Males', 'Females': 'Females', 'Est_WRA': 'Est_WRA', 'EstPregW': 'EstPregW', 'Houses': 'Houses', 'chidern_un': 'chidern_under5', });
lyr_District2021_Pop_2.set('fieldAliases', {'NO': 'NO', 'Gov_code': 'Gov_code', 'Gov_AR': 'Gov_AR', 'Gov_Eng': 'Gov_Eng', 'Dist_code': 'Dist_code', 'Dist_AR': 'Dist_AR', 'Dist_Eng': 'Dist_Eng', 'Total_Pop': 'Total_Pop', 'Males': 'Males', 'Females': 'Females', 'Est_WRA': 'Est_WRA', 'EstPregW': 'EstPregW', 'Houses': 'Houses', 'chidern_04': 'chidern_under5', });
lyr_All_HFs_Data_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NO': 'NO', 'GOVEN': 'GOVEN', 'GOVAR': 'GOVAR', 'GovID': 'GovID', 'DistEN': 'DistEN', 'DistAR': 'DistAR', 'Dist_Code': 'Dist_Code', 'SubD_ar': 'SubD_ar', 'SubD_cide': 'SubD_cide', 'HFCODEfor': 'HFCODEfor', 'NameEng': 'NameEng', 'NameAra': 'NameAra', 'Type': 'Type', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'idun': 'idun', 'FacilityT': 'FacilityT', 'T0novillag': 'T0novillag', 'T1Popup30M': 'T1_Pop_up_30_Minute_car', 'T2Popup60M': 'T2_Pop_up_60_Minute_car', 'T3Popmore6': 'T3_Pop_more_60_Minute_car', 'T4AllTimeC': 'T4_All_Time_Car', 'T5Popup30M': 'T5_Pop_up_30_Minute_walking', 'T6Popup60M': 'T6_Pop_up_60_Minute_walking', 'T7Popup90M': 'T7_Pop_up_90_Minute_walking', 'T8Popmore9': 'T8_Pop_more_90_Minute_walking', 'T9AllTimeW': 'T9_All_Time_Walking', 'T10Popup2k': 'T10_Pop_up_2k', 'T11Popup5k': 'T11_Pop_up_5k', 'T12Popup7k': 'T12_Pop_up_7k', 'T13Popmore': 'T13_Pop_more_7k', 'T14AllDist': 'T14_All_Distance', 'T15AveTime': 'T15_Ave_Time_Car', 'T16AveTime': 'T16_Ave_Time_Walking', 'T17AveDist': 'T17_Ave_Distance', 'T18preup30': 'T18_pre_up_30_Minute_car', 'T19preup60': 'T19_pre_up_60_Minute_car', 'T20premore': 'T20_pre_more_60_Minute_car', 'T21AllTime': 'T21_All_Time_car_pre', 'T22preup30': 'T22_pre_up_30_Minute_walking', 'T23preup60': 'T23_pre_up_60_Minute_walking', 'T24preup90': 'T24_pre_up_90_Minute_walking', 'T25premore': 'T25_pre_more_90_Minute_walking', 'T26AllTime': 'T26_All_Time_Walking_pre', 'T27preup2k': 'T27_pre_up_2k', 'T28preup5k': 'T28_pre_up_5k', 'T29preup7k': 'T29_pre_up_7k', 'T30premore': 'T30_pre_more_7k', 'T31AllDist': 'T31_All_Distance_pre', 'T32Childup': 'T32_Child_up_30_Minute_car', 'T33Childup': 'T33_Child_up_60_Minute_car', 'T34Childmo': 'T34_Child_more_60_Minute_car', 'T35AllTime': 'T35_All_Time_car_Child', 'T36Childup': 'T36_Child_up_30_Minute_walking', 'T37Childup': 'T37_Child_up_60_Minute_walking', 'T38Childup': 'T38_Child_up_90_Minute_walking', 'T39Childmo': 'T39_Child_more_90_Minute_walking', 'T40AllTime': 'T40_All_Time_Walking_Child', 'T41Childup': 'T41_Child_up_2k', 'T42Childup': 'T42_Child_up_5k', 'T43Childup': 'T43_Child_up_7k', 'T44Childmo': 'T44_Child_more_7k', 'T45AllDist': 'T45_All_Distance_Child', 'T46TimeNea': 'T46_Time_Near_H', 'T47codeNea': 'T47_code_Near_T_H', 'T48NameHNe': 'T48_Name_H_Near_T', 'T49Distanc': 'T49_Distance_Near_H', 'T50codeNea': 'T50_code_Near_D_H', 'T51NameNea': 'T51_Name_Near_D_H', 'T52TimeNea': 'T52_Time_Near_Birth_HF', 'T53CodeNea': 'T53_Code_Near_T_Birth_HF', 'T54NameBir': 'T54_Name_Birth_HF_Near_T', 'T55Distanc': 'T55_Distance_Near_Birth_HF', 'T56codeNea': 'T56_code_Near_D_Birth_HF', 'T57NameNea': 'T57_Name_Near_D_Birth_HF', 'T58Time2ne': 'T58Time2ne', 'T59Codenea': 'T59Codenea', 'T60Namenea': 'T60Namenea', 'T61DISTCOD': 'T61DISTCOD', 'T62Namedis': 'T62Namedis', });
lyr_Population2021_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NO': 'NO', 'Gov_code': 'Gov_code', 'Gov_AR': 'Gov_AR', 'Gov_Eng': 'Gov_Eng', 'Dist_code': 'Dist_code', 'Dist_AR': 'Dist_AR', 'Dist_Eng': 'Dist_Eng', 'SubD_Code': 'SubD_Code', 'SubD_Ar': 'SubD_Ar', 'SubD_eng': 'SubD_eng', 'Code_3_Nei': 'Code_3_Nei', 'Neig_ar': 'Neig_ar', 'Neig_eng': 'Neig_eng', 'Code_4_mai': 'Code_4_mai', 'Vill_ar': 'Vill_ar', 'Vill_eng': 'Vill_eng', 'Code_5_all': 'Code_5_all', 'Alley_ar': 'Alley_ar', 'Alley_eng': 'Alley_eng', 'New_Pcode': 'New_Pcode', 'Old_PCode': 'Old_PCode', 'U_R_Code': 'U_R_Code', 'U_R__Ar': 'U_R__Ar', 'U_R_Eng': 'U_R_Eng', 'long': 'long', 'lat': 'lat', 'Total_Pop': 'Total_Pop', 'Males': 'Males', 'Females': 'Females', 'Est_WRA': 'Est_WRA', 'EstPregW': 'EstPregW', 'Houses': 'Houses', 'chidern_04': 'chidern_04', });
lyr_Gov2021_Hospitals_5.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NO': 'NO', 'Gov_code': 'Gov_code', 'Gov_AR': 'Gov_AR', 'Gov_Eng': 'Gov_Eng', 'Total_Pop': 'Total_Pop', 'Males': 'Males', 'Females': 'Females', 'Est_WRA': 'Est_WRA', 'EstPregW': 'EstPregW', 'Houses': 'Houses', 'chidern_04': 'chidern_04', 'T1_Pop_up_': 'T1_Pop_up_30_Minute_car', 'T1__': 'Percent_of_T1_per_total_pop', 'T2_Pop_up_': 'T2_Pop_up_60_Minute_car', 'T2__': 'Percent_of_T2_per_total_pop', 'T3_Pop_up_': 'T3_Pop_up_90_Minute_car', 'T3__': 'Percent_of_T3_per_total_pop', 'T4_Pop_up_': 'T4_Pop_up_120_Minute_car', 'T4__': 'Percent_of_T4_per_total_pop', 'T5_Pop_mor': 'T5_Pop_more_120_Minute_car', 'T5__': 'Percent_of_T5_per_total_pop', 'T6_Pop_up_': 'T6_Pop_up_5k', 'T6__': 'Percent_of_T6_per_total_pop', 'T7_Pop_up_': 'T7_Pop_up_10k', 'T7__': 'Percent_of_T7_per_total_pop', 'T8_Pop_up_': 'T8_Pop_up_15k', 'T8__': 'Percent_of_T8_per_total_pop', 'T9_Pop_up_': 'T9_Pop_up_20k', 'T9__': 'Percent_of_T9_per_total_pop', 'T10_Pop_up': 'T10_Pop_up_25k', 'T10__': 'Percent_of_T10_per_total_pop', 'T11_Pop_mo': 'T11_Pop_more_25k', 'T11__': 'Percent_of_T11_per_total_pop', 'T12_Ave_Ti': 'T12_Ave_Time_Car', 'T14_Ave_Di': 'T14_Ave_Distance', 'T15_Pre_up': 'T15_Pre_up_30_Minute_car', 'T15__': 'Percent_of_T15_per_total_pop', 'T16_Pre_up': 'T16_Pre_up_60_Minute_car', 'T17_Pre_up': 'T17_Pre_up_90_Minute_car', 'T18_Pre_up': 'T18_Pre_up_120_Minute_car', 'T19_Pre_mo': 'T19_Pre_more_120_Minute_car', 'T20_Pre_up': 'T20_Pre_up_5k', 'T21_Pre_up': 'T21_Pre_up_10k', 'T22_Pre_up': 'T22_Pre_up_15k', 'T23_Pre_up': 'T23_Pre_up_20k', 'T24_Pre_up': 'T24_Pre_up_25k', 'T25_Pre_mo': 'T25_Pre_more_25k', 'T26_Child_': 'T26_Child_up_30_Minute_car', 'T26__': 'Percent_of_T26_per_total_pop', 'T27_Child_': 'T27_Child_up_60_Minute_car', 'T28_Child_': 'T28_Child_up_90_Minute_car', 'T29_Child_': 'T29_Child_up_120_Minute_car', 'T30_Child_': 'T30_Child_more_120_Minute_car', 'T31_Child_': 'T31_Child_up_5k', 'T32_Child_': 'T32_Child_up_10k', 'T33_Child_': 'T33_Child_up_15k', 'T34_Child_': 'T34_Child_up_20k', 'T35_Child_': 'T35_Child_up_25k', 'T36_Child_': 'T36_Child_more_25k', });
lyr_Govs2021_All_HFs_6.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NO': 'NO', 'Gov_code': 'Gov_code', 'Gov_AR': 'Gov_AR', 'Gov_Eng': 'Gov_Eng', 'Total_Pop': 'Total_Pop', 'Males': 'Males', 'Females': 'Females', 'Est_WRA': 'Est_WRA', 'EstPregW': 'EstPregW', 'Houses': 'Houses', 'chidern_04': 'chidern_04', 'T1_Pop_up_': 'T1_Pop_up_30_Minute_car', 'T1__': 'Percent_of_T1_per_total_pop', 'T2_Pop_up_': 'T2_Pop_up_60_Minute_car', 'T2__': 'Percent_of_T2_per_total_pop', 'T3_Pop_mor': 'T3_Pop_more_60_Minute_car', 'T3__': 'Percent_of_T3_per_total_pop', 'T4_Pop_up_': 'T4_Pop_up_30_Minute_walking', 'T4__': 'Percent of T4 per total_pop', 'T5_Pop_up_': 'T5_Pop_up_60_Minute_walking', 'T5__': 'Percent_of_T5_per_total_pop', 'T6_Pop_up_': 'T6_Pop_up_90_Minute_walking', 'T6__': 'Percent_of_T6_per_total_pop', 'T7_Pop_mor': 'T7_Pop_more_90_Minute_walking', 'T7__': 'Percent_of_T7_per_total_pop', 'T8_Pop_up_': 'T8_Pop_up_2k', 'T8__': 'Percent of T8 per total_pop', 'T9_Pop_up_': 'T9_Pop_up_5k', 'T9__': 'Percent_of_T9_per_total_pop', 'T10_Pop_up': 'T10_Pop_up_7k', 'T10__': 'Percent_of_T10_per_total_pop', 'T11_Pop_mo': 'T11_Pop_more_7k', 'T11__': 'Percent_of_T11_per_total_pop', 'T12_Ave_Ti': 'T12_Ave_Time_Car', 'T13_Ave_Ti': 'T13_Ave_Time_Walking', 'T14_Ave_Di': 'T14_Ave_Distance', 'T15_pre_up': 'T15_pre_up_30_Minute_car', 'T15__': 'Percent_of_T15_per_total_pop', 'T16_pre_up': 'T16_pre_up_60_Minute_car', 'T17_pre_mo': 'T17_pre_more_60_Minute_car', 'T18_pre_up': 'T18_pre_up_30_Minute_walking', 'T18_': 'Percent_of_T18_per_total_pop', 'T19_pre_up': 'T19_pre_up_60_Minute_walking', 'T20_pre_up': 'T20_pre_up_90_Minute_walking', 'T21_pre_mo': 'T21_pre_more_90_Minute_walking', 'T22_pre_up': 'T22_pre_up_2k', 'T22_': 'Percent_of_T22_per_total_pop', 'T23_pre_up': 'T23_pre_up_5k', 'T24_pre_up': 'T24_pre_up_7k', 'T25_pre_mo': 'T25_pre_more_7k', 'T26_Child_': 'T26_Child_up_30_Minute_car', 'T26__': 'Percent_of_T26_per_total_pop', 'T27_Child_': 'T27_Child_up_60_Minute_car', 'T28_Child_': 'T28_Child_more_60_Minute_car', 'T29_Child_': 'T29_Child_up_30_Minute_walking', 'T29_': 'Percent_of_T29_per_total_pop', 'T30_Child_': 'T30_Child_up_60_Minute_walking', 'T31_Child_': 'T31_Child_up_90_Minute_walking', 'T32_Child_': 'T32_Child_more_90_Minute_walking', 'T33_Child_': 'T33_Child_up_2k', 'T33_': 'Percent_of_T33_per_total_pop', 'T34_Child_': 'T34_Child_up_5k', 'T35_Child_': 'T35_Child_up_7k', 'T36_Child_': 'T36_Child_more_7k', });
lyr_Gov2021_Birth_7.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NO': 'NO', 'Gov_code': 'Gov_code', 'Gov_AR': 'Gov_AR', 'Gov_Eng': 'Gov_Eng', 'Total_Pop': 'Total_Pop', 'Males': 'Males', 'Females': 'Females', 'Est_WRA': 'Est_WRA', 'EstPregW': 'EstPregW', 'Houses': 'Houses', 'chidern_04': 'chidern_04', 'T1_Pop_up_': 'T1_Pop_up_30_Minute_car', 'T1__': 'Percent_of_T1_per_total_pop', 'T2_Pop_up_': 'T2_Pop_up_60_Minute_car', 'T2__': 'Percent_of_T2_per_total_pop', 'T3_Pop_up_': 'T3_Pop_up_90_Minute_car', 'T3__': 'Percent_of_T3_per_total_pop', 'T4_Pop_up_': 'T4_Pop_up_120_Minute_car', 'T4__': 'Percent_of_T4_per_total_pop', 'T5_Pop_mor': 'T5_Pop_more_120_Minute_car', 'T5__': 'Percent_of_T5_per_total_pop', 'T6_Pop_up_': 'T6_Pop_up_5k', 'T6__': 'Percent_of_T6_per_total_pop', 'T7_Pop_up_': 'T7_Pop_up_5k', 'T7__': 'Percent_of_T7_per_total_pop', 'T8_Pop_up_': 'T8_Pop_up_10k', 'T8__': 'Percent_of_T8_per_total_pop', 'T9_Pop_up_': 'T9_Pop_up_20k', 'T9__': 'Percent_of_T9_per_total_pop', 'T10_Pop_up': 'T10_Pop_up_25k', 'T10__': 'Percent_of_T10_per_total_pop', 'T11_Pop_mo': 'T11_Pop_more_25k', 'T11__': 'Percent_of_T11_per_total_pop', 'T12_Ave_Ti': 'T12_Ave_Time_Car', 'T14_Ave_Di': 'T14_Ave_Distance', 'T15_Pre_up': 'T15_Pre_up_30_Minute_car', 'T15__': 'Percent_of_T15_per_total_pop', 'T16_Pre_up': 'T16_Pre_up_60_Minute_car', 'T17_Pre_up': 'T17_Pre_up_90_Minute_car', 'T18_Pre_up': 'T18_Pre_up_120_Minute_car', 'T19_Pre_mo': 'T19_Pre_more_120_Minute_car', 'T20_Pre_up': 'T20_Pre_up_5k', 'T21_Pre_up': 'T21_Pre_up_10k', 'T22_Pre_up': 'T22_Pre_up_15k', 'T23_Pre_up': 'T23_Pre_up_20k', 'T24_Pre_up': 'T24_Pre_up_25k', 'T25_Pre_mo': 'T25_Pre_more_25k', 'T26_Child_': 'T26_Child_up_30_Minute_car', 'T26__': 'Percent_of_T26_per_total_pop', 'T27_Child_': 'T27_Child_up_60_Minute_car', 'T28_Child_': 'T28_Child_up_90_Minute_car', 'T29_Child_': 'T29_Child_up_120_Minute_car', 'T30_Child_': 'T30_Child_more_120_Minute_car', 'T31_Child_': 'T31_Child_up_5k', 'T32_Child_': 'T32_Child_up_10k', 'T33_Child_': 'T33_Child_up_15k', 'T34_Child_': 'T34_Child_up_20k', 'T35_Child_': 'T35_Child_up_25k', 'T36_Child_': 'T36_Child_more_25k', });
lyr_Govs2021_Pop_8.set('fieldAliases', {'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'NO': 'NO', 'Gov_code': 'Gov_code', 'Gov_AR': 'Gov_AR', 'Gov_Eng': 'Gov_Eng', 'Total_Pop': 'Total_Pop', 'Males': 'Males', 'Females': 'Females', 'Est_WRA': 'Est_WRA', 'EstPregW': 'EstPregW', 'Houses': 'Houses', 'chidern_04': 'children_under5', });
lyr_Yemen_9.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'GOV_AR': 'GOV ARabic', 'GOV_EN': 'GOV_EN', 'GOV_CODE': 'GOV_CODE', 'House2017': 'House2017', 'Male2017': 'Male2017', 'Female2017': 'Female2017', 'Total2017': 'Total2017', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_Subsistricts2021_Pop_1.set('fieldImages', {'Shape_Area': 'Hidden', 'Shape_Leng': 'Hidden', 'NO': 'TextEdit', 'Gov_code': 'TextEdit', 'Gov_AR': 'TextEdit', 'Gov_Eng': 'TextEdit', 'Dist_code': 'TextEdit', 'Dist_AR': 'TextEdit', 'Dist_Eng': 'TextEdit', 'SubD_Code': 'TextEdit', 'SubD_Ar': 'TextEdit', 'SubD_eng': 'TextEdit', 'Total_Pop': 'TextEdit', 'Males': 'TextEdit', 'Females': 'TextEdit', 'Est_WRA': 'TextEdit', 'EstPregW': 'TextEdit', 'Houses': 'TextEdit', 'chidern_un': 'TextEdit', });
lyr_District2021_Pop_2.set('fieldImages', {'NO': 'TextEdit', 'Gov_code': 'TextEdit', 'Gov_AR': 'TextEdit', 'Gov_Eng': 'TextEdit', 'Dist_code': 'TextEdit', 'Dist_AR': 'TextEdit', 'Dist_Eng': 'TextEdit', 'Total_Pop': 'TextEdit', 'Males': 'TextEdit', 'Females': 'TextEdit', 'Est_WRA': 'TextEdit', 'EstPregW': 'TextEdit', 'Houses': 'TextEdit', 'chidern_04': 'TextEdit', });
lyr_All_HFs_Data_3.set('fieldImages', {'OBJECTID': 'Hidden', 'NO': 'Hidden', 'GOVEN': 'TextEdit', 'GOVAR': 'TextEdit', 'GovID': 'TextEdit', 'DistEN': 'TextEdit', 'DistAR': 'TextEdit', 'Dist_Code': 'TextEdit', 'SubD_ar': 'TextEdit', 'SubD_cide': 'TextEdit', 'HFCODEfor': 'TextEdit', 'NameEng': 'TextEdit', 'NameAra': 'TextEdit', 'Type': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', 'idun': 'TextEdit', 'FacilityT': 'TextEdit', 'T0novillag': 'TextEdit', 'T1Popup30M': 'TextEdit', 'T2Popup60M': 'TextEdit', 'T3Popmore6': 'TextEdit', 'T4AllTimeC': 'TextEdit', 'T5Popup30M': 'TextEdit', 'T6Popup60M': 'TextEdit', 'T7Popup90M': 'TextEdit', 'T8Popmore9': 'TextEdit', 'T9AllTimeW': 'TextEdit', 'T10Popup2k': 'TextEdit', 'T11Popup5k': 'TextEdit', 'T12Popup7k': 'TextEdit', 'T13Popmore': 'TextEdit', 'T14AllDist': 'TextEdit', 'T15AveTime': 'TextEdit', 'T16AveTime': 'TextEdit', 'T17AveDist': 'TextEdit', 'T18preup30': 'TextEdit', 'T19preup60': 'TextEdit', 'T20premore': 'TextEdit', 'T21AllTime': 'TextEdit', 'T22preup30': 'TextEdit', 'T23preup60': 'TextEdit', 'T24preup90': 'TextEdit', 'T25premore': 'TextEdit', 'T26AllTime': 'TextEdit', 'T27preup2k': 'TextEdit', 'T28preup5k': 'TextEdit', 'T29preup7k': 'TextEdit', 'T30premore': 'TextEdit', 'T31AllDist': 'TextEdit', 'T32Childup': 'TextEdit', 'T33Childup': 'TextEdit', 'T34Childmo': 'TextEdit', 'T35AllTime': 'TextEdit', 'T36Childup': 'TextEdit', 'T37Childup': 'TextEdit', 'T38Childup': 'TextEdit', 'T39Childmo': 'TextEdit', 'T40AllTime': 'TextEdit', 'T41Childup': 'TextEdit', 'T42Childup': 'TextEdit', 'T43Childup': 'TextEdit', 'T44Childmo': 'TextEdit', 'T45AllDist': 'TextEdit', 'T46TimeNea': 'TextEdit', 'T47codeNea': 'TextEdit', 'T48NameHNe': 'TextEdit', 'T49Distanc': 'TextEdit', 'T50codeNea': 'TextEdit', 'T51NameNea': 'TextEdit', 'T52TimeNea': 'TextEdit', 'T53CodeNea': 'TextEdit', 'T54NameBir': 'TextEdit', 'T55Distanc': 'TextEdit', 'T56codeNea': 'TextEdit', 'T57NameNea': 'TextEdit', 'T58Time2ne': 'TextEdit', 'T59Codenea': 'TextEdit', 'T60Namenea': 'TextEdit', 'T61DISTCOD': 'TextEdit', 'T62Namedis': 'TextEdit', });
lyr_Population2021_4.set('fieldImages', {'OBJECTID': 'Hidden', 'NO': 'TextEdit', 'Gov_code': 'TextEdit', 'Gov_AR': 'Hidden', 'Gov_Eng': 'TextEdit', 'Dist_code': 'TextEdit', 'Dist_AR': 'Hidden', 'Dist_Eng': 'TextEdit', 'SubD_Code': 'TextEdit', 'SubD_Ar': 'Hidden', 'SubD_eng': 'TextEdit', 'Code_3_Nei': 'TextEdit', 'Neig_ar': 'TextEdit', 'Neig_eng': 'TextEdit', 'Code_4_mai': 'TextEdit', 'Vill_ar': 'TextEdit', 'Vill_eng': 'TextEdit', 'Code_5_all': 'TextEdit', 'Alley_ar': 'TextEdit', 'Alley_eng': 'TextEdit', 'New_Pcode': 'TextEdit', 'Old_PCode': 'Hidden', 'U_R_Code': 'Hidden', 'U_R__Ar': 'TextEdit', 'U_R_Eng': 'TextEdit', 'long': 'Hidden', 'lat': 'Hidden', 'Total_Pop': 'TextEdit', 'Males': 'TextEdit', 'Females': 'TextEdit', 'Est_WRA': 'TextEdit', 'EstPregW': 'TextEdit', 'Houses': 'TextEdit', 'chidern_04': 'TextEdit', });
lyr_Gov2021_Hospitals_5.set('fieldImages', {'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'NO': 'Hidden', 'Gov_code': 'Hidden', 'Gov_AR': 'Hidden', 'Gov_Eng': 'Hidden', 'Total_Pop': 'Hidden', 'Males': 'Hidden', 'Females': 'Hidden', 'Est_WRA': 'Hidden', 'EstPregW': 'Hidden', 'Houses': 'Hidden', 'chidern_04': 'Hidden', 'T1_Pop_up_': 'TextEdit', 'T1__': 'TextEdit', 'T2_Pop_up_': 'TextEdit', 'T2__': 'TextEdit', 'T3_Pop_up_': 'TextEdit', 'T3__': 'TextEdit', 'T4_Pop_up_': 'TextEdit', 'T4__': 'TextEdit', 'T5_Pop_mor': 'TextEdit', 'T5__': 'TextEdit', 'T6_Pop_up_': 'TextEdit', 'T6__': 'TextEdit', 'T7_Pop_up_': 'TextEdit', 'T7__': 'TextEdit', 'T8_Pop_up_': 'TextEdit', 'T8__': 'TextEdit', 'T9_Pop_up_': 'TextEdit', 'T9__': 'TextEdit', 'T10_Pop_up': 'TextEdit', 'T10__': 'TextEdit', 'T11_Pop_mo': 'TextEdit', 'T11__': 'TextEdit', 'T12_Ave_Ti': 'TextEdit', 'T14_Ave_Di': 'TextEdit', 'T15_Pre_up': 'TextEdit', 'T15__': 'TextEdit', 'T16_Pre_up': 'TextEdit', 'T17_Pre_up': 'TextEdit', 'T18_Pre_up': 'TextEdit', 'T19_Pre_mo': 'TextEdit', 'T20_Pre_up': 'TextEdit', 'T21_Pre_up': 'TextEdit', 'T22_Pre_up': 'TextEdit', 'T23_Pre_up': 'TextEdit', 'T24_Pre_up': 'TextEdit', 'T25_Pre_mo': 'TextEdit', 'T26_Child_': 'TextEdit', 'T26__': 'TextEdit', 'T27_Child_': 'TextEdit', 'T28_Child_': 'TextEdit', 'T29_Child_': 'TextEdit', 'T30_Child_': 'TextEdit', 'T31_Child_': 'TextEdit', 'T32_Child_': 'TextEdit', 'T33_Child_': 'TextEdit', 'T34_Child_': 'TextEdit', 'T35_Child_': 'TextEdit', 'T36_Child_': 'TextEdit', });
lyr_Govs2021_All_HFs_6.set('fieldImages', {'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'NO': 'Hidden', 'Gov_code': 'Hidden', 'Gov_AR': 'Hidden', 'Gov_Eng': 'Hidden', 'Total_Pop': 'Hidden', 'Males': 'Hidden', 'Females': 'Hidden', 'Est_WRA': 'Hidden', 'EstPregW': 'Hidden', 'Houses': 'Hidden', 'chidern_04': 'Hidden', 'T1_Pop_up_': 'TextEdit', 'T1__': 'TextEdit', 'T2_Pop_up_': 'TextEdit', 'T2__': 'TextEdit', 'T3_Pop_mor': 'TextEdit', 'T3__': 'TextEdit', 'T4_Pop_up_': 'TextEdit', 'T4__': 'TextEdit', 'T5_Pop_up_': 'TextEdit', 'T5__': 'TextEdit', 'T6_Pop_up_': 'TextEdit', 'T6__': 'TextEdit', 'T7_Pop_mor': 'TextEdit', 'T7__': 'TextEdit', 'T8_Pop_up_': 'TextEdit', 'T8__': 'TextEdit', 'T9_Pop_up_': 'TextEdit', 'T9__': 'TextEdit', 'T10_Pop_up': 'TextEdit', 'T10__': 'TextEdit', 'T11_Pop_mo': 'TextEdit', 'T11__': 'TextEdit', 'T12_Ave_Ti': 'TextEdit', 'T13_Ave_Ti': 'TextEdit', 'T14_Ave_Di': 'TextEdit', 'T15_pre_up': 'TextEdit', 'T15__': 'TextEdit', 'T16_pre_up': 'TextEdit', 'T17_pre_mo': 'TextEdit', 'T18_pre_up': 'TextEdit', 'T18_': 'TextEdit', 'T19_pre_up': 'TextEdit', 'T20_pre_up': 'TextEdit', 'T21_pre_mo': 'TextEdit', 'T22_pre_up': 'TextEdit', 'T22_': 'ValueRelation', 'T23_pre_up': 'TextEdit', 'T24_pre_up': 'TextEdit', 'T25_pre_mo': 'TextEdit', 'T26_Child_': 'TextEdit', 'T26__': 'TextEdit', 'T27_Child_': 'TextEdit', 'T28_Child_': 'TextEdit', 'T29_Child_': 'TextEdit', 'T29_': 'TextEdit', 'T30_Child_': 'TextEdit', 'T31_Child_': 'TextEdit', 'T32_Child_': 'TextEdit', 'T33_Child_': 'TextEdit', 'T33_': 'TextEdit', 'T34_Child_': 'TextEdit', 'T35_Child_': 'TextEdit', 'T36_Child_': 'TextEdit', });
lyr_Gov2021_Birth_7.set('fieldImages', {'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'NO': 'Hidden', 'Gov_code': 'Hidden', 'Gov_AR': 'Hidden', 'Gov_Eng': 'Hidden', 'Total_Pop': 'Hidden', 'Males': 'Hidden', 'Females': 'Hidden', 'Est_WRA': 'Hidden', 'EstPregW': 'Hidden', 'Houses': 'Hidden', 'chidern_04': 'Hidden', 'T1_Pop_up_': 'TextEdit', 'T1__': 'TextEdit', 'T2_Pop_up_': 'TextEdit', 'T2__': 'TextEdit', 'T3_Pop_up_': 'TextEdit', 'T3__': 'TextEdit', 'T4_Pop_up_': 'TextEdit', 'T4__': 'TextEdit', 'T5_Pop_mor': 'TextEdit', 'T5__': 'TextEdit', 'T6_Pop_up_': 'TextEdit', 'T6__': 'TextEdit', 'T7_Pop_up_': 'TextEdit', 'T7__': 'TextEdit', 'T8_Pop_up_': 'TextEdit', 'T8__': 'TextEdit', 'T9_Pop_up_': 'TextEdit', 'T9__': 'TextEdit', 'T10_Pop_up': 'TextEdit', 'T10__': 'TextEdit', 'T11_Pop_mo': 'TextEdit', 'T11__': 'TextEdit', 'T12_Ave_Ti': 'TextEdit', 'T14_Ave_Di': 'TextEdit', 'T15_Pre_up': 'TextEdit', 'T15__': 'TextEdit', 'T16_Pre_up': 'TextEdit', 'T17_Pre_up': 'TextEdit', 'T18_Pre_up': 'TextEdit', 'T19_Pre_mo': 'TextEdit', 'T20_Pre_up': 'TextEdit', 'T21_Pre_up': 'TextEdit', 'T22_Pre_up': 'TextEdit', 'T23_Pre_up': 'TextEdit', 'T24_Pre_up': 'TextEdit', 'T25_Pre_mo': 'TextEdit', 'T26_Child_': 'TextEdit', 'T26__': 'TextEdit', 'T27_Child_': 'TextEdit', 'T28_Child_': 'TextEdit', 'T29_Child_': 'TextEdit', 'T30_Child_': 'TextEdit', 'T31_Child_': 'TextEdit', 'T32_Child_': 'TextEdit', 'T33_Child_': 'TextEdit', 'T34_Child_': 'TextEdit', 'T35_Child_': 'TextEdit', 'T36_Child_': 'TextEdit', });
lyr_Govs2021_Pop_8.set('fieldImages', {'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', 'NO': 'Hidden', 'Gov_code': 'TextEdit', 'Gov_AR': 'TextEdit', 'Gov_Eng': 'TextEdit', 'Total_Pop': 'TextEdit', 'Males': 'TextEdit', 'Females': 'TextEdit', 'Est_WRA': 'TextEdit', 'EstPregW': 'TextEdit', 'Houses': 'TextEdit', 'chidern_04': 'TextEdit', });
lyr_Yemen_9.set('fieldImages', {'OBJECTID_1': 'Hidden', 'GOV_AR': 'TextEdit', 'GOV_EN': 'TextEdit', 'GOV_CODE': 'TextEdit', 'House2017': 'TextEdit', 'Male2017': 'TextEdit', 'Female2017': 'TextEdit', 'Total2017': 'TextEdit', 'Shape_Leng': 'Hidden', 'Shape_Area': 'Hidden', });
lyr_Subsistricts2021_Pop_1.set('fieldLabels', {'NO': 'inline label', 'Gov_code': 'inline label', 'Gov_AR': 'inline label', 'Gov_Eng': 'inline label', 'Dist_code': 'inline label', 'Dist_AR': 'inline label', 'Dist_Eng': 'inline label', 'SubD_Code': 'inline label', 'SubD_Ar': 'inline label', 'SubD_eng': 'inline label', 'Total_Pop': 'inline label', 'Males': 'inline label', 'Females': 'inline label', 'Est_WRA': 'inline label', 'EstPregW': 'inline label', 'Houses': 'inline label', 'chidern_un': 'inline label', });
lyr_District2021_Pop_2.set('fieldLabels', {'NO': 'inline label', 'Gov_code': 'inline label', 'Gov_AR': 'inline label', 'Gov_Eng': 'inline label', 'Dist_code': 'inline label', 'Dist_AR': 'inline label', 'Dist_Eng': 'inline label', 'Total_Pop': 'inline label', 'Males': 'inline label', 'Females': 'inline label', 'Est_WRA': 'inline label', 'EstPregW': 'inline label', 'Houses': 'inline label', 'chidern_04': 'inline label', });
lyr_All_HFs_Data_3.set('fieldLabels', {'GOVEN': 'inline label', 'GOVAR': 'inline label', 'GovID': 'inline label', 'DistEN': 'inline label', 'DistAR': 'inline label', 'Dist_Code': 'inline label', 'SubD_ar': 'inline label', 'SubD_cide': 'inline label', 'HFCODEfor': 'inline label', 'NameEng': 'inline label', 'NameAra': 'inline label', 'Type': 'inline label', 'idun': 'inline label', 'FacilityT': 'inline label', 'T0novillag': 'inline label', 'T1Popup30M': 'inline label', 'T2Popup60M': 'inline label', 'T3Popmore6': 'inline label', 'T4AllTimeC': 'inline label', 'T5Popup30M': 'inline label', 'T6Popup60M': 'inline label', 'T7Popup90M': 'inline label', 'T8Popmore9': 'inline label', 'T9AllTimeW': 'inline label', 'T10Popup2k': 'inline label', 'T11Popup5k': 'inline label', 'T12Popup7k': 'inline label', 'T13Popmore': 'inline label', 'T14AllDist': 'inline label', 'T15AveTime': 'inline label', 'T16AveTime': 'inline label', 'T17AveDist': 'inline label', 'T18preup30': 'inline label', 'T19preup60': 'inline label', 'T20premore': 'inline label', 'T21AllTime': 'inline label', 'T22preup30': 'inline label', 'T23preup60': 'inline label', 'T24preup90': 'inline label', 'T25premore': 'inline label', 'T26AllTime': 'inline label', 'T27preup2k': 'inline label', 'T28preup5k': 'inline label', 'T29preup7k': 'inline label', 'T30premore': 'inline label', 'T31AllDist': 'inline label', 'T32Childup': 'inline label', 'T33Childup': 'inline label', 'T34Childmo': 'inline label', 'T35AllTime': 'inline label', 'T36Childup': 'inline label', 'T37Childup': 'inline label', 'T38Childup': 'inline label', 'T39Childmo': 'inline label', 'T40AllTime': 'inline label', 'T41Childup': 'inline label', 'T42Childup': 'inline label', 'T43Childup': 'inline label', 'T44Childmo': 'inline label', 'T45AllDist': 'inline label', 'T46TimeNea': 'inline label', 'T47codeNea': 'inline label', 'T48NameHNe': 'inline label', 'T49Distanc': 'inline label', 'T50codeNea': 'inline label', 'T51NameNea': 'inline label', 'T52TimeNea': 'inline label', 'T53CodeNea': 'inline label', 'T54NameBir': 'inline label', 'T55Distanc': 'inline label', 'T56codeNea': 'inline label', 'T57NameNea': 'inline label', 'T58Time2ne': 'inline label', 'T59Codenea': 'inline label', 'T60Namenea': 'inline label', 'T61DISTCOD': 'inline label', 'T62Namedis': 'inline label', });
lyr_Population2021_4.set('fieldLabels', {'NO': 'inline label', 'Gov_code': 'inline label', 'Gov_Eng': 'inline label', 'Dist_code': 'inline label', 'Dist_Eng': 'inline label', 'SubD_Code': 'inline label', 'SubD_eng': 'inline label', 'Code_3_Nei': 'inline label', 'Neig_ar': 'inline label', 'Neig_eng': 'inline label', 'Code_4_mai': 'inline label', 'Vill_ar': 'inline label', 'Vill_eng': 'inline label', 'Code_5_all': 'inline label', 'Alley_ar': 'inline label', 'Alley_eng': 'inline label', 'New_Pcode': 'inline label', 'U_R__Ar': 'inline label', 'U_R_Eng': 'inline label', 'Total_Pop': 'inline label', 'Males': 'inline label', 'Females': 'inline label', 'Est_WRA': 'inline label', 'EstPregW': 'inline label', 'Houses': 'inline label', 'chidern_04': 'inline label', });
lyr_Gov2021_Hospitals_5.set('fieldLabels', {'T1_Pop_up_': 'inline label', 'T1__': 'inline label', 'T2_Pop_up_': 'inline label', 'T2__': 'inline label', 'T3_Pop_up_': 'inline label', 'T3__': 'inline label', 'T4_Pop_up_': 'inline label', 'T4__': 'inline label', 'T5_Pop_mor': 'inline label', 'T5__': 'inline label', 'T6_Pop_up_': 'inline label', 'T6__': 'inline label', 'T7_Pop_up_': 'inline label', 'T7__': 'inline label', 'T8_Pop_up_': 'inline label', 'T8__': 'inline label', 'T9_Pop_up_': 'inline label', 'T9__': 'inline label', 'T10_Pop_up': 'inline label', 'T10__': 'inline label', 'T11_Pop_mo': 'inline label', 'T11__': 'inline label', 'T12_Ave_Ti': 'inline label', 'T14_Ave_Di': 'inline label', 'T15_Pre_up': 'inline label', 'T15__': 'inline label', 'T16_Pre_up': 'inline label', 'T17_Pre_up': 'inline label', 'T18_Pre_up': 'inline label', 'T19_Pre_mo': 'inline label', 'T20_Pre_up': 'inline label', 'T21_Pre_up': 'inline label', 'T22_Pre_up': 'inline label', 'T23_Pre_up': 'inline label', 'T24_Pre_up': 'inline label', 'T25_Pre_mo': 'inline label', 'T26_Child_': 'inline label', 'T26__': 'inline label', 'T27_Child_': 'inline label', 'T28_Child_': 'inline label', 'T29_Child_': 'inline label', 'T30_Child_': 'inline label', 'T31_Child_': 'inline label', 'T32_Child_': 'inline label', 'T33_Child_': 'inline label', 'T34_Child_': 'inline label', 'T35_Child_': 'inline label', 'T36_Child_': 'inline label', });
lyr_Govs2021_All_HFs_6.set('fieldLabels', {'T1_Pop_up_': 'inline label', 'T1__': 'inline label', 'T2_Pop_up_': 'inline label', 'T2__': 'inline label', 'T3_Pop_mor': 'inline label', 'T3__': 'inline label', 'T4_Pop_up_': 'inline label', 'T4__': 'inline label', 'T5_Pop_up_': 'inline label', 'T5__': 'inline label', 'T6_Pop_up_': 'inline label', 'T6__': 'inline label', 'T7_Pop_mor': 'inline label', 'T7__': 'inline label', 'T8_Pop_up_': 'inline label', 'T8__': 'inline label', 'T9_Pop_up_': 'inline label', 'T9__': 'inline label', 'T10_Pop_up': 'inline label', 'T10__': 'inline label', 'T11_Pop_mo': 'inline label', 'T11__': 'inline label', 'T12_Ave_Ti': 'inline label', 'T13_Ave_Ti': 'inline label', 'T14_Ave_Di': 'inline label', 'T15_pre_up': 'inline label', 'T15__': 'inline label', 'T16_pre_up': 'inline label', 'T17_pre_mo': 'inline label', 'T18_pre_up': 'inline label', 'T18_': 'inline label', 'T19_pre_up': 'inline label', 'T20_pre_up': 'inline label', 'T21_pre_mo': 'inline label', 'T22_pre_up': 'inline label', 'T22_': 'inline label', 'T23_pre_up': 'inline label', 'T24_pre_up': 'inline label', 'T25_pre_mo': 'inline label', 'T26_Child_': 'inline label', 'T26__': 'inline label', 'T27_Child_': 'inline label', 'T28_Child_': 'inline label', 'T29_Child_': 'inline label', 'T29_': 'inline label', 'T30_Child_': 'inline label', 'T31_Child_': 'inline label', 'T32_Child_': 'inline label', 'T33_Child_': 'inline label', 'T33_': 'inline label', 'T34_Child_': 'inline label', 'T35_Child_': 'inline label', 'T36_Child_': 'inline label', });
lyr_Gov2021_Birth_7.set('fieldLabels', {'T1_Pop_up_': 'inline label', 'T1__': 'inline label', 'T2_Pop_up_': 'inline label', 'T2__': 'inline label', 'T3_Pop_up_': 'inline label', 'T3__': 'inline label', 'T4_Pop_up_': 'inline label', 'T4__': 'inline label', 'T5_Pop_mor': 'inline label', 'T5__': 'inline label', 'T6_Pop_up_': 'inline label', 'T6__': 'inline label', 'T7_Pop_up_': 'inline label', 'T7__': 'inline label', 'T8_Pop_up_': 'inline label', 'T8__': 'inline label', 'T9_Pop_up_': 'inline label', 'T9__': 'inline label', 'T10_Pop_up': 'inline label', 'T10__': 'inline label', 'T11_Pop_mo': 'inline label', 'T11__': 'inline label', 'T12_Ave_Ti': 'inline label', 'T14_Ave_Di': 'inline label', 'T15_Pre_up': 'inline label', 'T15__': 'inline label', 'T16_Pre_up': 'inline label', 'T17_Pre_up': 'inline label', 'T18_Pre_up': 'inline label', 'T19_Pre_mo': 'inline label', 'T20_Pre_up': 'inline label', 'T21_Pre_up': 'inline label', 'T22_Pre_up': 'inline label', 'T23_Pre_up': 'inline label', 'T24_Pre_up': 'inline label', 'T25_Pre_mo': 'inline label', 'T26_Child_': 'inline label', 'T26__': 'inline label', 'T27_Child_': 'inline label', 'T28_Child_': 'inline label', 'T29_Child_': 'inline label', 'T30_Child_': 'inline label', 'T31_Child_': 'inline label', 'T32_Child_': 'inline label', 'T33_Child_': 'inline label', 'T34_Child_': 'inline label', 'T35_Child_': 'inline label', 'T36_Child_': 'inline label', });
lyr_Govs2021_Pop_8.set('fieldLabels', {'Gov_code': 'inline label', 'Gov_AR': 'inline label', 'Gov_Eng': 'inline label', 'Total_Pop': 'inline label', 'Males': 'inline label', 'Females': 'inline label', 'Est_WRA': 'inline label', 'EstPregW': 'inline label', 'Houses': 'inline label', 'chidern_04': 'inline label', });
lyr_Yemen_9.set('fieldLabels', {'GOV_AR': 'inline label', 'GOV_EN': 'inline label', 'GOV_CODE': 'inline label', 'House2017': 'inline label', 'Male2017': 'inline label', 'Female2017': 'inline label', 'Total2017': 'inline label', });
lyr_Yemen_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});