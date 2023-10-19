import { useState, useEffect } from "react"
import { listAllObj } from '../api/list.api'
import { Link } from "react-router-dom";

export function Game(props) {

    const [developer, setDeveloper] = useState(null);
    const [gender, setGender] = useState(null)

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

    const objd = developer.filter(dev => dev.id == props.game.id);
    const objg = gender.filter(gen => props.game.gender.includes(gen.id));
    const [dev] = objd

  return (
    <div key={props.game.id}>
        <h1>{props.game.title}</h1>
        <p>{props.game.description}</p>
        <p>{props.game.date_realise}</p>
        <p>{props.game.calification}</p>
        <p>{props.game.sellers}</p>
        <Link to={`/developers/${dev.id}/`}><p>{dev.name}</p></Link>
        <div>
            {objg.map(gen => (
                <Link key={gen.id} to={`/gender/${gen.id}/`}><p>{gen.title}</p></Link>
            ))}
        </div>
        <div>
            <img src={props.game.port_image} alt="" />
        </div>
        <div>
            <img src={props.game.baner_image} alt="" />
        </div>
    </div>
  )
}
