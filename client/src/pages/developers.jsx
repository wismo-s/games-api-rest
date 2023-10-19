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
      <div>
        {devs.map(dev=>(
          <div key={dev.id}>
            <Link to={`/developers/${dev.id}`}><h2>{dev.name}</h2></Link>
            <p>{dev.description}</p>
            <img src={dev.perfil_image} alt="" />
            <img src={dev.baner_image} alt="" />
          </div>
        ))}
      </div>
    )
  }