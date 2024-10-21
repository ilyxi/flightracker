import React, { useState } from 'react';
import { Plane } from 'lucide-react';
import { motion } from 'framer-motion';
import FlightForm from './components/FlightForm';
import ResultsDisplay from './components/ResultsDisplay';
import { calculateFlightEmissions } from './utils/carbonCalculations';
import 'leaflet/dist/leaflet.css';

function App() {
  const [emissions, setEmissions] = useState<number | null>(null);
  const [departure, setDeparture] = useState<string>('');
  const [arrival, setArrival] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCalculate = async (formData: {
    departure: string;
    arrival: string;
    passengers: number;
    travelClass: string;
  }) => {
    setLoading(true);
    setError(null);
    try {
      const result = await calculateFlightEmissions(formData);
      setEmissions(result);
      setDeparture(formData.departure);
      setArrival(formData.arrival);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      console.error('Error in handleCalculate:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-green-600 flex flex-col items-center justify-center p-4">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-white flex items-center">
          <Plane className="mr-2" /> Flight Carbon Tracker
        </h1>
      </motion.header>
      <motion.main
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl"
      >
        <FlightForm onSubmit={handleCalculate} />
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-4 text-white text-xl"
          >
            Calculating emissions...
          </motion.div>
        )}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-red-200 text-center mt-4 bg-red-600 p-2 rounded"
          >
            {error}
          </motion.p>
        )}
        {emissions !== null && (
          <ResultsDisplay emissions={emissions} departure={departure} arrival={arrival} />
        )}
      </motion.main>
    </div>
  );
}

export default App;