import {Link, withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

const Header = props => {
  const logOut = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <div className="header-container">
      <h1 className="header-heading">Travel Trip</h1>
      <div className="Routes-container">
        <Link to="/" className="link-item">
          <h1 className="heading1">Home</h1>
        </Link>
        <Link to="/my-trips" className="link-item">
          <h1 className="heading1">My Trips</h1>
        </Link>
      </div>
      <button type="button" className="logout-btn" onClick={logOut}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(Header)
