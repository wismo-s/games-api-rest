import { useState, useEffect } from "react"
import { listAllObj } from '../api/list.api'
import { useParams } from 'react-router-dom';

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
                    <div key={game.id}>
                        <h1>{game.title}</h1>
                        <p>{game.description}</p>
                        <p>{game.date_realise}</p>
                        <p>{game.calification}</p>
                        <p>{game.sellers}</p>
                        <p>{developer.name}</p>
                        <div>
                            {game.gender.map(gen => (
                                <p key={gen.id}>{gen}</p>
                            ))}
                        </div>
                        <div>
                            <img src={game.port_image} alt="" />
                        </div>
                        <div>
                            <img src={game.baner_image} alt="" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}