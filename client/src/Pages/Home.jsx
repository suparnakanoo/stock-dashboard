import React from 'react'
import Carousel from '../Components/Carousel';

function Home() {
  return (
    <div className='flex flex-row ' >
          <div className='flex flex-row items-center justify-center  bg-inherit h-96 w-2/4 mt-20 rounded-xl'>
            <div className='flex flex-col'>
              <h2  className='text-bold text-8xl text-zinc-50'>WELCOME!</h2>
              <p className='text-green-700'>Now get all your neccessary stock details at one place with StockDash</p>
            </div>
          </div>
          <Carousel/>
    </div>
  )
}

export default Home
