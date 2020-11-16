import React, { Component } from 'react';
import {Link} from "react-router-dom"

class Breadcrumbs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            direction: {
                linkToPrevious: String,
                previousPage: String,
                currentPage: String,
            }
        }
    }
    render() {
        return (
            <div className="col">
                <nav aria-label="breadcrumb" className="mb-n4">
                    <ol class="breadcrumb bg-color-not-found justify-content-center align-items-center">
                        <li className="breadcrumb-item"><Link  to={this.props.direction.linkToPrevious} className="text-success">{this.props.direction.previousPage}</Link></li>
                        <li class="breadcrumb-item active" aria-current="page">{this.props.direction.currentPage}</li>
                    </ol>
                </nav>
            </div>
        );
    }
}

export default Breadcrumbs;