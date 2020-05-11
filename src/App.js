import React from 'react'
import './App.css'
import Recipe from './components/recipe'
import DetailItem from './components/detailItem'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Recipe} />
          <Route path='/ItemDetail/:id'  component={DetailItem} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
