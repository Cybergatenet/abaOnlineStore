import React from 'react'

function Header() {
  return (
    <div>
        <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h1><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> DashBoard <small> manage your site</small></h1>
          </div>
          <div className="col-md-2">
            <div className="dropdown create">
              <button className="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Create Content</button>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                <li><a className="dropdown-item" type="button" data-toggle="model" data-target="#addPage">Add Page</a></li>
                <li><a className="dropdown-item" href="posts.html">Add Post</a></li>
                <li><a className="dropdown-item" href="users.html">Add User</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section id="breadcrumb">
      <div className="container">
        <ol className="breadcrumb">
          <li className="active">DashBoard</li>
        </ol>
      </div>
    </section>

    </div>
  )
}

export default Header