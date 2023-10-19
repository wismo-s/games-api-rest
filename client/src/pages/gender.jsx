import { useState, useEffect } from "react"
import { listAllObj } from '../api/list.api'
import { useParams } from 'react-router-dom';
import { Game } from '../components/game';

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
                    <Game key={game.id} game={game} />
                ))}
            </div>
        </div>
    )
}