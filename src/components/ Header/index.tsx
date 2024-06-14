import React, { useContext, useEffect, useState } from 'react'
import { authContext } from '../../services/contexts/authContent'


const Header = () => {
const [user, setUser] = useState<any>("")
const [token, setToken] = useState(localStorage.getItem("token") || "")

 
useEffect(() => {
     if (token) {
        const userData: any = localStorage.getItem("user")
        const userJson = JSON.parse(userData)
        setUser(userJson)
   }
}, [])

if(token){
    return (
        <nav className="navbar navbar-light">
            <div className="container">
                <a className="navbar-brand" href="/">conduit</a>
                <ul className="nav navbar-nav pull-xs-right">
                <li className="nav-item">
                    {/* <!-- Add "active" className when you're on that page" --> */}
                    <a className="nav-link active" href="/">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/editor"> <i className="ion-compose"></i>&nbsp;New Article </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/settings"> <i className="ion-gear-a"></i>&nbsp;Settings </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={`/profiles/${user?.username}`}>
                    <img src="" className={user?.image} />
                    {user?.username}
                    </a>
                </li>
                </ul>
            </div>
        </nav>
    )
}
  return (
    <nav className="navbar navbar-light">
        <div className="container">
            <a className="navbar-brand" href="/">conduit</a>
            <ul className="nav navbar-nav pull-xs-right">
            <li className="nav-item">
                {/* <!-- Add "active" className when you're on that page" --> */}
                <a className="nav-link active" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/login">Sign in</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/register">Sign up</a>
            </li>
            </ul>
        </div>
    </nav>
  )
}

export default Header
