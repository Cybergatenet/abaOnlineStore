import React from 'react'

export default function About() {
    return (
        <React.Fragment>
            <div className="container">
                <h1>Description </h1>
                <p>Cybergate Todo App: version 1.0.0</p>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque voluptas ratione ea ipsam architecto quidem labore. Aliquam quam, optio id quaerat odio culpa voluptatibus, veniam repellendus iure odit deserunt autem!</p>
                <button className="btn" style={{ marginTop: '10px' }}>Read More <i className="fa fa-arrow-down"></i></button>
            </div>
        </React.Fragment>
    )
}
