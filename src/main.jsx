import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import router from './routes/Router';
import {
 
  RouterProvider,
} from "react-router-dom";
import AuthContextComponent from './providers/AuthContextComponent';
import { Toaster } from 'react-hot-toast';
 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthContextComponent>
     <RouterProvider router={router} />
     <div><Toaster/></div>
     </AuthContextComponent>
  </React.StrictMode>,
)
