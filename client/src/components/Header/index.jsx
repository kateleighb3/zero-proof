import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

// import './index.css';

const Header = () => {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };
  return (
    <header className="absolute z-10 w-full">
      {/* <div className="container flex-row justify-space-between-lg justify-center align-center"> */}
        <div>
          {Auth.loggedIn() ? (
            <>
          <div class="container text-center after-nav">
            <div class="row">
                {/* <!-- first column --> */}
              <div class="col first-col">
                <ul class="nav">
                    <li class="nav-item">
                    <Link className="nav-text" to="/me">
                {/* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username  */}
                Profile
              </Link>
              <Link className="nav-text" onClick={logout}>
                Logout
              </Link>
                    </li>
                  </ul>
              </div>
              {/* <!-- second column --> */}
              <div class="col">
                <div class="title">
                    <h1 class="neonText">Zero</h1><h1 class="neon">Proof</h1>
                    </div>
              </div>
              {/* <!-- third column --> */}
              <div class="col third-col">
                <ul class="nav">
                    <li class="nav-item">
                    <Link className="nav-text" to="/me">
                 Recipes
              </Link>
              <Link className="nav-text" onClick={logout}>
                Favorites
              </Link>
                    </li>
                  </ul>
              </div>
            </div>
          </div>
        
              
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
