import './App.css'
import "./css/all.min.css"
import Home from "../src/Home";
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Vision from './vision';
import About from './about';
function App() {

  return (
      <Router>
      <header className='head'>
        <div className="logo">
          <p>logo</p>
        </div>
      <nav className='nav'>
        <ul>
          <li>
            <Link to="/">Home <i className="fas fa-home"></i></Link>
          </li>
          <li>
            <Link to="/about">Scholarship List <i className="fas fa-school"></i></Link>
          </li>
          <li>
            <Link to="/vision">Vision <i class="fa-regular fa-newspaper"></i></Link>
          </li>
    </ul>
      </nav>
      <button className='sin'><i class="fa-solid fa-user-plus"></i></button>
      </header>
<div className="container">
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/vision' element={<Vision/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
</div>
    </Router>

  )
}

export default App
