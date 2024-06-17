import React from 'react'
import Card from "./Card"
import Sentiments from './Sentiments'
import MarketNews from './MarketNews'
const MarketSummary = () => {
  return (
    <Card>
      <Sentiments/>
      <MarketNews/>
    </Card>
  )
}

export default MarketSummary

