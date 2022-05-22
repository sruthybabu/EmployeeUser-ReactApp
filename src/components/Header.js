import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-secondary">
  <div className="container-fluid">
      <Link to="/" className="navbar-brand" >USER</Link>
   
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">
          <Link to="/" className="nav-link active">Login</Link>
        <Link to="/add" className="nav-link">Add User</Link> 
        <Link to="/view" className="nav-link" >View</Link>  
        
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Header