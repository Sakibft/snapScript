import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/Router';
import {
 
  RouterProvider,
} from "react-router-dom";
import AuthContextComponent from './providers/AuthContextComponent';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthContextComponent>
     <RouterProvider router={router} />
     </AuthContextComponent>
  </React.StrictMode>,
)
