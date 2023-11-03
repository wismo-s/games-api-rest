import { useContext } from "react"
import { Contextapp } from "../api/context";
import { Link } from "react-router-dom";

export function Game(props) {
    const context = useContext(Contextapp);

    const objd = context.data.developers.filter(dev => dev.id == props.game.developer);
    const [dev] = objd

  return (
    <div key={props.game.id} className="w-56 bg-blue-800 h-96 rounded-lg shadow-gray-800 shadow-lg">
        <Link to={`/games/${props.game.id}`}>
        <div style={{ backgroundImage: `url(${props.game.port_image})` }} className=" bg-top bg-cover h-64 w-56 bg-no-repeat hover:opacity-80"></div>
        <h2 className="text-lg text-white font-bold mt-1 ml-2 w-auto">{props.game.title}</h2>
        <p className="text-green-400 ml-2 font-bold">{dev.name}</p>
        <p className="text-white ml-2 pr-32">{props.game.date_realise}</p>
        <div className="text-white font-bold ml-32 p-2 w-20 rounded-lg bg-cyan-500">$/.{props.game.price}</div>
        </Link>
    </div>
  )
}
