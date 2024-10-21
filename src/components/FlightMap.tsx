import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline, Tooltip } from 'react-leaflet';
import { Icon, LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { getAirportCoordinates, getAirportName } from '../utils/airportData';

interface FlightMapProps {
  departure: string;
  arrival: string;
}

const FlightMap: React.FC<FlightMapProps> = ({ departure, arrival }) => {
  const depCoords = getAirportCoordinates(departure);
  const arrCoords = getAirportCoordinates(arrival);

  if (!depCoords || !arrCoords) {
    return null;
  }

  const center = [
    (depCoords[1] + arrCoords[1]) / 2,
    (depCoords[0] + arrCoords[0]) / 2,
  ] as [number, number];

  const planeIcon = new Icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  const calculateDistance = (coord1: [number, number], coord2: [number, number]): number => {
    const R = 6371; // Earth's radius in km
    const dLat = (coord2[1] - coord1[1]) * (Math.PI / 180);
    const dLon = (coord2[0] - coord1[0]) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(coord1[1] * (Math.PI / 180)) *
        Math.cos(coord2[1] * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  };

  const distance = Math.round(calculateDistance(depCoords, arrCoords));

  const midpoint = new LatLng(
    (depCoords[1] + arrCoords[1]) / 2,
    (depCoords[0] + arrCoords[0]) / 2
  );

  return (
    <div className="w-full h-96 mb-6">
      <MapContainer center={center} zoom={3} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[depCoords[1], depCoords[0]]} icon={planeIcon}>
          <Popup>{getAirportName(departure) || departure}</Popup>
        </Marker>
        <Marker position={[arrCoords[1], arrCoords[0]]} icon={planeIcon}>
          <Popup>{getAirportName(arrival) || arrival}</Popup>
        </Marker>
        <Polyline positions={[[depCoords[1], depCoords[0]], [arrCoords[1], arrCoords[0]]]} color="red">
          <Tooltip permanent direction="center" offset={[0, -10]} opacity={0.7}>
            {distance} km
          </Tooltip>
        </Polyline>
      </MapContainer>
    </div>
  );
};

export default FlightMap;