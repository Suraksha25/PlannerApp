import React from 'react'
import Navigationbar from './Navigationbar/Navigationbar';
import { Outlet } from 'react-router-dom';
function RootLayout() {
  return (
    <div>
        <Navigationbar></Navigationbar>
        <div style={{minHeight:"80vh"}}><Outlet/></div>
    </div>
  )
}

export default RootLayout