import React from 'react'
import { Route } from 'react-router-dom'
function Welcome() {
  return (
    <div><h1>Welcome</h1>
    <Route path="/welcome/new-user">
        <p>Welcome new User</p>
        </Route></div>
  )
}

export default Welcome