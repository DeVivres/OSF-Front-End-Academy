import React, { Component } from 'react';
import '../App.css';
import '../Homepage/BenefitsContent.css'
import Focus_Logo from '../../img/BenefitsContent/Focus_Logo.png'
import Method_Logo from '../../img/BenefitsContent/Method_Logo.png'
import Knowledge_Logo from '../../img/BenefitsContent/Knowledge_Logo.png'

class BenefitsContent extends Component {
    render() {
        return (
            <div className="row border border-danger">
                <div className="col-lg">
                    <div className="col-lg">
                        <img className="img-fluid" src={Focus_Logo}></img>
                    </div>
                    <div className="col-lg">
                        <h5>Focus</h5>
                        <p>Our unwavering focus on superior service delivery and building next generation competencies</p>
                    </div>
                </div>
                <div className="col-lg">
                    <div className="col-lg">    
                        <img className="img-fluid" src={Method_Logo}></img>
                    </div>
                    <div className="col-lg">
                        <h5>Method</h5>
                        <p>A standardized methodology designed to deliver measurable business results and predictable costs</p>
                    </div>
                </div>
                <div className="col-lg">
                    <div className="col-lg"> 
                        <img className="img-fluid" src={Knowledge_Logo}></img>
                    </div>
                    <div className="col-lg"> 
                        <h5>Knowledge</h5>
                        <p>A highly skilled, proactive workforce that reliably improves each client's ROI while mitigating their business risk</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default BenefitsContent;