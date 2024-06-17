import React from 'react';
import { mockNewSentiment } from '../constants/mock';

const Sentiments = () => {
  const { sentiment } = mockNewSentiment;
  const isBullish = sentiment.bullishPercent > sentiment.bearishPercent;

  return (
    <div className="text-neutral-50 w-fit rounded-full px-4 bg-neutral-50 bg-opacity-10 mb-2 border border-neutral-800 overflow-hidden mx-4 mt-5">
      The market is
      {isBullish ? (
        <span className="text-green-600"> bullish</span>
      ) : (
        <p className="text-red-600"> bearish</p>
      )}
    </div>
  );
};

export default Sentiments;
