import React from "react";
import {Link} from 'react-router-dom'

function Navbar(){
    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">Navbar</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to='/todo-list'>Todo List </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/albums'>Albums</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar