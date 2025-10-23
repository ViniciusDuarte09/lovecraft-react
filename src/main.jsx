import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './styles/index.css'

import App from './App.jsx'
import Home from "./pages/Home.jsx"
import Creatures from "./pages/Creatures.jsx"
import About from "./pages/About.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "/", element: <Home />},
      {path: "/about", element: <About />},
      {path: "/creatures", element: <Creatures />}
    ],
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
