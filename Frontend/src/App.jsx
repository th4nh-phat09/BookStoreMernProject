import { Outlet } from "react-router-dom"
import Nav from "./components/Navbar"


function App() {
  
  return (
    <>
      <Nav />
      <main className="font-primary">
        <Outlet />
      </main>
     <footer>footer</footer>
    </>
  )
}

export default App
