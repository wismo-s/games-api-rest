import { useContext } from "react"
import { Contextapp } from "../api/context";
import { useParams } from 'react-router-dom';
import { Game } from '../components/game';

export function Developer() {
    const context = useContext(Contextapp);
    const { id } = useParams();
    
    let [devfilter] = context.developers.filter((dev)=>dev.id == id)
    let gamesfilter = context.games.filter((game) => game.developer == id)

    return (
        <div>
            <div style={{ backgroundImage: `url(${devfilter.baner_image})` }} className="inline-block bg-center bg-cover h-96 w-full bg-no-repeat relative mb-4 opacity-90">
            </div>
            <div className="w-4/5 m-auto mt-3 mb-3 flex">
                <div style={{ backgroundImage: `url(${devfilter.perfil_image})` }} className="inline-block bg-center rounded-2xl bg-cover h-96 w-9/12 bg-no-repeatmb-4" ></div>
                <div className="inline-block ml-4">
                    <h1 className="text-5xl mb-2 text-white font-bold">{devfilter.name}</h1>
                    <p className="text-xl mb-2 text-white font-bold">{devfilter.description}</p>
                </div>
            </div>
            <div className="grid grid-flow-row grid-cols-4 gap-5 w-9/12 m-auto mt-8 pb-5">
                {gamesfilter.map(game => (
                    <Game key={game.id} game={game} />
                ))}
            </div>
        </div>
    )
}