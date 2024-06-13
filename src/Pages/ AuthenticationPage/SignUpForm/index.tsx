import React, { useContext } from 'react'
import PageLayout from '../../../components/PageLayout'
import { authContext } from '../../../ services/contexts/authContent'

const Signup = () => {
    const {
        signUpHandleChange,
          signUpHundleSubmit,
          signUpError
    } = useContext(authContext)

  return (
   <PageLayout>
    <div className="auth-page">
        <div className="container page">
            <div className="row">
            <div className="col-md-6 offset-md-3 col-xs-12">
                <h1 className="text-xs-center">Sign up</h1>
                <p className="text-xs-center">
                <a href="/login">Have an account?</a>
                </p>

                <ul className="error-messages">
                <li>That email is already taken</li>
                </ul>

                <form>
                <fieldset className="form-group">
                    <input className="form-control form-control-lg" type="text" placeholder="Username" name='username' onChange={signUpHandleChange}/>
                </fieldset>
                <fieldset className="form-group">
                    <input className="form-control form-control-lg" type="text" placeholder="Email" name='email' onChange={signUpHandleChange} />
                </fieldset>
                <fieldset className="form-group">
                    <input className="form-control form-control-lg" type="password" placeholder="Password"  name='password' onChange={signUpHandleChange} />
                </fieldset>
                </form>
                 <button className="btn btn-lg btn-primary pull-xs-right" onClick={()=>signUpHundleSubmit()}>Sign up</button>
            </div>
            </div>
        </div>
    </div>
</PageLayout> 
  )
}

export default Signup
