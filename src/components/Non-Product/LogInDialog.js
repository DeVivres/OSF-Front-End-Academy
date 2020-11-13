import React, { Component } from 'react';

class LogInDialog extends Component {
    render() {
        return (
            <div class="modal fade" id="modalLoginForm" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" role="document">
                    <div class="modal-content">
                        <div class="modal-body">
                            <div class="d-flex justify-content-center m-4">
                                <h4>Sign in</h4>
                            </div>
                            <form class="needs-validation">
                                <div class="md-form p-3 mx-3">
                                    <label data-error="wrong" data-success="right" for="defaultForm-email">Email</label>
                                    <input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" id="defaultForm-email" class="form-control validate rounded-pill" required>
                                    </input>
                                </div>
                                <div class="md-form p-3 mx-3">
                                    <label data-error="wrong" className="d-flex justify-content-between" data-success="right" for="defaultForm-pass">
                                        <a>Password</a>
                                        <a className="text-success">forgot password</a>
                                    </label>
                                    <input type="password" pattern="(?=.*\d)(?=.*[#$^+=!*()@&%])(?=.*[0-9])(?=.*[A-Z])(?=.*[a-zA-Z0-9]).{6,}" id="defaultForm-pass" class="form-control validate rounded-pill" required></input>
                                </div>
                                <div class="d-flex justify-content-center mt-4 mb-3">
                                    <button type="submit" class="btn rounded-pill bg-success text-uppercase text-white px-4 mx-4">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Login &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    </button>
                                </div>
                            </form>
                            <p className="text-success d-flex justify-content-center">I do not have an account</p>
                        </div>
                    </div>  
                </div>
            </div>
        );
    }
}

export default LogInDialog;