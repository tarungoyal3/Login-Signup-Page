import Login from './components/Login'
import './App.css'
import Signup from './components/Signup'
import {Route,BrowserRouter as Router,Routes} from "react-router-dom"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Signup/>}></Route>
          <Route path='/login' element = {<Login/>}></Route>
          <Route path='/signup' element = {<Signup/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
