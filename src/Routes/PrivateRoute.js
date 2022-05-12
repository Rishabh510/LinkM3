import { Navigate, Outlet } from "react-router-dom";
import { getUser } from "../services/appwrite";
import Profile from "../pages/Profile";

export const PrivateRoute = () => {
  try {
    const auth = null;
    console.log("DATA:", auth);
    return auth ? <Outlet /> : <Navigate to="/login" />;
  } catch (error) {
    return <Navigate to="/login" />;
  }
};
