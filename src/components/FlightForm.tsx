import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { airportDatabase } from '../utils/airportData';

interface FlightFormProps {
  onSubmit: (formData: {
    departure: string;
    arrival: string;
    passengers: number;
    travelClass: string;
  }) => void;
}

const FlightForm: React.FC<FlightFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    departure: '',
    arrival: '',
    passengers: 1,
    travelClass: 'economy',
  });
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeField, setActiveField] = useState<'departure' | 'arrival' | null>(null);
  const departureRef = useRef<HTMLDivElement>(null);
  const arrivalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        departureRef.current &&
        !departureRef.current.contains(event.target as Node) &&
        arrivalRef.current &&
        !arrivalRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === 'departure' || name === 'arrival') {
      const filteredSuggestions = Object.keys(airportDatabase)
        .filter((code) => code.toLowerCase().startsWith(value.toLowerCase()) || 
                          airportDatabase[code][2].toLowerCase().includes(value.toLowerCase()))
        .slice(0, 5);
      setSuggestions(filteredSuggestions);
      setShowSuggestions(filteredSuggestions.length > 0);
      setActiveSuggestion(-1);
      setActiveField(name as 'departure' | 'arrival');
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (activeField) {
      setFormData((prev) => ({ ...prev, [activeField]: suggestion }));
      setShowSuggestions(false);
      setActiveField(null);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestion((prev) => (prev < suggestions.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : 0));
    } else if (e.key === 'Enter' && activeSuggestion !== -1) {
      e.preventDefault();
      handleSuggestionClick(suggestions[activeSuggestion]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      ...formData,
      passengers: Number(formData.passengers),
    });
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg shadow-lg px-8 pt-6 pb-8 mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-4 relative" ref={departureRef}>
        <label className="block text-white text-sm font-bold mb-2" htmlFor="departure">
          Departure Airport (IATA code or name)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="departure"
          type="text"
          placeholder="e.g. LAX or Los Angeles"
          name="departure"
          value={formData.departure}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setActiveField('departure')}
          required
        />
        {showSuggestions && activeField === 'departure' && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={suggestion}
                className={`px-4 py-2 cursor-pointer ${
                  index === activeSuggestion ? 'bg-gray-200' : 'hover:bg-gray-100'
                }`}
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSuggestionClick(suggestion);
                }}
                onMouseEnter={() => setActiveSuggestion(index)}
              >
                {suggestion} - {airportDatabase[suggestion][2]}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mb-4 relative" ref={arrivalRef}>
        <label className="block text-white text-sm font-bold mb-2" htmlFor="arrival">
          Arrival Airport (IATA code or name)
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="arrival"
          type="text"
          placeholder="e.g. JFK or New York"
          name="arrival"
          value={formData.arrival}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          onFocus={() => setActiveField('arrival')}
          required
        />
        {showSuggestions && activeField === 'arrival' && (
          <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-auto">
            {suggestions.map((suggestion, index) => (
              <li
                key={suggestion}
                className={`px-4 py-2 cursor-pointer ${
                  index === activeSuggestion ? 'bg-gray-200' : 'hover:bg-gray-100'
                }`}
                onMouseDown={(e) => {
                  e.preventDefault();
                  handleSuggestionClick(suggestion);
                }}
                onMouseEnter={() => setActiveSuggestion(index)}
              >
                {suggestion} - {airportDatabase[suggestion][2]}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="passengers">
          Number of Passengers
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="passengers"
          type="number"
          name="passengers"
          value={formData.passengers}
          onChange={handleChange}
          min="1"
          required
        />
      </div>
      <div className="mb-6">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="travelClass">
          Travel Class
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="travelClass"
          name="travelClass"
          value={formData.travelClass}
          onChange={handleChange}
          required
        >
          <option value="economy">Economy</option>
          <option value="premium_economy">Premium Economy</option>
          <option value="business">Business</option>
          <option value="first">First Class</option>
        </select>
      </div>
      <div className="flex items-center justify-center">
        <motion.button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Calculate Emissions
        </motion.button>
      </div>
    </motion.form>
  );
};

export default FlightForm;