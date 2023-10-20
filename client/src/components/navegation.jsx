import { Link } from "react-router-dom"

export function Navegation(props) {
    return (
      <div className="bg-blue-400">
        <div className="flex bg-blue-500 h-11 justify-center">
        <Link className="text-white font-bold pt-2 pr-3 pl-3 hover:bg-blue-900 hover:text-green-400" to="/games">GAMES</Link>
        <Link className="text-white font-bold pt-2 pr-3 pl-3 hover:bg-blue-900 hover:text-green-400" to="/developers">DEVELOPER</Link>
        <Link className="text-white font-bold pt-2 pr-3 pl-3 hover:bg-blue-900 hover:text-green-400" to="/gender">GENDER</Link>
        </div>
        <div>
          {props.children}
        </div>
      </div>
    )
  }