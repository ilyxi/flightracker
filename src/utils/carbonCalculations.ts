import { getAirportCoordinates } from './airportData';

interface FlightData {
  departure: string;
  arrival: string;
  passengers: number;
  travelClass: string;
}

function calculateDistance(coord1: [number, number], coord2: [number, number]): number {
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
}

function estimateEmissions(distance: number, passengers: number, travelClass: string): number {
  // Estimation based on average emissions per passenger per km
  const baseEmissions = 0.115; // kg CO2 per passenger per km (economy class)
  const classMultipliers: Record<string, number> = {
    economy: 1,
    premium_economy: 1.5,
    business: 2,
    first: 3,
  };
  const multiplier = classMultipliers[travelClass] || 1;
  return distance * baseEmissions * multiplier * passengers;
}

export async function calculateFlightEmissions(flightData: FlightData): Promise<number> {
  const departureCoords = getAirportCoordinates(flightData.departure);
  const arrivalCoords = getAirportCoordinates(flightData.arrival);

  if (!departureCoords || !arrivalCoords) {
    throw new Error('Invalid airport code(s). Please check your input and try again.');
  }

  const distance = calculateDistance(departureCoords, arrivalCoords);
  return estimateEmissions(distance, flightData.passengers, flightData.travelClass);
}