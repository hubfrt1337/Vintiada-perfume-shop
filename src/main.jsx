import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Masculine } from './pages/Masculine/Masculine.jsx'
import { HomePage } from './pages/Homepage/HomePage.jsx'
import './index.css'
import App from './App.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>
      },
      {
        path: "/masculine",
        element: <Masculine></Masculine>
      },
      {
        path: "/feminine",
        element: <Masculine></Masculine>
      },
      {
        path: "/unisex",
        element: <Masculine></Masculine>
      },
      {
        path: "/woody",
        element: <Masculine></Masculine>
      },
      {
        path: "/floral",
        element: <Masculine></Masculine>
      },
      {
        path: "/fresh",
        element: <Masculine></Masculine>
      },
      {
        path: "/oriental",
        element: <Masculine></Masculine>
      },
    ]
  },

])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
