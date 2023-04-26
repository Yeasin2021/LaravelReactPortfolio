import React from 'react';
import {  Navigate } from 'react-router-dom';
// import { useAuth } from './withAuth';

const Protected = ({isLoggedIn,children}) => {
  const token = localStorage.getItem("token");
//   const { loggedIn } = useAuth();
  if(!isLoggedIn){
     return <Navigate to='/login' replace />;
  }
//   if(!token){
//      return <Navigate to='/login' replace />;
//   }
  return children;
}

export default Protected
