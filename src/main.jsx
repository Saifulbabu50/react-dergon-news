import React from 'react'
import './index.css'
import  ReactDOM  from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Route.jsx'
import AuthProvider from './providers/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      < RouterProvider router={router} ></RouterProvider >
    </AuthProvider>
  </React.StrictMode>,
)
  
   