import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

// for testing maps
// they will be added into other pages later
import MainMap from './pages/MainMap';
import SearchMapHolder from './pages/SearchMapHolder';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar />
        <Home />
      </div>
  )
}

export default App
