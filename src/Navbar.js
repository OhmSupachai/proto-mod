import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default class Navbar extends Component {
    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#" >MOD Checkup</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">SUBJECT</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">REVIEW</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">HISTORY</a>
                            </li>
                            <ul class="nav justify-content-end">
                                <li class="nav-item">
                                    <form class="d-flex">
                                        <button class="btn btn-outline-success" type="submit">Login</button>
                                    </form>
                                </li>
                            </ul>


                        </ul>

                    </div>
                </div>
            </nav>
        )
    }
}