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

    if (developer === null || gender === null || game === null) {
        return <p>Cargando datos...</p>;
    }
    const objd = developer.filter(dev => dev.id == game.developer);
    const objg = gender.filter(gen => game.gender.includes(gen.id));
    const [dev] = objd

  return (
    <div className="w-4/5 m-auto mt-3 mb-3 relative">
        <div style={{ backgroundImage: `url(${game.port_image})` }} className="inline-block bg-top bg-cover h-96 w-72 bg-no-repeat relative mb-4"></div>
        <div className='absolute left-80 top-1'>
            <h1 className="text-5xl font-bold text-white mb-3">{game.title}</h1>
            <p className="text-xl mb-2 text-slate-200">{game.description}</p>
            <p className="text-xl mb-2 text-slate-200">Realise Date: {game.date_realise}</p>
            <p className="text-xl mb-2 text-slate-200">Units Solid: {game.sellers}</p>
            <Link to={`/developers/${dev.id}/`}><p className="text-green-200 text-xl mb-2 font-bold hover:text-green-100">Studio: {dev.name}</p></Link>
            <div className="text-xl mb-2 text-slate-200">Genders:
                {objg.map(gen => (
                <Link className="inline-block pr-2 pl-2 pt-1 pb-1 bg-cyan-600 ml-2 hover:bg-cyan-700" key={gen.id} to={`/gender/${gen.id}/`}><p>{gen.title}</p></Link>
                ))}
            </div>
            <div className="text-xl mb-2 text-white font-bold">Metacritic: 
            <p className="pl-3 pt-2 w-12 h-11 ml-3 bg-green-500 inline-block border-green-600 border" >{game.calification}</p>
            </div>
        </div>
        <div className="mb-5">
            <iframe  title="YouTube Video" src={`https://www.youtube.com/embed/${game.trailer}`} className="w-full" style={{ height: "700px" }} allowFullScreen></iframe>
        </div>
        <div className="mb-5">
            <img src={game.baner_image} alt="" className="w-full" />
        </div>
    </div>
  )
}

