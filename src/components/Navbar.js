import React from 'react'
import {Link} from "react-router-dom"
export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">NEXTGEN</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                    </ul>
                    <div className="form-check form-switch">
                        <label className={`text-${props.mode === 'light'?'dark':'light'}`} htmlFor="flexSwitchCheckReverse">Enable Dark Mode</label>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckReverse" onClick={props.toggleMode}/>
                    </div>
                </div>
            </div>
        </nav>
    )
};
