import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';
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
        {/* <div> */}
          {Auth.loggedIn() ? (
            <>
          <div className="row content-none">

            {/* left col */}
            <div className="column w-2/6 p-5 float-left text-left">
              <Link className="nav-text" to="/me">
                {/* Run the getProfile() method to get access to the unencrypted token value in order to retrieve the user's username  */}
                Find A Bar
                </Link>
                <Link className="nav-text" onClick={logout}>
                Logout
                </Link>
            </div>
            {/* middle col */}
            <div className="column w-2/6 p-5 float-left text-center">
            
            <Link to="/">
            <h1 className="neonText">Zero</h1><h1 className="neon">Proof</h1>
            </Link>
            </div>
            {/* right col */}
            <div className="column w-2/6 p-5 float-left text-right">
            <Link className="nav-text" to="/drinks">
                 Drinks
              </Link>
            {/* <Link className="nav-text" to="/mocktails">
                 Mocktails
              </Link> */}
              <Link className="nav-text" to="/favorites">
                Favorites
              </Link>
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
        {/* </div> */}
      {/* </div> */}
    </header>
  );
};

export default Header;
