import { Navigate, Outlet } from "react-router";
import { useUser } from "../hooks/UserContext";

const ProtectedRouter = () => {
  const { user } = useUser();
  if (!user) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRouter;
