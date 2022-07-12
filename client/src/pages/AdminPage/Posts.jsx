import React from 'react'
import './css/admin.css'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

function Posts() {
  return (
    <div>
        <Navbar />
        <Header />
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
                        <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style={{width: "60%"}}>60%</div>
                    </div>
                    <h4>BandWidth Used</h4>
                    <div className="progress">
                        <div className="progress-bar" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width: "40%"}}>40%</div>
                    </div>
                    </div>
                </div>
                <div className="col-md-9">
                    <div className="panel panel-default">
                    <div className="panel-heading main-color-bg">
                        <h3 className="panel-title">Posts</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <input type="text" className="form-control" placeholder="Filter Posts..." />
                            </div>
                        </div>
                        <br />
                        <table className="table table-striped table-hover">
                            <thead>
                            <tr>
                                <th>Title</th>
                                <th>Published</th>
                                <th>Created</th>
                                <th></th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Blog Post One</td>
                                <td><span className="gylphicon gylphicon-ok" aria-hidden="true"></span></td>
                                <td>Dec 12, 2020</td>
                                <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Delete</a> </td>
                            </tr>
                            <tr>
                                <td>Blog Post two</td>
                                <td><span className="gylphicon gylphicon-ok" aria-hidden="true"></span></td>
                                <td>Dec 12, 2020</td>
                                <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Delete</a> </td>
                            </tr>
                            <tr>
                                <td>Blog Post Three</td>
                                <td><span className="gylphicon gylphicon-ok" aria-hidden="true"></span></td>
                                <td>Dec 12, 2020</td>
                                <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Delete</a> </td>
                            </tr>
                            <tr>
                                <td>Blog Post Four</td>
                                <td><span className="gylphicon gylphicon-ok" aria-hidden="true"></span></td>
                                <td>Dec 12, 2020</td>
                                <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Delete</a> </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    </div>
                    </div>
                    </div>
                </div>
            </section>
        <Footer />
    </div>
  )
}

export default Posts