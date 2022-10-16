require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",

    "esri/layers/FeatureLayer"

], function (esriConfig, Map, MapView, FeatureLayer) {

    esriConfig.apiKey = "AAPK207ed80aa65741f49bd0e50e559f22c3u3fBg8yzCSII7B2ML7cf4vyaDpvM9duMgIPK6n7MywF-qS27Lq95nash9vdx9dge";

    const map = new Map({
        basemap: "arcgis-topographic"
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-118.80543, 34.02700],
        zoom: 5
    });

    
    // Wind mills by england 
    const layer1 = new FeatureLayer({
        url: "https://services3.arcgis.com/nGV4jiurzcahJ9LV/ArcGIS/rest/services/Offshore_Wind_Crown_Estate_Scotland/FeatureServer/0"
    });

    map.add(layer1, 1);

    const layer2 = new FeatureLayer({
        url: "https://landscape10.arcgis.com/arcgis/rest/services/USA_Federal_Lands/ImageServer"
    });

    map.add(layer2, 2);

});