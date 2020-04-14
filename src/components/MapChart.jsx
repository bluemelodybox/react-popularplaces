import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

export default function MapChart({ data }) {
  useEffect(() => {
    // Create chart instance
    var chart = am4core.create("chartdiv", am4maps.MapChart);

    // Set map definition
    chart.geodataSource.url = "./singaporeHigh.json";

    // Set projection
    chart.projection = new am4maps.projections.Mercator();

    // Create map polygon series
    var polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

    // Make map load polygon data (state shapes and names) from GeoJSON
    polygonSeries.useGeodata = true;

    // Configure series
    var polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.tooltipText = "{name}";
    polygonTemplate.polygon.fillOpacity = 0.6;

    // Create hover state and set alternative fill color
    var hs = polygonTemplate.states.create("hover");
    hs.properties.fill = chart.colors.getIndex(0);

    // Add image series
    var imageSeries = chart.series.push(new am4maps.MapImageSeries());
    imageSeries.mapImages.template.propertyFields.longitude = "longitude";
    imageSeries.mapImages.template.propertyFields.latitude = "latitude";
    imageSeries.mapImages.template.propertyFields.scale = "size";
    imageSeries.mapImages.template.tooltipText = "{title}";

    var circle = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle.radius = 8;
    circle.propertyFields.fill = "color";

    var circle2 = imageSeries.mapImages.template.createChild(am4core.Circle);
    circle2.radius = 3;
    circle2.propertyFields.fill = "color";

    circle2.events.on("inited", function (event) {
      animateBullet(event.target);
    });

    function animateBullet(circle) {
      var animation = circle.animate(
        [
          { property: "scale", from: 1, to: 5 },
          { property: "opacity", from: 1, to: 0 },
        ],
        2000,
        am4core.ease.circleOut
      );
      animation.events.on("animationended", function (event) {
        animateBullet(event.target.object);
      });
    }

    imageSeries.data = data;

    // Disable drag and resize
    chart.seriesContainer.draggable = false;
    chart.seriesContainer.resizable = false;

    // Disable zoom
    chart.maxZoomLevel = 1;

    return () => {
      if (chart) {
        chart.dispose();
      }
    };
  }, []);

  return <div id="chartdiv" style={{ width: "100%", height: "86vh" }}></div>;
}
