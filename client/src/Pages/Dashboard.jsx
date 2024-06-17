import React from 'react'
import Card from '../Components/Card';
import { mockCompanyDetails } from '../constants/mock';
import Search from '../Components/Search';
import Header from '../Components/Header';
import MarketSummary from '../Components/MarketSummary';
import SectorPerformance from '../Components/SectorPerformance';
import Chart from '../Components/Chart';
import MarketOverview from '../Components/MarketOverview';
import DashNav from '../Components/DashNav';

function Dashboard() {
    
  return (
    <>
    <DashNav/>
    <div className='h-screen grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 grid-rows-8 md:grid-rows-7 xl:grid-rows-7 auto-rows-fr gap-6 p-10'>
      <div className='col-span-1 md:col-span-1 xl:col-span-2 row-span-1'>
        <Header/>
      </div>
      <div className='col-span-1 md:col-span-1 xl:col-span-2 row-span-1'>
        <Card>
          <div className='flex flex-row justify-between'>
          <h1 className='text-xl text-neutral-50'>{ mockCompanyDetails.name}</h1>
          <Search/>
          </div>
        </Card>
      </div>
      <div className='md: col-span-2 row-span-3'>
        <MarketSummary/>
      </div>
      <div className='md: col-span-2 row-span-3'>
        <SectorPerformance/>
      </div>
      <div className='md: col-span-2 row-span-3'>
        <Card><MarketOverview/></Card>
      </div>
      <div className='md: col-span-2 row-span-3'>
        <Chart/>
      </div>
      {/* <h1 className='bg-slate-50'>Dashboard</h1>
      {!!user && (<h2 className='bg-slate-50'>Hi {user.name}!</h2>)} */}
    </div>
    </>
  )
}

export default Dashboard
