import { Outlet } from "react-router-dom"


function App() {
  
  return (
    <>
      <nav>Navbar</nav>
      <main>
        <h1>Home</h1>
        <Outlet />
      </main>
     <footer>footer</footer>
    </>
  )
}

export default App
