import React from 'react'

export function Cartitem(props) {
  return (
    <div>
        <div style={{ backgroundImage: `url(${props.url})` }} className=" bg-top bg-cover h-44 w-32 bg-no-repeat"></div>
        <h2>{props.title}</h2>
        <p>{props.price}</p>
    </div>
  )
}
