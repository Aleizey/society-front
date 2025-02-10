import './App.css'
import UseFetch from './components/UseFetch'

function App() {

  const { datos, error, loading } = UseFetch('https://adrian.informaticamajada.es/api/asociaciones');

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <>
      <div className='w-full h-full flex justify-center items-center'>
        {datos.map(
          (item) => (
            <div key={item.id}>
              <h2>{item.nombre}</h2>
            </div>
          )
        )}
      </div>
    </>
  )
}

export default App
