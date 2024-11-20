import { Outlet } from "react-router-dom"


function App() {
  
  return (
    <>
      <nav>Navbar</nav>
      <main className="font-primary">
        <Outlet />
      </main>
     <footer>footer</footer>
    </>
  )
}

export default App
