import { useState, useEffect } from "react"
import { listAllObj } from '../api/list.api'
import { useParams } from 'react-router-dom';
import { Game } from '../components/game';

export function Developer() {
    const [games, setGames] = useState(null); 
    const [developer, setDeveloper] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function getDev() {
            const resgames = await listAllObj('games/');
            setGames(resgames.data);
        }
        getDev()
    }, [id]);

    useEffect(() => {
        async function getDev() {
            const res = await listAllObj(`developers/${id}/`);
            setDeveloper(res.data)
        }
        getDev()
    }, []);

    // Mientras los datos se están cargando, mostrar un mensaje de carga
    if (developer === null || games === null) {
        return <p>Cargando datos...</p>;
    }
         
    let gamesfilter = games.filter((game) => game.developer == id)
    return (
        <div>
            <div>
                <h1>{developer.name}</h1>
                <p>{developer.description}</p>
                <img src={developer.perfil_image} alt="" />
                <img src={developer.baner_image} alt="" />
            </div>
            <div>
                {gamesfilter.map(game => (
                    <Game key={game.id} game={game} />
                ))}
            </div>
        </div>
    )
}