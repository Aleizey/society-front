import './App.css'
import { useFetch } from './components/UseFetch'

function App() {

  const { datos, error, loading } = useFetch("https://adrian.informaticamajada.es/api/asociaciones");

  console.log("Hola", datos)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <div className='w-full h-full flex flex-col justify-center items-center'>
        {datos.map((aso) => (
          <div key={aso.id}>
            <p>{aso.nif}</p>
            <h2>{aso.nombre}</h2>
            <p>{aso.descripcion ? aso.descripcion : "No hay descripción"}</p>
            <img src={aso.imagen} alt="" width={100} />
          </div>
        ))}
      </div>
    </>
  )
}

export default App
