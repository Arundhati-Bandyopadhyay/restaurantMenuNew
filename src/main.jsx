import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './input.css'
import Menu from './components/menu/Menu.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Items from './components/menu/Items.jsx'
import CartItems from './components/cart/CartItems.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: '/',
        element: <Menu/>,
        children: [
          {
            index: true, // Render Items when the parent route matches exactly
            element: <Items />,
          },
          {
            path: '/cart',
            element: <CartItems />,
          },
        ],
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
