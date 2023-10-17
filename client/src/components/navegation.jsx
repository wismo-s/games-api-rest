import { Link } from "react-router-dom"

export function Navegation() {
    return (
      <div>
        <Link to="/games">games</Link>
        <Link to="/games/form">form games</Link>
        <Link to="/developers">developer</Link>
        <Link to="/developers/form">form develeper</Link>
        <Link to="/gender">gender</Link>
        <Link to="/gender/form">form gender</Link>
        <Link to="/userProfile">user profile</Link>
      </div>
    )
  }