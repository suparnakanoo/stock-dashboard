import React from 'react'

function Navbar() {
  return (
    <div className='bg-neutral-900 sticky top-0 z-20  flex w-full items-center justify-between mt-2 px-32'>
      <div className='flex flex-row mt-2'>
        <img src="/assets/Logo.png" className='w-16 h-16 rounded-full'/>
        <h1 className='text-zinc-50 px-1 py-1  text-4xl'>StockDash</h1>
      </div>
      <button className='bg-neutral-800 text-zinc-50 hover:border border-zinc-600 rounded-full px-10 py-2'>Login</button>
    </div>
  )
}

export default Navbar
