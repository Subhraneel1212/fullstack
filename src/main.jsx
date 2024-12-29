
import { createRoot } from 'react-dom/client';
import{ createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css';
import App from './App.jsx';
import Home from './components/home.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Signup.jsx';
import { StrictMode } from 'react';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
  {
    path:"",
    element: <Home />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },]
}
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
