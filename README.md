# flightracker
# Flight Carbon Tracker

## Overview
Flight Carbon Tracker is a web application that allows users to calculate the carbon footprint of their flights. By inputting departure and arrival airports, number of passengers, and travel class, users can estimate the CO₂ emissions associated with their air travel.

## Features
- User-friendly interface for inputting flight details
- Autocomplete suggestions for airport codes and names
- Interactive map displaying the flight route
- Calculation of CO₂ emissions based on flight distance and travel class
- Visualization of emissions impact using tree and car equivalents
- Responsive design for various screen sizes

## Methodology

### Distance Calculation
The application uses the **Haversine formula** to calculate the great-circle distance between two points on a sphere (Earth) given their longitudes and latitudes. This provides an accurate estimate of the flight distance.

### Emissions Calculation
CO₂ emissions are estimated using the following methodology:

- **Base emissions**: 0.115 kg CO₂ per passenger per km (for economy class)
- **Class multipliers**:
  - Economy: 1x
  - Premium Economy: 1.5x
  - Business: 2x
  - First Class: 3x

This method provides a reasonable estimate but does not account for factors such as aircraft type, load factor, or specific airline efficiencies.

## Data Sources
- **Airport data**: The application uses a curated database of 100 major airports worldwide, including IATA codes, coordinates, and airport names.
- **Emissions factors**: Based on average industry data for CO₂ emissions per passenger kilometer.

## Limitations
- The emissions calculation is an estimate and may not reflect the exact emissions of a specific flight.
- The airport database is limited to 100 major airports and may not include all possible routes.
- The great-circle distance calculation doesn't account for actual flight paths, which may be longer due to air traffic control routing.

## Future Improvements
- Expand the airport database to include more airports worldwide.
- Integrate with real-time flight data APIs for more accurate routing and aircraft information.
- Include options for carbon offsetting programs.
- Add historical data tracking for users to monitor their flight emissions over time.

## Technical Stack
- **Frontend**: React with TypeScript
- **Styling**: Tailwind CSS
- **Map Visualization**: Leaflet with React-Leaflet
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite



