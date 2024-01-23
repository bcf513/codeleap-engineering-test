import { Navigate, Outlet } from "react-router-dom";
import store from "../../redux/store";

function MainProtected() {
  return store.getState().loggedIn ? <Outlet /> : <Navigate to="/" />;
}

export default MainProtected;
