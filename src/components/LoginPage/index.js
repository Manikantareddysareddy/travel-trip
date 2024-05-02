import {Component} from 'react'

import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class LoginPage extends Component {
  state = {
    usernameInput: '',
    passwordInput: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({usernameInput: event.target.value})
  }

  onChangePassword = event => {
    this.setState({passwordInput: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitLoginDetails = async event => {
    event.preventDefault()
    const {usernameInput, passwordInput} = this.state
    const userDetails = {username: usernameInput, password: passwordInput}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  showThePassword = () => {
    const {showPassword} = this.state
    this.setState({showPassword: !showPassword})
  }

  render() {
    const {
      usernameInput,
      passwordInput,
      showSubmitError,
      errorMsg,
      showPassword,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div className="main-container">
        <div className="login-container">
          <h1 className="login-heading">Travel Trip</h1>
          <form className="form-container" onSubmit={this.submitLoginDetails}>
            <div className="input-container">
              <label htmlFor="usernameInput" className="labelEl">
                Username
              </label>
              <input
                type="text"
                id="usernameInput"
                className="inputEl"
                placeholder="Username"
                value={usernameInput}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-container">
              <label htmlFor="passwordInput" className="labelEl">
                Password
              </label>
              <div className="password-container">
                <input
                  type={showPassword === false ? 'password' : 'text'}
                  id="passwordInput"
                  className="passwordEl"
                  placeholder="Password"
                  value={passwordInput}
                  onChange={this.onChangePassword}
                />
                <button
                  onClick={this.showThePassword}
                  type="button"
                  className="Eye-btn"
                >
                  {showPassword === false ? (
                    <img
                      src="https://res.cloudinary.com/dg3csk2jz/image/upload/v1714570799/eye_eye_tywu0d.png"
                      alt="eye"
                      className="image"
                    />
                  ) : (
                    <img
                      src=" https://res.cloudinary.com/dg3csk2jz/image/upload/v1714574988/eye-slasheye-slash_yh2eq0.png"
                      alt="eye"
                      className="image"
                    />
                  )}
                </button>
              </div>
            </div>
            <button type="submit" className="login-Btn">
              Login
            </button>
            {showSubmitError === true ? (
              <p className="error-para">{errorMsg}</p>
            ) : null}
          </form>
        </div>
      </div>
    )
  }
}

export default LoginPage
