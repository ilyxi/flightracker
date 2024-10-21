import React from 'react';
import { motion } from 'framer-motion';
import { TreeDeciduous, Car } from 'lucide-react';
import FlightMap from './FlightMap';

interface ResultsDisplayProps {
  emissions: number;
  departure: string;
  arrival: string;
}

const ResultsDisplay: React.FC<ResultsDisplayProps> = ({ emissions, departure, arrival }) => {
  const treesNeeded = Math.round(emissions / 22);
  const carMiles = Math.round(emissions * 2.5);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4"
    >
      <h2 className="text-3xl font-bold text-center mb-4 text-white">Flight Emissions</h2>
      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center text-5xl font-bold text-green-300 mb-6"
      >
        {emissions.toFixed(2)} kg CO₂
      </motion.p>
      <FlightMap departure={departure} arrival={arrival} />
      <div className="flex justify-around mt-6">
        <div className="text-center">
          <TreeDeciduous size={48} className="mx-auto text-green-400" />
          <p className="text-white mt-2">
            Equivalent to planting <span className="font-bold">{treesNeeded}</span> trees
          </p>
        </div>
        <div className="text-center">
          <Car size={48} className="mx-auto text-blue-400" />
          <p className="text-white mt-2">
            Or driving <span className="font-bold">{carMiles}</span> miles in an average car
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultsDisplay;