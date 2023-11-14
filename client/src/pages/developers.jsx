import { useContext } from "react"
import { Contextapp } from "../api/context";
import { Link } from "react-router-dom"

export function Developers() {
  const context = useContext(Contextapp);

    return (
      <main>
        <section className="developers-container">
        {context.data.developers.map(dev=>(
          <article key={dev.id} className="developer-item" >
            <Link to={`/developers/${dev.id}`}>
            <div className="developer-img">
             <img src={dev.perfil_image} alt="" />
            </div>
            <h2 className="">{dev.name}</h2>
            </Link>
          </article>
        ))}
        <Link className='add-developer' to='/developers/form'>+</Link>
        </section>
      </main>
    )
  }