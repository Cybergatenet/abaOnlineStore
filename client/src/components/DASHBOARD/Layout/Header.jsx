import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <header style={styleHeader}>
            <h1>TodoList</h1>
            <Link style={linkStyle} to="/">View</Link> | <Link style={linkStyle} to="/about">Details</Link>
        </header>
    )
}

const styleHeader = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

const linkStyle = {
    textDecoration: 'none',
    color: '#fff'
}

export default Header
