


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
    document.getElementById('Energy').onclick = function () {
        const layer1 = new FeatureLayer({
            url: "https://services3.arcgis.com/nGV4jiurzcahJ9LV/ArcGIS/rest/services/Offshore_Wind_Crown_Estate_Scotland/FeatureServer/0"
        });
        map.removeAll();

        map.add(layer1, 1);
        document.getElementById("right").innerText = "windmills are right out side of new england"

            
    }

    document.getElementById('Nuclear').onclick = function () {
        const layer1 = new FeatureLayer({
            url: "https://services2.arcgis.com/FiaPA4ga0iQKduv3/ArcGIS/rest/services/NRC_Regions_1/FeatureServer/0"
        });
        document.getElementById("right").innerText = "These are the different nuclear regions in america"
        map.removeAll();

        map.add(layer1, 2);
    }
    document.getElementById('Power').onclick = function () {
        const layer1 = new FeatureLayer({
            url: " https://services2.arcgis.com/FiaPA4ga0iQKduv3/ArcGIS/rest/services/eGRID_Subregions_1/FeatureServer/1"
        });
        document.getElementById("right").innerText = "eGRID subregions ensure that power system demand and supply are finely balanced"
        map.removeAll();

        map.add(layer1, 3);
    }

   


    document.getElementById('RemoveALL').onclick = function () {
       
        map.removeAll();


    }

});




