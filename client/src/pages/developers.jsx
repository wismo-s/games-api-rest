import { useContext } from "react"
import { Contextapp } from "../api/context";
import { Link } from "react-router-dom"

export function Developers() {
  const context = useContext(Contextapp);

    return (
      <div className="grid grid-flow-row grid-cols-5 gap-5 w-9/12 m-auto mt-8 pb-5">
        {context.data.developers.map(dev=>(
          <div key={dev.id} className="w-56 bg-violet-900 h-80 rounded-lg shadow shadow-zinc-600" >
            <Link to={`/developers/${dev.id}`}>
            <div style={{ backgroundImage: `url(${dev.perfil_image})` }} className=" bg-top bg-cover h-64 w-56 bg-no-repeat hover:opacity-80"></div>
            <h2 className="text-lg text-white font-bold mt-1 ml-2 w-auto">{dev.name}</h2>
            </Link>
          </div>
        ))}
        <Link to='/developers/form'>devs form</Link>
      </div>
    )
  }