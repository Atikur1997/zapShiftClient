import { use } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const useAuth = () => {
  return use(AuthContext);
};

export default useAuth;
