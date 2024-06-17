import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='bg-neutral-900 sticky top-0 z-20  flex w-full items-center justify-between mt-2 px-32'>
      <Link to='/'>
      <div className='flex flex-row mt-2'>
        <img src="/assets/Logo.png" className='w-16 h-16 rounded-full'/>
        <h1 className='text-zinc-50 px-1 py-1  text-4xl'>StockDash</h1>
      </div>
      </Link>
      
      <div className='flex flex-row text-zinc-50 bg-green-700 item-center justify-between rounded-xl px-4 py-2'>
      <Link to='/Login'>Login/Register</Link>
      </div>
    </div>
  )
}

export default Navbar
