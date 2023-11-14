import { useContext } from "react"
import { Contextapp } from "../api/context";
import { Link } from "react-router-dom"

export function Genders() {
  const context = useContext(Contextapp);

  return (
    <main>
      <section className="genders-container">
      {context.data.genders.map(gender =>(
        <article className="gender-item" key={gender.id}>
          <Link to={`/gender/${gender.id}`}>
          <div className="gender-img">
            <img src={gender.image_url} className="" />
          </div>
          <h2>{gender.title}</h2>
          </Link>
        </article>
      ))}
      <Link className="add-gender" to='/gender/form'>+</Link>
      </section>
    </main>
  )
}