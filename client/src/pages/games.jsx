import React, { useState, useEffect } from 'react';
import { listAllObj } from '../api/list.api'

export function Games() {

  const [objs, setObj] = useState([]);

    useEffect(() => {
      async function getObj() {
        const res = await listAllObj('games/');
        setObj(res.data);
        console.log(res.data);
    }
    getObj();
    }, []);

    return (
           <div>
                {objs.map(game => (
                    <div key={game.id}>
                        <h1>{game.title}</h1>
                        <p>{game.description}</p>
                        <p>{game.date_realise}</p>
                        <p>{game.calification}</p>
                        <p>{game.sellers}</p>
                        <div>
                            {game.gender.map(gen => (
                                <p key={gen.id}>{gen}</p>
                            ))}
                        </div>
                        <p>{game.developer}</p>
                        <div>
                            <img src={game.port_image} alt="" />
                        </div>
                        <div>
                            <img src={game.baner_image} alt="" />
                        </div>
                    </div>
                ))}
            </div>
    );
}
