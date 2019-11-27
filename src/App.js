import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Header from './components/navbar/Header';
import Footer from './components/footer/Footer';
import Index from './pages/index/Index';
import Login from './pages/member/Login'
import Register from './pages/member/Register'
import Logout from './pages/member/Logout'


// import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  toggleLogin = () => {
    this.setState({ isAuthenticated: true })
    this.setState({ isntAuthenticated: false })
    // console.log('toggleLogin:' + this.state.isAuthenticated)
  }

  toggleLogout = () => {
    this.setState({ isAuthenticated: false })
    this.setState({ isntAuthenticated: true })
    // console.log('toggleLogout:' + this.state.isntAuthenticated)
  }

  render() {
    return (
      <>
        <Router>
          <Header />

          <Switch>
            {/* 首頁 */}
            <Route exact path="/" component={Index} />

            {/* 會員 */}
            <Route path="/Login" render={(props) => <Login toggleLogin={this.toggleLogin} toggleHost={this.toggleHost} {...props} />} />
            <Route path="/Register" render={(props) => <Register toggleLogin={this.toggleLogin} {...props} />} />
            <Route path="/Logout" render={(props) => <Logout toggleLogout={this.toggleLogout} {...props} />} />

          </Switch>

          <Footer />
        </Router>
      </>
    )
  }

}

export default App

