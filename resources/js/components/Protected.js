// import React from 'react';
// import {  Navigate, useHistory } from 'react-router-dom';
// // import { useAuth } from './withAuth';

// const Protected = ({isLoggedIn,children}) => {
//   const token = localStorage.getItem("access_token");
//   //window.alert(token)
// //   const { loggedIn } = useAuth();
// //   if(!isLoggedIn){
// //      return <Navigate to='/login' replace />;
// //   }
//   if(!token){
//      return <Navigate to='/login' replace />;
//   }
//   return children;
// }

// export default Protected



import { React, useState } from 'react';
import {  Navigate, useHistory } from 'react-router-dom';

const Protected = ({isLogedIn,children}) => {

    const loginData = localStorage.getItem('access_token');
    // console.log(JSON.parse(loginData));
    if(!isLogedIn && !loginData){
        return <Navigate to='/login' replace />
    }
    return children;
}

export default Protected

