import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

import './index.css';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="nav-bar">
      {/* <div className="container flex-row justify-space-between-lg justify-center align-center"> */}
        <div>
          {Auth.loggedIn() ? (
            <>
              <Link className="btn btn-lg btn-info m-2" to="/me">
                {/* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username  */}
                {Auth.getProfile().authenticatedPerson.username}'s profile
              </Link>
              <button className="btn btn-lg btn-light m-2" onClick={logout}>
                Logout
              </button>
            </>
          ) : (
            <>
              <Link className="nav-text" to="/login">
                Login
              </Link>
              <Link className="nav-text" to="/signup">
                Signup
              </Link>
            </>
          )}
        </div>
      {/* </div> */}
    </header>
  );
};

export default Header;
