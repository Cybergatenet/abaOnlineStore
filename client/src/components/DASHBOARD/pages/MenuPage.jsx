import React from 'react'
import { Link, BrowserRouter as Router, Route  } from 'react-router-dom'

export default function MenuPage() {
    return (
      <Router>
      <div className="App">
          <Route exact path="/menu" render={props => (
            <React.Fragment>
              <div className="container">
              <ul style={{marginTop: '20px'}}>
                  <Link style={linkStyle} to="/menu">React App</Link>
                  <Link style={linkStyle} to="/menu">Second App</Link>
                  <Link style={linkStyle} to="/menu">Third App</Link>
              </ul>
            </div>
            </React.Fragment>
          )} />
          {/* <Route path="/about" component={About} /> */}
      </div>
      </Router>
    )
}

const linkStyle = {
    textDecoration: 'none',
    color: 'whitesmoke',
    backgroundColor: 'blue',
    padding: '10px',
    borderRadius: '10px',
    margin: '50px 20px',
    fontWeight: 'bolder'
}