import React, { useContext, useState } from 'react'
import { Contextapp } from '../api/context'

export function Factures() {
    const context = useContext(Contextapp)
  return (!context.data.facture ? <div className='text-gray-300 text-2xl' >no hay factures</div> :
    <div className=' bg-violet-900 m-5 mb-5 p-7 rounded-2xl flex flex-col items-center'>
        {context.data.facture.map(factu => {
            const dat = new Date(factu.time_shop)
            const items = context.data.games.filter(item => factu.games.includes(item.id))
            return(
            <div key={factu.id} className='bg-violet-800 mb-2 p-7 rounded-2xl'>
                <h2 className='text-gray-300 text-2xl'>{`Facture: ${dat.getFullYear()}-${dat.getMonth()+1}-${dat.getDay()}---${dat.getHours()}:${dat.getMinutes()}:${dat.getSeconds()}`}</h2>
                <div>
                    {items.map(game =>(
                        <p className='text-gray-300 text-xl' key={game.id}>-{game.title}</p>
                    ))}
                </div>
                <p className='text-gray-200 text-2xl font-bold'>TOTAL: $/.{factu.total}</p>
            </div>
        )})}
    </div>
  )
}
