import React from 'react'
import { Outlet } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ServiceForm from './pages/ServiceForm';
import Header from './partial/Header'
import Sidebar from './partial/Sidebar'

const Dashboard = () => {
  return (
    <div>
        <ToastContainer />
        <Header />
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Dashboard
