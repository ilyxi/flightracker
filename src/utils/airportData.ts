// This is an expanded airport database with IATA codes, coordinates, and airport names for 100 major airports
export const airportDatabase: Record<string, [number, number, string]> = {
  "ATL": [-84.4280, 33.6367, "Hartsfield-Jackson Atlanta International Airport"],
  "PEK": [116.5975, 40.0799, "Beijing Capital International Airport"],
  "DXB": [55.3644, 25.2532, "Dubai International Airport"],
  "LAX": [-118.4085, 33.9416, "Los Angeles International Airport"],
  "HND": [139.7811, 35.5533, "Tokyo Haneda Airport"],
  "ORD": [-87.9073, 41.9742, "Chicago O'Hare International Airport"],
  "LHR": [-0.4614, 51.4706, "London Heathrow Airport"],
  "HKG": [113.9145, 22.3089, "Hong Kong International Airport"],
  "PVG": [121.8083, 31.1443, "Shanghai Pudong International Airport"],
  "CDG": [2.5479, 49.0097, "Paris Charles de Gaulle Airport"],
  "AMS": [4.7634, 52.3105, "Amsterdam Airport Schiphol"],
  "DEL": [77.1003, 28.5562, "Indira Gandhi International Airport"],
  "FRA": [8.5705, 50.0379, "Frankfurt Airport"],
  "DFW": [-97.0403, 32.8998, "Dallas/Fort Worth International Airport"],
  "CAN": [113.2988, 23.3924, "Guangzhou Baiyun International Airport"],
  "ICN": [126.4505, 37.4691, "Incheon International Airport"],
  "SIN": [103.9915, 1.3644, "Singapore Changi Airport"],
  "DEN": [-104.6737, 39.8561, "Denver International Airport"],
  "BKK": [100.7501, 13.6900, "Suvarnabhumi Airport"],
  "JFK": [-73.7781, 40.6413, "John F. Kennedy International Airport"],
  "KUL": [101.7099, 2.7456, "Kuala Lumpur International Airport"],
  "MAD": [-3.5673, 40.4719, "Adolfo Suárez Madrid–Barajas Airport"],
  "SFO": [-122.3750, 37.6188, "San Francisco International Airport"],
  "CGK": [106.6561, -6.1256, "Soekarno–Hatta International Airport"],
  "BCN": [2.0785, 41.2971, "Barcelona–El Prat Airport"],
  "LAS": [-115.1522, 36.0801, "McCarran International Airport"],
  "IST": [28.8146, 40.9769, "Istanbul Airport"],
  "MUC": [11.7861, 48.3537, "Munich Airport"],
  "SYD": [151.1772, -33.9461, "Sydney Airport"],
  "YYZ": [-79.6306, 43.6777, "Toronto Pearson International Airport"],
  "MCO": [-81.3081, 28.4312, "Orlando International Airport"],
  "MIA": [-80.2906, 25.7933, "Miami International Airport"],
  "SHA": [121.3363, 31.1979, "Shanghai Hongqiao International Airport"],
  "FCO": [12.2389, 41.8003, "Leonardo da Vinci International Airport"],
  "AYT": [30.8008, 36.8987, "Antalya Airport"],
  "TPE": [121.2333, 25.0777, "Taiwan Taoyuan International Airport"],
  "SEA": [-122.3088, 47.4502, "Seattle-Tacoma International Airport"],
  "MEX": [-99.0721, 19.4363, "Mexico City International Airport"],
  "DME": [37.9063, 55.4103, "Moscow Domodedovo Airport"],
  "EWR": [-74.1687, 40.6925, "Newark Liberty International Airport"],
  "MNL": [121.0198, 14.5086, "Ninoy Aquino International Airport"],
  "BOM": [72.8679, 19.0887, "Chhatrapati Shivaji Maharaj International Airport"],
  "SVO": [37.4146, 55.9726, "Sheremetyevo International Airport"],
  "PHX": [-112.0118, 33.4342, "Phoenix Sky Harbor International Airport"],
  "ZRH": [8.5482, 47.4582, "Zurich Airport"],
  "PMI": [2.7389, 39.5517, "Palma de Mallorca Airport"],
  "BOS": [-71.0054, 42.3629, "Boston Logan International Airport"],
  "IAH": [-95.3414, 29.9844, "George Bush Intercontinental Airport"],
  "CLT": [-80.9431, 35.2140, "Charlotte Douglas International Airport"],
  "DUS": [6.7668, 51.2895, "Düsseldorf Airport"],
  "MAN": [-2.2750, 53.3537, "Manchester Airport"],
  "GRU": [-46.4730, -23.4356, "São Paulo/Guarulhos International Airport"],
  "VIE": [16.5697, 48.1102, "Vienna International Airport"],
  "YVR": [-123.1840, 49.1967, "Vancouver International Airport"],
  "MSP": [-93.2217, 44.8820, "Minneapolis–Saint Paul International Airport"],
  "SZX": [113.8107, 22.6395, "Shenzhen Bao'an International Airport"],
  "DTW": [-83.3533, 42.2123, "Detroit Metropolitan Airport"],
  "DMK": [100.6068, 13.9125, "Don Mueang International Airport"],
  "LGW": [-0.1821, 51.1537, "London Gatwick Airport"],
  "CGH": [-46.6564, -23.6261, "São Paulo/Congonhas Airport"],
  "BWI": [-76.6683, 39.1754, "Baltimore/Washington International Airport"],
  "KMG": [102.9438, 25.1019, "Kunming Changshui International Airport"],
  "CTU": [103.9474, 30.5785, "Chengdu Shuangliu International Airport"],
  "MEL": [144.8433, -37.6690, "Melbourne Airport"],
  "FLL": [-80.1527, 26.0726, "Fort Lauderdale–Hollywood International Airport"],
  "DCA": [-77.0377, 38.8521, "Ronald Reagan Washington National Airport"],
  "SLC": [-111.9792, 40.7884, "Salt Lake City International Airport"],
  "DUB": [-6.2499, 53.4213, "Dublin Airport"],
  "MXP": [8.7124, 45.6306, "Milan Malpensa Airport"],
  "GMP": [126.7906, 37.5583, "Gimpo International Airport"],
  "CPH": [12.6561, 55.6180, "Copenhagen Airport"],
  "SAN": [-117.1933, 32.7336, "San Diego International Airport"],
  "BRU": [4.4844, 50.9014, "Brussels Airport"],
  "IAD": [-77.4565, 38.9531, "Washington Dulles International Airport"],
  "MDW": [-87.7524, 41.7868, "Chicago Midway International Airport"],
  "LIS": [-9.1359, 38.7742, "Lisbon Airport"],
  "STN": [0.2350, 51.8853, "London Stansted Airport"],
  "OAK": [-122.2197, 37.7214, "Oakland International Airport"],
  "TXL": [13.2970, 52.5597, "Berlin Tegel Airport"],
  "HEL": [24.9664, 60.3172, "Helsinki Airport"],
  "ATH": [23.9445, 37.9364, "Athens International Airport"],
  "OSL": [11.1004, 60.1976, "Oslo Airport, Gardermoen"],
  "AKL": [174.7924, -37.0080, "Auckland Airport"],
  "ARN": [17.9237, 59.6498, "Stockholm Arlanda Airport"],
  "EDI": [-3.3725, 55.9500, "Edinburgh Airport"],
  "BNE": [153.1175, -27.3842, "Brisbane Airport"],
  "OTP": [26.0854, 44.5711, "Henri Coandă International Airport"],
  "WAW": [20.9679, 52.1672, "Warsaw Chopin Airport"],
  "HAM": [9.9883, 53.6304, "Hamburg Airport"],
  "PRG": [14.2632, 50.1008, "Václav Havel Airport Prague"],
  "BOG": [-74.1469, 4.7016, "El Dorado International Airport"],
  "GVA": [6.1092, 46.2370, "Geneva Airport"],
  "BUD": [19.2556, 47.4397, "Budapest Ferenc Liszt International Airport"],
  "SJC": [-121.9289, 37.3639, "San Jose International Airport"],
  "KIX": [135.2441, 34.4320, "Kansai International Airport"],
  "AUH": [54.6511, 24.4330, "Abu Dhabi International Airport"]
};

export function getAirportCoordinates(iataCode: string): [number, number] | null {
  const airportData = airportDatabase[iataCode.toUpperCase()];
  return airportData ? [airportData[0], airportData[1]] : null;
}

export function getAirportName(iataCode: string): string | null {
  const airportData = airportDatabase[iataCode.toUpperCase()];
  return airportData ? airportData[2] : null;
}