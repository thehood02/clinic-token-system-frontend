import React from 'react';
import ReactDOM from 'react-dom/client';

import {createBrowserRouter, RouterProvider} from "react-router-dom";
// routes
import Home from './routes/home';
import TokenDashboard from "./routes/tokenDashboard";
import CurrentToken from "./routes/currentToken";
// styles
import "./font.css"
import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/token-dashboard",
    element: <TokenDashboard />,
  },
  {
    path: "/current-token",
    element: <CurrentToken />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

