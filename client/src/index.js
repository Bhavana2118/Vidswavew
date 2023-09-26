import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import SecureUploads from "./components/SecureUploads";
import Images from "./components/Images";
import Tittle from './components/Tittle';
import "bootstrap/dist/css/bootstrap.min.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/"  element={<App />} >
      <Route path='/' element={<Tittle/>}/>
      <Route path='secureUploads' element={<SecureUploads/>}/>
      <Route path='images' element = {<Images/>}/>
    </Route>
  )
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


