import { createBrowserRouter } from "react-router-dom";

import Home from "@/pages/home";
import Login from "@/pages/login";
import Register from "@/pages/register";

export const router = createBrowserRouter([
  { path: "/", Component: Home },
  { path: "/login", Component: Login },
  { path: "/register", Component: Register },
]);
