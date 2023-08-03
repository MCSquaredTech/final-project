import React from 'react'
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const LayoutPage = () => {
  return (
    <div className="header">

        <Navbar />

        <Outlet /> 

        <Footer /> 
                    
        {/* <nav className="navbar">
            <Navbar />
        </nav>
               
        <main className="main">
            <section className="left-sidebar">
                <Sidebar />
            </section>
            <div>
                <Outlet />    
            </div>            
        </main>
        
        <footer className="footer">
            <Footer /> 
        </footer> */}
    </div>
  )
}

export default LayoutPage;
