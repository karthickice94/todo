import React from 'react'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from './components/navBar'
import Home from './components/Home'
import Todo from './components/todo'
import './App.css'

const App = () => {
  return (
    <div>
        <Router>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}> 

        </Route>
        <Route path='/Todo' element={<Todo/>}/>
      </Routes>
        </Router>

    </div>
  )
}

export default App