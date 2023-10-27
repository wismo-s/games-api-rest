import { useState, useEffect, useContext } from "react"
import { Contextapp } from "../api/context"; 
import { listAllObj } from '../api/list.api'
import { useParams } from 'react-router-dom';
import { Game } from '../components/game';

export function Gender() {
    
    const context = useContext(Contextapp);
    const {id} = useParams();
    
    const [genderfilter] = context.genders.filter(gen => gen.id == id)
    const gamesfilter = context.games.filter(game => game.gender.includes(parseInt(id)));
    return (
        <div>
            <div style={{ backgroundImage: `url(${genderfilter.image_url})` }} className="inline-block bg-center bg-cover h-96 w-full bg-no-repeat relative mb-4 opacity-90"></div>
            <div>
                <h1 className="text-5xl mb-2 text-white font-bold ml-6">{genderfilter.title}</h1>
            </div>
            <div className="grid grid-flow-row grid-cols-4 gap-5 w-3/4 m-auto mt-8 pb-5">
                {gamesfilter.map(game => (
                    <Game key={game.id} game={game} />
                ))}
            </div>
        </div>
    )
}