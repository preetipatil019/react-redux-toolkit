import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const NavigationBar = () => {
  return (
      <>
          <NavBar />
          <main>
               <Outlet />
          </main>
     
    </>
  );
}

export default NavigationBar;
