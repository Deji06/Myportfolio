
import './App.css'
import 'tailwindcss/tailwind.css';
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import Booking from './pages/Booking'
import ContactPage from './pages/ContactPage'
import {Routes, Route} from 'react-router-dom'
import Binaryy from './pages/Binaryy';
import ChatApp from './pages/ChatApp';


function App() {
  

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/CaseStudy'  element={<CaseStudy />} />
        <Route path='/Contact'  element={<ContactPage />} />
        <Route path='/Booking'  element={<Booking />} />
        <Route path='/ChatApp'  element={<ChatApp />} />
        <Route path='/Binaryy'  element={<Binaryy />} />
      </Routes>
    
    </>
  )
}

export default App;
