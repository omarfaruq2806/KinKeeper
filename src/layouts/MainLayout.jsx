import React from 'react';
import NavBar from '../components/navbar/NavBar';
import { Outlet } from 'react-router';
import Footer from '../components/footer/Footer';
import { ToastContainer } from 'react-toastify';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
            <ToastContainer/>
        </div>
    );
};

export default MainLayout;