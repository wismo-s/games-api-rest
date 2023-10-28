import React, { useContext  } from 'react'
import { Contextapp } from '../api/context';

export function User() {
    const context = useContext(Contextapp)
    
    if (!context.data.session) {
        return(
            <div>login please</div>
        )
    }
    return (
            <div>
                <h1>{context.data.user.username}</h1>
                <p>{context.data.user.image_perfil}</p>
            </div>
        )
}