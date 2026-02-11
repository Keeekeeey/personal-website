
import {useState, useEffect} from 'react'

export default function useIsMobile(){

    let [isMobile , setIsMobile] = useState(false)

    useEffect( () => {
        const mql = window.matchMedia("(max-width:600px)")
        setIsMobile(mql.matches)
    }, [])
    

    return isMobile
}