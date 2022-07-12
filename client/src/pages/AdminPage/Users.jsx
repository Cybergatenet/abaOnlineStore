import React from 'react'
import './css/admin.css'
import Navbar from './Navbar'
import Header from './Header'
import Footer from './Footer'

function Users() {
  return (
    <div>
        <Navbar />
        <Header />
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
                                <h3 className="panel-title">Users</h3>
                            </div>
                        <div className="panel-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <input type="text" className="form-control" placeholder="Filter Users..." />
                                </div>
                            </div>
                            <br />
                            <table className="table table-striped table-hover">
                                <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Joined</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>Cybergate Mercygate</td>
                                    <td>cybergatenet@yahoo.com</td>
                                    <td>Dec 12, 2019</td>
                                    <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Delete</a> </td>
                                </tr>
                                <tr>
                                    <td>Abelistist Chinedu</td>
                                    <td>abelististuwas@gmail.com</td>
                                    <td>Feb 23, 2020</td>
                                    <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Delete</a> </td>
                                </tr>
                                <tr>
                                    <td>Vania Ijeoma</td>
                                    <td>ijvania@gmail.com</td>
                                    <td>feb 31, 2017</td>
                                    <td><a className="btn btn-default" href="edit.html">Edit</a> <a className="btn btn-danger" href="#">Delete</a> </td>
                                </tr>
                                <tr>
                                    <td>Ejike Jackson</td>
                                    <td>ejikej@gmail.com</td>
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

export default Users