import { BrowserRouter } from "react-router"
import "./App.css"
import Routers from './conponentes/routers'
import PaginaProduto from "./pages/produtos"

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
