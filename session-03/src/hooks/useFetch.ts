import { useEffect, useState } from "react";

// T ==> Generics
export function useFetch<T>(url:string){
    //Guardar data final
    const [data,setData] = useState <T | null>(null)
    // Mostrar si esta cargadno
    const [loading, setLoading] = useState <boolean>(true)
    // Mostrar error si existe
    const [error, setError] = useState <Error | null>(null)

    //Efecto para cuando cuando cargue el componente (o renderice por primera vez haremos useEffect())
    useEffect(()=>{
        setLoading(true)
        setError(null)
        //Creamos un mando a distancia para abortar el fetch
        const controller = new AbortController();
        //Es una señal que va por el cable del fetch
        const { signal } = controller;

        const fetchData = async () =>{
            try{
                //Hacemos la llamada y pasamos la señal de cancelación
                const response = await fetch(url, { signal });
                if(!response.ok) {
                    setError(error as Error)
                    throw new Error('Error en la petición');
                }
                const results = await response.json()
                setError(null)
                setData(results)
            }catch(error){
                setError(error as Error)
            }finally{
                setLoading(false)
            }
        }

        //***** UNO DE LOS ERRORES MÁS COMUNES ES NO LLAMAR A LA FUNCIÓN DENTRO DE useEffect() *********
        //El return se ejecuta cuando se va a desmontar el componente
        fetchData()
        return()=>{
            controller.abort
        }
    },[url])

    return {data,loading,error}
}