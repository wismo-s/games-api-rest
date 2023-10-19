import { useParams } from 'react-router-dom'
import { useState, useEffect } from "react"
import { listAllObj } from '../api/list.api'
import { Link } from "react-router-dom";


export function Gamesdatail() {
    const [developer, setDeveloper] = useState(null);
    const [gender, setGender] = useState(null)
    const [game, setGame] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        async function getDev() {
            const res = await listAllObj(`games/${id}/`);
            setGame(res.data)
        }
        getDev()
    }, []);
    useEffect(() => {
        async function getDev() {
            const res = await listAllObj(`developers/`);
            setDeveloper(res.data)
        }
        getDev()
    }, []);

    useEffect(() =>{
        async function getData() {
            const res = await listAllObj(`genders/`);
            setGender(res.data);
        }
        getData()
    }, [])

    if (developer === null || gender == null) {
        return <p>Cargando datos...</p>;
    }

    const objd = developer.filter(dev => dev.id == game.id);
    const objg = gender.filter(gen => game.gender.includes(gen.id));
    const [dev] = objd

  return (
    <div>
        <h1>{game.title}</h1>
        <p>{game.description}</p>
        <p>{game.date_realise}</p>
        <p>{game.calification}</p>
        <p>{game.sellers}</p>
        <Link to={`/developers/${dev.id}/`}><p>{dev.name}</p></Link>
        <div>
            {objg.map(gen => (
                <Link key={gen.id} to={`/gender/${gen.id}/`}><p>{gen.title}</p></Link>
            ))}
        </div>
        <div>
            <img src={game.port_image} alt="" />
        </div>
        <div>
            <img src={game.baner_image} alt="" />
        </div>
    </div>
  )
}

