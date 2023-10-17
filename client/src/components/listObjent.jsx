import React, { useEffect, useState } from "react";
import { listAllObj } from '../api/list.api';
import listContext from '../api/objecContex'

export function ListObjent(props) {
    const [objs, setObj] = useState([]);

    useEffect(() => {
        async function getObj() {
            console.log(listContext);
            const res = await listAllObj(props.url);
            setObj(res.data);
            console.log(res);
        }
        getObj();
    }, [props.url]);

    return (
        <listContext.Provider value={objs}>
            {props.children}
        </listContext.Provider>
    )
}
