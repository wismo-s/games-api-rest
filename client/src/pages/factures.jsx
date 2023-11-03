import React, { useContext, useState } from 'react'
import { Contextapp } from '../api/context'

export function Factures() {
    const context = useContext(Contextapp)
  return (
    <div>
        {context.data.facture.map(factu => {
            const dat = new Date(factu.time_shop)
            const items =  context.data.games.filter(item => factu.games.includes(item.id))
            return(
            <div key={factu.id}>
                <h2>{`Facture: ${dat.getFullYear()}-${dat.getMonth()+1}-${dat.getDay()}---${dat.getHours()}:${dat.getMinutes()}:${dat.getSeconds()}`}</h2>
                <div>
                    {items.map(game =>(
                        <p key={game.id}>{game.title}</p>
                    ))}
                </div>
                <p>total: $/.{factu.total}</p>
            </div>
        )})}
    </div>
  )
}
