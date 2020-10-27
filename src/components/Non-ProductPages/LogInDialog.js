import React, { Component } from 'react';

class LogInDialog extends Component {
    render() {
        return (
            <div>
                <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modalLoginForm">
                Login modal
                </button>   
                <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered" role="document">
                        <div class="modal-content">
                            <div class="modal-body mx-3">                                
                            <h4 class="modal-title w-100 font-weight-bold text-center">Sign in</h4>
                                <div class="md-form mb-3">
                                    <i class="fas fa-envelope prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right" for="defaultForm-email">Email</label>
                                    <input type="email" id="defaultForm-email" class="form-control validate rounded-pill"></input>
                                </div>
                                <div class="md-form mb-3">
                                    <i class="fas fa-lock prefix grey-text"></i>
                                    <label data-error="wrong" data-success="right" for="defaultForm-pass">Password</label>
                                    <input type="password" id="defaultForm-pass" class="form-control validate rounded-pill"></input>
                                </div>
                                <button class="btn rounded-pill bg-success text-uppercase text-white">Login</button>
                                <p>I do not have an account</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LogInDialog;