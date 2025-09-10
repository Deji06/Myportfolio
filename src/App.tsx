
import './App.css'
import 'tailwindcss/tailwind.css';
import {lazy, Suspense } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
const Home = lazy(() => import('./pages/Home'))
const CaseStudy  = lazy (() => import ('./pages/CaseStudy'))
const Booking  = lazy (() => import ('./pages/Booking'))
const ContactPage  = lazy (() => import ('./pages/ContactPage'))
const Binaryy  = lazy (() => import ('./pages/Binaryy'))
const ChatApp  = lazy (() => import ('./pages/ChatApp'))
const TaskManger = lazy(() => import ('./pages/TaskManager'))
import {Routes, Route} from 'react-router-dom'



function App() {
  

  return (
    <>
      <Suspense fallback= {
        <div className="flex justify-center items-center h-screen">
            <ClipLoader size={50} color="#36d7b7" />
        </div>
        }>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/CaseStudy'  element={<CaseStudy />} />
          <Route path='/Contact'  element={<ContactPage />} />
          <Route path='/Booking'  element={<Booking />} />
          <Route path='/ChatApp'  element={<ChatApp />} />
          <Route path='/Binaryy'  element={<Binaryy />} />
          <Route path='/TaskManager'  element={<TaskManger />} />
        </Routes>
      
      </Suspense>
    
    </>
  )
}

export default App;
