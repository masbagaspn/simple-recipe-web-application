import { BrowserRouter } from "react-router-dom"
import Header from "./components/Header"
import Pages from "./pages/Pages"

function App() {

  return (
    <main 
      className={'max-w-[100vw] w-full max-h-[100vh] h-screen overflow-x-hidden text-raleway'}
    >
      <BrowserRouter>
        <Header />
        <Pages />
      </BrowserRouter>
    </main>
  )
}

export default App
