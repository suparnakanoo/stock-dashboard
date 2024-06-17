import React from 'react';
import { mockSectorMetrices } from '../constants/mock';
import Card from "../Components/Card"

const SectorPerformance = () => {
  return (
    <Card>
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-neutral-50 border-none">Sector Performance</h1>
      <div className="mb-4 border-none ">
        {mockSectorMetrices.map((sector, index) => (
          <div key={index} className="flex flex-row justify-between border border-neutral-900 rounded-md">
            <p className="text-neutral-500 p-2">{sector.name}</p>
            {sector.performance > 0 ? (
              <div className='bg-gradient-to-r from-neutral-900 to-green-950 px-4 py-2 border rounded-md border-inherit'><p className="text-green-700">{sector.performance * 100}%</p></div>
            ) : (
              <div className='bg-gradient-to-r from-neutral-900 to-red-950 px-4 py-2 border rounded-md border-inherit'><p className="text-red-700">{sector.performance * 100}%</p></div>
            )}
          </div>
          
        ))}
      </div>
    </div>
    </Card>
  );
};

export default SectorPerformance;
