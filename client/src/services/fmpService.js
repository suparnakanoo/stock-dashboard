

import axios from 'axios';

export const fetchSectorPerformance = async () => {
  const apiKey = process.env.REACT_APP_FMP_API_KEY;

  if (!apiKey) {
    throw new Error('API_KEY is missing in environment variables.');
  }

  try {
    const response = await axios.get(`https://financialmodelingprep.com/api/v3/sectors-performance?apikey=${apiKey}`);
    return response.data; // Return the correct data
  } catch (error) {
    throw new Error(`Error fetching sector performance data: ${error.message}`);
  }
};


