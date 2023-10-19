import { useState, useEffect } from "react"
import { listAllObj } from '../api/list.api'
import { Link } from "react-router-dom";

export function Game(props) {

    const [developer, setDeveloper] = useState(null);

    useEffect(() => {
        async function getDev() {
            const res = await listAllObj(`developers/`);
            setDeveloper(res.data)
        }
        getDev()
    }, []);


    if (developer === null) {
        return <p>Cargando datos...</p>;
    }

    const objd = developer.filter(dev => dev.id == props.game.id);
    const [dev] = objd

  return (
    <Link key={props.game.id} to={`/games/${props.game.id}`}>
    <div>
        <div>
            <img src={props.game.port_image} alt="" />
        </div>
        <h1>{props.game.title}</h1>
        <p>{props.game.date_realise}</p>
        <p>{props.game.calification}</p>
        <p>{dev.name}</p>
    </div>
    </Link>
    
  )
}
