import React from 'react'
import { Outlet } from "react-router-dom";
import ServiceForm from './pages/ServiceForm';
import Header from './partial/Header'
import Sidebar from './partial/Sidebar'

const Dashboard = () => {
  return (
    <div>
        <Header />
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default Dashboard
