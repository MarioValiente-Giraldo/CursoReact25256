import { useState, type FormEvent, type ReactNode } from "react"
import { toast, Toaster } from "sonner"

const AppBasicoReact18 = () => {
  //Hooks useState
  type formState = {
    success:boolean;
    message:string;
  }
  const [state,setState]=useState<formState |null>({
    success:false,
    message:''
  })

  const simularApi =async () =>{
    await new Promise (resp=>setTimeout(resp,2000));

  }


  const [name,setName]=useState<string >('')
  const [subname,setSubname]=useState<string>('')
  const [fullname, setFullname] = useState<string>('')

  //Estados que guarde todo
  //Errores
  const [error,setError]=useState(null)
  //Loading
  const [isLoading,setIsLoading]=useState(null)

 function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
  e.preventDefault();
  setFullname(name?.trim()+' '+subname?.trim())
  toast.success(`Bienvenido ${fullname}`)
}

  return (
    <div>
      <Toaster />
      <form>
        <label>
          Formulario Básico Nombre y Apellidos
        </label>
        <input  name='name' value={name} onChange={(e)=>setName(e.target.value)}></input>
        <input  name='subname' value={subname} onChange={(e)=>setSubname(e.target.value)}></input>
        {/* <button onClick={handleSubmit}>Submit</button> */}
      </form>
    </div>
  )
}

export default AppBasicoReact18
