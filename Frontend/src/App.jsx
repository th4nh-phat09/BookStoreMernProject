import { Outlet } from "react-router-dom"
import Nav from "./components/Navbar"
import Footer from "./components/Footer"

function App() {
  
  return (
    <>
      <Nav />
      <main className="font-primary">
        <Outlet />
      </main>
     <Footer />

    </>
  )
}

export default App
