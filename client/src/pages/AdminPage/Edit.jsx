import React from 'react'
import './css/admin.css'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

function Edit() {
  return (
    <>
    <Navbar />
    <header id="header">
      <div className="container">
        <div className="row">
          <div className="col-md-10">
            <h1><span className="glyphicon glyphicon-cog" aria-hidden="true"></span> Edit <small> Edit Content</small></h1>
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
            <li><a href="index.html">DashBoard</a></li>
          <li className="active">User</li>
        </ol>
      </div>
    </section>

    <section id="main">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="list-group">
              <a href="index.html" className="list-group-item active main-color-bg"><span className="glyphicon glyphicon-cog" aria-hidden="true"></span>DashBoard</a>
              <a href="pages.html" className="list-group-item"><span className="glyphicon glyphicon-list" aria-hidden="true"></span>Pages <span className="badge">12</span></a>
              <a href="posts.html" className="list-group-item"><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>Posts <span className="badge">135</span></a>
              <a href="users.html" className="list-group-item"><span className="glyphicon glyphicon-user" aria-hidden="true"></span>Users <span className="badge">1037</span></a>
            </div>
            <div className="well">
              <h4>Disk space Used</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 60%;">60%</div>
              </div>
              <h4>BandWidth Used</h4>
              <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style="width: 40%;">40%</div>
              </div>
            </div>
          </div>
          <div className="col-md-9">
            <div className="panel panel-default">
              <div className="panel-heading main-color-bg">
                <h3 className="panel-title">Edit Page</h3>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label>Page Title</label>
                    <input type="text" className="form-control" placeholder="Page Title" />
                    </div>
                    <div className="form-group">
                      <label>Page Title</label>
                      <textarea name="editor1" className="form-control" placeholder="Page Body"></textarea>
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" checked /> Published
                    </label>
                  </div>
                  <div className="form-group">
                    <label>Meta Tags</label>
                    <input type="text" className="form-control" placeholder="Add Some Tags..." />
                  </div>
                  <div className="form-group">
                    <label>Meta Description</label>
                    <input type="text" className="form-control" placeholder="Add Meta Description..." />
                  </div>
                  <input type="submit" className="btn btn-danger" value="Submit" />
                </form>
              </div>
            </div>
        </div>
      </div>
      </div>
    </section>

    <footer id="footer">
      <p>Copyright Cyber-Admin, &copy; 2020</p>
    </footer>


    <div className="modal fade" id="addPage" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <form>
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="close"><span aria-hidden="true"></span></button>
            <h4 className="modal-title" id="myModalLabel">Add Page</h4>
          </div>
          <div className="modal-body">
                <div className="form-group">
                  <label>Page Title</label>
                  <input type="text" className="form-control" placeholder="Page Title" />
              </div>
              <div className="form-group">
                <label>Page Title</label>
                <textarea name="editor1" className="form-control" placeholder="Page Body"></textarea>
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Published
              </label>
            </div>
            <div className="form-group">
              <label>Meta Tags</label>
              <input type="text" className="form-control" placeholder="Add Some Tags..." />
            </div>
            <div className="form-group">
              <label>Meta Description</label>
              <input type="text" className="form-control" placeholder="Add Meta Description..." />
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
            <button type="submit" className="btn btn-primary">Save Changes</button>
          </div>
        </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default Edit