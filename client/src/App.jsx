import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import MainMap from './pages/MainMap';
import SearchMapHolder from './pages/SearchMapHolder';

function App() {
  const [count, setCount] = useState(0)

  return (
      <div>
        <Navbar />
        {/* change back */}
        <SearchMapHolder />
      </div>
  )
}

export default App
