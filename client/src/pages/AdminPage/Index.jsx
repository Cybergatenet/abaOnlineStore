import React from 'react'
import './css/admin.css'
import Header from './Header'
import Navbar from './Navbar'
import Footer from './Footer'

function Index() {
  return (
    <div>
        <Header />
        <Navbar />
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
                    <h3 className="panel-title">Website Overview</h3>
                </div>
                <div className="panel-body row">
                    <div className="col-md-3">
                    <div className="well card dash-box">
                        <h2><span className="glyphicon glyphicon-user" aria-hidden="true"></span>785</h2>
                        <h4>Users</h4>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card dash-box">
                        <h2><span className="glyphicon glyphicon-list-alt" aria-hidden="true"></span>12</h2>
                        <h4>Pages</h4>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card dash-box">
                        <h2><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>33</h2>
                        <h4>Posts</h4>
                    </div>
                    </div>
                    <div className="col-md-3">
                    <div className="card dash-box">
                        <h2><span className="glyphicon glyphicon-start" aria-hidden="true"></span>12,343</h2>
                        <h4>Visitors</h4>
                    </div>
                    </div>
                </div>
                </div>
                <div className="panel panel-default">
                <div className="panel-heading bg-danger text-white">
                    <h3 className="panel-title">Latest Users</h3>
                </div>
                <div className="panel-body">
                    <table className="table table-striped table-hover bg-white">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Joined</th>
                    </tr>
                    <tr>
                        <td>cybergate</td>
                        <td>cybergatenet@yahoo.com</td>
                        <td>Dec 16, 2018</td>
                    </tr>
                    <tr>
                        <td>cybergate</td>
                        <td>cybergatenet@yahoo.com</td>
                        <td>Dec 16, 2018</td>
                    </tr>
                    <tr>
                        <td>cybergate</td>
                        <td>cybergatenet@yahoo.com</td>
                        <td>Dec 16, 2018</td>
                    </tr>
                    <tr>
                        <td>cybergate</td>
                        <td>cybergatenet@yahoo.com</td>
                        <td>Dec 16, 2018</td>
                    </tr>
                    <tr>
                        <td>cybergate</td>
                        <td>cybergatenet@yahoo.com</td>
                        <td>Dec 16, 2018</td>
                    </tr>
                    </table>
                </div>
            </div>
            </div>
        </div>
        </div>
        </section>
        </div>
  )
}

export default Index