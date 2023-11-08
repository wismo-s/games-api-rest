import { Link } from "react-router-dom"
import { useContext } from "react"
import { Contextapp } from "../api/context"

export function Navegation(props) {
    const context = useContext(Contextapp)

    return (
      <div className="bg-violet-950">
        <div className="flex bg-violet-900 h-11 justify-center">
        <Link className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/games">GAMES</Link>
        <Link className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/developers">DEVELOPER</Link>
        <Link className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/gender">GENDER</Link>
        <Link className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/singin">SING IN</Link>
        <Link className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/login">LOGIN</Link>
        <Link className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/logout">LOGOUT</Link>
        <Link className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/cart">CART</Link>
        <Link className="text-gray-300 font-bold pt-1 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" to="/user">
          <div style={{ backgroundImage: `url(${context.data.user.image_perfil})` }} 
          className=" h-9 w-9 bg-cover bg-no-repeat rounded-full">
          </div>
        </Link>
        </div>
        <div className="mb-4">
          {props.children}
        </div>
        <div className="flex bg-violet-900 h-11 justify-center">
          <div className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" ><a href="https://github.com/wismo-s" target="_blank" rel="noopener noreferrer">development for: Wismo</a></div>
          <div className="text-gray-300 font-bold pt-2 pr-3 pl-3 hover:bg-purple-800 hover:text-gray-100" ><a href="https://www.instagram.com/marco_rp25/" target="_blank" rel="noopener noreferrer">helped with: marco rumaldo</a></div>
        </div>
      </div>
    )
  }