import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Dashboard from './dashboard/Dashboard'
import NewWebsiteForm from './dashboard/NewWebsiteForm'
import LandingIndex from './landing/LandingIndex'
import WebsiteShow from './website/WebsiteShow'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingIndex}/>
        <Route path="/websites" exact component={Dashboard}/>
        <Route path="/websites/new" exact component={NewWebsiteForm}/>
        <Route path="/websites/:id" component={WebsiteShow}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
