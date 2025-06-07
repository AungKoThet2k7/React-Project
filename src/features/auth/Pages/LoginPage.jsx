import React from "react";
import Login from "../components/Login";
import { Toaster } from "react-hot-toast";

const LoginPage = () => {
  return (
    <section className="grid grid-cols-7 bg-white min-h-screen">
      <Toaster position="top-right" />
      
      <div className="sm:col-span-3 xl:col-span-2 hidden sm:flex flex-col gap-20 items-center justify-end">
        
        <img src="../src/assets/Collab-rafiki.svg" alt="" />
      </div>

      <div className="col-span-7 sm:col-span-4 xl:col-span-5 flex items-center justify-center bg-sky-50">
        <Login />
      </div>
    </section>
  );
};

export default LoginPage;
