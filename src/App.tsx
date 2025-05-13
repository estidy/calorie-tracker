import Form from "./components/form"

function App() {

  return (
    <>
      <header className="bg-lime-600 py-3">
        <div className="max-w-4xl mx-auto flex justify-between">
          <h1 className="text-center text-lg font-bold text-white uppercase">
            Contador de Calorias
          </h1>
        </div>
      </header>
      <section>
        <div>
          <Form />
        </div>
      </section>
    </>
  )
}

export default App
