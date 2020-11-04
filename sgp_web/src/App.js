import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import SearchP from './pages/SearchP'
import Index1 from './pages/Index1'
export default function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Switch>
            <Route exact path="/Home" component={Home} />
            <Route exact path="/Home/Search" component={SearchP} />
            <Route exact path="/Home/Login" component={Index1} />
      </Switch>
    </BrowserRouter>
    </div>
  )
}
