import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import UserStore from "./store/UserStore";
import DeviceStore from "./store/ItemStore";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Auth from "./pages/Auth"


export const Context = createContext(null)

const router = createBrowserRouter([
  {
    path: "/",
    element: <Auth />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context.Provider value={{
    user: new UserStore(),
    device: new DeviceStore(),
}}>
    <RouterProvider router={router} />
</Context.Provider>
  
);