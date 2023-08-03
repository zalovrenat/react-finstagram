import React, { Component } from 'react'
import Navbar from './Navbar'
import Signup from './Signup'
import Login from './Login'
import Footer from './Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ToDoList from './ToDoList'

export class App extends Component {

  componentDidMount(){
    console.log('Mounted!')
  }
  
  render () {
    return (
      <BrowserRouter>

        <div className="App">
          <Navbar />
          <Routes>
            <Route path='/login' element={<Login />}/>
            <Route path='/signup' element={<Signup />}/>
            <Route path='/toDoList' element={<ToDoList />}/>
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
