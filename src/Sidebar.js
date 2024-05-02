import React from 'react'
import './Sidebar.css'
import logo from './logo.svg'
import { auth } from './firebase'

function Sidebar() {
  const googleUrl = "https://firebasestorage.googleapis.com/v0/b/mirman-blackbaud.appspot.com/o/kisspng-google-logo-logo-logo-5ade7dc753b015.9317679115245306313428-removebg-preview.png?alt=media&token=b1144df5-f3d5-48cf-8b64-b9d4d7e77086"
  const imgUrl = "https://bbk12e1-cdn.myschoolcdn.com/ftpimages/1506/logo/wordmark-white.png"
  return (
    <div className='sidebar'>
        <img src={imgUrl} alt="mirman logo" id="sidebarLogo"/>
        <div className='sidebarTop'>
          <a href="/dashboard">
            <h1 className='dashboardLink'>Dashboard</h1>
            </a>
            <a href="/classes">
            <h1 className='dashboardLink'>classes</h1>
            </a>
            <a href="/assignments">
            <h1 className='dashboardLink'>Assignments</h1>
            </a>
            <a href="/performance">
            <h1 className='dashboardLink'>Performance</h1>
            </a>
        </div>
        <div className='sidebarBottom'>
            <h1 className='profileLink'>Me {`(${auth.currentUser.displayName})`}</h1>
            <h1 className='logoutLink'>Log Out</h1>
        </div>
        <div id="credits">
        <h4>Powered</h4><img src={googleUrl} alt="google logo" id="google"/>
        <h4>Servers</h4>
         </div>
    </div>
  )
}

export default Sidebar