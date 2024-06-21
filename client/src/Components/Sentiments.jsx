

import React, { useState, useEffect } from 'react';
import { getNewSentiment } from '../services/alphaVantageService';
import Card from './Card';

const Sentiments = () => {
 
  const [label, setLabel] = useState('');
  const [val,setVal] = useState('0');
  const [newsTitle, setNewsTitle] = useState('');

  useEffect(() => {
    fetchSentimentData();
  }, []);

  const fetchSentimentData = async () => {
    try {
      const data = await getNewSentiment();

      if (data.feed && data.feed.length > 0){
      setLabel(data.feed[0].overall_sentiment_label);
      setVal(data.feed[0].overall_sentiment_score);
      }

      // Extracting the summary from the first item in the feed array
      if (data.feed && data.feed.length > 0) {
        setNewsTitle(data.feed[0].title);
      } else {
        setNewsTitle('No news available');
      }
    } catch (error) {
      console.error('Error fetching sentiment data', error);
      
    }
  };

  return (
    <Card>
    <div className="text-neutral-50 w-fit rounded-full px-4 bg-neutral-50 bg-opacity-10 mb-2 border border-neutral-800 overflow-hidden mx-4 mt-5">
      The market is
      {val>=0.15 ? (
        <span className="text-green-600"> {label}</span>
      ) : (
        <span className="text-red-600"> {label}</span>
      )}
    </div>

    <div className="p-4">
        <div className="mb-4 border border-none rounded-md overflow-hidden">
          <div className="px-4 mt-16">
            <p className='text-neutral-500'>What you need to know today</p>
            <h2 className="text-xl font-semibold text-neutral-50 mb-2">{newsTitle}</h2>
          </div>
        </div>
      
    </div>
    </Card>
  );
};

export default Sentiments;