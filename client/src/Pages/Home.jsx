import React from 'react'
import Carousel from '../Components/Carousel';
import Navbar from '../Components/Navbar';
import Card from "../Components/Card"

function Home() {
  return (
    <>
    <Navbar/>
    <Card>
    <div className='h-full grid grid-cols-2 grid-rows-2 bg-neutral-950' >
          <div className='col-span-2 md:col-span-2 xl:col-span-1 flex flex-row items-center justify-center'>
            <div className='flex flex-col'>
              <h2  className='text-bold text-4xl md:text-6xl lg:text-8xl text-zinc-50'>WELCOME!</h2>
              <p className='text-green-700'>Now get all your neccessary stock details at one place with StockDash</p>
            </div>
          </div>
          <div className='col-span-2 md:col-span-2 xl:col-span-1'>
          <Carousel/>
          </div>
    </div>
    </Card>
    </>
  )
}

export default Home
