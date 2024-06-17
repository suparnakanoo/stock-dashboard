import React from 'react';
import { mockMarketNews } from '../constants/mock';

const MarketNews = () => {
  // Select a random news item from the mockMarketNews array
  const randomIndex = Math.floor(Math.random() * mockMarketNews.length);
  const newsItem = mockMarketNews[randomIndex];

  return (
    <div className="p-4">
      {newsItem ? (
        <div className="mb-4 border border-none rounded-md overflow-hidden">
          <div className="p-4">
            <p className='text-neutral-500'>What you need to know today</p>
            <h2 className="text-xl font-semibold text-neutral-50 mb-2">{newsItem.headline}</h2>
            <p className="text-neutral-200">{newsItem.summary}</p>
          </div>
        </div>
      ) : (
        <p>No news available.</p>
      )}
    </div>
  );
};

export default MarketNews;

