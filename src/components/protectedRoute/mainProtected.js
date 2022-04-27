import { Navigate, Outlet } from 'react-router-dom';
import store from '../../redux/store';

function MainProtected() {
  return store.getState().loggedIn ? <Outlet /> : <Navigate to='/signup' />
}

export default MainProtected