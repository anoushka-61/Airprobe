import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import 'leaflet-geosearch/dist/geosearch.css';
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import RedMarker from '../Images/RedMarker.png';
import Header from './Header';
import ColorFilter from './ColorFilter';

const MapView = () => {
  const mapRef = useRef(null);
  const [selectedColor, setSelectedColor] = useState('');

  useEffect(() => {
    if (mapRef.current) {
      const map = mapRef.current.leafletElement;

      // Initialize the map with the search control
      const searchControl = new GeoSearchControl({
        provider: new OpenStreetMapProvider(),
        style: 'bar',
        autoClose: true,
        showMarker: true,
      });

      map.addControl(searchControl);
    }
  }, [mapRef]);

  const markers = [
    { id: 1, lat: 28.6139, lng: 77.2090, title: 'New Delhi', description: ' I love this city because of the beauty and shopping ', image:'https://strapi-images-prod.s3.us-west-1.amazonaws.com/Rajpath-delhi-shutterstock_1195751923.jpg_7647e1aad2.jpg',color: 'red' },
    { id: 2, lat: 18.9750, lng: 72.8258, title: 'Mumbai', description: 'I love this city because of the lifestyle ', image:'https://cdn.britannica.com/26/84526-050-45452C37/Gateway-monument-India-entrance-Mumbai-Harbour-coast.jpg', color: 'blue'},
    // Add more markers with different colors
  ];

  const handleFilterChange = (color) => {
    setSelectedColor(color);
  };

  // Filter the markers based on the selected color
  const filteredMarkers = selectedColor
    ? markers.filter((marker) => marker.color === selectedColor)
    : markers;

  return (
    <div style={{ height: '400px', width: '100%' }}>
     <Header Homepage={true}/>
     <ColorFilter onFilterChange={handleFilterChange} />
      <MapContainer key={selectedColor} center={[28.6139, 77.2090]} zoom={13} style={{ height: '100%' }} ref={mapRef}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {filteredMarkers.map((marker) => (
          <Marker
            key={marker.id}
            position={[marker.lat, marker.lng]}
            icon={getMarkerIcon()} // Use the imported marker icon image
          >
            <Popup>
              <div>
                <h3>{marker.title}</h3>
                <p>{marker.description}</p>
                <img src={marker.image} alt={marker.title} style={{ maxWidth: '100%' }} />
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

// Define a function to create the marker icon
function getMarkerIcon() {
  return new L.Icon({
    iconUrl: RedMarker, // Use the imported marker icon image
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
}

export default MapView;
