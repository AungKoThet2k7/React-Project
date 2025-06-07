import React, { useEffect } from "react";
import Header from "./Header";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useCookie from "react-use-cookie";

const DashboardLayout = () => {

  const [token, setToken] = useCookie("token");

  if(!token) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <Outlet />
      <Toaster position="top-right"/>
    </>
  );
};

export default DashboardLayout;
