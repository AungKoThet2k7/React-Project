import React, { useEffect, useState } from "react";
import Header from "./Header";
import { Navigate, Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import useCookie from "react-use-cookie";
import useUserStore from "../../../store/useUserStore";
import Sidebar from "../../../components/sidebar";
const DashboardLayout = () => {
  const [token] = useCookie("token");
  const [userCookie, setUserCookie] = useCookie("user");
  const { user, setUser } = useUserStore();

  const [isOpen, setIsOpen] = useState(false);
  const handleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // if (!token) {
  //   return <Navigate to="/" />;
  // }

  // useEffect(() => {
  //   setUser(JSON.parse(userCookie));
  // }, []);

  return (
    <div className="flex bg-gray-100">
      <Sidebar isOpen={isOpen} handleSidebar={handleSidebar} />
      <div className="w-full">
        <Header handleSidebar={handleSidebar} />
        <Outlet />
        <Toaster position="top-right" />
      </div>
    </div>
  );
};

export default DashboardLayout;
