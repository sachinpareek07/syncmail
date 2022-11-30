import React from 'react';
import { Outlet } from 'react-router-dom';
import "./layout.scss";

const UnProtectedLayout = () => {
    return (
        <div className='layout'>
        <div className='layoutContainer'>
             <Outlet />
        </div>
        </div>
    );
}

export default UnProtectedLayout;
