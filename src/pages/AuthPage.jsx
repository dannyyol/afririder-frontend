import React from 'react'
import { Route, Routes,BrowserRouter as Router, Outlet } from 'react-router-dom';
import CONSTANTS from "../common/constants.json"
import Login from './Login';
import Register from './Register';

function AuthPage() {
    return (
        <div id="auth">
            <div className="row h-100">
                <Outlet></Outlet>
                <div className="col-lg-7 d-none d-lg-block">
                    <div id="auth-right">
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AuthPage;


