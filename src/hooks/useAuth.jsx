import React, { use } from "react";
import { Auth } from "./../../node_modules/@firebase/auth/dist/browser-cjs/src/model/public_types.d";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const useAuth = () => {
  const authInfo = use(AuthContext);
  return authInfo;
};

export default useAuth;
