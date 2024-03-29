import React from 'react'

import {Link} from 'react-router-dom'

export default function Aside() {
    return (
<aside className="main-sidebar sidebar-dark-primary elevation-4 aside contenido " >
  {/* Brand Logo */}
  <a href="index3.html" className="brand-link">
    <img src="dist/img/sgpi.png" alt="SGPI" className="brand-image img-circle elevation-3" style={{opacity: '.8'}} />
    <span className="brand-text font-weight-light">SPGI</span>
  </a>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar user panel (optional) */}
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
      </div>
      <div className="info">
        <a href="#" className="d-block">Usuario de Prueba</a>
      </div>
    </div>
    {/* SidebarSearch Form */}
    <div className="form-inline">
      <div className="input-group" data-widget="sidebar-search">
        <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
        <div className="input-group-append">
          <button className="btn btn-sidebar">
            <i className="fas fa-search fa-fw" />
          </button>
        </div>
      </div>
    </div>
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open">
          <a href="#" className="nav-link active">
            <i className="far fa-clipboard nav-icon" />
            
            <p>
              Biblioteca
              <i className="right fas fa-angle-left" />
            </p>
                      
          </a>
          <ul className="nav nav-treeview">
          <Link to="/gradoterminado">
            <li className="nav-item">
              <a href="./index.html" className="nav-link">
              <i className="far fa-circle nav-icon"> </i>
              
                <p>Trabajos de grado terminados</p>
                 
              </a>
            </li>
            </Link>
            <Link to="/grado">
            <li className="nav-item">
              <a href="./index3.html" className="nav-link">
                <i className="far fa-circle nav-icon" />
                
                <p>Trabajos de grado</p>
                 
              </a>
            </li>
            </Link>
          </ul>
        </li>

       
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
    )
}
