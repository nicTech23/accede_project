import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../../services/contexts/authContent'
const Login = () => {
    const { loginHundleSubmit, loginHandleChange, LoginError, LogingIsError } = useContext(authContext)
    const [error, setError] = useState<any>("")

    useEffect(() => {
        if (LogingIsError) {
            setError(LoginError?.response?.data?.errors)
           
          const errorInterval = setInterval(() => {
                setError(null);
            }, 8000);

            setTimeout(() => {
                clearInterval(errorInterval);
            }, 9000);
        }
    }, [LogingIsError])

    console.log("login", error)
    
  return (
    <div className="auth-page">
        <div className="container page">
            <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
                <h1 className="text-xs-center">Sign in</h1>
                <p className="text-xs-center">
                <a href="/register">Need an account?</a>
                </p>

                <ul className="error-messages">
                {error && <li> email or password is invalid</li>}
                </ul>

                <form>
                    <fieldset className="form-group">
                        <input className="form-control form-control-lg" type="text" placeholder="Email" name="email" onChange={loginHandleChange}/>
                    </fieldset>
                    <fieldset className="form-group">
                        <input className="form-control form-control-lg" type="password" placeholder="Password" name='password' onChange={loginHandleChange}/>
                    </fieldset>
                    
                </form>
                <button className="btn btn-lg btn-primary pull-xs-right" onClick={()=>loginHundleSubmit()}>Sign in</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Login
