import { Navigate, Outlet } from 'react-router-dom';
import store from '../../redux/store';

function SignUpProtected() {
  return !store.getState().loggedIn ? <Outlet /> : <Navigate to='/main' />
}

export default SignUpProtected