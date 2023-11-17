import React from 'react'
import { Routes, Route } from 'react-router-dom'
//import LoginTester from './components/LoginTester'
import Login from './components/Login'
import Home from './components/Home'

/*
type AttrProps = {
  exact: true; 
  path: string; 
  element: Element;
}
*/

const App: React.FC = () => {
  return(
    <div>
      <Routes>
      <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App