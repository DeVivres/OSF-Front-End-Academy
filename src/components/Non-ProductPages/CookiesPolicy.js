import React, { Component } from 'react';

class CookiesPolicy extends Component {
    render() { 
        return (
            <div>
                <script></script>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Cookies modal
                </button>   
                <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered p-3" >
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title text-success" id="exampleModalLabel">This website uses cookies</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                    <div class="modal-body">
                        <div className="row p-1">
                            <div className="col-lg-10">
                                <p>
                                    OSF uses its own and third-party cookies for statistical purposes, to know your preferences, for website performance
                                    and interaction with social media offering publicity tailored to your interests. If you continue browsing, we consider that you accept
                                    its use. You can expand this information consulting our <a className="text-success">Cookies Policy Page</a>.
                                </p>
                            </div>
                            <div className="col align-self-end d-flex justify-content-end">
                                <button type="button" class="btn btn-primary rounded-pill bg-success px-5">Accept</button>
                            </div>
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