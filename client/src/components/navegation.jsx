import { Link } from "react-router-dom"

export function Navegation(props) {
    return (
      <div className="bg-violet-950">
        <div className="flex bg-violet-900 h-11 justify-center">
        <Link className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/games">GAMES</Link>
        <Link className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/developers">DEVELOPER</Link>
        <Link className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/gender">GENDER</Link>
        <Link className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/singin">SING IN</Link>
        <Link className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/login">LOGIN</Link>
        <Link className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/logout">LOGOUT</Link>
        <Link className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/user">USER</Link>
        <Link className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/cart">CART</Link>
        </div>
        <div>
          {props.children}
        </div>
      </div>
    )
  }