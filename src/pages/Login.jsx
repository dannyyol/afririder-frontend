import React from 'react'

const Login = () => {
    return (
        <div id="auth">
            <div className="row h-100">
                <div className="col-lg-5 col-12">
                    <div id="auth-left">
                        {/* <div className="auth-logo">
                            <a href="index.html"><img src="https://th.bing.com/th/id/OIP.ANBtqtE3FBxuRPVc1n5qhAHaJ4?w=133&h=180&c=7&r=0&o=5&pid=1.7" alt="Logo" /></a>
                        </div> */}
                        <h1 className="auth-title"><span style={{fontSize:"29px"}}>Admin</span><br /> Log in.</h1>
                        <form>
                            <div className="form-group position-relative has-icon-left mb-4">
                                <input type="text" className="form-control form-control-xl" placeholder="Username" />
                                <div className="form-control-icon">
                                    <i className="bi bi-person"></i>
                                </div>
                            </div>
                            <div className="form-group position-relative has-icon-left mb-4">
                                <input type="password" className="form-control form-control-xl" placeholder="Password" />
                                <div className="form-control-icon">
                                    <i className="bi bi-shield-lock"></i>
                                </div>
                            </div>
                            <button className="btn btn-primary btn-block btn-lg shadow-lg mt-5">Log in</button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-7 d-none d-lg-block">
                    <div id="auth-right">
                    </div>
                </div>
            </div>
        </div>





    )
}
export default Login