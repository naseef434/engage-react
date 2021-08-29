import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
           <div>
  <main>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-6 login-section-wrapper">
          <div className="brand-wrapper">
            <img src="img/engage-logo.png" alt="logo" className="logo img-rounded" />
          </div>
          <div className="login-wrapper my-auto">
            <form action="#!">
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" className="form-control" placeholder="email@example.com" />
              </div>
              <div className="form-group mb-4">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" className="form-control" placeholder="enter your passsword" />
              </div>
              <a href="dashboard.html" style={{textDecoration: 'none'}}>
                <input name="login" id="login" className="btn btn-block login-btn" type="button" defaultValue="Login" />
              </a>
            </form>
            <a href="#!" className="forgot-password-link">Forgot password?</a>
            <p className="login-wrapper-footer-text">Don't have an account? <a href="dashboard.html" className="text-reset">Register here</a></p>
          </div>
        </div>
        <div className="col-sm-6 px-0 d-none d-sm-block">
          <img src="img/4.jpg" alt="login image" className="login-img img-responsive" />
        </div>
      </div>
    </div>
  </main>
</div>

        )
    }
}
