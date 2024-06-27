// import React from 'react'
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import Error from "./Components/Error.jsx";
import LoginPage from "./Components/LoginPage.jsx";
import Header from "./Components/Header";
import Search from "./Components/Search";
import Footer from "./Components/Footer";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Cart from "./Components/Cart.jsx";
import { Provider } from "react-redux";
import store from "./store/store.js";
function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Search />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path:'/cart',
        element:<Cart/>
      }
    ],
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
