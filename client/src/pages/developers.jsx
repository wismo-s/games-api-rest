import { useState, useEffect } from "react"
import { listAllObj } from '../api/list.api'
import { Link } from "react-router-dom"

export function Developers() {

  const [devs, setdevs] = useState([]);

  useEffect(() => {
    async function getObj() {
      const res = await listAllObj('developers/');
      setdevs(res.data)
      console.log(res.data);
  }
  getObj();
  }, []);

    return (
      <div className="grid grid-flow-row grid-cols-5 gap-5 w-9/12 m-auto mt-8 pb-5">
        {devs.map(dev=>(
          <div key={dev.id} className="w-56 bg-blue-800 h-80 rounded-lg shadow-gray-800 shadow-lg" >
            <Link to={`/developers/${dev.id}`}>
            <div style={{ backgroundImage: `url(${dev.perfil_image})` }} className=" bg-top bg-cover h-64 w-56 bg-no-repeat hover:opacity-80"></div>
            <h2 className="text-lg text-white font-bold mt-1 ml-2 w-auto">{dev.name}</h2>
            </Link>
          </div>
        ))}
      </div>
    )
  }