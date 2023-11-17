import React from 'react'
import { Routes, Route } from 'react-router-dom'
//import LoginTester from './components/LoginTester'
import HomeRequest from './components/HomeRequest'

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
        <Route path='/' element={<HomeRequest />} />
      </Routes>
    </div>
  )
}

export default App