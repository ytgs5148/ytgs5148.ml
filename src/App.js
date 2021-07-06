//React
import React , { useState } from 'react'
import {BrowserRouter as Route , Switch} from 'react-router-dom'

//CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.scss'

// Components
import HomePage from './Pages/Home.js'
import NavBar from './Components/Sidebar.js'
import PortfliosPage from './Pages/Portfolio'
import ContactPage from './Pages/Contact'
import AboutPage from './Pages/About'

export default function App()
{
  const [navToggle, setNavToggle] = useState(false)

  const navClick = () =>{
    setNavToggle(!navToggle)
  }

  return (
    <div className="App">
      {/* Navbar */}
      <div className={`sidebar ${navToggle ? 'nav-toggle': ''}`}>
        <NavBar />
      </div>

      <div className="nav-btn" onClick={navClick}>
        <div className="lines-1"></div>
        <div className="lines-2"></div>
        <div className="lines-3"></div>
      </div>

      <div className="main-content">
          <div className="content">
            <Switch>

              <Route path="/" exact>
                <HomePage />
              </Route>

              <Route path="/home" exact>
                <HomePage />
              </Route>

              <Route path="/ytgs" exact>
                <HomePage />
              </Route>

              <Route path="/about" exact>
                <AboutPage />
              </Route>

              <Route path="/portfolios" exact>
                <PortfliosPage />
              </Route>

              <Route path="/contact" exact>
                <ContactPage />
              </Route>

            </Switch>
          </div>
      </div>
    </div>
  )
}