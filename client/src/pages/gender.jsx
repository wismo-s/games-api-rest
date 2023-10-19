import { useState, useEffect } from "react"
import { listAllObj } from '../api/list.api'
import { useParams } from 'react-router-dom';

export function Gender() {
    
    const [gender, setgender] = useState([]);
    const [games, setGames] = useState([]);

    const {id} = useParams();

    useEffect(() =>{
        async function getData() {
            const res = await listAllObj(`genders/${id}/`);
            setgender(res.data);
        }
        getData()
    }, [id])

    useEffect(() => {
        async function getGames() {
            const res = await listAllObj(`games/`);
            setGames(res.data)
        }
        getGames()
    }, [id]);

    if (gender === null || games === null) {
        return <p>Cargando datos...</p>;
    }
    const gamesfilter = games.filter(game => game.gender.includes(parseInt(id)));
    console.log(gamesfilter);
    console.log(gender);
    return (
        <div>
            <div>
                <h1>{gender.title}</h1>
                <div>
                    <img src={gender.image_url} alt="" />
                </div>
            </div>
            <div>
                {gamesfilter.map(game => (
                    <div key={game.id}>
                    <h1>{game.title}</h1>
                    <p>{game.description}</p>
                    <p>{game.date_realise}</p>
                    <p>{game.calification}</p>
                    <p>{game.sellers}</p>
                    <p>{game.developer}</p>
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