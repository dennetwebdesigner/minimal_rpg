import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

//@ts-ignore
export default ({ children, redirectTo }) => {
  const isAuth = window.localStorage.getItem("token");
  return isAuth ? children : <Navigate to={redirectTo} />;
};
