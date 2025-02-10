import './App.css'
import { UseFetch } from './components/useFetch'

function App() {

  const { datos, error, loading } = UseFetch('https://adrian.informaticamajada.es/api/asociaciones')

  console.log(datos)
  if (loading) return <p>Cargando...</p>
  if (error) return <p>Error</p>

  return (
    <>
      <div className='w-full h-full flex justify-center items-center'>
        <p>Alejandro y Adri s</p>
      </div>
    </>
  )
}

export default App
