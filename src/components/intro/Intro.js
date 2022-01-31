import React from 'react'
import "./intro.scss"

function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" />
        </div>
      </div>
      <div className="right">
        <div className='wrapper'>
          <h2>Hi there, I'am</h2>
          <h1>Abror Bog'ibekov</h1>
          <h3>Freelance <span></span></h3>
        </div>
        <a href='#portfolio'>
          <img src='assets/down.png'/>
        </a>
      </div>
    </div>
  )
}

export default Intro
