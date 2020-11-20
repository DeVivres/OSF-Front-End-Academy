import React, { Component } from 'react';
import {Link} from "react-router-dom"
import lineImage from '../../img/NotFound/Line_Img.png'
import bgImage from '../../img/NotFound/Exclamation_Mark_Bg.png'
import textImage from '../../img/NotFound/Oops_Text.png'
import Breadcrumbs from '../../components/Landing/Breadcrumbs'



class NotFound extends Component {
    render() {
        return (
            <div className="row bg-color-not-found d-block p-3 p-lg-5">
                <div className="col">
                    <Breadcrumbs direction={{linkToPrevious:"/homepage", previousPage:"Home", currentPage:"404", pageTitle:"404"}}/>
                </div>
                <div className="col bg-white d-lg-flex d-xl-flex p-3 p-lg-5">
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
                        <input class="form-control mr-sm-2 border rounded-pill w-100 border-color-bg" type="search" placeholder="Search" aria-label="Search"></input>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default NotFound;