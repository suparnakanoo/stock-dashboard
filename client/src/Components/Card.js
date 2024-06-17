import React from 'react'

const Card = ({ children}) => {
  return (
    <div className='w-full h-full rounded-md relative p-2 border-2 bg-neutral-950 bg-opacity-50 border-neutral-950'>
      { children}
    </div>
  )
}

export default Card

