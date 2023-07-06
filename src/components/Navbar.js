import React from 'react'
import logo from '../images/logo.png'
export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#8C6F7C'}} >
        <div className="container-fluid">
        <a className="navbar-brand text-light font-weight-bold font-italic" href="/">Ticy-Tac</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="/business">About</a>
            </li>
        </ul>
        <div className='mx-2' style={{width: '47px', height: '47px'}}><img src={logo} alt="Logo" /></div>
        </div>
    </div>
    </nav>
   )
}
