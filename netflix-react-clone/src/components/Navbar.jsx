import React, { Component } from 'react'
import './Navbar.css'

export default class Navbar extends Component {
    render() {
        return (
            <>
                <nav
                    className="navbar navbar-expand-lg navbar-dark"
                    style={{ backgroundColor: '#221f1f' }}
                >
                    <a className="navbar-brand" href="#">
                        <img src="assets/logo.png" style={{ width: '100px', height: '55px' }} />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item">
                                <a className="nav-link font-weight-bold" href="#"
                                >Home <span className="sr-only">(current)</span></a
                                >
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link font-weight-bold" href="#">TV Shows</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-weight-bold" href="#">Movies</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-weight-bold" href="#">Recently Added</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link font-weight-bold" href="#">My List</a>
                            </li>
                        </ul>
                    </div>
                    <div className='d-flex'>
                        <i className="fa fa-search icons"></i>
                        <div id="kids">KIDS</div>
                        <i className="fa fa-bell icons"></i>
                        <i className="fa fa-user icons"></i>
                    </div>
                </nav>

                <div className="container-fluid px-4">
                    <div className="d-flex justify-content-between">
                        <div className="d-flex">
                            <h2 className="mb-4">TV Shows</h2>
                            <div className="dropdown ml-4 mt-1">
                            <button
                                className="btn btn-secondary btn-sm dropdown-toggle rounded-0"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                style={{backgroundColor: '#221f1f'}}
                            >
                                Genres &nbsp;
                            </button>
                            <div
                                className="dropdown-menu bg-dark"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <a className="dropdown-item text-white bg-dark" href="#">Comedy</a>
                                <a className="dropdown-item text-white bg-dark" href="#">Drama</a>
                                <a className="dropdown-item text-white bg-dark" href="#"
                                >Thriller</a
                                >
                            </div>
                            </div>
                        </div>
                        <div>
                            <i className="fa fa-th-large icons"></i>
                            <i className="fa fa-th icons"></i>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}