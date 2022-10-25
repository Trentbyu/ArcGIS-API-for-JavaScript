


require([
    "esri/config",
    "esri/Map",
    "esri/views/MapView",

    "esri/layers/FeatureLayer"

], function (esriConfig, Map, MapView, FeatureLayer) {

    esriConfig.apiKey = "AAPK4a952c6ab0284423ad07c4c434517838bUkrSQ2ipDmiQ0LSvX00IkpQViF_oViGknF53Yaw8Q5L26D8bIBP80JhXGxkle43";

    const map = new Map({
        basemap: "arcgis-topographic"
    });

    const view = new MapView({
        container: "viewDiv",
        map: map,
        center: [-118.80543, 34.02700],
        zoom: 5
    });

    
    

    document.getElementById('Nuclear').onclick = function () {
        const layer1 = new FeatureLayer({
            url: "https://services2.arcgis.com/FiaPA4ga0iQKduv3/ArcGIS/rest/services/NRC_Regions_1/FeatureServer/0"
        });
        document.getElementById("right").innerText = "Description: These are the different nuclear regions in america"
        map.removeAll();

        map.add(layer1, 2);
    }
    document.getElementById('Power').onclick = function () {
        const layer1 = new FeatureLayer({
            url: " https://services2.arcgis.com/FiaPA4ga0iQKduv3/ArcGIS/rest/services/eGRID_Subregions_1/FeatureServer/1"
        });
        document.getElementById("right").innerText = "Description: eGRID subregions ensure that power system demand and supply are finely balanced"
        map.removeAll();

        map.add(layer1, 3);
    }

    document.getElementById('Fedreal').onclick = function () {
        const layer1 = new FeatureLayer({
            url: "https://services.arcgis.com/P3ePLMYs2RVChkJx/ArcGIS/rest/services/USA_National_Park_Service_Lands_20170930/FeatureServer/0"
        });
        document.getElementById("right").innerText = "Description: The US National Park Service manages 84.4 million acres that include the nation's 59 national parks, many national monuments, and other conservation and historical properties"
        map.removeAll();

        map.add(layer1, 3);
    }
    document.getElementById('EPA').onclick = function () {
        const layer1 = new FeatureLayer({
            url: "https://services.arcgis.com/cJ9YHowT8TU7DUyn/ArcGIS/rest/services/FRS_INTERESTS_AIR_MAJOR/FeatureServer/0"
        });
        document.getElementById("right").innerText = "Description: The Facility Registry Service (FRS) provides quality facility data to support EPA's mission of protecting human health and the environment by identifying and geospatially locating facilities, sites, or places subject to environmental regulations of environmental interest."
        map.removeAll();

        map.add(layer1, 3);
    }
    document.getElementById('Lines').onclick = function () {
        const layer1 = new FeatureLayer({
            url: "https://services2.arcgis.com/FiaPA4ga0iQKduv3/arcgis/rest/services/US_Electric_Power_Transmission_Lines/FeatureServer"
        });
        document.getElementById("right").innerText = "Description:  utilizing data from Homeland Infrastructure Foundation-Level Data (HIFLD), depicts electric power transmission lines in the United States"
        map.removeAll();

        map.add(layer1, 3);
    }
    
    
    document.getElementById('RemoveALL').onclick = function () {
        document.getElementById("right").innerText = "Description: "
        map.removeAll();


    }

});




