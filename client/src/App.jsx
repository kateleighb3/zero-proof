import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';

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