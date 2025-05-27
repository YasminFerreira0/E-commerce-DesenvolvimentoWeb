import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Routers from './conponentes/routers/rotas'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routers />
      </BrowserRouter>
    </>
  )
}

export default App
