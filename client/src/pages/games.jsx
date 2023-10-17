import React, { useContext } from 'react';
import { ListObjent } from '../components/listObjent'; // Asegúrate de que la importación sea correcta
import listContext from '../api/objecContex'

export function Games() {

    const objs = useContext(listContext);
    console.log(objs);

    return (
        <ListObjent url="games/">
        </ListObjent>
    );
}

/*
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
            */