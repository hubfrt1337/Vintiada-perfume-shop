import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { Masculine } from './pages/Masculine/Masculine.jsx'
import { HomePage } from './pages/Homepage/HomePage.jsx'
import { Feminine } from './pages/Feminine/Feminine.jsx'
import { Unisex } from './pages/Unisex/Unisex.jsx'
import { Woody } from './pages/Woody.jsx'
import { Fresh } from './pages/Fresh.jsx'
import { Oriental } from './pages/Oriental.jsx'
import { Floral } from './pages/Floral.jsx'
import { CartPage } from './pages/cartPage/CartPage.jsx'
import { ProductsPage } from './pages/ProductsPage/ProductsPage.jsx'
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
        element: <Feminine></Feminine>
      },
      {
        path: "/unisex",
        element: <Unisex></Unisex>
      },
      {
        path: "/woody",
        element: <Woody></Woody>
      },
      {
        path: "/floral",
        element: <Floral></Floral>
      },
      {
        path: "/fresh",
        element: <Fresh></Fresh>
      },
      {
        path: "/oriental",
        element: <Oriental></Oriental>
      },
      {
        path: "/cart",
        element: <CartPage></CartPage>
      },
      {
    path: "/product/:id?",
    element: <ProductsPage></ProductsPage>
  },
    ]
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
