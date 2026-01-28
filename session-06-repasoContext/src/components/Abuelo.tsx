import Padre from "./Padre"
import { useFamily } from "../hooks/useFamily"

const Abuelo = () => {
  const {contador}=useFamily()
  return (
     <div className="p-4 max-w-2xl mx-auto">
      <div className="border-4 border-green-400 rounded-lg p-4 bg-green-50">
        <h1>Abuelo</h1>
          <p>El contador es: {contador}</p>
          <div className="mt-4 border-4 border-purple-200 rounded-lg">
          <Padre />
          </div>
      </div>
    </div>
  )
}

export default Abuelo
