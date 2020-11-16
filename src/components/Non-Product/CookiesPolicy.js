import React, { Component } from 'react';
import $ from 'jquery';


class CookiesPolicy extends Component {
    constructor(props){
        super(props);
        this.timer = null;
    }
    componentDidMount(){
        this.timer = setInterval(() => {
            if(!localStorage.getItem("cookiesAccepted")){
                $('#cookiesModal').modal('toggle')
            }
        }, 10000);
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }

    render() { 
        function acceptCookies(){
            localStorage.setItem("cookiesAccepted", true)
        }
        return ( 
            <div className="modal fade" id="cookiesModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl modal-dialog-centered p-3">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title text-success">This website uses cookies</h5>
                        </div>
                    <div className="modal-body">
                        <div className="row p-1">
                            <div className="col-lg-10">
                                <p>
                                    OSF uses its own and third-party cookies for statistical purposes, to know your preferences, for website performance
                                    and interaction with social media offering publicity tailored to your interests. If you continue browsing, we consider that you accept
                                    its use. You can expand this information consulting our <a className="text-success" href="#">Cookies Policy Page</a>.
                                </p>
                            </div>
                            <div className="col align-self-end d-flex justify-content-end">
                                <button type="button" onClick={acceptCookies} className="btn btn-primary rounded-pill bg-success px-5" data-dismiss="modal" aria-label="Close">
                                Accept
                                </button>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CookiesPolicy;