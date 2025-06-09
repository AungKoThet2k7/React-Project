import React, { useEffect } from "react";
import Header from "./Header";
import { Navigate, Outlet, } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useCookie from "react-use-cookie";
import useUserStore from "../../../store/useUserStore";
const DashboardLayout = () => {
  const [token] = useCookie("token");
  const [userCookie, setUserCookie] = useCookie("user");
  const { user, setUser } = useUserStore();

  if (!token) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    setUser(JSON.parse(userCookie));
  },[])

  return (
    <>
      <Header />
      <Outlet />
      <Toaster position="top-right" />
    </>
  );
};

export default DashboardLayout;
