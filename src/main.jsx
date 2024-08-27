import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './pages/Root'
import ErrorPageNotFound from './pages/Error/Error'
import SignUp from './pages/auth/SignUp'
import Login from './pages/auth/Login'
import BrowseRecipes from './pages/BrowseRecipes'

const router = createBrowserRouter([
  {
    path:'/', 
    element: <Root />, 
    errorElement: <ErrorPageNotFound />,
    children: [
    {
      path:'/browseRecipes',
      element: <BrowseRecipes />
      }
    ]},
  {
    path:'/signUp',
    element: <SignUp />,
    errorElement: <ErrorPageNotFound />,
  },
  {
    path:'/login',
    element: <Login />,
    errorElement: <ErrorPageNotFound />
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
