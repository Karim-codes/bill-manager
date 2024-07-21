
// import './App.css';
// import Navbar from './Component/Navbar';

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//     </div>
//   );
// }

// export default App;

import * as React from "react";
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
import "./App.css"
import Login from "./Component/Login";


const Layout = () => {
    return(
      <div className="app">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/AboutUS",
        element: <About />
      },
      {
        path:"/ManageBills",
        element: <ManageBills />
      },
      {
        path:"/Login",
        element: <Login />
      }
    ]
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
