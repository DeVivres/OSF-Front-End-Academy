import React, { Component } from 'react';
import {Link} from "react-router-dom"
import lineImage from '../../img/NotFound/Line_Img.png'
import bgImage from '../../img/NotFound/Exclamation_Mark_Bg.png'
import textImage from '../../img/NotFound/Oops_Text.png'


class NotFound extends Component {
    render() {
        return (
            <div className="row bg-color-not-found d-block p-3 p-lg-5">
                <div className="col pad-from-nav">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="mb-n4">
                            <ol class="breadcrumb bg-color-not-found justify-content-center align-items-center">
                                <li className="breadcrumb-item"><a className="text-success">Home</a></li>
                                <li class="breadcrumb-item active" aria-current="page">404</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center p-3">
                        <img className="img-fluid w-50" src={lineImage}></img>
                        <h1 className="mx-3">404</h1>
                        <img className="img-fluid w-50" src={lineImage}></img>
                    </div>
                </div>
                <div className="col bg-white d-lg-flex d-xl-flex p-3">
                    <div className="col d-flex justify-content-center">
                        <img className="img-fluid position-relative bg-icon-fix" src={bgImage}></img>
                        <img className="img-fluid position-absolute align-self-center" src={textImage}></img>
                    </div>
                    <div className="col p-3">
                        <h4>Sorry, this page could not be found!</h4>
                        <p>Aenean commondo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                        <p>Lorem ipsum dolor sit sit amet, consectetuer adipiscing elit. Aenean commondo ligula eget dolor. Aenean massa.</p>
                        <Link to="/homepage" className="text-success">Go back to Homepage</Link>
                        <br></br>
                        <br></br>
                        <h4 className="mb-3">Search our site</h4>
                        <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2 border rounded-pill w-100" type="search" placeholder="Search" aria-label="Search"></input>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;