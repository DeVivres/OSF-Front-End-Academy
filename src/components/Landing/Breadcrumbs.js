import React, { Component } from 'react';
import {Link} from "react-router-dom"
import lineImage from '../../img/NotFound/Line_Img.png'


class Breadcrumbs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: {
                linkToPrevious: String,
                previousPage: String,
                currentPage: String,
                pageTitle: String,
            }
        }
    }
    render() {
        return (
            <div className="row d-block pad-from-nav-breadcrumbs">
                <div className="col">
                    <nav aria-label="breadcrumb" className="mb-n4">
                        <ol class="breadcrumb bg-color-not-found justify-content-center align-items-center">
                            <li className="breadcrumb-item"><Link  to={this.props.direction.linkToPrevious} className="text-success">{this.props.direction.previousPage}</Link></li>
                            <li class="breadcrumb-item active" aria-current="page">{this.props.direction.currentPage}</li>
                        </ol>
                    </nav>
                </div>
                <div className="col d-flex justify-content-center align-items-center p-3">
                    <img className="w-25" src={lineImage}></img>
                    <h1 className="mx-3">{this.props.direction.pageTitle}</h1>
                    <img className="w-25" src={lineImage}></img>
                </div>
            </div>
        );
    }
}

export default Breadcrumbs;