import { Link } from "react-router-dom"

export function Navegation() {
    return (
      <div>
        <Link to="/games">games</Link>
        <Link to="/developers">developer</Link>
        <Link to="/gender">gender</Link>
      </div>
    )
  }