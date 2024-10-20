import React from 'react';
import ReactDom from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import Main from './Layout/Main';
import Error from './Layout/Error';
import Home from './Component/Home';
import { StateManageMent } from './StateManage/StateMangeContext';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <Error/>,
    children:[
      {
        path: '/',
        element: <Home/>
      }
    ]
  }
])


ReactDom.createRoot(document.getElementById('root')).render(
<React.StrictMode>
  <StateManageMent>
  <RouterProvider router={router}/>
  </StateManageMent>
</React.StrictMode>
)
