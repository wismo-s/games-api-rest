import React from 'react'

export function Cartitem(props) {
  return (
    <div className='flex justify-between w-4/5'>
        <div style={{ backgroundImage: `url(${props.url})` }} className=" bg-top bg-cover h-44 w-32 bg-no-repeat"></div>
        <div className='w-1/4'>
          <h2 className='text-gray-300 text-2xl'>{props.title}</h2>
          <p className='text-gray-300 text-2xl'>$/.{props.price}</p>
        </div>
    </div>
  )
}
