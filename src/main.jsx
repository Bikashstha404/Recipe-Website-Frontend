import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './routes/Error.jsx'
import Root from './routes/Root.jsx'
import Homepage from './routes/Homepage.jsx'
import Contact from './routes/Contact.jsx'

const router = createBrowserRouter([
  {
    path:'/', 
    element: <Root />, 
    error: <Error />,
    children: [
      {
      path:'homepage',
      element: <Homepage />
    },
    {
      path:'/contact',
      element: <Contact />
      }
    ]},
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
