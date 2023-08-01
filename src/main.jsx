import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Navbar from './Navbar'
import Footer from './Footer'
import Login from './Login'
import Signup from './Signup'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
    <Signup />
    <Login />
    <Footer />
  </React.StrictMode>,
)
