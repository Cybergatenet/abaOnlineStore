import React from 'react'
import { Link } from 'react-router-dom'
import './css/bootstrap.min.css'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-danger fixed-top">
      <Link className="navbar-brand" to={'/admin'}>Cyber-Admin</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link active" href="index.html">DashBoard</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="pages.html">Pages<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="posts.html">Posts</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="users.html">Users</a>
          </li>
        </ul>

        {/* <ul className="nav navbar-nav navbar-right">
          <li className="nav-item active">
            <a className="nav-link" href="#">Welcome, Cybergate<span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="login.html">Logout</a>
          </li>
          </ul> */}
        {/* <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
      </div>
    </nav>
  )
}

export default Navbar