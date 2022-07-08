import '../NAVBAR/navbar.css'

import { Link } from "react-router-dom"
import { useState } from 'react'

const Navbar =() => {
    const [menu, setMenu] = useState(false)

  return (
    <header>
        <div className="Menu py-2 shadow bg-white">
            <div className="container d-flex justify-content-between align-items-center">

                <div className="logo">
                    <Link to={'/'}><h1 className='text-white1'>Online Store</h1></Link>
                </div>
                
                <nav className={menu ? "nav" : "nav hide"}>
                    <div className='nav d-flex align-items-center py-lg-0 py-5 px-3'>
                        <Link to='/' className="navlink mr-4 my-lg-0 my-2 text-white">Home</Link> 
                        <Link to='/about' className="navlink mr-4 my-lg-0 my-2 text-white">About</Link> 
                        <Link to='/cart' className="navlink mr-4 my-lg-0 my-2 text-white">Cart</Link> 
                        <Link to='/dashboard' className="navlink mr-4 my-lg-0 my-2 text-white">Dashboard</Link> 
                        <Link to='/login' className="navlink mr-4 my-lg-0 my-2 login px-lg-4 py-lg-2">Login</Link>
                    </div> 
                </nav>

                <span className="menu-icon text-dark" onClick={() => setMenu(!menu)}>{menu ? <span>&times;</span> : <span>&#9776;</span>}</span>
            </div>

        </div>
    </header>
  )
}

export default Navbar