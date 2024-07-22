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
import { Checkout } from "./Components/Checkout.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Main from "./Components/Main.jsx";
function App() {
  return (
    <>
      <ToastContainer />
      <ScrollToTop />
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
        element: <Main />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
    ],
    errorElement: <Error />,
  },
  
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
