import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root.jsx'
import ErrorPageNotFound from './pages/Error/Error.jsx'

const router = createBrowserRouter([
  {
    path:'/', 
    element: <Root />, 
    errorElement: <ErrorPageNotFound />,
  }
    // children: [
    //   {
    //   path:'homepage',
    //   element: <Homepage />
    // },
    // {
    //   path:'/contact',
    //   element: <Contact />
    //   }
    // ]},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
