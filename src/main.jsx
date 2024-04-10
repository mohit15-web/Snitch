// import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter,Outlet } from 'react-router-dom'
import Error from './Components/Error.jsx'
import LoginPage from './Components/LoginPage.jsx'
import Header from "./Components/Header"
import Search from "./Components/Search"


function App() {
  return (
    <>
    <Header />
    <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children:[
      {
        path:"/",
        element:<Search />
      },
      {
        path:"/login",
        element:<LoginPage />
      },
    ],
    errorElement: <Error />
    
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  
  <RouterProvider router={router}/>
)