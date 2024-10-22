import React from 'react'
import IMAGE from './Image/logo.png'

function Home() {
  return (
    <>
     <div className='home'>
      <a href="#" className='logo'>
        <img src={IMAGE} alt="" />
      </a>
      <h1>Welcome To Knight Studios</h1>
      <h2>We are team of talented designers making websites with Bootstrap</h2>
      <a href="" className='btn'>Get Started</a>
    </div> 
    </>
  )
}

export default Home
