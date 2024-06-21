import React from 'react'
import Header from '../Components/Header';
import SectorPerformance from '../Components/SectorPerformance';
import MarketOverview from '../Components/MarketOverview';
import DashNav from '../Components/DashNav';
import Sentiments from '../Components/Sentiments';

function Dashboard() {
    
  return (
    <>
    <DashNav/>
    <div className='h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 auto-rows-auto gap-6 p-10'>
      <div className='col-span-1 md:col-span-2 xl:col-span-4 row-span-1'>
        <Header/>
      </div>
      <div className='col-span-1 md:col-span-2 xl:col-span-2'>
        <Sentiments/>
      </div>
      <div className='col-span-1 md:col-span-2 xl:col-span-2 '>
        <SectorPerformance/>
      </div>
      <div className='col-span-1 md:col-span-2 xl:col-span-2 '>
        <MarketOverview/>
      </div>
      <div className='col-span-1 md:col-span-2 xl:col-span-2'>
        <p className='flex items-center justify-center text-red-700'> Still under process</p>
      </div>
    </div>
    </>
  )
}

export default Dashboard
