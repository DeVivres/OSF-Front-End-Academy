import React, { Component } from 'react';
import Focus_Logo from '../../img/BenefitsContent/Focus_Logo.png'
import Method_Logo from '../../img/BenefitsContent/Method_Logo.png'
import Knowledge_Logo from '../../img/BenefitsContent/Knowledge_Logo.png'

class BenefitsContent extends Component {
    render() {
        return (
            <div className="row bg-benefits">
                <div className="col-lg d-flex align-items-center p-3 m-3">
                    <div className="col-lg-4 col-md-2 col-4">
                        <img className="img-fluid" src={Focus_Logo}></img>
                    </div>
                    <div className="col">
                        <h5 className="text-white text-uppercase">Focus</h5>
                        <p className="text-benefits">Our unwavering focus on superior service delivery and building next generation competencies</p>
                    </div>
                </div>
                <div className="col-lg d-flex align-items-center p-3 m-3">
                    <div className="col-lg-4 col-md-2 col-4">    
                        <img className="img-fluid" src={Method_Logo}></img>
                    </div>
                    <div className="col">
                        <h5 className="text-white text-uppercase">Method</h5>
                        <p className="text-benefits">A standardized methodology designed to deliver measurable business results and predictable costs</p>
                    </div>
                </div>
                <div className="col-lg d-flex align-items-center p-3 m-3">
                    <div className="col-lg-4 col-md-2 col-4"> 
                        <img className="img-fluid" src={Knowledge_Logo}></img>
                    </div>
                    <div className="col"> 
                        <h5 className="text-white text-uppercase">Knowledge</h5>
                        <p className="text-benefits">A highly skilled, proactive workforce that reliably improves each client's ROI while mitigating their business risk</p>
                    </div>
                </div>  
            </div>
        );
    }
}

export default BenefitsContent;