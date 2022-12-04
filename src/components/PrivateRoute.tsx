import React from 'react'
import {Route, RouteProps} from 'react-router-dom'
import Login from '../pages/Account/login'
import Admin from '../pages/Admin/admin'

const PrivateRoute = ({children, ...rest}: RouteProps) : JSX.Element => {

  return <Route {...rest} element={<Login/>} />

}

export default PrivateRoute

// render={routeProps => (
//   <Profile routeProps={routeProps} animate={true} />
// )}

// element={<Profile animate={true}