import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Dashboard from './pages/Dashboard'
import Projects from './pages/Projects'
import About from './pages/About'
import Header from './components/Header'
import { Footer } from 'flowbite-react'
import FooterCom from './components/Footer'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element ={<Home/>}/>
      <Route path='/about' element ={<About/>}/>
      <Route path='/sign-in' element ={<Signin/>}/>
      <Route path='/sign-up' element ={<Signup/>}/>
      <Route path='/dashboard' element ={<Dashboard/>}/>
      <Route path='/projects' element ={<Projects/>}/>
      
    </Routes>
    <FooterCom/>
    </BrowserRouter>
    
  )
}


