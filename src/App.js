// App.js
import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import ManageBills from "./Pages/Manage-Bill/ManageBills";
import Login from "./Component/Login";

import "./App.css";

const Layout = () => (
  <div className="app">
    <Navbar />
    <Outlet />
    <Footer />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/AboutUS", element: <About /> },
      { path: "/ManageBills", element: <ManageBills /> },
      { path: "/Login", element: <Login /> }
    ]
  },
]);


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
