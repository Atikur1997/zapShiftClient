import React from "react";
import useAuth from "../hooks/useAuth";

const PrivateRoutes = ({ children }) => {
  const { user, loading } = useAuth;
  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <span className="loading loading-ring loading-xl"></span>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/login" replace></Navigate>;
  }

  return children;
};

export default PrivateRoutes;
