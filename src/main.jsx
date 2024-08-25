import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root'
import ErrorPageNotFound from './pages/Error/Error'
import SignUp from './pages/auth/SignUp'

const router = createBrowserRouter([
  {
    path:'/', 
    element: <Root />, 
    errorElement: <ErrorPageNotFound />,
    // children: [
    // {
    //   path:'signUp',
    //   element: <SignUp />
    //   }
    // ]},
  },
  {
    path:'/signUp',
    element: <SignUp />,
    errorElement: <ErrorPageNotFound />,
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
