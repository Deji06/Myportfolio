
import './App.css'
import 'tailwindcss/tailwind.css';
import Home from './pages/Home'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Routes, Route, useNavigate} from 'react-router-dom'
import Project from './pages/Project'
import Tools from './pages/Tools';

function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/projects' element={<Project/>} />
        <Route path='/tools' element={<Tools/>} />
      </Routes>
    
    </>
  )
}

export default App;
