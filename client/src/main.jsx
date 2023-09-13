import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist'
import './index.css'

import App from './App.jsx'
import Home from './components/home/Home';
import Error from './pages/Error';

// for testing the maps
import MainMap from './pages/MainMap';
import SearchMapHolder from './pages/SearchMapHolder';

// // not currenly created
// import Profile from './pages/Profile';
// import Signup from './pages/Signup';
// import Login from './pages/Login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home />
      }, 
      {
        path: '/mainmap',
        element: <MainMap />
      },
      {
        path: '/searchmap',
        element: <SearchMapHolder />
      }
      // {
      //   path: '/login',
      //   element: <Login />
      // }, {
      //   path: '/signup',
      //   element: <Signup />
      // }, {
      //   path: '/me',
      //   element: <Profile />
      // }, {
      //   path: '/profiles/:profileId',
      //   element: <Profile />
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
