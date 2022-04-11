import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import store from '../../redux/store';

function ProtectedRoute() {
  return store.getState().loggedIn ? <Outlet /> : <Navigate to='/signup' />
}

export default ProtectedRoute