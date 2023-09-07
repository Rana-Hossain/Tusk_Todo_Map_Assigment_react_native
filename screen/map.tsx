import React from 'react';
import MapView, { Marker, Polyline } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview'; 

const Map = () => {
  const markers = [
    { lat: 23.81426279756788, lng: 90.40413862620731 },
    { lat: 23.808106397946844, lng: 90.40328323667977 },
    { lat: 23.798141522836097, lng: 90.40168671183021 },
    { lat: 23.78979393341548, lng: 90.40020439868736 },
    { lat: 23.77941034563629, lng: 90.39837976942222 },
  ];

  const markerScript = markers
    .map(
      (marker, index) =>
        `L.marker([${marker.lat}, ${marker.lng}]).addTo(map).bindPopup('Marker ${index + 1}');`
    )
    .join('\n');

  const polylineCoordinates = markers
    .map((marker) => `[${marker.lat}, ${marker.lng}]`)
    .join(',');

  const html = `
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
      </head>
      <body>
        <div id="map" style="width: 100%; height: 100%;"></div>
        <script>
          var map = L.map('map').setView([23.800305, 90.404138], 12); // Center the map around Dhaka
          L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            lang: 'en',
          }).addTo(map);

          ${markerScript}

          var polyline = L.polyline([${polylineCoordinates}], {
            color: 'red',
          }).addTo(map);

          map.fitBounds(polyline.getBounds());

          
        </script>
      </body>
    </html>
  `;

  

  return (
    <View style={{ flex: 1 }}>
      <WebView
      source={{ html }}
 
      scalesPageToFit={true}
    />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});

export default Map;