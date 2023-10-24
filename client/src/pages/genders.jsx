import { useEffect, useState } from "react"
import { listAllObj } from '../api/list.api'
import { Link } from "react-router-dom"

export function Genders() {

  const [genders, setgender] = useState([]);

  useEffect(() => {

    async function getdata() {
      const res = await listAllObj('genders/');
      console.log(res.data);
      setgender(res.data);
    }
    getdata();
  }, [])

  return (
    <div className="grid grid-flow-row grid-cols-5 gap-5 w-9/12 m-auto mt-8 pb-5">
      {genders.map(gender =>(
        <div key={gender.id} className="w-60 bg-blue-800 h-80 rounded-lg shadow-gray-800 shadow-lg">
          <Link to={`/gender/${gender.id}`}>
          <div style={{ backgroundImage: `url(${gender.image_url})` }} className=" bg-top bg-cover h-72 w-60 bg-no-repeat hover:opacity-80"></div>
            <h2 className="text-lg text-white font-bold mt-1 ml-2 w-auto">{gender.title}</h2>
          </Link>
        </div>
      ))}
      <Link to='/gender/form'>form games</Link>
    </div>
  )
}