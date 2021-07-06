//React
import React from 'react'
import ReactDOM from 'react-dom'
// import reportWebVitals from './reportWebVitals'
import {BrowserRouter as Router} from 'react-router-dom'
import App from './App'

//CSS
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  
  document.getElementById('root')
)

// reportWebVitals()