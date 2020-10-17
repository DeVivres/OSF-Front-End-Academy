import React, { Component } from 'react';
import '../App.css';
import '../Homepage/BenefitsContent.css'
import Focus_Logo from '../../img/BenefitsContent/Focus_Logo.png'
import Method_Logo from '../../img/BenefitsContent/Method_Logo.png'
import Knowledge_Logo from '../../img/BenefitsContent/Knowledge_Logo.png'

class BenefitsContent extends Component {
    render() {
        return (
            <div className="row bg-benefits">
                <div className="col-lg">
                    <div className="row">
                        <div className="col-lg-3">
                            <img className="img-fluid photo-size-benefits" src={Focus_Logo}></img>
                        </div>
                        <div className="col-lg">
                            <h5 className="text-white text-uppercase">Focus</h5>
                            <p className="text-benefits">Our unwavering focus on superior service delivery and building next generation competencies</p>
                        </div>
                    </div>
                </div>
                <div className="col-lg">
                    <div className="row">
                        <div className="col-lg-3">    
                            <img className="img-fluid photo-size-benefits" src={Method_Logo}></img>
                        </div>
                        <div className="col-lg">
                            <h5 className="text-white text-uppercase">Method</h5>
                            <p className="text-benefits">A standardized methodology designed to deliver measurable business results and predictable costs</p>
                        </div>
                    </div>     
                </div>
                <div className="col-lg">
                    <div className="row">
                        <div className="col-lg-3"> 
                            <img className="img-fluid photo-size-benefits" src={Knowledge_Logo}></img>
                        </div>
                        <div className="col-lg"> 
                            <h5 className="text-white text-uppercase">Knowledge</h5>
                            <p className="text-benefits">A highly skilled, proactive workforce that reliably improves each client's ROI while mitigating their business risk</p>
                        </div>
                    </div>  
                    </div>
                </div>
        );
    }
}

export default BenefitsContent;