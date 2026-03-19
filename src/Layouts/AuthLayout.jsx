import React from "react";
import Logo from "../Pages/components/Logo/Logo";
import { Outlet } from "react-router";
import authImg from "../assets/authImage.png";

const AuthLayout = () => {
  return (
    <div className="bg-white max-w-7xl mx-auto rounded-2xl">
      <div className="px-4 py-4">
        <Logo></Logo>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex-2 md:flex-1">
          <Outlet></Outlet>
        </div>
        <div className="flex flex-1 bg-yellow-50 h-screen items-center justify-center">
          <img src={authImg} alt="Auth background" />
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
