import React, { useState, useEffect } from 'react'

const useRequests = (url) => {
    const [resultado, setResultado] = useState({cargando: true, data: null})

    async function getDatos(url) {
        try {
            setResultado({cargando: true, data: null})
            const resp = await fetch(url)
            const data = await resp.json()
            setResultado({cargando: false, data})
        }
        catch (err) {console.log(err)}
    }

    useEffect(() => {
        getDatos(url)
    },[url])

    return resultado
}

export default useRequests

