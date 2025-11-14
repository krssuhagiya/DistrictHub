import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix marker icon issue
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: markerIcon2x,
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
});

const DistrictMap = () => {
  const districts = [
    { name: 'Kukarmunda', lat: 21.8, lng: 73.2 },
    { name: 'Nizar', lat: 21.7, lng: 73.5 },
    { name: 'Songadh', lat: 21.2, lng: 73.5 },
    { name: 'Uchchhal', lat: 21.3, lng: 73.7 },
    { name: 'Vyara', lat: 21.1, lng: 73.4 },
    { name: 'Valod', lat: 21.2, lng: 73.1 },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">District Map</h3>
      <MapContainer
        center={[21.5, 72.5]}
        zoom={8}
        style={{ height: '400px', width: '100%' }}
        className="rounded-lg border border-gray-200"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {districts.map((district, index) => (
          <Marker key={index} position={[district.lat, district.lng]}>
            <Popup>
              <b>{district.name}</b>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default DistrictMap;
