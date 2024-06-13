import React, { useContext } from 'react'
import PageLayout from '../../../components/PageLayout'
import { authContext } from '../../../ services/contexts/authContent'

const Login = () => {
    const {loginHundleSubmit} = useContext(authContext)
  return (
<PageLayout>
    <div className="auth-page">
        <div className="container page">
            <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
                <h1 className="text-xs-center">Sign in</h1>
                <p className="text-xs-center">
                <a href="/register">Need an account?</a>
                </p>

                <ul className="error-messages">
                <li>That email is already taken</li>
                </ul>

                <form onSubmit={loginHundleSubmit}>
                    <fieldset className="form-group">
                        <input className="form-control form-control-lg" type="text" placeholder="Email" name="emil"/>
                    </fieldset>
                    <fieldset className="form-group">
                        <input className="form-control form-control-lg" type="password" placeholder="Password" name='password' />
                    </fieldset>
                    <button type='submit' className="btn btn-lg btn-primary pull-xs-right">Sign in</button>
                </form>
            </div>
            </div>
        </div>
    </div>
</PageLayout>
  )
}

export default Login
