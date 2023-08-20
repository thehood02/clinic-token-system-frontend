import React from 'react';
import ReactDOM from 'react-dom/client';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
// routes
import Home from './routes/home';
import CurrentToken from "./routes/currentToken";
// styles
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/current-token",
    element: <CurrentToken />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

