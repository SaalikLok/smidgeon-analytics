import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import LandingIndex from './landing/LandingIndex'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingIndex}/>
        <Route path="/dashboard" exact component={Dashboard}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
