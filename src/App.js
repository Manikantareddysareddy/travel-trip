import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import LoginPage from './components/LoginPage'

import HomePage from './components/HomePage'

import UserDetails from './components/UserDetails'

import MyTrips from './components/MyTrips'

import ProtectedRoute from './components/ProtectedRoute'

import NotFound from './components/NotFound'

import './App.css'

// Note: Use the lists in your code to pass the test cases

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <ProtectedRoute exact path="/" component={HomePage} />
        <ProtectedRoute exact path="/book-a-new-trip" component={UserDetails} />
        <ProtectedRoute exact path="/my-trips" component={MyTrips} />
        <Route path="/not-found" component={NotFound} />
        <Redirect to="not-found" />
      </Switch>
    )
  }
}

export default App
