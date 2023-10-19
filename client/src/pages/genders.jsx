import { useEffect, useState } from "react"
import { listAllObj } from '../api/list.api'

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
    <div>
      {genders.map(gender =>(
        <div key={gender.id}>
          <h2>{gender.title}</h2>
          <img src={gender.image_url} alt="" />
        </div>
      ))}
    </div>
  )
}