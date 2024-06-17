// MarketOverview.jsx

import React from 'react';
import { mockIndices } from '../constants/mock';

const MarketOverview = () => {
  const getConstituentOverview = (data) => {
    return data.constituentsBreakdown.map((constituent) => {
      return {
        name: constituent.name,
        weight: constituent.weight
      };
    });
  };

  const overview = getConstituentOverview(mockIndices);

  return (
    <div>
      <h1 className='text-neutral-50 text-2xl font-bold'>Market Overview</h1>
      <ul>
        {overview.map((item, index) => (
          <li key={index} className='text-neutral-50 flex flex-row justify-between border border-neutral-900 rounded-md'>
            <div className="text-neutral-500 p-2">{item.name}</div>
            {item.weight> 0 ? (
              <div className='bg-gradient-to-r from-neutral-900 to-green-950 px-4 py-2 border rounded-md border-inherit'><p className="text-green-700">{item.weight}%</p></div>
            ) : (
              <div className='bg-gradient-to-r from-neutral-900 to-red-950 px-4 py-2 border rounded-md border-inherit'><p className="text-red-700">{item.weight}%</p></div>
            )}
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MarketOverview;

