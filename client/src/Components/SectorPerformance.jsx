
import React, { useState, useEffect } from 'react';
import Card from '../Components/Card';
import { fetchSectorPerformance } from '../services/fmpService';

const SectorPerformance = () => {
  const [sectorMetrics, setSectorMetrics] = useState([]); // Initialize as an empty array
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const sectorData = await fetchSectorPerformance(); // Call the fetchSectorPerformance function
        if (Array.isArray(sectorData)) {
          setSectorMetrics(sectorData); // Update sectorMetrics only if sectorData is an array
        } else {
          throw new Error('Data returned is not in the expected format.');
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display loading message
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <Card>
      <div className="px-4 ">
        <h1 className="text-2xl font-bold mb-1 text-neutral-50 border-none">Sector Performance</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className='col-span-2 md:col-span-2 xl:col-span-1'>
            {sectorMetrics.slice(0, 5).map((item, index) => (
              <div key={index} className=" flex flex-row justify-between border border-neutral-900 rounded-md mb-2">
                <p className="text-neutral-500 p-2">{item.sector}</p>
                <div className={`px-4 py-2 border rounded-md border-inherit ${parseFloat(item.changesPercentage) > 0 ? 'bg-gradient-to-r from-neutral-900 to-green-950' : 'bg-gradient-to-r from-neutral-900 to-red-950'}`}>
                  <p className={`${parseFloat(item.changesPercentage?.replace('%', '')) > 0 ? 'text-green-700' : 'text-red-700'}`}>{item.changesPercentage}</p>
                </div>
              </div>
            ))}
          </div>
          <div className='col-span-2 md:col-span-2 xl:col-span-1'>
            {sectorMetrics.slice(5, 10).map((item, index) => (
              <div key={index} className="flex flex-row justify-between border border-neutral-900 rounded-md mb-2">
                <p className="text-neutral-500 p-2">{item.sector}</p>
                <div className={`px-4 py-2 border rounded-md border-inherit ${parseFloat(item.changesPercentage) > 0 ? 'bg-gradient-to-r from-neutral-900 to-green-950' : 'bg-gradient-to-r from-neutral-900 to-red-950'}`}>
                  <p className={`${parseFloat(item.changesPercentage?.replace('%', '')) > 0 ? 'text-green-700' : 'text-red-700'}`}>{item.changesPercentage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default SectorPerformance;
