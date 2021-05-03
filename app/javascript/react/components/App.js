import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import LandingIndex from './landing/LandingIndex'

export const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={LandingIndex}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App
