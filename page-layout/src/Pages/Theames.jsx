import React from 'react'

import Header from '../Components/Header'
import SideMenu from '../Components/SideMenu'
import LeftBar from '../Components/LeftBar'
import RightBar from '../Components/RightBar'
import Footer from '../Components/Footer'

import { Outlet } from 'react-router-dom'

const Theames = () => {
  return (
    <> 
        <div className="container">
            <div className="header">
                <Header />
            </div>
            <div className="main">
                <div className="left-menu">
                    <SideMenu />
                </div>
                <div className="left-sidebar">
                    <LeftBar />
                </div>
                <Outlet /> 
                <div className="right-sidebar">
                    <RightBar />
                </div>
            </div>
            <div className="footer">
                <Footer />
            </div>
        </div>
    </>
  )
}

export default Theames;


