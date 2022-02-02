import React from 'react'
import "./topBar.scss"
import MailIcon from '@material-ui/icons/Mail';
import PersonIcon from '@material-ui/icons/Person';

function TopBar({menuOpen, setMenuOpen}) {
  return (
    <div className={'topBar '+ (menuOpen && "active")} >
      <div className="wrapper">
        <div className='left'>
          <a href='#intro' className='logo'>AbrorDev</a>
          {/* <div className="itemContainer">
            <PersonIcon className="icon" />
            <span>4455</span>
          </div> */}
          <div className="itemContainer">
            <MailIcon className="icon" />
            <span>abrorwebdev@gmail.com</span>
          </div>
        </div>
        <div className='right'>
         <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
           <span className="line1"></span>
           <span className="line2"></span>
           <span className="line3"></span>
         </div>
        </div>
      </div>
    </div>
  )
}

export default TopBar
