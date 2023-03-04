import { createBrowserRouter } from "react-router-dom";
import Register from "../containers/register";
import Signup from "../containers/signin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export {router}