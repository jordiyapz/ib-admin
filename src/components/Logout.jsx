import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useLogin } from "../hooks/login";

const Logout = () => {
  const [, { logout }] = useLogin();

  useEffect(() => {
    logout();
  }, [logout]);

  return <Navigate to="/" replace />;
};

export default Logout;
