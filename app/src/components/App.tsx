import React from 'react';
import './App.css';
import Main from "./Main";
import Person from "./Person";
import ErrorPage from "./error-page";
import {createBrowserRouter, RouterProvider,} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "person",
    element: <Person/>,
  },
]);

const App = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  );
}

export default App;
