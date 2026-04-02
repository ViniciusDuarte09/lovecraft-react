import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"

import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default App
