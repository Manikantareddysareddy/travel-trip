import {Component} from 'react'

import {Switch, Route, Redirect} from 'react-router-dom'

import LoginPage from './components/LoginPage'

import HomePage from './components/HomePage'

import UserDetails from './components/UserDetails'

import ProtectedRoute from './components/ProtectedRoute'

import './App.css'

// Note: Use the lists in your code to pass the test cases

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/login" component={LoginPage} />
        <ProtectedRoute exact path="/" component={HomePage} />
        <ProtectedRoute exact path="/book-a-new-trip" component={UserDetails} />
      </Switch>
    )
  }
}

export default App
