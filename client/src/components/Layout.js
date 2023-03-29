import React from "react";
import { NavLink } from "react-router-dom";
import Login from "./Login";

const Layout = ({ showLoginForm, setShowLoginForm, showRegistrationForm, setShowRegistrationForm, loggedIn, setLoggedIn }) => {
    return (
        <div className='toolbar'>
            <div className="buttons">
                <div> <NavLink to='/'>HOME</NavLink>
                </div>
                <div> <NavLink to='/comics'>COMICS</NavLink>
                </div>
            </div>
            <div className='LogIn'>
                {(!showLoginForm && !showRegistrationForm && !loggedIn) &&
                    <div className="log_manage" onClick={() => setShowLoginForm(true)}>LOGIN</div>}
                {(showLoginForm || showRegistrationForm) &&
                    <Login showLoginForm={showLoginForm}
                        setShowLoginForm={setShowLoginForm}
                        setShowRegistrationForm={setShowRegistrationForm}
                        showRegistrationForm={showRegistrationForm}
                        loggedIn={loggedIn}
                        setLoggedIn={setLoggedIn} />}
                {loggedIn && <NavLink to='/profile'>PROFILE</NavLink>}
                {loggedIn && <div className="log_manage" onClick={() => setLoggedIn(false)}>LOGOUT</div>}
            </div>

        </div >)
}

export default Layout