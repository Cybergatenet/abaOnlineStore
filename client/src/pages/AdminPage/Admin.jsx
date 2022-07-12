import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import './css/admin.css'
import Axios from 'axios'
import Footer from './Footer'

export default function Admin() {
    const [email, setEmail] = useState('')
    const [pwd, setPwd] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        const adminData = {
            username: email,
            password: pwd 
        }
        // Axios.post('http:localhost:5000/api/admin/login', adminData)
        // .then(res => console.log(res))
        console.log(adminData)

    }
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark bg-danger fixed-top">
                <Link className="navbar-brand" to={'/admin'}>Cyber-Admin</Link>
            </nav>

            <header id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h1 className="text-center mt-0"> Admin Area <small> Account Login</small></h1>
                    </div>
                </div>
            </div>
            </header>

            <section>
                <div className="container">
                    <div className="row">     
                        <div className="col-md-12 col-md-offset-4">
                            <form id="login" className="card">
                                <div className="form-group mx-3">
                                    <label>Email Address</label>
                                    <input type="email" className="form-control" placeholder="Enter Admin Email..." onChange={(e) => setEmail(e.target.value)} />
                                </div>
                                <div className="form-group mx-3">
                                    <label>Password</label>
                                    <input type="password" className="form-control" placeholder="Enter Admin Password..." onChange={(e) => setPwd(e.target.value)} />
                                </div>
                                <div className='form-group mx-3'>
                                    <button type="submit" className="btn btn-danger btn-md btn-block my-3" onClick={handleSubmit}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />

        </div>
    )
}