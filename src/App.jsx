
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import "./App.css";
import { Home } from "./Component/Home";
import { Blog } from "./Component/Blog";
import { About } from "./Component/About";
import { Applayout } from "./Applayout/Applayout";


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Applayout />,
       children: [
        {
          index: true,   // default route (/)
          element: <Home />,
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path: "/Blog",
          element: <Blog></Blog>
        }
      ]
    },
  ])
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
