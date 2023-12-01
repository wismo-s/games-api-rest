import { useContext, useEffect, useState } from "react";
import { Game } from "../components/game";
import { Contextapp } from "../api/context";
const Home = () => {
  const context = useContext(Contextapp);
  const [date, setdate] = useState(new Date())
  const [horas, sethora] = useState('00')
  const [minutos, setminutos] = useState('00')
  const [segundos, setsegundos] = useState('00')
  const [image, setimage] = useState('https://bnetcmsus-a.akamaihd.net/cms/blog_header/VLDFMYRZW6681630361593471.jpg')
  const [games, setganes] = useState(context.data.games.slice(0,6))
  useEffect(()=>{
    let counter = 1;
    setInterval(() => {
      let url1 = 'https://bnetcmsus-a.akamaihd.net/cms/blog_header/VLDFMYRZW6681630361593471.jpg'
      let url2 = 'https://cdn-sliders.eneba.com/resized/rLb33poGVe22NEnICrk2_b5APIhBphsJ9sV5QmyDp4c_1500x400_1x-1500x400_150_0.jpg'
      let url3 = 'https://areajugones.sport.es/wp-content/uploads/2022/12/eneba.jpg'
      switch (counter) {
        case 0:
          setimage(url1)
          counter++
          break;
        case 1:
          setimage(url2)
          counter++
          break;
        default:
          setimage(url3)
          counter = 0
          break;
      }
    }, 4000);
  }, [])
  useState(()=>{
    setInterval(()=>{
      let f = new Date()
      let h = f.getHours();
      let m = (f.getMinutes() < 10 ? "0" + f.getMinutes(): f.getMinutes());
      let s = (f.getSeconds() < 10 ? "0" + f.getSeconds(): f.getSeconds());
      sethora(h)
      setminutos(m)
      setsegundos(s)
    }, 1000)
  }, [])
  return (
    <main className="container-carrusel">
      <section className="text-white text-2xl p-5 w-80 mb-2 m-auto bg-violet-800">📅{date.getFullYear()}/{date.getMonth()+1}/{date.getDay()}🕒{horas}:{minutos}:{segundos}</section>
      <section className="carrusel" style={{ backgroundImage: `url(${image})` }}>
      </section>
      <div className="container-list">
      <section className="games-container">
        {games.map((game) => (
          <Game key={game.id} game={game} />
        ))}
      </section>
      </div>
    </main>
  );
};

export default Home;
