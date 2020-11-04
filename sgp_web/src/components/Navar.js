import React from 'react'
// import NotFoundImg from '../images/404.png'
import {Link} from 'react-router-dom'
const Nav = () => (
<header id="header">
      <div id="topbar">
        <div className="container">
          <div className="social-links">
            <a href="#" className="twitter">
              <i className="fa fa-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="fa fa-facebook" />
            </a>
            <a href="#" className="linkedin">
              <i className="fa fa-linkedin" />
            </a>
            <a href="#" className="instagram">
              <i className="fa fa-instagram" />
            </a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="logo float-left">
          {/* Uncomment below if you prefer to use an image logo */}
          <h1 className="text-light">
            <a href="#intro" className="scrollto">
              <span>MRBS</span>
            </a>
          </h1>
          {/* <a href="#header" class="scrollto"><img src="img/logo.png" alt="" class="img-fluid"></a> */}
        </div>
        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
            <li className="active">
              <a href="#intro">Home</a>
            </li>
            <li>
              <a href="#about">Info</a>
            </li>
            <li>
            <Link to="/Home/Search">  Buscador</Link>
            
            </li>
            <li>
            <Link to="/Home/Login">  Login</Link>
            </li>
          </ul>
        </nav>
        {/* .main-nav */}
      </div>
    </header>);
    export default Nav